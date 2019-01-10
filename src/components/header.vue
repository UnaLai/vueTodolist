<template>
<header id="header">
  <router-link to="/todotask" class="task" exact>待辦任務</router-link>
  <router-link to="/resultTask" class="result" exact>執行成果</router-link>
</header>
</template>

<script>
export default {
  name: 'header',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
#header {
    background-color: rgba(0,0,0,0.8);
    display: flex;
    align-items: center;
    height: 5vh;
    .result,
    .task {
        color: white;
        font-size: 15px;
        padding: 0 15px;
        text-decoration: none;
    }
    .task {
        border-right: rgba(255,255,255,0.4) 2px solid;
    }
    .router-link-active {
        color: rgb(252, 230, 135);
    }
}
</style>
