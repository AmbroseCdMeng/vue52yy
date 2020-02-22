<template>
<div id="header">
    <el-menu :default-active="'1'" class="el-menu-demo" mode="horizontal" @select="handleSelect" background-color="#8CC4FD" text-color="#FFF" active-text-color="#BD3728">
        <el-menu-item index="1">Today's News</el-menu-item>

        <el-menu-item index="2">Data Report</el-menu-item>
        <el-menu-item index="3" disabled>Data Chart</el-menu-item>
        <el-menu-item index="4">
            <a href="" target="_blank">Data Form</a>
        </el-menu-item>

        <el-submenu index="5">
            <template slot="title">Backstage management</template>
            <el-menu-item index="5-1">Users Management</el-menu-item>
            <el-menu-item index="5-2">Roles Management</el-menu-item>
            <el-submenu index="5-3">
                <template slot="title">Rights Management</template>
                <el-menu-item index="5-3-1">Item 01</el-menu-item>
                <el-menu-item index="5-3-2">Item 02</el-menu-item>
                <el-menu-item index="5-3-3">Item 03</el-menu-item>
            </el-submenu>
        </el-submenu>
    </el-menu>
</div>
</template>

<script>
export default {
  name: 'Header',
  data () {
    return {

    }
  },
  methods: {
    handleSelect (key, keyPath) {
      // console.log(key, keyPath)
    }
  }
}
</script>

<style scoped>
div#header {
    /* background-color: #558558; */
    /* background:  url('../assets/texture/TexturesCom_Plastic0143_1_S.jpg') no-repeat fixed top; */
    height:100%;
    width: 100%;
    /* border: 2px #FFF outset; */
}
</style>
