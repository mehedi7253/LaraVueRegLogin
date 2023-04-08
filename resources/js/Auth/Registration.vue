<template>
    <div class="col-md-8 mx-auto">
        <div class="card">
            <div class="card-header">
                <h3 class="text-center">Registration</h3>
            </div>
            <div class="card-body">
                <form @submit.prevent="register" ref="form_1" method="POST">
                    <div class="form-group">
                        <label>Name</label>
                        <input type="text" class="form-control" placeholder="Enter Name" v-model="reg.name">
                        <strong class="text-danger " v-if="errors.name">
                            {{ errors.name[0] }}
                        </strong>
                    </div>
                    <div class="form-group">
                        <label>Email</label>
                        <input type="email" class="form-control" placeholder="Enter Email" v-model="reg.email">
                        <strong class="text-danger " v-if="errors.email">
                            {{ errors.email[0] }}
                        </strong>
                    </div>
                    <div class="form-group">
                        <label>Password</label>
                        <input type="password" class="form-control" placeholder="Enter Password" v-model="reg.password">
                        <strong class="text-danger " v-if="errors.password">
                            {{ errors.password[0] }}
                        </strong>
                    </div>
                    <div class="form-group mt-2">
                        <button type="submit" class="btn btn-success col-3">Submit</button>
                    </div>
                </form>
            </div>
            <div class="card-footer">
                <router-link to="/login" class="float-right">All Ready Have Account? Click Here..!</router-link>
            </div>
        </div>
    </div>
</template>
<script>
    export default({
        data() {
            return {
                reg:{
                    name: "",
                    email: "",
                    password: "",
                },
                errors: {},
            }
        },

        methods: {
            register(){
                axios.post('/api/auth/register', this.reg)
                .then((response) => {
                    window.setTimeout(function () {
                        window.location.reload();
                    }, 1000);
                    this.$router.back();
                    this.$refs.form_1.reset();

                }).catch(error => {
                    if(error.response.status == 400) {
                    this.errors = error.response.data;
                }
                })
            }
        },
    })
</script>
