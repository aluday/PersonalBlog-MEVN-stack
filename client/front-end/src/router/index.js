import { createRouter, createWebHistory } from 'vue-router';

import HeaderView from '../components/NavBar.vue';
import FooterView from '../components/Footer.vue';
import HomeView from '../view/HomeView.vue';
import DetailPost from '../view/DetailPost.vue'
import NotFound from '../view/NotFound.vue';

import PostAdd from "../view/PostAdd.vue";
import PostEdit from "../view/PostEdit.vue";
import PostStore from "../view/storedPost.vue";
import SignIn from '../view/LoginView.vue';

const routes = [
    {
        path: '/',
        name: 'home',
        components: {
            default: HomeView,
            HeaderView,
            FooterView,
        }
    },
    {
        path: '/blog/:id',
        name: 'postdetail',
        components: {
            default:DetailPost,
            HeaderView,
            FooterView
        }
    },
    {
        path: "/signin",
        name: "signin",
        components: {
            default: SignIn,
        },

    },
    {
        path: '/admin/post/create',
        name: 'post.add',
        components:{
            default: PostAdd,
            HeaderView,
            FooterView,
        },
        
        
    },
    {
        path: '/admin/post/:id',
        name: 'post.edit',
        components: {
            default: PostEdit,
            HeaderView,
            FooterView,
        },
        
    },
    {
        path: "/admin/stored",
        name: "post.store",
        components: {
            default: PostStore,
            HeaderView,
            FooterView,
        },
        
    },
    {
        path: "/:pathMatch(.*)*",
        name: 'notfound',
        components:{
            default: NotFound,
            HeaderView,
            FooterView
        }

    }

]


const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
});

router.beforeEach(async (to, from, next) => {
    const isLoggedIn = await localStorage.getItem(name);
    if (to.matched.some(record => record.meta.requiresAuth)) {
      if (isLoggedIn != null) {
        next();
      } else {
        next('/signin');
      }
    } else {
        next();
    }
});


export default router;