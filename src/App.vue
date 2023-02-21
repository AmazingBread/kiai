<template>
  <div v-if="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div>
  <Header />
  <!-- <HomeView /> -->
  <router-view />
</template>

<script>
import Header from "@/components/Header/Header.vue";
// import HomeView from "@/views/HomeView.vue";
export default {
  name: "App",
  components: {
    Header,
    // HomeView
  },
  data() {
    return {
      nav: false,
    };
  },
};
</script>

<style src="./styles/default.scss" lang="scss" />
<!-- <style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style> -->
