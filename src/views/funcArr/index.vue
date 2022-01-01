<template>
  <div>
    <div>
      1、Set()方法配合展开运算符实现
      <p>原数组不会被改变</p>
      <p>Set对象保存的值是唯一的</p>
    </div>
    <div>-------------------------</div>
    <div>
      2、Set()方法与Array.from()
      <p>原数组不会被改变，Array.from()从一个类似数组或可迭代的对象创建一个新的，是浅拷贝数组的实例</p>
    </div>
    <div>-------------------------</div>
    <div>
      3、indexOf()
      <p>如果是=== -1 则表示在新数组中找不动该项索引,可添加到新数组中</p>
      <div>-------------------------</div>
    </div>
    <div>
      4、includes()
      <p>includes()方法和indexOf()方法类似</p>
      <div>-------------------------</div>
    </div>
    <div>
      5、Map()实现
      <p>利用一层for循环遍历，在for循环的代码块中再使用Map的has和set方法，来判断新声明的数组中是否存在当前项，存在的话将其value设置为true，反之设置为false并使用额外声明的数组变量保存起来，由于是新声明的数组来存放去重后的数据，因此原数组不会被改变</p>
      <div>-------------------------</div>
    </div>
    <div>
      6、利用map()方法配合数组的filter()方法实现
      <div>-------------------------</div>
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
    this.fun1()
    this.fun2()
    this.fun3()
    this.fun4()
    this.fun5()
    this.fun6()
    this.fun7()
    this.fun8()
  },
  methods: {
    fun1() {
      const arr = [1, 2, 3, 2, 2, 2, '', 2, 2, '', '', '我的', '']
      if (!arr || arr.length === 0) {
        return []
      }
      console.log('arr', arr)
      console.log('壹', [...new Set(arr)])
      console.log('Set()对象存储的值总是唯一的')
      console.log('--------------------------------------')
    },
    fun2() {
      const arr = [1, 2, 3, 2, 2, 2, '', 2, 2, '', '', '我的', '']
      if (!arr || arr.length === 0) {
        return []
      }
      console.log('arr', arr)
      console.log('贰', Array.from(new Set(arr)))
      console.log(
        'Array.from()从一个类似数组或可迭代对象创建一个新的，浅拷贝的数组实例，原数组不会被改变'
      )
      console.log('--------------------------------------')
    },
    fun3() {
      const arr = [1, 2, 3, 2, 2, 2, '', 2, 2, '', '', '我的', '']
      if (!arr || arr.length === 0) {
        return []
      }
      let newArr = []
      for (let i = 0; i < arr.length; i++) {
        if (newArr.indexOf(arr[i]) === -1) {
          newArr.push(arr[i])
        }
      }
      console.log('叁', newArr)
      console.log('--------------------------------------')
    },
    fun4() {
      const arr = [1, 2, 3, 2, 2, 2, '', 2, 2, '', '', '我的', '']
      if (!arr || arr.length === 0) {
        return []
      }
      let newArr = []
      for (let i = 0; i < arr.length; i++) {
        if (!newArr.includes(arr[i])) {
          newArr.push(arr[i])
        }
      }
      console.log('肆', newArr)
      console.log('--------------------------------------')
    },
    fun5() {
      const arr = [1, 2, 3, 2, 2, 2, '', 2, 2, '', '', '我的', '']
      if (!arr || arr.length === 0) {
        return []
      }
      let map = new Map()
      let newArr = []
      for (let i = 0; i < arr.length; i++) {
        if (map.has(arr[i])) {
          map.set(arr[i], false)
        } else {
          map.set(arr[i], true)
          newArr.push(arr[i])
        }
      }
      console.log('伍', newArr)
      console.log('--------------------------------------')
    },

    fun6() {
      const arr = [1, 2, 3, 2, 2, 2, '', 2, 2, '', '', '我的', '']
      if (!arr || arr.length === 0) {
        return []
      }
      let map = new Map()
      let newArr = arr.filter((item) => !map.has(item) && map.set(item, 1))
      console.log('陆', newArr)
    },
    fun7() {
      let str = 'hexiaomenghk'
      const map = {}
      for (let i of str) {
        map[i] = (map[i] || 0) + 1
      }
      console.log('map', map)
      for (let i = 0; i < str.length; i++) {
        if (map[str[i]] === 1) {
          return console.log('有了', i)
        } else {
          console.log('没有了', '-1')
        }
      }
    },
    fun8() {
      let obj = {
        lable: '你好',
        things: 'ni',
      }
      console.log('fun8', Object.values(obj))
    },
  },
}
</script>
<style scoped lang="less"></style>