<template>
  <main>
    <Header></Header>
    <router-view></router-view>
    <Footer></Footer>
  </main>
</template>

<script>

import Header from "./components/public/PublicHeader";
import Footer from "./components/public/PublicFooter";

export default {
  name: 'App',
  components: {
    Header,
    Footer
  }
}
</script>

<style>
  * {
    padding: 0px;
    margin: 0px;
    list-style: none;
    text-decoration: none;
  }
</style>
