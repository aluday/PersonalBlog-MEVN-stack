<template>
    <div class="post-create container">
    <form action="" method="POST" @submit.prevent="updatePost">
        <h4 class="text-2xl font-bold mb-4">Chỉnh sửa bài viết</h4>
        <div class="form-group mb-4">
            <label class="form-label" for="title" >Chủ đề</label>
            <input type="text" id="title" class="form-control" v-model="this.post.title"/>
            
        </div>

        <!-- <div class="form-group mb-4">
            <label class="form-label" for="auth">Tác giả</label>
            <input type="text" id="author" class="form-control" v-model="this.post.auth"/>
        </div> -->

        
        <div class="form-group mb-4">
            <label class="form-label" for="description">Nội dung tóm tắt</label>
            <input class="form-control" id="description"  v-model="this.post.description" />
        </div>

        <div class="form-group mb-4">
            <label class="form-label" for="content">Nội dung</label>
            <textarea class="form-control" id="content" rows="8"  v-model="this.post.content" ></textarea>
        </div>
          <button type="submit" class="btn btn-primary btn-block mb-4"> Lưu</button>
        </form> 
    </div>
</template>

<script>
import axios from 'axios';
export default {
    data(){
        return {
            post: {}
        };
    },
    computed: {
        id(){
            return this.$route.params.id;
        }
    },
    created() {
        axios
            .get('http://localhost:3000/blog/' + this.id)
            .then (res => {
                this.post = res.data.blog;
            })
            .catch(error => {
                console.log(error);
            })
    },
    methods: {
        
        updatePost (){
            axios.put('http://localhost:3000/admin/post/' + this.id, this.post)
                .then(res => {
                    if(res.status === 201){
                        window.alert("Cập nhật bài viết thành công.");
                        this.$router.push('/admin/stored')
                    }
                    else if(res.status === 500){
                        window.alert("Cập nhật thông tin sách thất bại.")
                    }
                })
                .catch(error => {
                    console.log(error);
                })
        }
    }
}
</script>

<style>

</style>