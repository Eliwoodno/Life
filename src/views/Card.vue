<template>
    <div class="content">
      <div>
        <a href="https://bicyclecards.com/">
          <img class="logo-main" src="../static/bicycle-blue.png"/>
        </a>
      </div>
      <div @class="main-wrapper">
        <div class="d-flex justify-center align-center fadeInDown mt-2">
          <p class="mb-8">Customize your card</p>
        </div>
        <div class="d-flex justify-center fadeIn flex-wrap">
          <div class="suit-control">
            <v-select
              class="inputs-card no-bs mb-4"
              v-model="pickedValue"
              :items="cardValues"
              label="Value"
              @input="valuechange++"
               solo
               hide-details
            ></v-select>
            <v-select
               class="inputs-card no-bs mb-4"
              :items="suits"
              label="Suit"
              v-model="pickedSuit"
               solo

            ></v-select>
            <color-picker
              class="inputs-card mb-4"
              :color-string.sync="suitColor"
               title="Suit color"
               default-color="#000000FF"
            ></color-picker>
            <color-picker
              class="inputs-card mb-4"
              :color-string.sync="bgColor"
               title="Background color"
               default-color="#FFFFFFFF"
            ></color-picker>
            <color-picker
              class="inputs-card mb-4"
              :color-string.sync="strokeColor"
               title="Stroke color"
               default-color="#000000FF"
            ></color-picker>
          </div>
          <div class="card" v-if="$route.params.title=='triangle'">
            <canvas-p5-triangle
            :value="pickedValue"
            :bg-color="bgColor"
            :stroke-color="strokeColor"
            :suit-color="suitColor"
            :value-label="pickedValueLabel"
            :suit="pickedSuit"
            :valuechange="valuechange">
            </canvas-p5-triangle>
          </div>
          <div class="card" v-if="$route.params.title=='wormhole'">
            <canvas-p5-wormhole
            :value="pickedValue"
            :bg-color="bgColor"
            :stroke-color="strokeColor"
            :suit-color="suitColor"
            :value-label="pickedValueLabel"
            :suit="pickedSuit"
            :valuechange="valuechange">
            </canvas-p5-wormhole>
          </div>
          <div class="card" v-if="$route.params.title=='particles'">
            <canvas-p5-particles
            :value="pickedValue"
            :bg-color="bgColor"
            :stroke-color="strokeColor"
            :suit-color="suitColor"
            :value-label="pickedValueLabel"
            :suit="pickedSuit"
            :valuechange="valuechange">
            </canvas-p5-particles>
          </div>
          <div class="card" v-if="$route.params.title=='tentacles'">
            <canvas-p5-tentacles
            :value="pickedValue"
            :bg-color="bgColor"
            :stroke-color="strokeColor"
            :suit-color="suitColor"
            :value-label="pickedValueLabel"
            :suit="pickedSuit"
            :valuechange="valuechange">
            </canvas-p5-tentacles>
          </div>
          <div class="card" v-if="$route.params.title=='links'">
            <canvas-p5-links
            :value="pickedValue"
            :bg-color="bgColor"
            :stroke-color="strokeColor"
            :suit-color="suitColor"
            :value-label="pickedValueLabel"
            :suit="pickedSuit"
            :valuechange="valuechange">
            </canvas-p5-links>
          </div>
          <div class="card" v-if="$route.params.title=='rectangles'">
            <canvas-p5-rectangles
            :value="pickedValue"
            :bg-color="bgColor"
            :stroke-color="strokeColor"
            :suit-color="suitColor"
            :value-label="pickedValueLabel"
            :suit="pickedSuit"
            :valuechange="valuechange"></canvas-p5-rectangles>
          </div>
          <div class="color-control">
          </div>
        </div>
      </div>
    </div>
</template>
<script>
import canvasP5Triangle from '../components/canvasP5-triangle.vue';
import canvasP5Wormhole from '../components/canvasP5-wormhole.vue';
import canvasP5Particles from '../components/canvasP5-particles.vue';
import canvasP5Tentacles from '../components/canvasP5-tentacles.vue';
import canvasP5Links from '../components/canvasP5-links.vue';
import canvasP5Rectangles from '../components/canvasP5-rectangles.vue';
import colorPicker from '../components/colorPicker.vue';
export default {
  name: 'Card',
  components: {
    canvasP5Triangle,
    canvasP5Wormhole,
    canvasP5Particles,
    canvasP5Tentacles,
    canvasP5Links,
    canvasP5Rectangles,
    colorPicker,
  },
  data: () => ({
    cardValues: [
      {text:'A', value:1},
      {text:'2', value:2},
      {text:'3', value:3},
      {text:'4', value:4},
      {text:'5', value:5},
      {text:'6', value:6},
      {text:'7', value:7},
      {text:'8', value:8},
      {text:'9', value:9},
      {text:'10', value:10},
      {text:'J', value:11},
      {text:'Q', value:12},
      {text:'K', value:13},
      ],
      suits:["♦", "♣", "♥", "♠"],
      suitColor:'#000000FF',
      bgColor:'#FFFFFFFF',
      strokeColor:'#000000FF',
      pickedValue:7,
      pickedSuit:'♣',
      valuechange:0
  }),
  computed: {
    pickedValueLabel(){
      let r = this.cardValues.find(element => element.value === this.pickedValue)
      return r.text
    }
  }
}
</script>
<style scoped lang="scss">
.content{
  background-color:#fcfcfc;
  height:100%;
}
.main-wrapper{
  background-color:#fcfcfc;
  margin-left:5%;
  margin-right: 5%;
}
.logo-main{
  width:70px;
  margin-top: 8px;
  margin-left:8px;
}
p {
  font-size: 24px;
}
.card{
  box-shadow: 0 0 18px #ccc;
  border-radius:15px;
  overflow: hidden;
  margin-right:32px;
  margin-left: 32px;
  max-height: 350px;;
}
@media (max-width: 768px) {
    .card{order:1;}
    .suit-control, .color-control{
     order:2;
    }
    .main-wrapper > div {
      justify-content: !important space-around;
    }
}
.suit-control, .color-control{
  flex: 1 0 auto;
  max-width: 200px;
  padding-top:8px;
}
.inputs-card{
  padding-right: 12px;
  height:48px;
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
  border-radius:4px;
}
.no-bs{
  box-shadow: unset;
}

</style>
