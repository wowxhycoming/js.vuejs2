# js.vuejs2

vue2 的学习过程

# 1.meet

vue 初识，页面中直接应用 vue2 资源，单个知识点进行学习。

# 2.vue-plan

用 vue2 实现一个计划任务的项目。

## 路由、组件、页面样式 的规划
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

## Vuex 状态

多个组件共享、共同操作 一个状态的时候，就要考虑使用 Vuex 了。

首先要安装 vuex 

```
npm i vuex -S
```

### 骨架文件
1. 创建 store

    新建 'src/index.js'
    ```
    import Vue from 'vue';
    import Vuex from 'vuex';
    
    Vue.use(Vuex);
    
    const state = {
        totalTime: 0, // 总时间
        planList: [] // 每个计划数据
    }
    
    export const store = new Vuex.Store({
        state
    });
    ```
    
2. 创建 mutations 和 actions 并在 store 中引入

    * `src/store/mutations.js`
    ```
    export const mutations = {
    
    };
    ```
    
    * `src/store/actions.js`
    ```
    export const actions = {
    
    };
    ```
    
    * 在 `src/store/index.js` 中进入
    ```
    // actions 和 mutations 都是对象，提供函数
    import {actions} from './actions';
    import {mutations} from './mutations';
    
    export const store = new Vuex.Store({
        state,
        actions,
        mutations
    });
    ```

3. 创建 types

    每一个 mutation 都有一个 types 和一个回调函数 handler。
    ```
    const
    ```
4. 在 main.js 中引入

    ```
    import {store} from './store';
    
    // Vue.config.productionTip = false;
    
    new Vue({
        el: '#app',
        router,
        store, // 管理状态
        ...App
    });
    ```
### 先展示总计划时间到 SlideBar
    
先不管 actions 和 mutations，先把总时间展示到 SlideBar 上。

1. 修改 SlideBar 
    
    * 在 script 使用 vuex 辅助函数
    ```
    import {mapState} from 'vuex';
    ```
    
    * 将映射属性放到 computed 中
    ```
    <script>
        import {mapState} from 'vuex'; // mapState 是个对象
        export default {
            data() {
                return {}
            },
            computed: {
                ...mapState({  // 将 mapState 中的属性全部取出。在 mapState() 的()中，名字相同为数组，名字不同为对象
                    totalTime: 'totalTime', // 假装不同 ，按数组写这一行为 totalTime 即可
                })
            },
            components: {},
            methods: {}
        }
    </script>
    ```
    
    > 可以运行一下项目，SlideBar 中的状态值已经取出来了。

## 完善表单功能

1. 增加绑定

    ```
    <input type="date" class="form-control" id="date" v-model="date"/>
    <input type="number" class="form-control" id="timer" v-model="timer"/>
    <textarea class="form-control" placeholder="请输入内容" v-model="comment"></textarea>
    ```
    
2. 初始化绑定变量
    
    变量绑定了，就要先声明，否则报错
    ```
    <script>
        export default {
            data() {
                return {
                    date:'',
                    timer:'',
                    comment:''
                }
            },
            components: {},
            methods: {}
        }
    </script>
    ```

3. `添加计划` 按钮

    * 点击按钮将数据提交到 `store` 的 `list` 中。
    * 操作 list 要先发布一个 action
    * 通过 action 提交给 mutation
    
## 完善 Vuex
1. types

    ```
    // 添加计划
    export const ADD_PLAN = 'addPlan';
    ```
    
2. actions

    ```
    import * as types from './types';
    
    export const actions = {
        // [types.ADD_PLAN] 将 addPlan 作为key
        // () ： actions 做的事情是提交，所以 () 的第一个参数是一个对象，承载一个“提交”。 item 代表要添加的内容 。
        // 首先 item 的机构为 {time,date,commit} ，页面上的 item 还少 name 和 avatar 。 action中可以写逻辑，这两个值先定死。
        [types.ADD_PLAN]({commit},item){
            // 在 action 可以做逻辑操作，将操作好的结果发给 mutation
            let plan = {
                name: 'xhy',
                avatar: 'https://b-ssl.duitang.com/uploads/item/201601/13/20160113143016_Lnhwf.jpeg',
                ...item // 合并对象
            };
    
            // 将 plan 提交给 mutation 的 addPlan 方法
            commit(types.ADD_PLAN, plan);
    
        }
    };
    ```
3. mutation

    ```
    import * as types from './types';
    
    export const mutations = {
        // 提交到mutation后，该改状态了
        // state 代表当前容器中的状态
        [types.ADD_PLAN](state,plan){
            state.planList.push(plan);
        }
    };
    ```

## 完善页面逻辑

1. 给添加计划按钮添加事件

    ```
    methods: {
        ...mapActions([types.ADD_PLAN]), // mapActions 也是方法
        add() { // 组件中事件的名字 不能和 actions 的名字相同（这个方法不能叫 addPlan）
            this[types.ADD_PLAN]({
                date: this.date,
                timer: this.timer,
                comment: this.comment
            });
        }
    }
    ```

2. 替换 Plans 中的假数据

    ```
    <script>
        import {mapState} from 'vuex';
        export default {
            data() {
                return { // 删除了假数据
                }
            },
            computed: { // 增加
                ...mapState(['planList']) // 解构；取 store/index.js state 里的名字
            },
            components: {},
            methods: {},
        }
    </script>
    ```
    
    遍历记录部分改为， list 变成 planList
    ```
    <ul class="list-group" v-for="item in planList">
    ```

3. 针对总时间增加状态

    * 增加 types
    ```
    export const ST_PLAN_TOTAL_TIME_INCREMENT = 'ST_PLAN_TOTAL_TIME_INCREMENT';    
    ```
    
    * 添加 action
    ```
    [types.ST_PLAN_TOTAL_TIME_INCREMENT]({commit},timeSpend) {
        commit(types.ST_PLAN_TOTAL_TIME_INCREMENT, timeSpend);
    }
    ```
    
    * 添加 mutation
    ```
    [types.ST_PLAN_TOTAL_TIME_INCREMENT](state,timeSpand) {
        state.totalTime += timeSpand;
    }
    ```
    
    * 在 AddPlan 组件派发事件
    ```
    methods: {
        ...mapActions([types.ADD_PLAN,types.ST_PLAN_TOTAL_TIME_INCREMENT]), // mapActions 也是方法
        add() { // 组件中事件的名字 不能和 actions 的名字相同（这个方法不能叫 addPlan）
            // 派发增加计划事件
            this[types.ADD_PLAN]({
                date: this.date,
                timer: this.timer,
                comment: this.comment
            });
            // 派发计划总时间增加事件
            this[types.ST_PLAN_TOTAL_TIME_INCREMENT](this.timer);
        }
    }
    ```
    
    > ...mapActions 一定要增加新方法的映射，否则将不起作用
    
    > 另外，`v-model.number="timer"` 增加操作符，将取值从字符串转换成数字

4. 完善 移除计划 功能
5. 完善 取消 功能
6. 没有任务时提示 添加任务

## 使用计算属性显示 “提示添加任务”
1. 在 `Plans.vue` 组件中 增加提示 div

    ```
    <div class="text-danger h3" v-show="1">
        目前没有任务，请添加。
    </div>
    ```

2. 计算状态的属性使用 getters
    
    创建 `src/store/getters.js`
    ```
    // 计算 planList 是否有数据
    
    export const getters = {
        isShowAddPlanHint(state) {
            // 1. state.planList.length 获取状态中数据的个数
            // 2. Boolean(...) 转 布尔
            // 3. return 计算属性要 return
            // 有长度 true 没长度 false
            return Boolean(state.planList.length);
        }
    };
    ```

3. 在 `src/store/index.js` 中注册 `getters`

    ```
    import {actions} from './actions';
    import {mutations} from './mutations';
    import {getters} from './getters'
    
    export const store = new Vuex.Store({
        state,
        actions,
        mutations,
        getters
    });
    ```

4. 在 `Plans.vue` 组件中使用 getters

    getters 是计算`属性`，应该应用在 `computed` 中。

    * 结构 mapGetters
    ```
    <script>
        import * as types from '@/store/types';
        import {mapState,mapActions,mapGetters} from 'vuex';
    
        export default {
            data() {
                return { // 删除了假数据
                }
            },
            computed: { // 增加
                ...mapState(['planList']), // 解构；取 store/index.js state 里的名字
                ...mapGetters(['isShowAddPlanHint']) // 名字相同，使用数组，把名字直接拿过来
            },
            components: {},
            methods: {
                ...mapActions([types.ST_PLAN_LIST_DELETE, types.ST_PLAN_TOTAL_TIME_DECREMENT]),
                removePlan(item) {
                    this[types.ST_PLAN_LIST_DELETE](item);
                    this[types.ST_PLAN_TOTAL_TIME_DECREMENT](item.timer);
                }
            },
        }
    </script>
    ```

    * 页面元素中使用 mapGetters
    ```
    <div class="text-danger h3" v-show="!isShowAddPlanHint">
        目前没有任务，请添加。
    </div>
    ```

## 解决带小数的计算bug

使用 filter 解决。

1. 在 `SlideBar.vue` 模板中定义 filter

    ```
    export default {
        ... ...
        filters: {
            numberFix(t) { // t 为要过滤的值
                return t.toFixed(2); // 保留两位小数
            }
        }
    ```

2. 对页面元素使用 filter

    ```
    {{totalTime | numberFix}} 时间
    ```

## 使用 local 保存数据

`src/store/local.js` 就是为了存储数据到本地的

1. 创建 `src/store/local.js`

    ```
    // 存储本地数据
    export const setStorage = function(data) { // data 为要存储的数据
        localStorage.setItem('data', data);
    }
    
    // 获取数据
    export const getStorage = function() {
        return localStorage.getItem('data');
    }
    ```
    
2. 在 `mutation` 中`存储`数据

    数据每次发生改变都需要进行存储，`mutation` 是负责更改状态的，所以在 `mutation` 每次更改状态的同时，都需要存储数据。
    
    ```
    import * as types from './types';
    import {setStorage} from './local'
    
    export const mutations = {
        // 提交到mutation后，该改状态了
        // state 代表当前容器中的状态
        [types.ADD_PLAN](state,plan){
            state.planList.push(plan);
            setStorage(state);
        },
        [types.ST_PLAN_TOTAL_TIME_INCREMENT](state,timeSpand) {
            state.totalTime += timeSpand;
            setStorage(state);
        },
        [types.ST_PLAN_LIST_DELETE](state, plan) {
            // 返回 false 丢弃，返回 true 保留。
            state.planList = state.planList.filter(item => item != plan);
            setStorage(state);
        },
        [types.ST_PLAN_TOTAL_TIME_DECREMENT](state, timeSpend) {
            state.totalTime -= timeSpend;
            setStorage(state);
        }
    };
    ```
    
3. 在初始化 `state` 的时候需要`获取`local数据

    在 `src/store/index.js` 中初始化 state 时，先检查 local 数据，如果有数据，则使用local中的。
    
    ```
    // 使用 storage 的值初始化 state
    import {getStorage} from './local';
    
    const state = getStorage() || {
        totalTime: 0, // 总时间
        planList: [] // 每个计划数据
    }
    ```
    
    > 这时在刷新页面，数据不会再丢失了。
    
## 动画

1. 安装动画库

    ```
    npm i animate.css -S
    ```
    
2. 引入动画库

    在 `src/main.js` 中引入 `animate.css` 。类似于 `bootstrap` 。
    
    ```
    import 'animate.css';
    ```
    
3. 给会发生变化的点添加动画

    会变化的地方主要集中在 \<router-view\>\<\/router-view\>
    
    * `src/App.vue`
    ```
    <div class="col-md-9">
        <transition enter-active-class="animated bounceIn"
                    leave-active-class="animated bounceOut"
                    mode="out-in"
                    >
            <router-view class="position"></router-view>
        </transition>
    </div>
    ```
    
    > enter-active-class="animated bounceIn" 进入动画  
    leave-active-class="animated bounceOut" 离开动画  
    mode="out-in" 动画先出后进
    
# 3. bookstore

## 初始化项目

1. 创建项目

    ```
    vue init webpack 3.bookstore
    ```
    
2. 清理项目文件

    * src/App.vue 只留 template script style，在 template 中写个字符串 “BookStore”
    * src/components/Hello.vue 删除
    * src/router/index.js 删掉 Hello 相关的内容
    
3. 安装包

    ```
    npm i bootstrap vue-resource axios -S
    ```
    
## 配置代理表

1. 修改 `/config/index.js`

    ```
    proxyTable: {
        '/book': 'http://localhost:4000',// 访问 /book 把请求代理到 http://localhost:4000 并把 /book 接到后面
    },
    ```
    
## 动态路由

```
<router-link :to="{ name:'detail', params: {id: book.bookId} }">进入详情</router-link>
```

`name:'detail'` 中的 'detail' 要在 router 中

```
{
    path: '/detail/:id', // this.$route.params.id
    component: Detail,
    name:'detail'
},
```