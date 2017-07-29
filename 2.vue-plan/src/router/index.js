import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/Home';
import Plans from '@/components/Plans';
import AddPlan from '@/components/AddPlan';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/home',
            component: Home
        },
        {
            path: '/plans',
            component: Plans, // components: {Plans}  // 使用 components 的写法

            children: [
                {
                    path: 'addPlan',  // 匹配的路径： /plans/AddPlan
                    component: AddPlan
                }
            ]
        }
    ]
});
