<template>
  <div class="navMenu">
    <template v-for="navMenu in navmenus">
      <el-submenu v-if="navMenu.children && navMenu.children.length > 0"
                  :key="navMenu.id" :index="navMenu.id" :disabled="!navMenu.hasPremise" v-show="navMenu.isValid">
        <template slot="title">
          <i :class="navMenu.icon"></i>
          <span> {{navMenu.cname}}</span>
        </template>
        <NavMenu :navmenus="navMenu.children"></NavMenu>
      </el-submenu>
      <el-menu-item v-else  :key="navMenu.id" :data="navMenu" :index="navMenu.id" :disabled="!navMenu.hasPremise" v-show="navMenu.isValid">
        <i :class="navMenu.icon"></i>
        <span slot="title">{{navMenu.cname}}</span>
      </el-menu-item>
    </template>
  </div>
</template>

<script>
export default {
  name: 'NavMenu',
  data () {
    return {}
  },
  props: ['navmenus']
}
</script>

<style>
/* 组件递归生成后 因 template 含 div 原因 水平样式问题解决 */
 #header .el-menu--horizontal>div>.el-submenu {
    float: left;
}
#header .el-menu--horizontal>div>.el-menu-item {
    float: left;
}
/* 解决下拉三角图标 */
#header .el-menu--horizontal>div>.el-submenu .el-submenu__icon-arrow {
    position: static;
    vertical-align: middle;
    margin-left: 8px;
    margin-top: -3px;
}
</style>
