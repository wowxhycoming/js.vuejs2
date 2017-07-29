# js.vuejs2

vue2 的学习过程

# 1.meet

vue 初识，页面中直接应用 vue2 资源，单个知识点进行学习。

# 2.vue-plan

用 vue2 实现一个计划任务的项目。

1. 创建项目

    在该项目根目录下执行命令

    ```
    vue init webpack 2.vue-plan
    ```

2. 安装依赖

    ```
    npm i vuex bootstrap -S
    ```
    
3. 规划 components 

    * 删除 src/components/Hello.vue
    * 新建 src/components/Home.vue ，首页
    * 新建 src/components/Plans.vue ，计划列表页
    * 新建 src/components/AddPlan.vue ，添加计划
    
    为了以后可以直接看到效果，可以在 div 中写上模板的名字。
    
    > 可以新建 vue 后缀的模板
    ```
    <template>
        <div>
        </div>
    </template>
    
    <script>
        export default {
            data() {
                return {}
            },
            components: {},
            methods: {}
        }
    </script>
    
    <style scoped>
    
    </style>
    ```

4. 规划 routers

    修改 `src/router/index.js` 。
    
5. 修改 main.js

    * 引入 bootstrap 
    ```
    // 引入 bootstrap 到全局下
    import 'bootstrap/dis/css/bootstrap.css';
    ```
    
6. 修改跟组件 App.vue

    删除默认的配置，只留基本的三块 T-S-S 。
    
    主组件的规划分为三部分：NavBar , SlideBar , RouterView ， 其中 NavBar 和 SlideBar 是组件.
    
    * 增加 src/components/NavBar.vue 
    * 增加 src/components/SlideBar.vue 
    
7. 在 App.vue 中增加组件的引用

