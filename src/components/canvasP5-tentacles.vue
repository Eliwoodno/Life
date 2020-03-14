<template>
  <div class="card-wrapper">
    <div class="upper-suit" :style="{ 'color': suitColor }">
      <div class="suit-number">{{ valueLabel }}</div>
      <div class="suit"> {{ suit }}</div>
    </div>
    <div class="lower-suit" :style="{ 'color': suitColor }">
      <div class="suit-number"> {{ valueLabel }}</div>
      <div class="suit">{{ suit }}</div>
    </div>
    <vue-p5
        @setup="setup"
        @draw="draw"
        >
    </vue-p5>
  </div>
</template>

<script>
import VueP5 from "vue-p5";
export default {
  name: "canvasP5-tentacles",
  components: {
     VueP5
  },
  props: {
    bgColor: {
      type: String,
      default:'#FCFCFCFF'
    },
    value: {
      type: Number,
      default:10
    },
    valuechange: {
      type: Number,
      default:0
    },
    valueLabel: {
      type: String,
      default:''
    },
    strokeColor: {
      type: String,
      default:'#000000FF'
    },
    suit: {
      type: String,
      default:''
    },
    suitColor: {
      type: String,
      default:'#000000FF'
    },
  },
  data: () => ({
    nCircles:50,
    inter:5,
    incrementValue:undefined,
    c:0
  }),
  methods: {
    setup(sketch) {
      sketch.createCanvas(250, 350)
      sketch.noFill();
      //sketch.noLoop();
    },
    draw(sketch) {
      if(this.c == 1){
        this.setup(sketch)
        this.c=0
      }else{
      sketch.background(this.bgColor);
      let size = this.inter;
      for (let i = 1; i <= this.nCircles; i++) {
        sketch.stroke(this.strokeColor);
        sketch.strokeWeight(this.inter/6);
        let delta = 1/(3 * sketch.pow(i, 1/4));
        let theta = sketch.cos(sketch.frameCount/25 - i/4)/4;
        for (let j = 0; j < this.value; j++) {
          sketch.stroke(this.strokeColor);
          sketch.arc(sketch.width/2, sketch.height/2, size, size, theta - delta, theta + delta);
          theta += sketch.TWO_PI / this.value;
        }
        size += this.inter;
      }
      }
    },

    /*animate(){
      this.nWaves = 1
      this.incrementValue = setInterval(() => {
        this.nWaves < 13 ? this.nWaves++ : this.nWaves = 1
      } ,1000)
    },
    stopAnimate() {
      clearInterval(this.incrementValue);
      this.incrementValue = undefined;
      this.nWaves = 7
    }*/
  },
  watch: {
    valuechange: function() {
      this.c=1
    }
  }
};
</script>
