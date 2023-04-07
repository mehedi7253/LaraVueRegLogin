<template>
    <div class="col-md-8 mx-auto">
        <div class="card">
            <div class="card-header">
                <h3 class="text-center">Login</h3>
            </div>
            <div class="card-body">
                <form>
                    <div class="form-group">
                        <label>Email</label>
                        <input type="email" class="form-control" placeholder="Enter Email">
                    </div>
                    <div class="form-group">
                        <label>Password</label>
                        <input type="password" class="form-control" placeholder="Enter Password">
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
