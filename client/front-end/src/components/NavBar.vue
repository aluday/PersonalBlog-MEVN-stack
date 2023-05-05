<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
            <a class="navbar-brand" href="/">AnhLuBlog</a>
            <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
                <li class="nav-item active">
                    <a class="nav-link" href="/">Home <span class="sr-only">(current)</span></a>
                </li>
                
                <li class="nav-item" v-if="this.admin">
                        <router-link to="/admin/stored" class="nav-link">Danh sách bài viết <span
                                class="sr-only">(current)</span></router-link>
                    </li>

                    <li class="nav-item" v-if="this.admin">
                        <router-link to="/admin/post/create" class="nav-link">Thêm bài viết <span
                                class="sr-only">(current)</span></router-link>
                    </li>
            </ul >
            
            <ul class="nav navbar-nav navbar-right d-flex align-items-center" v-if="this.admin">
                    <li class="nav-item">
                        <a class="nav-link" href="#"> {{ this.admin }} <span class="sr-only">(current)</span></a>
                    </li>

                    <li class="nav-item">
                        <router-link to="/" class="btn bg-success nav-link" v-on:click="logout()">
                            Đăng xuất
                            <span class="sr-only">(current)</span>
                        </router-link>
                    </li>
                </ul>
        </div>
    </nav>
  </template>

<script>
export default {
    computed: {
        admin() {
            const name = JSON.parse(localStorage.getItem("isLoggedIn"));
            return name || null;
        }
    },
    methods: {
        logout() {
            localStorage.clear();
            this.$router.push('/');
            setTimeout(window.location.reload.bind(window.location), 200)
        }
    },
}
</script>

<!-- <template>
    <div class="home-view container">
      <div class="sections row">
        <div class="card-home" v-for="(post, index) in paginatedPosts" :key="index">
          <div class="card-body">
            <h5 class="card-title">{{ post.title }}</h5>
            <p class="card-text">{{ post.description }}</p>
  
            <button class="btn btn-primary">
              Xem thêm
              <router-link :to="'/blog/' + post._id" class="btn btn-link"></router-link>
            </button>
          </div>
        </div>
      </div>
      <pagination :current-page="currentPage" :total="totalPages" @page-changed="pageChanged"></pagination>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  import Pagination from 'vue-pagination-2';
  
  export default {
    name: 'home',
    components: {
      Pagination,
    },
    data() {
      return {
        posts: [],
        perPage: 9,
        currentPage: 1,
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
      paginatedPosts() {
        const start = (this.currentPage - 1) * this.perPage;
        const end = start + this.perPage;
        return this.posts.slice(start, end);
      },
      totalPages() {
        return Math.ceil(this.posts.length / this.perPage);
      },
    },
    methods: {
      pageChanged(page) {
        this.currentPage = page;
      },
    },
  };
  </script> -->

<style>

</style>