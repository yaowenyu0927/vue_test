<template>
  <div>
    <h2 v-text="msg" ref="title"></h2>
    <button ref="btn" @click="showDom">显示DOM</button>
    <school ref="sch"/>
  </div>

</template>

<script>

  import School from './components/School'
  export default {
    name: 'App',
    components: {
      School
    },
    data(){
      return{
        msg: '欢迎来到Vue的世界'
      }
    },
    methods: {
      showDom(){
        //真实DOM元素
        console.log(this.$refs.title)
        //真实DOM元素
        console.log(this.$refs.btn)
        //School组件的实例对象（VC）
        console.log(this.$refs.sch)
      }
    }
  }

</script>

<style>

</style>