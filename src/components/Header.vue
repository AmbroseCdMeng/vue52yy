<template>
<div id="header">
    <el-menu :default-active="'1'" class="el-menu-demo" mode="horizontal" @select="handleSelect">
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
            <el-menu-item index="5-3">Rights Management</el-menu-item>
            <el-submenu index="5-4">
                <template slot="title">选项4</template>
                <el-menu-item index="5-4-1">选项1</el-menu-item>
                <el-menu-item index="5-4-2">选项2</el-menu-item>
                <el-menu-item index="5-4-3">选项3</el-menu-item>
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
    background-color: #FFFFFF;
    height: calc(100% - 4px);
    width: calc(100%- 4px);
    border: 2px #3285FF outset;
}
</style>
