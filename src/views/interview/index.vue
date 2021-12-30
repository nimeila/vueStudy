<template>
  <div class="video">
    <!-- <video src="../../assets/video/video.MOV"></video> -->
    <!-- <video-player src="../../assets/video/video.MOV"></video-player> -->
    <div>{{time}}</div>
    <h2>--------------------------</h2>
    <el-button @click="getArrayFrom">getArray</el-button>
    <div v-if="arr1">{{arr1}}</div>
    <h2>--------------------------</h2>
    <h2>--------------------------</h2>
    <el-button @click="getArrayFrom2">getArray2</el-button>
    <div>{{arr2}}</div>
    <div v-if="arr2">{{arr2}}</div>
    <h2>--------------------------</h2>
    <h2>--------------------------</h2>
    <el-button @click="getArrayFrom3">getArray2</el-button>
    <div v-if="arr3">{{arr3}}</div>
    <h2>--------------------------</h2>
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
      table: {
        id: '1',
      },
      arr: [
        {
          name: '不',
          list: [
            { id: '1', age: '12' },
            { id: '2', age: '24' },
          ],
        },
        {
          name: '好',
          list: [
            { id: '1', age: '12' },
            { id: '2', age: '24' },
            { id: '3', age: '24' },
          ],
        },
        {
          name: '幸福',
          list: [
            { id: '2', age: '24' },
            { id: '3', age: '24' },
          ],
        },
      ],
      arr1: [],
      arr2: [],
      arr3: [],
    }
  },
  computed: {},
  watch: {},
  created() {
    this.getTime()
  },
  mounted() {},
  methods: {
    // getTime() {
    //   var t1 = new Date().getTime()
    //   console.log(t1)
    //   var t2 = new Date('2021/2/11').getTime()
    //   console.log(t2)
    //   console.log((t2 - t1) / (3600 * 24 * 1000))
    // },
    getTime() {
      // let zeroArr = []
      this.arr.forEach((v) => {
        console.log('v', v)
        v.list.forEach((i) => {
          if (i.id == '3') {
            console.log(i)
          }
        })
      })
    },
    // Array.from
    getArrayFrom() {
      let arr = Array.from('zhonggggg')
      console.log(arr)
      this.arr1 = arr
    },
    getArrayFrom2() {
      let arr = [1, 2, 3, 4]
      this.arr2 = Array.from(arr, (x) => x * 2)
    },
    //  数组空位
    getArrayFrom3() {
      let arr = [1, , , 4]
      // this.arr3 = arr.join('-')
      this.arr3 = arr.map(() => 5)
    },
  },
}
</script>
<style scoped lang="less"></style>