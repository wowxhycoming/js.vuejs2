<template>
    <div>
        <div>
            <div class="panel panel-warning">
                <div class="panel-heading">
                    <span v-show="!flag">书名：{{book.bookName}}</span>
                    <input v-show="flag" type="text" v-model="book.bookName">
                </div>
                <div class="panel-body text-center">
                    <img :src="book.bookCover" alt="" style="width:100%; height:100%;">
                </div>
                <div class="panel-footer">
                    <span v-show="!flag">价格：{{book.bookPrice | currency('￥')}}</span>
                    <input v-show="flag" type="text" v-model="book.bookPrice">
                    <button v-show="!flag" class="btn btn-danger" @click="remove">删除</button>
                    <button v-show="!flag" class="btn btn-warning" @click="changeFlag">修改</button>
                    <button v-show="flag" class="btn btn-primary" @click="modify">确认修改</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                book: {
                    bookName:'',
                    bookCover:'',
                    bookPrice:''
                },
                id:'', // id 不放在全局也能取到， created 的时候 book 被赋值了
                flag: false
            }
        },
        components: {},
        methods: {
            remove() {
                this.$http.delete('/book?id='+this.id).then(() => {
                    this.$router.push('/list');
                });
            },
            changeFlag() {
                this.flag = !this.flag;
            },
            modify() {
                this.$http.put('/book', this.book).then(() => {
                    // 修改成功直接切换状态即可，刷新后数据也是修改成功后的状态
                    this.flag = !this.flag;
                })
            }
        },
        filters: {
            currency(input, symbol) {
                return symbol + input;
            }
        },
        created() {
            // 页面一加载，获取数据
            this.id = this.$route.params.id;
            this.$http.get('/book?id='+this.id).then((res) => {
                this.book = res.data;
            });
        }
    }
</script>

<style scoped>

</style>