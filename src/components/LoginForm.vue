<template>
<div id="login-form">
    <el-row type="flex" class="">
        <el-col>
            <input class="input-fill" type="text" placeholder="Username" autocomplete="off" v-model="user.username">
        </el-col>
    </el-row>
    <el-row type="flex" class="">
        <el-col>
            <input class="input-fill" type="password" placeholder="Password" autocomplete="off" v-model="user.password">
        </el-col>
    </el-row>
    <el-row type="flex" class="">
        <el-col>
            <input id="btn-login" class="input-fill" type="button" value="Login" @click="postLogin">
        </el-col>
    </el-row>
    <el-row type="flex" class="">
        <el-col>
            <input id="btn-reset" class="input-fill" type="button" value="Reset" @click="frmReset">
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
import {
  Toast,
  Indicator
} from 'mint-ui'

export default {
  name: 'Login',
  data () {
    return {
      user: {
        username: '52yy-Admin',
        password: '366963496994914468'
      }
    }
  },

  methods: {
    postLogin () {
      Indicator.open({
        text: '登录中...',
        spinnerType: 'fading-circle'
      })
      Indicator.close()
      Toast({
        message: '登录成功',
        position: 'center',
        duration: 1000
      })
      // this.$store.commit('setUsername', this.username)
      this.$router.push({
        path: '/home',
        replace: true
      })
      // const api = 'https://www.runoob.com/try/ajax/json_demo.json'
      // this.axios.get(api).then(response => {
      //   Toast('登录成功')
      //   setCookie('use-login-c', this.usename, 20)
      //   this.$router.push({
      //     path: '/home',
      //     replace: true
      //   })
      // }).catch(error => {
      //   Toast(error.message)
      // })
    },
    frmReset () {
      this.user = {
        username: '',
        password: ''
      }
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
    cursor: pointer;
}

#login-form .input-fill[type=button]:hover {
    color: aqua;
    border: 2px solid aqua;
}
</style>
