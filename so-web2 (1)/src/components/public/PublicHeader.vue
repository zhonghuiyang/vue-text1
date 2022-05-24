<template>
  <header class="header">
    <!-- 左侧图片 -->
    <img
      class="header-img"
      src="https://www.forerunnercollege.com/so/static/img/logo.7d1b3df0.png"
    />
    <!-- 右侧div -->
    <div class="header-right">
      <ul class="header-ul">
        <li><router-link to="">信息公开</router-link></li>
        <li><router-link to="">互动交流</router-link></li>
        <li><router-link to="">人才招聘</router-link></li>
      </ul>
      <div class="header-inputs">
        <input
          type="text"
          class="header-input"
          placeholder="请输入查询的内容"
        />
        <!-- 用于展示放大镜 -->
        <span class="iconfont icon-fangdajing"></span>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "PublicHeader",
};
</script>

<style scoped>
.header {
  /* 内边距：上下10px；左右25px */
  padding: 10px 25px;
  /* 当子元素大于父元素时，如何显示子元素。overflow:hidden，会触发父元素重新计算子元素高度 */
  overflow: hidden;
}

.header-img {
  float: left;
}

.header-right {
  float: right;
}

/* 并集选择器，两种选择器使用同一套样式 */
.header-ul,
.header-inputs {
  display: inline-block;
  /* 添加一点内边距：上下0px，左右10px */
  padding: 0px 10px;
}

.header-ul > li {
  display: inline-block;
}

.header-ul {
  /* 使用行高垂直居中 */
  line-height: 42px;
}

.header-ul a {
    padding: 0px 5px;
}

/* 文本框样式 */
.header-input {
  height: 40px;
  width: 200px;
  /* 边框 */
  border: 1px solid #f18200;
  /* 文字颜色（有些浏览器上面placeholder颜色不会更改） */
  color: #f18200;
  /* 去除文本框的外侧线条 */
  outline: none;
  /* 内边距 */
  padding: 0px 10px;
  /* 圆角边框 */
  border-radius: 20px;
}
</style>