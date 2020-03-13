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
  name: "canvasP5-rectangles",
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
  }),
  methods: {
    setup(sketch) {
      sketch.createCanvas(250, 350)
      sketch.noFill();
      sketch.stroke(0);
      sketch.rectMode(sketch.CENTER);
    },
    draw(sketch) {
      sketch.background(this.bgColor);
      sketch.translate(sketch.width/2, sketch.height/2);
      for (let i = 0; i <= this.value; i++) {
        let angle = sketch.sin(sketch.radians((i*30)/2-sketch.frameCount*5))*15;
        if (angle > 1) {
          sketch.strokeWeight(1.5);
        } else {
          sketch.strokeWeight(1);
        }
        sketch.push();
        sketch.rotate(sketch.radians(i*30*angle/200));
        sketch.rect(0, 0, i*15, i*15);
        sketch.pop();
      }
    },
  }
};
</script>

