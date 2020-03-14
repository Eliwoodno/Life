<template>
  <div class="main d-flex justify-center align-center">
    <div class="content">
      <div>
        <a href="https://bicyclecards.com/">
          <img class="logo-main fadeInLeft" src="../static/bicycle-blue.png"/>
        </a>
      </div>
      <div class="main-wrapper">
        <div class="d-flex flex-column justify-center align-center fadeInDown mt-4">
          <p>Choose a face for your card.</p>
        </div>
        <div class="fadeInCanvas p5-wrapper">
          <div @click="goTo('triangle')">
            <canvas-p5-triangle class="cursor-pointer"></canvas-p5-triangle>
          </div>
          <div @click="goTo('wormhole')">
          <canvas-p5-wormhole class="cursor-pointer"></canvas-p5-wormhole>
          </div>
          <div @click="goTo('particles')">
          <canvas-p5-particles  class="cursor-pointer"></canvas-p5-particles>
          </div>
          <div @click="goTo('tentacles')">
          <canvas-p5-tentacles  class="cursor-pointer"></canvas-p5-tentacles>
          </div>
          <div @click="goTo('links')">
          <canvas-p5-links class="cursor-pointer"></canvas-p5-links>
          </div>
          <div @click="goTo('rectangles')">
          <canvas-p5-rectangles  class="cursor-pointer"></canvas-p5-rectangles>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import canvasP5Triangle from '../components/canvasP5-triangle.vue';
import canvasP5Wormhole from '../components/canvasP5-wormhole.vue';
import canvasP5Particles from '../components/canvasP5-particles.vue';
import canvasP5Tentacles from '../components/canvasP5-tentacles.vue';
import canvasP5Links from '../components/canvasP5-links.vue';
import canvasP5Rectangles from '../components/canvasP5-rectangles.vue';
export default {
  name: 'Main',
  components: {
    canvasP5Triangle,
    canvasP5Wormhole,
    canvasP5Particles,
    canvasP5Tentacles,
    canvasP5Links,
    canvasP5Rectangles,
  },
  data: () => ({
    progress: 0,
    displayLoader: true,
    displayContent: false,
    interval: {},
    isRipplingIn: false,
    ripplingDone: false,
  }),
  methods: {
    goTo(target) {
      this.$router.push({
        name: 'Card',
        params: { title: target }
      })
    },
  }
}
</script>
<style scoped lang="scss">
.main{
  background-color:#051c37;
  height: 100%;
  //overflow: hidden;
}
.main-wrapper{
  margin-left:5%;
  margin-right: 5%;
}
.content{
  background-color:#fcfcfc;
  height:100%;
  width:100%;
}
.content.expanded{
  width:100%;
  height:inherit;
  border-radius:0%;
}
.logo-main{
  width:70px;
  margin-top: 8px;
  margin-left:8px;
}
p {
  font-size: 24px;
}
.p5-wrapper {
  margin-top:16px;
  display: grid;
  grid-template-columns: repeat(auto-fill, 250px);
  grid-gap: 1rem;
  justify-content: space-between;
}
.cursor-pointer{
  cursor: pointer;
}
</style>


