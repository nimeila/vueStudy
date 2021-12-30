<template>
  <div class="in">
    <ul>
      <li v-for="(item,index) in routerArr" :key="index">
        <router-link :to="{name:item.routerName}">{{item.routerLabel}}</router-link>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: '',
  components: {},
  props: {},
  data() {
    return {
      routerArr: [
        {
          routerName: 'demo',
          routerLabel: 'Demo',
        },
        {
          routerName: 'whatsVue',
          routerLabel: '什么是Vue',
        },
        {
          routerName: 'videoPlayer',
          routerLabel: '视频播放',
        },
        {
          routerName: 'funcArr',
          routerLabel: '数组的一些方法',
        },
        {
          routerName: 'interview',
          routerLabel: '面试',
        },
        {
          routerName: 'loginHome',
          routerLabel: '修饰符',
        },
        {
          routerName: 'Bfc',
          routerLabel: '清除浮动',
        },
      ],
    }
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {},
}
</script>
<style scoped lang="less"></style>