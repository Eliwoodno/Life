/* eslint-disable no-mixed-spaces-and-tabs */
<template>
  <div>
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
  name: "canvasP5-wormhole",
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
  },
  data: () => ({
    bgColor:252,
    kMax: 0,
    step: 0,
    radius: 10,
    inter: 0,
    maxNoise: 150,
  }),
  methods: {
    setup(sketch) {
      sketch.createCanvas(250, 350);
      sketch.angleMode(sketch.DEGREES);
      sketch.noFill();
      //sketch.noLoop();
      this.kMax = 1;
      this.step = 0.01;
      sketch.strokeWeight(1);
    },
    draw(sketch) {
      sketch.background(this.bgColor);
      let t = sketch.frameCount/100;
      this.kMax = sketch.noise(t/2);
      for (let i = 0; i < this.value; i++) {
        sketch.stroke(6);
        sketch.strokeWeight(sketch.noise(t + i/this.value)*2 +0.5);
        let size = this.radius + i * this.inter;
        let k = this.kMax * sketch.sqrt(i/this.value);
        let noisiness = this.maxNoise *(i / this.value);
        sketch.beginShape();
        let angleStep = 360 / 500;
        for (let theta = 0; theta < 360; theta += angleStep) {
          let r1, r2;
          r1 = sketch.cos(theta)+1;
          r2 = sketch.sin(theta)+1;
          let r = size + sketch.noise(k * r1,  k * r2, t + i * this.step) * noisiness;
          let x = sketch.width/2 + r * sketch.cos(theta);
          let y = sketch.height/2 + r * sketch.sin(theta);
          sketch.curveVertex(x, y);
          }
        sketch.endShape(sketch.CLOSE);
      }
    },
  }
};
</script>
