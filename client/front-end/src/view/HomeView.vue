<template>
    <div class="home-view container">
      <div class="sections row mb-3 justify-content-center">
        <!-- Search post -->
        <form class="form-inline my-2 my-lg-0">
          <label class="form-label my-2 my-sm-0 mr-3">Tìm kiếm sách:</label>
          <input class="form-control mr-sm-2 col-xs-4" type="search" v-model="search"
                 placeholder="Tên sách hoặc tác giả" aria-label="Search">
        </form>
      </div>
      <div class="sections row">
        <template v-for="(post, index) in filteredList" :key="index">
          <div class="card-home"> 
            <div class="card-body">
              <h5 class="card-title">{{ post.title }}</h5>
              <p class="card-text">{{ post.description }}</p>
              <button class="btn btn-primary" @click="activePost(post)">
                Xem thêm
                <!-- <router-link :to="'/blog/'+ post._id" ></router-link> -->
              </button>
            </div>
          </div>
        </template>
      </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    name: 'home',
    data() {
      return {
        posts: [],
        search: '',
        id: '',
      };
    },
    created() {
      axios
        .get('http://localhost:3000/blog/')
        .then(res => {
          this.posts = res.data.blogs;
        })
        .catch(error => {
          console.log(error);
        });
    },
    computed: {
      filteredList() {
        return this.posts.filter(post => {
            return post.title.toLowerCase().includes(this.search.toLowerCase());
        });
      }
    },
    methods:{
        activePost (post){
            this.id = post._id;
            this.$router.push('/blog/' +this.id)
        }
    }
   
}
</script>
  

<style>
.home-view {
    margin: 12px 8px;
}
.card-home {
    display: inline-block;
    width: 350px;
    height: 350px;
    margin: 15px 12px;
    padding: 12px;
    border: 2px solid gray;
    border-radius: 5%;
}
</style>

