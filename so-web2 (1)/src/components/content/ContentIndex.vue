<template>
<div>
    <LeftPlant></LeftPlant>
    <section>
        <nav>面包屑导航</nav>
        <!-- 列表/内容 -->
        <router-view></router-view>
    </section>
    <p>内容首页</p>
</div>
  
  
</template>

<script>

import LeftPlant from "./LeftPlant";

export default {
    name: 'HomePage',
    components: {
        LeftPlant
    }
}
</script>

<style scoped>

</style>