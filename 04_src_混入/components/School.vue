<template>
  <div>
    <h2 @click="showName">学校名称：{{ name }}</h2>
    <h2>学校地址：{{ address }}</h2>
  </div>

</template>

<script>
//导入混入
import {myMixin} from '@/mixin'

export default {
  name: `School`,
  data() {
    return {
      name: '清华大学',
      address: '北京',
    }
  },
  mixins: [myMixin],

}

</script>

<style>

</style>