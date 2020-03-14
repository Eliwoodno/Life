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
    radius:18,
    N:4,
    count:0,
    arcLengths: [],
    arcSpeeds: [],
    c:0
  }),
  computed: {
     nCircles() {
      return (this.value +3)/3
    }
  },
  methods: {
    setup(sketch) {
      sketch.createCanvas(250, 350)
      sketch.strokeWeight(1.5);
      sketch.noFill();
      for (let i = 0; i < (2 + this.N*this.nCircles*(this.nCircles-1)/2); i++) {
        this.arcLengths.push(sketch.random(sketch.PI/6, 11*sketch.PI/6));
        this.arcSpeeds.push(sketch.random(-0.08, 0.08));
      }
    },
    draw(sketch) {
      sketch.stroke(this.strokeColor);
      if(this.c == 1){
        this.setup(sketch)
        this.c=0
      }else{
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
      }
    },
  },
  watch: {
    valuechange: function() {
      this.c=1
    }
  }
};


</script>

