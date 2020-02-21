<template>
    <div id="main">
     <div class="main-container">
     </div>
    </div>
</template>

<script>
export default {
  name: 'Main'
}
</script>

<style scoped>
div#main{
  background-color:#F5F5F5;
  height: 100%;
  width: 100%;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
}

div#main .main-container{
  width: calc(100% - 25px);
  height: calc(100% - 25px);
  background-color: #FFFFFF;
}
</style>
