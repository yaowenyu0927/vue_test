<template>
  <div>
    <student name="李四" :age="18"/>
  </div>

</template>

<script>

  import Student from './components/Student.vue'
  export default {
    name: 'App',
    components: {
      Student
    }
  }

</script>

<style>

</style>