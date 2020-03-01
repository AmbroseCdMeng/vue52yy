<template>
    <el-container direction="horizontal">
        <el-aside width="11%">
            <Left />
        </el-aside>
        <el-container  direction="vertical">
            <el-header height="7%">
                <Header />
            </el-header>
            <el-main>
                <!-- <Main /> -->
                <router-view></router-view>
            </el-main>
        </el-container>
    </el-container>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header'
import Left from '@/components/Left'
// import Main from '@/components/Main'
// import Footer from '@/components/Footer'

export default {
  name: 'Home',
  data () {
    return {
      flag: true
    }
  },
  components: {
    Header,
    Left
    // Main
  }
}
</script>

<style scoped>
.el-container{
    height: 100%;
}
.el-main{
    padding:2px;
}
.el-header{
padding: 0 2px;
}
</style>
