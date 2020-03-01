<template>
<div id="main">
    <div class="main-container">
        <!-- <div class="main-linked">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item :to="{ path: '/' }">Login</el-breadcrumb-item>
                <el-breadcrumb-item :to="{ path: '/' }">Home</el-breadcrumb-item>
            </el-breadcrumb>
        </div> -->
        <component class="main-tabs" :is="'Tabs'" />
    </div>
</div>
</template>

<script>
import Tabs from '@/components/Tabs'
export default {
  name: 'Main',
  props: ['mainComp'],
  components: {
    Tabs
  }
}
</script>

<style scoped>
div#main {
    background-color: #F5F5F5;
    height: 100%;
    width: 100%;
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;
}

div#main .main-container {
    width: calc(100% - 25px);
    height: calc(100% - 25px);
    background-color: #FFFFFF;
}
/*
div#main .main-linked{
height: 2.6%;
}

div#main .main-tabs{
  height: 97.4%;
} */

div#main .main-tabs{
  height: 100%;
}
</style>
