<template>
<div id="tabs">
    <div>
        <el-tabs @tab-click="handleClick">
            <el-tab-pane v-for="(item, index) in items" :key="index" :label="item.name" :name="item.index" >
                <component :dataSourceLink="item.dataSource" :is="'Table01'" />
            </el-tab-pane>
        </el-tabs>
    </div>
</div>
</template>

<script>
import Table01 from '@/components/Table01'
export default {
  name: 'tabs',
  data () {
    return {
      items: [{
        name: '全国',
        dataSource: 'localhost:8080/quanguo'
      },
      {
        name: '湖北',
        dataSource: 'localhost:8080/hubei'
      },
      {
        name: '江西',
        dataSource: 'localhost:8080/jiangxi'
      }, {
        name: '甘肃',
        dataSource: 'localhost:8080/gansu'
      }, {
        name: '广东',
        dataSource: 'localhost:8080/guangdong'
      }
      ]
    }
  },
  methods: {
    handleClick () {

    }
  },
  components: { Table01 }
}
</script>

<style scoped>

</style>
