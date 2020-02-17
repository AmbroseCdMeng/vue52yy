<template>
    <div>
        <el-row type="flex" class="row-bg" justify="center">
            <div id="login-container">
                <h1>Login Component</h1>
                <el-form label-position='left' label-width="80px" :model="user">
                    <el-form-item label="Username">
                        <el-input v-model="user.username"></el-input>
                    </el-form-item>
                    <el-form-item label="Password">
                        <el-input v-model="user.password"></el-input>
                    </el-form-item>
                </el-form>
                <el-button type="primary" @click="postLogin">Login</el-button>
            </div>
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
    #login-container {
        width: 25%;
    }
</style>
