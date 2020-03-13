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
  name: "canvasP5-links",
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
    radius:18,
    N:4,
    count:0,
    arcLengths: [],
    arcSpeeds: [],
  }),
  computed: {
     nCircles() {
      return (this.value +3)/3
    }
  },
  methods: {
    setup(sketch) {
      sketch.createCanvas(250, 350)
      sketch.stroke(0);
      sketch.strokeWeight(1.5);
      sketch.noFill();
      for (let i = 0; i < (2 + this.N*this.nCircles*(this.nCircles-1)/2); i++) {
        this.arcLengths.push(sketch.random(sketch.PI/6, 11*sketch.PI/6));
        this.arcSpeeds.push(sketch.random(-0.08, 0.08));
      }
    },
    draw(sketch) {
      sketch.background(this.bgColor);
      this.count = 1;
      sketch.translate(sketch.width/2, sketch.height/2);
      let start = this.arcSpeeds[0]*sketch.frameCount;
      let end = start + this.arcLengths[0];
      sketch.arc(0, 0, 2 * this.radius, 2 * this.radius, start, end);
      this.count++;
      for (let i = 0; i < this.nCircles; i++) {
        let X = [];
        let Y = [];
        for (let j = 0; j < (this.N+1); j++) {
          let v = sketch.createVector(sketch.cos(j*2*sketch.PI/this.N)*this.radius*i, sketch.sin(j*2*sketch.PI/this.N)*this.radius*i);
          X.push(v.x);
          Y.push(v.y);
        }
        for (let k = 0; k < this.N; k++) {
          for (let l = 0; l < i; l++) {
            let t = l/i;
            let x = t*X[k] + (1-t)*X[k+1];
            let y = t*Y[k] + (1-t)*Y[k+1];
            let start = this.arcSpeeds[this.count]*sketch.frameCount;
            let end = start + this.arcLengths[this.count];
            sketch.arc(x, y, 2 * this.radius, 2 * this.radius, start, end);
            this.count++;
           }
        }
      }
    },
  }
};
</script>

>
