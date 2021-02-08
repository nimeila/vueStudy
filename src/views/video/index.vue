<template>
  <div class="video">
    <!-- <video src="../../assets/video/video.MOV"></video> -->
    <!-- <video-player src="../../assets/video/video.MOV"></video-player> -->
    <div>{{time}}</div>
  </div>
</template>
<script>
// import { videoPlayer } from 'vue-video-player'
export default {
  name: '',
  components: {},
  props: {},
  data() {
    return {
      time: '',
    }
  },
  computed: {},
  watch: {},
  created() {
    this.getTime()
  },
  mounted() {},
  methods: {
    getTime() {
      var t1 = new Date().getTime()
      console.log(t1)
      var t2 = new Date('2021/2/11').getTime()
      console.log(t2)
      console.log((t2 - t1) / (3600 * 24 * 1000))
    },
  },
}
</script>
<style scoped lang="less"></style>