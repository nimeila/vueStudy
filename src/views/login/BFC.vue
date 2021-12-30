<template>
  <div class="bfc-clear">
    <h1>第一种</h1>
    <ul>
      <li>清除浮动，可以将父级也浮动起来</li>
      <li>那么父亲的父亲也会高度塌陷</li>
    </ul>
    <div class="no1-father">
      <div class="no1-left"></div>
      <div class="no1-right"></div>
    </div>
    <h2>第二种</h2>
    <ul>
      <li>父级加overflow:hidden</li>
      <li>当文本过长的时候会被隐藏掉</li>
    </ul>
    <div class="no2-father">
      <div class="no1-left"></div>
      <div class="no1-right"></div>
      <!-- <div>当文本过长，且包含过长英文时，会出现英文文本被隐藏的情况当文本过长，且包含过长英文时，会出现英文文本被隐藏的情况当文本过长，且包含过长英文时，会出现英文文本被隐藏的情况当文本过长，且包含过长英文时，会出现英文文本被隐藏的情况当文本过长，且包含过长英文时，Linsunshine_Linsunshine_Linsunshine_LinsunshiLinsunshine_Linsunshine_Linsunshine_Linsunshi12会出现英文文本被隐藏的情况Linsunshine_Linsunshine_Linsunshine_Linsunshi</div> -->
    </div>
    <h1>第三种</h1>
    <ul>
      <li>给父亲设置高度</li>
      <li>浮动元素定高的问题影响，例如来回变，今天20px 明天100px</li>
    </ul>
    <div class="no3-father">
      <div class="no1-left"></div>
      <div class="no1-right"></div>
    </div>
    <h1>第四种</h1>
    <ul>
      <li>加clear</li>
      <li>多写一个div，增加渲染负担</li>
    </ul>
    <div class="no4-father">
      <div class="no1-left"></div>
      <div class="no1-right"></div>
      <div class="bottomDiv"></div>
    </div>
    <h1>第五种</h1>
    <ul>
      <li>伪元素加clear</li>
      <li></li>
    </ul>
    <div class="no5-father">
      <div class="no1-left"></div>
      <div class="no1-right"></div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {}
  },
  methods: {},
}
</script>
<style lang="scss">
.bfc-clear {
  //第一种
  .no1-father {
    width: 450px;
    border: 1px solid #666;
    padding: 5px;
    float: left; //第一种
    // overflow: hidden; //第二种
    // height: 100px; //第三种
    .no1-left,
    .no1-right {
      width: 100px;
      height: 100px;
      background: red;
    }
    .no1-left {
      float: left;
    }
    .no1-right {
      float: right;
    }
  }
  //第二种
  .no2-father {
    width: 450px;
    border: 1px solid #666;
    padding: 5px;
    // float: left; //第一种
    overflow: hidden; //第二种
    // height: 100px; //第三种
    .no1-left,
    .no1-right {
      width: 100px;
      height: 100px;
      background: red;
    }
    .no1-left {
      float: left;
    }
    .no1-right {
      float: right;
    }
  }
  //第三种
  .no3-father {
    width: 450px;
    border: 1px solid #666;
    padding: 5px;
    // float: left; //第一种
    // overflow: hidden; //第二种
    height: 100px; //第三种
    .no1-left,
    .no1-right {
      width: 100px;
      height: 100px;
      background: red;
    }
    .no1-left {
      float: left;
    }
    .no1-right {
      float: right;
    }
  }
  //第四种
  .no4-father {
    width: 450px;
    border: 1px solid #666;
    padding: 5px;
    // float: left; //第一种
    // overflow: hidden; //第二种
    .no1-left,
    .no1-right {
      width: 100px;
      height: 100px;
      background: red;
    }
    .no1-left {
      float: left;
    }
    .no1-right {
      float: right;
    }
    .bottomDiv {
      clear: both;
    }
  }
  //第五种
  .no5-father {
    width: 450px;
    border: 1px solid #666;
    padding: 5px;
    .no1-left,
    .no1-right {
      width: 100px;
      height: 100px;
      background: red;
    }
    .no1-left {
      float: left;
    }
    .no1-right {
      float: right;
    }
  }
  .no5-father::after {
    display: block;
    content: '';
    clear: both;
  }
}
</style>