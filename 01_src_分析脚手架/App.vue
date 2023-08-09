<template>
  <div id="app">
    <img alt="logo" src="./assets/logo.png">
    <School></School>
    <student></student>
  </div>
</template>

<script>

//导入组件 School、Student
import School from "@/components/Student.vue";
import Student from "@/components/Student.vue";

//创建App组件并导出，将HelloWorld组件注册为App组件的子组件
export default {
  name: 'App',
  components: {
    School,
    Student
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
