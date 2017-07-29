<!--<link rel="stylesheet" href="../../node_modules/bootstrap/dist/css/bootstrap.css">-->
<template>
    <div>
        <div class="navbar navbar-default">
            <div class="container-fluid">
                <div class="navbar-header">
                    <div class="navbar-brand">
                        <i class="glyphicon glyphicon-time"></i>
                        计划表
                    </div>
                </div>
                <ul class="navbar-nav nav">
                    <li><router-link to="/home">首页</router-link></li>
                    <li><router-link to="/plans">计划任务列表</router-link></li>
                </ul>
            </div>
        </div>
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