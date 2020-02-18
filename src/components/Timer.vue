<template>
<div id="time-container">
    <el-row id="row-timer" type="flex" justify="center" align="middle">
        <span>{{ date | date2string}}</span>
    </el-row>
</div>
</template>

<script>
export default {
  name: 'Timer',
  data () {
    return {
      date: new Date()
    }
  },
  mounted () {
    setInterval(() => {
      this.date = new Date()
    }, 1000)
  }
}
</script>

<style>
#time-container{
height: 100%;
}
#time-container #row-timer{
  height: 100%;
}
#time-container span {
    position: relative;
    margin: 0;
    padding: 0;
    line-height: 1.5em;
    font-size: 89px;
    color: rgba(217, 135, 25, 1);
    /* Fallback Color */
    text-transform: uppercase;
    font-weight: bold;
    font-family: "Times New Roman", Times, serif;
    text-align: center;
    letter-spacing: -4PX;
    text-shadow: 4PX 4PX 0 #441369, 8PX 8PX 0 rgba(255, 255, 255, 0.1);
    /* Fallback Shadow */
}
</style>
