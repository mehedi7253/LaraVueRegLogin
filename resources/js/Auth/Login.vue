<template>
    <div class="col-md-8 mx-auto">
        <div class="card">
            <div class="card-header">
                <h3 class="text-center">Login</h3>
            </div>
            <div class="card-body">
                <form @submit.prevent="login">
                    <div class="form-group">
                        <label>Email</label>
                        <input type="email" class="form-control" placeholder="Enter Email" v-model="user.email">
                        <strong class="text-danger " v-if="errors.email">
                            {{ errors.email[0] }}
                        </strong>
                    </div>
                    <div class="form-group">
                        <label>Password</label>
                        <input type="password" class="form-control" placeholder="Enter Password" v-model="user.password">

                    </div>
                    <div class="form-group mt-2">
                        <button type="submit" class="btn btn-success col-3">Login</button>
                    </div>
                </form>
            </div>
            <div class="card-footer">
                <router-link to="/registration" class="float-right">No Account? Click Here..!</router-link>
            </div>
        </div>
    </div>
</template>
<script>
export default({
    data(){
        return{
            user:{
                email: "",
                password: "",
                is_customer:"1"
            },
            errors: {},
        }
    },
    mounted() {
        if (User.isLoggedIn()) {
            this.$router.push({ name: 'UserProfile' });
        }
    },
    methods: {
        login(){
            axios.post('/api/auth/login', this.user)
            .then((response) => {
                User.responseAfterLogin(response)
                this.$router.back();
                window.setTimeout(function () {
                    window.location.reload();
                }, 1000);

            }).catch(error => {
                if(error.response.status == 400)
                {
                    this.errors = error.response.data;
                }
            })
        }
    },
})
</script>
