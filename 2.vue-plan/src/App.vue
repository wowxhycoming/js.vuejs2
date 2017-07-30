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
                        <transition enter-active-class="animated bounceIn"
                                    leave-active-class="animated bounceOut"
                                    mode="out-in"
                                    >
                            <router-view class="position"></router-view>
                        </transition>
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
    .position{
        position: absolute;width: 100%;
    }
</style>
