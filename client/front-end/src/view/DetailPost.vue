
<template>
    <div class="blog-post container" >
        <h1 class="blog-title" :style="{color: 'red'}">{{ post.title.toUpperCase() }}</h1>
        <h4 class="blog-topic" :style="{color: 'blue'}" >{{ post.description.toUpperCase() }}</h4>
        <div class="blog-content">
            <template v-for="(paragraph, index) in paragraphs" :key="index">
              <p>{{ paragraph }}</p>
            </template>
        </div>
    </div>
</template>
      
<script>
import axios from 'axios';
    
export default {
    name: 'postdetail',
    data() {
        return {
            post: {}
        };
    },
    created() {
        const postId = this.$route.params.id;
        axios.get(`http://localhost:3000/blog/${postId}`)
        .then(res => {
            this.post = res.data.blog;
        })
        .catch(error => {
            console.log(error);
        });
    },
    computed: {
        paragraphs() {
            return this.post.content.split('\n');
        }
    }
}
</script>

<style>
.blog-post {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.blog-title {
  text-align: center;
}

.blog-topic {
  text-align: center;
  margin-bottom: 20px;
}

.blog-content {
  width: 100%;
}
</style>

