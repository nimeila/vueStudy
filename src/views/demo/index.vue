<template>
  <div class>
    <div class="n1 m10">
      <canvas id="rect1"></canvas>
    </div>
    <div class="n1 m10">
      <canvas id="rect2"></canvas>
    </div>
    <div class="n1 m10">
      <canvas id="rect3"></canvas>
    </div>
    <div class="n1 m10">
      <canvas id="rect4"></canvas>
    </div>
  </div>
</template>
<script>
export default {
  name: '',
  components: {},
  props: {},
  data() {
    return {}
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {
    this.initRect1()
    this.initRect2()
    this.initRect3()
    this.initRect4()
  },
  methods: {
    initRect1() {
      let rect = document.getElementById('rect1')
      let cvsCtx = rect.getContext('2d')
      cvsCtx.fillRect(10, 10, 200, 20) //画一个200*20的矩形
      cvsCtx.strokeRect(10, 40, 200, 20) // 画一个200*20的矩形边框
      cvsCtx.clearRect(10, 10, 100, 10) // 在第一个
    },
    initRect2() {
      let rect = document.getElementById('rect2')
      let cvsCtx = rect.getContext('2d')
      cvsCtx.beginPath()
      cvsCtx.moveTo(50, 10)
      cvsCtx.lineTo(100, 70)
      cvsCtx.lineTo(150, 10)
      cvsCtx.closePath()
      cvsCtx.stroke()
    },
    initRect3() {
      let rect = document.getElementById('rect3')
      let cvsCtx = rect.getContext('2d')
      cvsCtx.beginPath()
      cvsCtx.moveTo(50, 10)
      cvsCtx.lineTo(100, 70)
      cvsCtx.lineTo(150, 10)
      cvsCtx.fill()
    },
    initRect4() {
      let rect = document.getElementById('rect4')
      let cvsCtx = rect.getContext('2d')
      cvsCtx.beginPath()
      cvsCtx.arc(100, 40, 30, 0, Math.PI / 0.5, false)
      cvsCtx.stroke()
      cvsCtx.beginPath()
      cvsCtx.arc(200, 40, 30, Math.PI / 6, Math.PI / 0.8, false)
      cvsCtx.stroke()
    },
  },
}
</script>
<style scoped lang="less">
.n1 {
  width: 100%;
  height: 80px;
  background: lightgreen;
}
.m10 {
  margin-bottom: 10px;
}
</style>