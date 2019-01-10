<template>
  <div id="app">
    <div class="container">
      <vueHeader></vueHeader>
      <router-view class="view"></router-view>
    </div>
  </div>
</template>

<script>
import vueHeader from './components/header.vue';

export default {
  name: 'app',
  components: {
    vueHeader,
  }
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
#app {
  height: 100vh;
  background-image: url("./assets/bcg.jpg");
  background-position: center;
  background-size: cover;
  display: flex;
  align-items: center;
}
.container{
  width: 80%;
  margin: 0 auto;
  height: 90vh;
}

</style>
