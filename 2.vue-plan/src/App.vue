<template>
    <div id="app">
        <NavBar/>
        <div class="container-fluid">
            <div class="row">
                <div class="col-md-12">
                    <div class="col-md-3">
                        <SlideBar/>
                    </div>
                    <div class="col-md-9">
                        <router-view></router-view>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import NavBar from '@/components/NavBar';
    import SlideBar from '@/components/SlideBar';
    export default {
        components: {
            NavBar,SlideBar
        }
    }
</script>

<style>

</style>
