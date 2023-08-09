<template>
<!--  组件的结构-->
  <div>
    <h2>学生姓名：{{ name }}</h2>
    <h2>学生年龄：{{ age }}</h2>
    <button @click="showName">点我显示姓名</button>
  </div>
</template>


<script>
  //组件交互代码（数据、方法等等）
  export default {
    name: `Student`,
    data() {
      return {
        name: '小明',
        age: 18
      }
    },
    methods: {
      showName() {
        alert(this.name)
      }
    }
  }

</script>


