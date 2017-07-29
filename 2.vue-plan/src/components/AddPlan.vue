<template>
    <div>
        <form>
            <div class="form-group">
                <div class="row">
                    <div class="col-md-6">
                        <label for="date" class="control-lable">日期</label>
                        <input type="date" class="form-control" id="date"/>
                    </div>
                    <div class="col-md-6">
                        <label for="timer" class="control-lable">时间</label>
                        <input type="number" class="form-control" id="timer"/>
                    </div>
                </div>
            </div>
            <div class="form-group">
                <textarea class="form-control" placeholder="请输入内容"></textarea>
            </div>
            <div class="form-group">
                <button class="btn btn-success">添加计划</button>
                <button class="btn btn-default">取消</button>
            </div>
        </form>
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
