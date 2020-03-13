<template>
  <div class="home d-flex flex-column justify-center align-center">
    <img class="logo-landing fadeInDown" src="../static/bicycle.png"/>
    <router-link to="Cards">
      <v-btn class="start-button fadeInUp">Start</v-btn>
    </router-link>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: 'Home',
}
</script>
<style scoped lang="scss">
a {
  text-decoration: none !important;
}
.home{
  background-color:#051c37;
  height: 100%;
}
.logo-landing{
  width: 340px;
}
.start-button {
  background-color: rgb(245, 245, 245);
  color:#051c37 !important;
}
</style>


