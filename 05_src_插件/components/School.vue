<template>
  <div>
    <h2>学校名称：{{ name | mySlice}}</h2>
    <h2>学校地址：{{ address }}</h2>
    <button @click="showMsg">点我展示提示信息</button>
  </div>

</template>

<script>


export default {
  name: `School`,
  data() {
    return {
      name: '清华大学-北京大学',
      address: '北京',
    }
  },
  methods: {
    showMsg(){
      this.hello()
    }
  }

}

</script>

<style>

</style>