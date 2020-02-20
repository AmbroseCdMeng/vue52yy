<template>
<div id="login-container">
    <el-row id="row-timer" type="flex" justify="center">
        <el-col :span="12">
            <Timer />
        </el-col>
    </el-row>
    <el-row id="row-context-01" type="flex" justify="left">
        <el-col :span="21" :offset=3>
            <span class="span-login-01">
                Best wishes ...
            </span>
        </el-col>
    </el-row>
    <el-row id="row-context-02" type="flex" justify="left">
        <el-col :span="21" :offset=3>
            <span class="span-login-02">
                The enemy can't move, I can't move. Grandpa Zhong Nanshan asked me to move!
            </span>
        </el-col>
    </el-row>
    <el-row id="row-login-form" class="" type="flex" justify="center" align="middle">
        <el-col :span="6">
            <div>
                <el-row type="flex" justify="center" align="middle">
                    <el-col :class="['col-tab',{ 'tab-active':active == 'LoginForm'}]">
                        <span id="tab-login" class="tab-login"  @click.prevent="active='LoginForm'">登录</span>
                    </el-col>
                    <el-col :class="['col-tab',{ 'tab-active':active=='RegisterForm'}]">
                        <span id="tab-login" class="tab-login"  @click.prevent="active='RegisterForm'">注册</span>
                    </el-col>
                </el-row>

                <el-row id="row-component" class="row-component" type="flex" justify="center">
                    <el-col>
                        <transition mode="out-in" enter-active-class="animated zoomIn" leave-active-class="animated zoomOut" :duration="{enter:800, leave:200}">
                            <component :is="active"></component>
                        </transition>
                    </el-col>
                </el-row>
            </div>
        </el-col>
    </el-row>
    <el-row id="row-context-03" class="" type="flex" justify="end">
        <el-col class="" :span="10">
            <span class="span-login-03">
                We hope that Wuhan will be safe and China will be safe
            </span></el-col>
    </el-row>
</div>
</template>

<script>
import Timer from '../components/Timer'
import LoginForm from '../components/LoginForm'
import RegisterForm from '../components/RegisterForm'

export default {
  name: 'Login',
  data () {
    return {
      active: 'LoginForm'
    }
  },
  components: {
    Timer,
    LoginForm,
    RegisterForm
  }
}
</script>

<style>
/* .v-enter,
.v-leave {
    opacity: 0;
    transform: translate(150px);
}

.v-enter-active,
.v-leave-active {
    transition: all 0.6s ease;
} */

#login-container {
    width: 100%;
    height: 100%;
    position: relative;
}

#login-container::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    background: transparent url(../assets/bg.jpg) center center no-repeat;
    /*-webkit-filter: opacity(55%);*/
    filter: blur(0px) grayscale(60%) opacity(85%);
    /* 模糊度 灰度 透明度 */
    z-index: -1;
    background-size: 100% 100%;
    width: 100%;
    height: 100%;
}

#login-container #row-timer {
    height: 180px;
}

#login-container .span-login-01 {
    font-family: SansSerif, sans-serif;
    font-size: 35px;
    font-weight: 900;
    margin: 0 0 20px 0;
    color: #FFF;
}

#login-container .span-login-02 {
    font-family: Serif, serif;
    font-size: 26px;
    margin-left: 2em;
    color: #999;
}

#login-container .span-login-03 {
    font-family: Serif, serif;
    font-size: 21px;
    color: #FFF;
}

#login-container #row-login-form {
    text-align: center;
}

#login-container #row-component {
    min-height: 442px;
}

#login-container .col-tab {
    display: flex;
    justify-content: center;
    align-items: center;
    /* background-color: #999; */
    height: 50px;
    border: 2px ridge #333;
    border-radius: 18px;
}

#login-container .col-tab:hover {
    background-color: #CDC7BE;
    border: 2px ridge aqua;
    cursor: pointer;
    color: aliceblue;
}

#login-container .tab-active {
    background-color: #C1BAB4;
}

#login-container .tab-login {
    font-size: 26px;
    width: 100%;
    text-decoration: none;
}

#login-container #row-context-01 {
    margin: 0px auto;
}

#login-container #row-context-02 {
    margin: 30px 0 60px 0;
}

#login-container #row-login-form {
    margin: 20px auto;
}

#login-container #row-context-03 {
    margin: 79px 0 0 0;
}
</style>
