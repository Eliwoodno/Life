<template>
  <div class="home d-flex flex-column justify-center align-center">
    <img v-if="displayLogo" class="logo-landing fadeInDown" src="../static/bicycle.png"/>
    <v-btn v-if="displayStart" @click="transition" class="start-button fadeInUp">Start</v-btn>
    <div v-if="displayLoader" class="loader fadeIn">
      <v-progress-circular :value="progress" color="white" :size="70" :width="4"></v-progress-circular>
    </div>
    <div v-if="displayContent" :class="{ rippleIn: isRipplingIn, expanded: ripplingDone }" class="content">
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: 'Home',
  data: () => ({
    progress: 0,
    displayLoader: false,
    displayLogo: true,
    displayStart: true,
    displayContent: false,
    interval: {},
    isRipplingIn: false,
    ripplingDone: false,
  }),
  methods: {
  transition(){
    this.displayLogo = false
    this.displayStart = false
    this.displayLoader = true
    this.interval = setInterval(() => {
        if (this.progress != 100) {
          this.progress += 5
        }else {
          clearInterval(this.interval)
           setTimeout( () => {
             this.displayLoader = false
             this.displayContent = true
             this.isRipplingIn = true
           }, 400);
           setTimeout( () => {
             this.$router.push({name:'Cards'})
             this.ripplingDone = true
           }, 1200);
        }
      }, 100)
  },
  }
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
.content{
  background-color:#fcfcfc;
  width:70px;
  height:70px;
  border-radius: 100%;
}
.content.expanded{
  width:100%;
  height:inherit;
  border-radius:0%;
}
</style>


