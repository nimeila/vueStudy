<template>
  <div class="video">
    <!-- <video src="../../assets/video/video.MOV"></video> -->
    <!-- <video-player src="../../assets/video/video.MOV"></video-player> -->
    <!-- <div>{{time}}</div> -->
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
      reverse: [],
      config: [
        { minAmount: '1', maxAmount: '999', auth: '1' },
        { minAmount: '999', maxAmount: '999999', auth: '1' },
      ],
    }
  },
  computed: {},
  watch: {},
  created() {
    // this.getTime()
    this.init()
  },
  mounted() {},
  methods: {
    init() {
      let arr = []
      // let obj = {}
      console.log('#', this.config)
      for (let i = 0; i < this.config.length; i++) {
        let obj = {}
        let authCountList = this.config[i].auth.split(',')
        if (authCountList.length < 5) {
          let number = 5 - authCountList.length
          for (let i = 0; i < number; i++) {
            authCountList.push('0')
          }
        }
        obj.minAmount = this.config[i].minAmount
        obj.maxinAmount = this.config[i].maxAmount
        // obj.auth0 = authCountList[0]
        // obj.auth1 = authCountList[1]
        // obj.auth2 = authCountList[2]
        // obj.auth3 = authCountList[3]
        // obj.auth4 = authCountList[4]
        // this.reverse.push(obj)
        arr.push(obj)
      }

      console.log('###', arr)
    },
  },
}
</script>
<style scoped lang="less"></style>