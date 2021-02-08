<template>
  <div class="in">
    <ul>
      <li>
        <router-link :to="{name:'demo'}">Demo</router-link>
      </li>
      <li>
        <router-link :to="{name:'whatsVue'}">什么是Vue</router-link>
      </li>
      <li>
        <router-link :to="{name:'videoPlayer'}">视频播放</router-link>
      </li>
      <li>
        <router-link :to="{name:'videoPlayer'}">视频播放</router-link>
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
    return {}
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {},
}
</script>
<style scoped lang="less"></style>