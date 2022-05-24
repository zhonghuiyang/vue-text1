const map = new Map();

// 缓存时长
const duration = 1000 * 60 ;

/**
 * 通过key加载数据
 * @param {string} key 
 * @returns 
 */
function load(key) {
    let obj = map.get(key);
    if (null == obj) {
        return null;
    }
    // 如果时间为负数，那么表示永久存储
    if (duration < 0) {
        return obj.data;
    // 如果时间为0，表示不缓存
    } else if (duration == 0) {
        return null;
    } else {
        let now = new Date();
        if (now.getTime - obj.time >= duration) {
            return null;
        }
        return obj.data;
    }
}

/**
 * 存储数据到本地缓存中
 * @param {string} key 
 * @param {any} data 
 */
function save(key,data) {
    let time = new Date().getTime();
    let obj = {
        time,
        data
    }
    map.set(key,obj);
}

export {load,save}