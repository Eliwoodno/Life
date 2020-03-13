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
  name: "canvasP5-particles",
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
    particles: []
  }),
  computed: {
     nvalue() {
      return this.value
    }
  },
  methods: {
    setup(sketch) {
      sketch.createCanvas(250, 350);
      for(let i = 1; i < this.nvalue; i++){
        let pv = sketch.createVector(sketch.width/2, sketch.height/2)
        this.particles.push({
          loc:pv,
          os:sketch.createVector(sketch.random(-sketch.width/2,sketch.width/2),sketch.random(-sketch.height/2,sketch.height/2)),
          lineSize: sketch.random(0.3, 0.7),
          size: sketch.random(2, 12),
          r: sketch.random(0, 360)
          })
        }
    },
    draw(sketch) {
      sketch.background(this.bgColor);
      for(let i = 0; i < this.particles.length; i++){
        let sw = this.particles[i].os.x*this.particles[i].lineSize;
        let sh = this.particles[i].os.y*this.particles[i].lineSize;
        let s = sketch.createVector(sw+sketch.sin(sketch.radians(sketch.frameCount+this.particles[i].r))*sw/2, sh+sketch.sin(sketch.radians(sketch.frameCount+this.particles[i].r))*sh/2);
        sketch.stroke(0);
        sketch.strokeWeight(this.particles[i].size/7);
        sketch.line(this.particles[i].loc.x, this.particles[i].loc.y, this.particles[i].loc.x+s.x, this.particles[i].loc.y+s.y);
        sketch.ellipse(this.particles[i].loc.x+s.x, this.particles[i].loc.y+s.y, this.particles[i].size, this.particles[i].size);
      }
    },
  },
   watch: {
    nvalue: function () {
      this.$emit('setup')
    },
   }
};
</script>
