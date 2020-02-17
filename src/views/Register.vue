<template>
    <div>
        <el-row type="flex" class="row-bg" justify="center">
            <div id="register-container">
                <h1>Register Component</h1>
                <el-form :model="user" status-icon :rules="rules" ref="user" label-width="100px" class="user">
                    <el-form-item label="Username" prop="username">
                        <el-input type="password" v-model="user.username" autocomplete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="Password" prop="password">
                        <el-input type="password" v-model="user.password" autocomplete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="RePassword" prop="rePassword">
                        <el-input type="password" v-model="user.rePassword" autocomplete="off"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="submit('user')">提交</el-button>
                        <el-button @click="reset('user')">重置</el-button>
                    </el-form-item>
                </el-form>
            </div>
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
      },
      rules: {
        username: [
          {
            validator: (rule, value, callback) => {
              if (value === '') {
                return callback(new Error('Please Enter Your Name'))
              }
            },
            trigger: 'blur'
          }
        ],
        password: [
          {
            validator: (rule, value, callback) => {
              if (value === '') {
                callback(new Error('Please Enter Your Password'))
              } else {
                if (this.user.rePassword !== '') {
                  this.$refs.user.validateField('rePassword')
                }
                callback()
              }
            },
            trigger: 'blur'
          }
        ],
        rePassword: [
          {
            validator: (rule, value, callback) => {
              if (value === '') {
                callback(new Error('Please Enter Your Password Again'))
              } else if (value !== this.user.password) {
                callback(new Error('The two passwords you entered were inconsistent!'))
              } else {
                callback()
              }
            },
            trigger: 'blur'
          }
        ]
      }
    }
  },
  methods: {
    submit (form) {
      this.$refs[form].validate((valid) => {
        if (valid) {
          alert('submit!')
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    reset (form) {
      this.$refs[form].resetFields()
    }
  }
}
</script>

<style scoped>
    #register-container {
        width: 25%;
    }
</style>
