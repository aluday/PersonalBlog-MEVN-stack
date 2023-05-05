<template>
    <form action="" method="POST" @submit.prevent="login()">
        <section class="vh-100" style="background-color: #508bfc;">
            <div class="container py-5 h-100">
                <div class="row d-flex justify-content-center align-items-center h-100">
                    <div class="col-12 col-md-8 col-lg-6 col-xl-5">
                        <div class="card shadow-2-strong" style="border-radius: 1rem;">
                            <div class="card-body p-5 text-center">
                                    <h3 class="mb-5">Sign in</h3>

                                    <div class="form-outline mb-4">
                                        <label class="form-label" for="email">Email</label>
                                        <input type="email" v-model="this.user.email"  id="email" class="form-control form-control-lg" />
                                    </div>

                                    <div class="form-outline mb-4">
                                        <label class="form-label" for="password">Password</label>
                                        <input type="password" id="password" v-model="this.user.password" class="form-control form-control-lg" />
                                    </div>
                                    <button class="btn btn-primary btn-lg btn-block" type="submit">Login</button>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </form>
</template>


<script>
import axios from 'axios';

export default {
    name: "signin",
    data() {
        return {
            user: {
                email: "",
                password: "",
            }
        };
    },
    methods: {
        async login (){
            console.log(this.user);
            await axios.post('http://localhost:3000/signin', this.user)
                .then(res => {
                    if(res.status === 200){
                        const name = res.data.user.name;
                        localStorage.setItem('isLoggedIn', JSON.stringify(name));
                        this.$router.push('/admin/stored');
                    }
                    else if (res.status === 404){
                        window.alert("Kiểm tra lại tài khoản.")
                    }
                })
                .catch(error =>{
                    console.log(error);
                })
        }
    },
}
</script>


