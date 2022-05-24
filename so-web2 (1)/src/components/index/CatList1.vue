<template>
    <div>
        <header>
            <ul>
                <li v-for="item in items" :key="item.t_plant_pk">{{item.plant_name}}</li>
            </ul>
            <router-link to="/content/list">阅读更多</router-link>
        </header>
    </div>
</template>

<script>
export default {
    name: 'HomePage',
    props: ["items"]
}
</script>

<style scoped>

</style>