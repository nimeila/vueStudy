<template>
  <div>
    <div class="home">你好</div>
    <div>
      <p>---------1----v-model.lazy 失去焦点后再刷新数据--------------</p>
      <input v-model.lazy="inputValue1" placeholder="请输入input-value1" />
      <p>{{inputValue1}}</p>
      <p>-----------------------------</p>
    </div>
    <div>
      <p>---------2----v-html-------------</p>
      <div v-html="html2"></div>
      <p>-----------------------------</p>
    </div>
    <div>
      <p>---------3----v-text-------------</p>
      <div v-text="html2"></div>
      <p>-----------------------------</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  components: {},
  data() {
    return {
      inputValue1: '',
      html2: '<p>xxxx</p>',
    }
  },
}
</script>
