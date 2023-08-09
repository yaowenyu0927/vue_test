<template>
<!--  组件的结构-->
  <div class="demo">
    <h2>学校名称：{{ name }}</h2>
    <h2>学校地址：{{ address }}</h2>
    <button @click="showName">点我显示学校名</button>
  </div>
</template>


<script>
  //组件交互代码（数据、方法等等）
  export default {
    name: `School`,
    data() {
      return {
        name: '清华大学',
        address: '北京市海淀区'
      }
    },
    methods: {
      showName() {
        alert(this.name)
      }
    }
  }

</script>


<style>
  /*组件样式代码*/
  .demo{
    background-color: orange;
  }

</style>

