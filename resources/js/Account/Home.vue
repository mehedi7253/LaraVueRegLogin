<template>
    <div class="col-md-8 mx-auto">
        <div class="card">
            <div class="card-header">
                <h3 class="text-center">Wellcome</h3>
            </div>
            <div class="card-body">
                <a href="javascript:void(0)" class="list-group-item" @click.prevent="logout"><i class="bi bi-lock" aria-hidden="true"></i> Logout</a>
             <!-- <label>  {{ customer.name }} </label> -->
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios';

export default({
    data() {
        return {
           user: '',
        }
    },
    mounted() {
        if (!User.isLoggedIn()) {
            this.$router.push({ name: 'home' });
        }
        let user = User.user();
        this.user = user;
    },

    methods:{
        GetUser(){
            axios.get('/api/auth/profile')
            .then(({ data }) => (this.user = data))
            .catch()
        },
        logout() {
            localStorage.removeItem('token')
            localStorage.removeItem('user')
            // window.location.reload();
            window.setTimeout(function () {
                    window.location.reload();
                }, 1000);
        },
    },

    computed: {
        customer() {
            return this.$store.state.customer;
        }
    }

})
</script>
