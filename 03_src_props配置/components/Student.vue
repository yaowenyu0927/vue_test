<template>
  <div>
    <h1>{{msg}}</h1>
    <h2>学生姓名：{{name}}</h2>
    <h2>学生年龄：{{myAge+1}}</h2>
    <button @click="updateAge">更新年龄</button>
  </div>

</template>

<script>
export default {
  name: `Student`,
  data(){
    return {
      msg: '学生信息',
      myAge: this.age
    }
  },
  methods: {
    updateAge(){
      this.myAge++
    }
  },
  // props: ['name', 'age']  //简单接收

  //接收的同时对数据进行类型限制
  /*props: {
    name: String,
    age: Number
  }*/

  //接收的同时对数据进行类型限制+默认值+必要性
  props: {
    name: {
      type: String,
      required: true
    },
    age: {
      type: Number,
      default: 18
    }
  }

}

</script>

<style>

</style>