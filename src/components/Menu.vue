<template>
<div id="menu">
    <el-row class="tac">
        <el-col>
            <el-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" background-color="#214D96" text-color="#fff" active-text-color="#ffd04b">
                <!-- <el-submenu index="1">
                    <template slot="title">
                        <i class="el-icon-location"></i>
                        <span>Guide</span>
                    </template>
                    <el-menu-item-group title="Group 01">
                        <el-menu-item index="1-1">Item 01</el-menu-item>
                        <el-menu-item index="1-2">Item 02</el-menu-item>
                    </el-menu-item-group>
                    <el-menu-item-group title="Group 02">
                        <el-menu-item index="1-3">Item 03</el-menu-item>
                    </el-menu-item-group>

                    <el-submenu index="1-4">
                        <template slot="title">SMenu 01</template>
                        <el-menu-item index="1-4-1">SItem 01</el-menu-item>
                    </el-submenu>
                </el-submenu>
                <el-menu-item index="2">
                    <i class="el-icon-menu"></i>
                    <span slot="title">Menu</span>
                </el-menu-item>
                <el-menu-item index="3" disabled>
                    <i class="el-icon-document"></i>
                    <span slot="title">Files</span>
                </el-menu-item>
                <el-menu-item index="4">
                    <i class="el-icon-setting"></i>
                    <span slot="title">Setting</span>
                </el-menu-item> -->

                <nav-menu :navmenus="menuItems"></nav-menu>
            </el-menu>
        </el-col>
    </el-row>
</div>
</template>

<script>
import NavMenu from '@/components/NavMenu'
export default {
  name: 'Menu',
  data () {
    return {
      menuItems: []
    }
  },
  methods: {
    handleOpen (key, keyPath) {
      //   console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      //   console.log(key, keyPath)
    },
    getMenuItems () {
      const url = './json/guide-left-menu.json'
      this.axios.get(url).then(response => {
        if (response.status === 200) {
          this.menuItems = response.data.data
        }
      })
    }
  },
  components: {
    NavMenu
  },
  created () {
    this.getMenuItems()
  }
}
</script>

<style scoped>
div#menu {
    width: 100%;
    height: 100%;
}

.el-submenu .el-menu-item {
    min-width: 100%;
    max-width: 100%;
}

.el-menu {
    border-right: 0px solid #e6e6e6;
}
</style>
