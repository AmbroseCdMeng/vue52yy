<template>
    <div class="report-container">
      <div class="main-container">
        <component class="main-comp" :is="'Tabs'" />
        </div>
    </div>
</template>
<script>
import Tabs from '@/components/Tabs'
export default {
  name: 'Report',
  components: {
    Tabs
  }
}
</script>

<style scoped>
div.report-container {
    background-color: #F5F5F5;
    height: 100%;
    width: 100%;
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;
}

div.report-container .main-container {
    width: calc(100% - 25px);
    height: calc(100% - 25px);
    background-color: #FFFFFF;
}

div.report-container .main-comp{
  height: 100%;
}
</style>
