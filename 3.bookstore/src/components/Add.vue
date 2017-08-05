<template>
    <div>
        <form>
            <div class="form-group">
                <label for="bookName" class="control-lable">书名</label>
                <input v-model="book.bookName" id="bookName" class="form-control" type="text" autocomplete="false"/>
            </div>
            <div class="form-group">
                <label for="bookCover" class="control-lable">封面</label>
                <input v-model="book.bookCover" id="bookCover" class="form-control" type="text" autocomplete="false"/>
            </div>
            <div class="form-group">
                <label for="bookPrice" class="control-lable">价格</label>
                <input v-model="book.bookPrice" id="bookPrice" class="form-control" type="text" autocomplete="false"/>
            </div>
            <div class="form-group">
                <button type="button" class="btn btn-primary" @click="add">添加</button>
            </div>
        </form>
        <div>
            <div>
                <ul>
                    <li>楚乔传</li>
                    <li>http://www.people.com.cn/mediafile/pic/20170710/45/11762675820004539817.jpg</li>
                    <li>150</li>
                </ul>
                <ul>
                    <li>三生三世十里桃花</li>
                    <li>http://jiangsu.china.com.cn/uploadfile/2017/0210/1486684305000215.jpg</li>
                    <li>150</li>
                </ul>
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
                }
            }
        },
        components: {},
        methods: {
            add() {
                this.$http.post('/book', this.book).then(() => {
                    console.log('success');
                    // 成功之后跳转到列表页
                    this.$router.push('/list');
                });
            }
        }
    }
</script>

<style scoped>

</style>