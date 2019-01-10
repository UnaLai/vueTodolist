<template>
  <div id="todotask">
    <div class="major">
      <h2>Major task</h2>
      <div class="major__tasks">
        <li class="major__tasks__item">
          <div class="star"></div>
          <div class="content">buy foods</div>
          <div class="category">其他</div>
          <div class="doState"></div>
          <div class="edit"></div>
          <div class="trash"></div>
        </li>
      </div>
    </div>
    <div class="other">
      <h2>Other task</h2>
    </div>
  </div>
</template>

<script>
export default {
  name: 'todotask',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
#todotask{
  background-color: rgba(255,255,255,0.9);
  height: 85vh;
  padding: 10px;
  border: 2px black solid;
}

</style>
