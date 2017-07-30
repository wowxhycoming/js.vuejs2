<!--<link rel="stylesheet" href="../../node_modules/bootstrap/dist/css/bootstrap.css">-->
<template>
    <div>
        <router-link to="/plans/addPlan" class="btn btn-primary">创建</router-link>
        <hr>
        <router-view></router-view>
        <ul class="list-group" v-for="item in planList">
            <li class="list-group-item">
                <div class="row">
                    <div class="col-md-2 text-center">
                        <img :src="item.avatar" class="img-circle img-responsive">
                        {{item.name}}
                    </div>
                    <div class="col-md-2">
                        <div>
                            <i class="glyphicon glyphicon-time"></i>
                            {{item.timer}} 小时
                        </div>
                        <div>
                            <i class="glyphicon glyphicon-calendar"></i>
                            {{item.date}}
                        </div>
                    </div>
                    <div class="col-md-6">
                        {{item.comment}}
                    </div>
                    <div class="col-md-2 text-center">
                        <button class="btn btn-danger" @click="removePlan(item)">&times;</button>
                    </div>
                </div>
            </li>
        </ul>
        <div class="text-danger h3" v-show="!isShowAddPlanHint">
            目前没有任务，请添加。
        </div>
    </div>
</template>

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

<style scoped>
    div{
        line-height: 30px;
    }
</style>
