<template>
<div id="tabs" class="">
    <el-tabs @tab-click="handleClick" value=1 class="el-tabs">
        <el-tab-pane class="el-tab-pane" v-for="(item, index) in items" :key="index" :label="item.name" :name="item.index">
            <component class="el-tab-comp" :dataSourceLink="item.dataSource" :is="'Table01'" />
        </el-tab-pane>
    </el-tabs>
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
        dataSource: 'http://localhost:3000/nCov'
      },
      {
        name: '湖北',
        dataSource: 'http://localhost:3000/nCov/%E6%B9%96%E5%8C%97'
      },
      {
        name: '江西',
        dataSource: 'http://localhost:3000/nCov/%E6%B1%9F%E8%A5%BF'
      }, {
        name: '甘肃',
        dataSource: 'http://localhost:3000/nCov/%E7%94%98%E8%82%83'
      }, {
        name: '广东',
        dataSource: 'http://localhost:3000/nCov/%E5%B9%BF%E4%B8%9C'
      }
      ]
    }
  },
  methods: {
    handleClick () {
    }
  },
  components: {
    Table01
  }
}
</script>

<style scoped>
div#tabs {
    height: 100%;
    width: 100%;
}

div#tabs .el-tabs {
    height: 100%;
    width: 100%;
}
</style><style>
div#tabs div.el-tabs__content {
    height: calc(100% - 55px);
}

div#tabs div.el-tab-pane {
    height: 100%;
}
</style>
