<template>
    <div class="post-create container">
    <form action="" method="POST" @submit.prevent="creatPost">
        <h4 class="text-2xl font-bold mb-4">Thêm bài viết</h4>
        <div class="form-group mb-4">
            <label class="form-label" for="title" >Chủ đề</label>
            <input type="text" id="title" class="form-control" v-model="post.title"/>
            
        </div>

        <div class="form-group mb-4">
            <label class="form-label" for="auth">Tác giả</label>
            <input type="text" id="author" class="form-control" v-model="post.auth"/>
        </div>

        <div class="form-group mb-4">
            <label class="form-label" for="description">Nội dung tóm tắt</label>
            <input class="form-control" id="description"  v-model="post.description" />
        </div>
        
        <div class="form-group mb-4">
            <label class="form-label" for="content">Nội dung</label>
            <textarea class="form-control" id="content" rows="8"  v-model="post.content" ></textarea>
        </div>
          <button type="submit" class="btn btn-primary btn-block mb-4"> Đăng</button>
        </form> 
    </div>
</template>

<script>
import axios from 'axios';

export default {
    name: "post.add",
    data(){
        return {
            post: {
                title: "",
                description: "",
                content: "",
                auth: "",
            }
        }
    },
    methods: {


        async creatPost(){
            axios.post('http://localhost:3000/admin/post/create', this.post)
                .then(res => {
                    if(res.status === 200){
                        window.alert("Thêm bài viết thành công.")

                        this.post.title = "";
                        this.post.description = "";
                        this.post.content = "",
                        this.post.auth = "";
                        this.$router.push("/admin/stored")
                    }
                    else if (res.status === 500){
                        window.alert("Thêm bài viết thất bại.");
                    }
                })

                .catch(error => console.log(error));
        }
    }

}
</script>

<style>
.post-create {
    margin: 16px auto;
}
.form-group label {
    font-weight: bold;
}
</style>