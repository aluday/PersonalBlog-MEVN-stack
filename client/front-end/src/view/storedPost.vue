<template> 
    
    <div class="stored-post container"  >
        <table class="table table-bordered">
            <tr class="text-uppercase">
                <th scope="col-1">STT</th>
                <th scope="col-3">Chủ đề</th>
                <th scope="col-2">Ngày đăng</th>
                <th scope="col-2">Ngày chỉnh sửa</th>
                <th scope="col" colspan="2"></th>
            </tr>
       

        <tbody v-for="(post, index) in posts" :key="index">
            <tr class="text-justify">
                <th scope="row" > {{ index +1 }}</th>
                <td> {{ post.title }}</td>
                <td> {{ moment(post.createdAt).format('DD/MM/YYYY') }}</td>
                <td> {{  moment(post.updatedAt).format('DD/MM/YYYY') }}</td>
                <td >
                    <router-link :to="'/admin/post/' + post._id" class="btn btn-link" >Sửa</router-link>
                    <a href="" class="btn btn-link" @click="deletePost(post)" >Xóa</a>

                </td>
            </tr>
        </tbody>
         </table>
    </div>

</template>

<script>
    import axios from 'axios';
    import moment from 'moment';
    export default {
        name:  "post.store",
        data(){
            return{
                isLoggedIn: false,
                posts : [],
                id: "",
                
            }
        },
        created() {
            axios.get('http://localhost:3000/admin/stored')
                .then(res => {
                    this.posts = res.data.blogs
                })
                .catch(error => {
                    console.log(error);
                })
        },
        computed: {
            moment() {
                return moment;
            },
            computed: {
            admin() {
                const name = JSON.parse(localStorage.getItem("isLoggedIn"));
                return name || null;
            }
    },
        },
        methods: {
            deletePost (post){
                this.id = post._id;
                if(confirm("Bạn muốn xóa bài viết này?")){
                    axios.delete('http://localhost:3000/admin/post/' + this.id)
                        .then(() => {
                            window.alert("Xóa thành công.");
                            window.location.reload();
                        })
                        .catch(error => {
                            console.log(error);
                        })
                }
                
            },
        }
    }
</script>