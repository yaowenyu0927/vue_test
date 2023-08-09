# 笔记

### 关于不同版本的Vue：
    1.vue.js与vue.runtime.xxx.js的区别：

        （1）vue.js是完整版的vue，包含：核心功能+模板解析器

        （2）vue.runtime.xxx.js是运行版的vue，只包含：核心功能；没有模板解析器


    2.因为vue.runtime.xxx.js没有模板解析器，所以不能使用template配置项，需要使用
        render函数接收到的createElement函数去指定具体内容

### 配置项props
      功能：让组件接收外部传过来的数据
        （1）传递数据
             <Demo name="xxx"/>
        （2）接收数据
             第一种方式（只接收）：
                props:['name']

             第二种方式（限制类型）：
                props:{
                  name:String
                }
             第三种方式（限制类型、限制必要性、指定默认值）：
                props:{
                  name:{
                    type:String, //类型
                    required:true, //必要性
                    default: '老王' //默认值
                  }
                }
        备注：props是只读的，Vue底层会监测你对props的修改，如果进行了修改，就会发出警告，
             若业务需求确实需要修改，那么请复制props的内容到data中一份来修改

### mixin(混入)
        功能：可以把多个组件共用的配置提取成一个混入对象
        使用方式：
            第一步：定义混入对象，例如：
                {
                  data(){return{}},
                  methods:{},
                  ...
                }
            第二步：使用混入，例如：
                （1）全局混入：将混入对象写到main.js中的Vue配置对象中
                    Vue.mixin(xxx)
                （2）局部混入：将混入对象写到组件配置对象中
                    mixins:[xxx]


### 插件
        功能：用于增强Vue
        本质：包含install方法的一个对象，install的第一个对象就是vue，第二个以后的参数是插件使用者传递的数据
        定义插件：
            对象.install = function (Vue, options) {
              // 1. 添加全局过滤器
              Vue.filter(....)
              // 2. 添加全局指令
              Vue.directive(....)
              // 3. 配置全局混入
              Vue.mixin(....)
              // 4. 添加实例方法
              Vue.prototype.$myMethod = function () {...}
              // 5. 添加全局方法或属性
              Vue.myGlobalMethod = function () {...}
            }
        使用插件：Vue.use() 

### scoped样式
        作用：让样式在局部生效，防止冲突
        写法： <style scoped></style>