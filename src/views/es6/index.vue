<template>
  <div class="video">
    <!-- <video src="../../assets/video/video.MOV"></video> -->
    <!-- <video-player src="../../assets/video/video.MOV"></video-player> -->
    <!-- <div>{{time}}</div> -->
    <el-select v-model="value" placeholder="请选择" value-key="acseq" @change="acChange">
      <el-option v-for="item in list" :key="item.acseq" :label="item.acNo" :value="item"></el-option>
    </el-select>
    <el-dialog title="提醒" :visible.sync="isDialog">
      <el-checkbox v-model="noRemind">今日不再提醒</el-checkbox>
      <div style="margin-top:20px">
        <el-button @click="submit()">确定</el-button>
      </div>
    </el-dialog>
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
      isDialog: false,
      noRemind: true,
      noRemindValue: [],
      list: [
        { acseq: '1', acNo: '11111' },
        { acseq: '2', acNo: '22222' },
      ],
      value: '',
    }
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {
    acChange(value) {
      let acSeq = value.acseq
      let _ = this
      let acSeqObj = {}
      let acSeqArr = []
      // 是否存有该项
      let _localStorage = JSON.parse(window.localStorage.getItem('noReminder'))
      if (_localStorage) {
        _localStorage.noRemindValue.forEach((item) => {
          acSeqArr.push(item.acSeq)
          if (item.acSeq == acSeq) {
            acSeqObj = { ...item }
          }
        })
      } else {
        this.isDialog = true
        return
      }
      if (acSeqArr.includes(acSeq)) {
        this.getPopUp(acSeqObj, acSeq)
      } else {
        this.isDialog = true
      }
    },
    // 点确认按钮保存信息
    submit() {
      const _ = this
      let time = this.setTamp()
      if (this.noRemind == false) {
        this.isDialog = false
      } else if (this.noRemind == true) {
        let _localData = JSON.parse(window.localStorage.getItem('noReminder'))
        if (!_localData) {
          let arr = [
            {
              acSeq: this.value.acseq,
              flag: this.noRemind,
              time: time,
            },
          ]
          window.localStorage.setItem(
            'noReminder',
            JSON.stringify({ noRemindValue: arr })
          )
        } else {
          let arr = {
            acSeq: this.value.acseq,
            flag: this.noRemind,
            time: time,
          }
          _localData.noRemindValue.push(arr)
          window.localStorage.setItem(
            'noReminder',
            JSON.stringify({ noRemindValue: _localData.noRemindValue })
          )
        }
      }
      this.isDialog = false
    },
    // 如果过期 就删去local中的信息;未过期什么不显示
    getPopUp(localDataObj, acSeq) {
      const nowTime = new Date().getTime()
      console.log('现在时间', nowTime)
      console.log('存入时间', localDataObj.time)
      if (nowTime > localDataObj.time) {
        console.log('数据已过期')
        window.localStorage.removeItem('noReminder')
        this.isDialog = true
        return false
      } else {
        console.log('####', '未过期')
        this.isDialog = false
        return false
      }
    },
    setTamp() {
      let curDate = new Date()
      // 当前时间戳
      let curTamp = curDate.getTime()
      console.log('当前时间戳', curTamp)
      // 当前凌晨的事时间戳，减去一毫秒是为了防止后续得到的时间不会达到0：00：00的状态
      let curWeeHours = new Date(curDate.toLocaleDateString()).getTime() - 1
      console.log(curDate.toLocaleString())
      console.log(curWeeHours, 'cur')
      // 当日已过去时间
      let passedTamp = curTamp - curWeeHours
      console.log(passedTamp, 'pa')
      // 当日剩余时间
      let leftTamp = 24 * 60 * 60 * 1000 - passedTamp
      console.log('left', leftTamp)
      return leftTamp + curTamp
    },
  },
}
</script>
<style scoped lang="less"></style>