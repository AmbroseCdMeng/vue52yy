<template>
<div id="register-form">
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
            <input class="input-fill" type="password" placeholder="RePassword" autocomplete="off" v-model="user.rePassword">
        </el-col>
    </el-row>
    <el-row type="flex" class="">
        <el-col>
            <input class="input-fill" type="button" value="Register" @click="postRegister">
        </el-col>
    </el-row>
    <el-row type="flex" class="">
        <el-col>
            <input class="input-fill" type="button" value="Reset" @click="frmReset">
        </el-col>
    </el-row>
</div>
</template>

<script>
export default {
  name: 'Register',
  data () {
    return {
      user: {
        username: '',
        password: '',
        rePassword: ''
      }
    }
  },
  methods: {
    postRegister () {
      return null
    },
    frmReset () {
      this.user = {
        username: '',
        password: '',
        rePassword: ''
      }
    }
  }
}
</script>

<style>
#register-form {
    height: 100%;
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-around;
}

#register-form .input-fill {
    outline-style: none;
    border: 0 solid #ccc;
    width: 100%;
    height: 56px;
    /* margin: 10px 0 10px 2px; */
    background-color: rgba(255, 255, 255, 0.1);
    font-size: 2.4vh;
    font-weight: 800;
}

#register-form .input-fill[type=button] {
    border: 1px solid #ccc;
    background-color: rgba(255, 255, 255, 0);
    font-weight: 900;
    color: #FFF;
    font-size: 26px;
    border-radius: 50px;
    cursor: pointer;
}

#register-form .input-fill[type=button]:hover {
    color: aqua;
    border: 2px solid aqua;
}
</style>
