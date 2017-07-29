<!--<link rel="stylesheet" href="../../node_modules/bootstrap/dist/css/bootstrap.css">-->
<template>
    <div>
        <router-link to="/plans/addPlan" class="btn btn-primary">创建</router-link>
        <hr>
        <router-view></router-view>
        <ul class="list-group" v-for="item in list">
            <li class="list-group-item">
                <div class="row">
                    <div class="col-md-2 text-center">
                        <img :src="item.avatar" class="img-circle img-responsive">
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
                        <button class="btn btn-danger">&times;</button>
                    </div>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                list: [
                    {
                        avatar: 'http://tupian.enterdesk.com/2014/lxy/2014/12/03/38/3.png',
                        name: 'xhy',
                        date: '2017-07-30', // 触发时间
                        timer: 2, // 耗时
                        comment: '做些事儿'
                    }
                ]
            }
        },
        components: {},
        methods: {}
    }
</script>

<style scoped>
    div{
        line-height: 30px;
    }
</style>
