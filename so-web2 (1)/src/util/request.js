import axios from "axios";

// 基础路径
const baseURL = "https://www.forerunnercollege.com/soApi";

// 用于防抖
const set = new Set();

import store  from './stor'
import router  from './router'
// 本地缓存
import {load,save} from "./localcache.js";

function ajax(url,data = {}) {

    let jsonStr = JSON.stringify(data);
    let key = url + jsonStr;

    let obj = load(key);
    if (null != obj) {
        return Promise.resolve({data: obj});
    }

    console.log("key = ",key);
    if (set.has(key)) {
        console.log("请勿重复提交");
        return Promise.reject({data: {status: -1,msg: "请勿重复提交"}});
    }

    set.add(key);

    // 一分钟之后移除掉（兜底）
    // setTimeout(() => set.delete(url),60 * 1000);

    return axios({
        baseURL,
        url,
        data,
        method: "post"
    });
}

axios.interceptors.request.use(config => {
    config.headers = {
        "Authorition": store.state.user.token
    }
    return config;
})

// 响应拦截
axios.interceptors.response.use(
    // 成功之后的响应拦截
    res => {
        let key = res.config.url + res.config.data;
        set.delete(key);
        console.log("响应拦截，key = ",key);
        // console.log(":", res);
        // status小于0表示逻辑失败
        // 如果为-10表示没有登录，强制去往登陆页面
        if (res.data.status == -10) {
            router.push("/");
        } else if (res.data.status < 0) {
            alert(res.data.msg);
        // 成功后缓存数据
        } else if (res.data.status >= 1) {
            save(key,res.data);
        }
        return res;
    },
    // 失败之后的响应拦截（404,500,400）
    error => {
        console.log("响应失败：", error);
        let key = error.config.url + error.config.data;
        set.delete(key);
        alert({msgType: "error",message: "发生网络错误"});
        // 返回一个明确的promise对象，避免组件报错，方便组件编写代码
        return Promise.reject({data: {status:-1,msg: "网络错误"}});
    }
)

export {ajax}