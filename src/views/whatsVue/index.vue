<template>
  <div class="whatsVue">
    <h1 class="p1">什么是Vue？</h1>
    <p>vue 是一套用于构建用户界面的渐进式框架，Vue被设计为可以自底向上逐层应用</p>
    <p>Vue的核心库只关心视图层，不仅易于上手，还可以和第三方库或即有项目整合</p>
    <!-- 声明式渲染 -->
    <h2>1：声明式渲染</h2>
    <p>Vue 的核心是一个允许采用简洁的模板来声明式地将数据渲染进DOM的系统</p>
    <p v-text="msg"></p>
    <span>v-text会将msg解析为字符串</span>
    <p v-html="msg"></p>
    <span>v-html会将msg解析为标签属性</span>
    <!--  条件与循环 -->
    <h2>2：条件与循环</h2>
    <!-- <div class="screenshot">
      <el-button @click="showScreen">{{showText}}</el-button>
      <div class="img">
        <img src="../../assets/image/screenshot.jpeg" alt class v-show="flag" />
      </div>
    </div>-->
    <h3>##################</h3>
    <div>{{filterValue|rfsPymtRsnType}}</div>
  </div>
</template>
<script>
export default {
  name: '',
  components: {},
  props: {},
  data() {
    return {
      msg: 'v-html:  <span>222</span>',
      flag: true,
      showText: '隐藏',
      filterValue: 'DC09',
    }
  },
  computed: {},
  watch: {},
  filters: {
    rfsPymtRsnType(newVal) {
      console.log(newVal, '******')
      switch (newVal) {
        case 'DC00':
          return '与自己有直接债权债务关系的持票人未履行约定义务'
        case 'DC01':
          return '持票人以欺诈、偷盗或者胁迫等手段取得票据'
        case 'DC02':
          return '持票人明知有欺诈、偷盗或者胁迫等情形，出于恶意取得票据'
        case 'DC03':
          return '持票人明知债务人与出票人或者持票人的前手之间存在抗辩事由而取得票据'
        case 'DC04':
          return '持票人因重大过失取得不符合《票据法》规定的票据'
        case 'DC05':
          return '超过提示付款期'
        case 'DC06':
          return '被法院冻结或收到法院止付通知书'
        case 'DC07':
          return '票据未到期'
        case 'DC08':
          return '商业承兑汇票承兑人账户余额不足'
        case 'DC09':
          return '其他'
      }
    },
  },
  created() {},
  mounted() {},
  methods: {
    showScreen() {
      setTimeout(() => {
        this.flag = !this.flag
      }, 100)

      this.showText = this.flag ? '显示' : '隐藏'
    },
  },
}
</script>
<style scoped lang="less">
.p1 {
  text-align: center;
  font-weight: 700;
}
.screenshot {
  display: flex;
  flex-direction: row;
  .el-button {
    width: 70px;
    height: 70px;
    border-radius: 50%;
    margin-right: 50px;
  }

  .img {
    width: 200px;
    height: 400px;
    border-radius: 10px;
    overflow: hidden;

    border: 1px solid #ccc;
    img {
      width: 200px;
      height: 400px;
    }
  }
}
</style>