<template>
<div id="left" class="">
    <div class="logo">
        <Logo />
    </div>
    <div class="left-menu">
        <div id="img-user-info" class="">
            <img src="../assets/image/header.png" alt="" srcset="">
        </div>
        <div id="menu" class="">
            <component id="menu-component" :is="'Menu'"></component>
        </div>
    </div>
</div>
</template>

<script>
import Menu from '@/components/Menu'
import Logo from '@/components/Logo'
export default {
  name: 'Left',
  data () {
    return {}
  },
  components: {
    Menu,
    Logo
  }
}
</script>

<style scoped>
div#left {
    background-color: #214D96;
    width: 100%;
    height: 100%;
    display: flex;
    flex-flow: column nowrap;
    justify-content: flex-start;
}

div#left .logo {
    width: 100%;
    height: 7%;
}

div#left .left-menu {
    width: 100%;
    height: 100%;
    display: flex;
    flex-flow: column nowrap;
    justify-content: flex-start;
    align-content: center
}

div#left .left-menu #img-user-info {
    width: 100%;
    height: 22%;
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;
}

div#left .left-menu #img-user-info img {
    width: 50%;
    height: 70%;
    border-radius: 50%
}

div#left .left-menu #menu {
    width: 100%;
    height: 100%;
}

div#left .left-menu #menu #menu-component {
    width: 100%;
}
</style>
