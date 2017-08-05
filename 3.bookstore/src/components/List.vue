<template>
    <div>
        <div class="col-md-3" v-for="book in books">
            <div class="panel panel-warning">
                <div class="panel-heading">
                    书名：{{book.bookName}} {{book.bookId}}
                </div>
                <div class="panel-body text-center">
                    <img :src="book.bookCover" alt="" style="width:100%; height:100%;">
                </div>
                <div class="panel-footer">
                    价格：{{book.bookPrice | currency('￥')}}
                    <router-link :to="{ name:'detail', params: {id: book.bookId} }">进入详情</router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                books: [],
            }
        },
        components: {},
        methods: {},
        filters: {
            currency(input, symbol) {
                return symbol + input;
            }
        },
        created() { // 初始化获取数据，实例一创建就请求数据
            // 配置代理表
            this.$http.get('/book').then((res) => {
                this.books = res.data;
            });
        }
    }
</script>

<style scoped>

</style>