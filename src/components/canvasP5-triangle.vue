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
  name: "canvasP5-triangle",
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
    incrementValue:undefined
  }),
  methods: {
    setup(sketch) {
      sketch.createCanvas(250, 350);
      //sketch.noLoop()
    },
    draw(sketch) {
      const harom = (ax, ay, bx, by, level, ratio) => {
        if(level!=0){
          let vx,vy,nx,ny,cx,cy;
          vx=bx-ax;
          vy=by-ay;
          nx=Math.cos(Math.PI/3)*vx-Math.sin(Math.PI/3)*vy;
          ny=Math.sin(Math.PI/3)*vx+Math.cos(Math.PI/3)*vy;
          cx=ax+nx;
          cy=ay+ny;
          sketch.line(ax,ay,bx,by);
          sketch.line(ax,ay,cx,cy);
          sketch.line(cx,cy,bx,by);
          harom(ax*ratio+cx*(1-ratio),ay*ratio+cy*(1-ratio),ax*(1-ratio)+bx*ratio,ay*(1-ratio)+by*ratio,level-1,ratio);
        }
      }
      sketch.background(this.bgColor);
      harom(230,255,20,255,this.value,(sketch.sin(0.0006*sketch.millis()%(2*sketch.PI))+1)/2);
    },
   /* overpara() {
    this.bgColor = 200;
   },
   outpara() {
    this.bgColor = 252;
   },*/
   /*animate(){
      this.nTriangles = 1
      this.incrementValue = setInterval(() => {
        this.nTriangles < 13 ? this.nTriangles++ : this.nTriangles = 1
      } ,1000)
    },
    stopAnimate() {
      clearInterval(this.incrementValue);
      this.incrementValue = undefined;
      this.nTriangles = 7
    }*/
  }
};
</script>









