<template>
    <div class="panel panel-default">
        <div class="panel-heading">
            <h2>计划的总时间</h2>
        </div>
        <div class="panel-body">
            {{totalTime | numberFix}} 时间
        </div>
    </div>
</template>

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
        methods: {},
        filters: {
            numberFix(t) { // t 为要过滤的值
                return t.toFixed(2); // 保留两位小数
            }
        }
    }
</script>

<style scoped>

</style>