<template>
<div id="login-form">
    <el-row type="flex" class="">
        <el-col :span="24">
            <input class="input-fill" type="text" placeholder="Username" autocomplete="off" v-model="user.username">
        </el-col>
    </el-row>
    <el-row type="flex" class="">
        <el-col :span="24">
            <input class="input-fill" type="text" placeholder="Password" autocomplete="off" v-model="user.password">
        </el-col>
    </el-row>
    <el-row type="flex" class="">
        <el-col :span="24">
            <input class="input-fill" type="button" value="Login">
        </el-col>
    </el-row>
    <el-row type="flex" class="">
        <el-col :span="24">
            <input class="input-fill" type="button" value="Reset">
        </el-col>
    </el-row>
    <el-row type="flex" class="row-link-forget " justify="end">
        <el-col :span="9">
            <a href="">forget password</a>
        </el-col>
    </el-row>
</div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      user: {
        username: '',
        password: ''
      }
    }
  },

  methods: {
    postLogin () {
      // this.axios.get('api').then((response) => {
      //   this.$router.push({
      //     path: '/home',
      //     replace: true
      //   })
      // })
      return this.$router.push({
        path: '/home',
        replace: true
      })
    }
  }
}
</script>

<style scoped>
#login-form {
    height: 100%;
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-around;
}

#login-form .row-link-forget {
    text-align: right;
}

#login-form .row-link-forget a {
    font-size: 18px;
    color: #FFF;
}

#login-form .input-fill {
    outline-style: none;
    border: 0 solid #ccc;
    width: 100%;
    height: 56px;
    /* margin: 10px 0 10px 2px; */
    background-color: rgba(255, 255, 255, 0.1);
    font-size: 2.4vh;
    font-weight: 800;
}

#login-form .input-fill[type=button] {
    border: 1px solid #ccc;
    background-color: rgba(255, 255, 255, 0);
    font-weight: 900;
    color: #FFF;
    font-size: 26px;
    border-radius: 50px;
}

#login-form .login-contain #username,
#login-form .login-contain #password {
    padding: 5px 20px;
}
</style>
