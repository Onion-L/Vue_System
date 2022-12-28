<template>
    <div class="login">
        <div class="login-container">
            <h1>后台管理登录</h1>
            <el-form ref="form" :model="form" label-width="80px">
                <el-form-item :rules="rules">
                    <el-input v-model="form.name"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-input v-model="form.password"></el-input>
                </el-form-item>
                <el-form-item size="large">
                    <el-button type="primary" @click="onSubmit">登录</el-button>

                </el-form-item>
            </el-form>
        </div>
        <!-- <h1>Please Login</h1>
        <form>
            <div class="form-control">
                <input type="text" required>
                <label>Email</label>
            </div>

            <div class="form-control">
                <input type="password" required>
                <label>Password</label>
            </div>

            <button class="btn">Login</button>

            <p class="text">Don't have an account? <a href="#">Register</a> </p>
        </form> -->
    </div>
</template>
<script>
export default {
    name: 'Login',
    data() {
        return {
            form: {},
            rules: [
                { required: true, message: '用户名不能为空' },
            ]
        }
    }

}
</script>
<style scoped>
.login {
    background-color: steelblue;
    color: #fff;
    font-family: 'Muli', sans-serif;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    overflow: hidden;
    margin: 0;
}



.login-container h1 {
    text-align: center;
    margin-bottom: 30px;
}

label {
    color: #fff;
}
</style>