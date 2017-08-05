<template>
    <div>
        <NavBar></NavBar>
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <router-view></router-view>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import NavBar from '@/components/NavBar';
    export default {
        components: {
            NavBar
        }
    }
</script>

<style>

</style>
