<template>
    <div>
        <form>
            <div class="form-group">
                <div class="row">
                    <div class="col-md-6">
                        <label for="date" class="control-lable">日期</label>
                        <input type="date" class="form-control" id="date" v-model="date"/>
                    </div>
                    <div class="col-md-6">
                        <label for="timer" class="control-lable">时间</label>
                        <input type="number" class="form-control" id="timer" v-model.number="timer"/>
                    </div>
                </div>
            </div>
            <div class="form-group">
                <textarea class="form-control" placeholder="请输入内容" v-model="comment"></textarea>
            </div>
            <div class="form-group">
                <button class="btn btn-success" @click="add">添加计划</button>
                <button class="btn btn-default" @click="cancel">取消</button>
            </div>
        </form>
    </div>
</template>

<script>
    import {mapActions} from 'vuex';
    import * as types from '@/store/types';
    export default {
        data() {
            return {
                date:'',
                timer:'',
                comment:''
            }
        },
        components: {},
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
            },
            cancel() {
                // $touter 是方法， $route 是属性
                this.$router.go(-1);
            }
        }
    }
</script>

<style scoped>

</style>
