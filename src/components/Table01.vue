<template>
<div id="table01" class="">
    <div class="table-container">
        <el-table ref="tab" :data="tableData" style="width: 100%" height="100%" border highlight-current-row :row-class-name="tableRowClassName" @current-change="handleCurrentChange" cell-class-name="nowrap" header-cell-class-name="text-center">

            <el-table-column fixed type="index" label="no" width="50" align="center">
            </el-table-column>
            <el-table-column fixed prop="_id" label="_id" width="250" align="center">
            </el-table-column>
            <el-table-column fixed prop="pkid" label="pkid" width="250" align="center">
            </el-table-column>
            <el-table-column fixed prop="provinces" label="provinces" width="100" align="center">
            </el-table-column>
            <el-table-column fixed prop="date" label="date" width="150" align="center" :filters="filtersDate" :filter-method="filterHandler" :formatter="formatter">
                <template slot-scope="scope">
                    <i class="el-icon-time"></i>
                    {{ scope.row.date | date2string }}
                </template>
            </el-table-column>

            <el-table-column label="base-data">
                <el-table-column prop="confirmed_case" label="confirmed_case" align="center" width="150">
                </el-table-column>
                <el-table-column prop="suspected_case" label="suspected_case" align="center" width="150">
                </el-table-column>
                <el-table-column prop="death_case" label="death_case" align="center" width="150" class-name='column-warning'>
                </el-table-column>
                <el-table-column prop="death_case_rate" label="death_case_rate" align="center" width="150" >
                    <template slot-scope="scope">
                        <span v-warningcolor="'red'">{{ `${(scope.row.death_case / scope.row.confirmed_case * 100).toFixed(3)} %` }}</span>
                    </template>
                </el-table-column>
                <el-table-column prop="cured_case" label="cured_case" align="center" width="150">
                </el-table-column>
                <el-table-column prop="cured_case_rate" label="cured_case_rate" align="center" width="150" class-name='column-rate'>
                    <template slot-scope="scope">
                        <span v-warningcolor="'red'">{{ `${(scope.row.cured_case / scope.row.confirmed_case * 1000).toFixed(5)} ‰` }}</span>
                    </template>
                </el-table-column>
            </el-table-column>

            <el-table-column prop="creater" label="creater" align="center" width="150">
            </el-table-column>
            <el-table-column prop="createdate" label="createdate" align="center" width="150">
                <template slot-scope="scope">{{scope.createdate | date2string}} </template>
            </el-table-column>

            <el-table-column prop="updater" label="updater" align="left" width="250">
                <template slot-scope="scope">
                    <el-popover trigger="hover" placement="top">
                        <p>修改人: {{ scope.row.updater }}</p>
                        <p>修改日期: {{ scope.row.updatedate | date2string}}</p>
                        <div slot="reference" class="name-wrapper">
                            <el-tag effect="plain" size="medium">鼠标放置此处查看详情</el-tag>
                        </div>
                    </el-popover>
                </template>
            </el-table-column>
        </el-table>
    </div>
</div>
</template>

<script>
import {
  Toast
} from 'mint-ui'
export default {
  name: 'table01',
  data () {
    return {
      tableData: [],
      currentRow: 0
    }
  },
  props: ['dataSourceLink'],
  methods: {
    fetchData () {
      this.axios.get(this.dataSourceLink).then(response => {
        if (response.status === 200) {
          // console.log(response)
          // console.log(response.data)
          this.tableData = response.data.data
        } else {
          Toast({
            message: response.statusText || response.data.message,
            position: 'center',
            duration: 1000
          })
        }
      }).then(() => {
        // console.log(this.tableData)
        this.$nextTick(() => {
          this.$refs.tab.doLayout()
          // console.log(this.$refs.tab)
        })
      }).catch(err => {
        // console.log(err)
        Toast({
          message: err.message,
          position: 'center',
          duration: 1000
        })
      })
    },
    // 自定义行类名，可以用来复写 stripe 属性的默认值
    tableRowClassName ({
      row,
      rowIndex
    }) {
      return (rowIndex & 1) === 0 ? 'even-row' : 'odd-row'
    },
    /* 传入索引，选中指定行，传空时，取消选择 */
    setCurrent (row) {
      this.$refs.singleTable.setCurrentRow(row)
    },
    /* 当前选中行索引 */
    handleCurrentChange (val) {
      this.currentRow = val
    },
    /* 列筛选数据过滤 */
    filterHandler (value, row, column) {
      const property = column.property
      return row[property] === value
    },
    /* 列格式化 */
    formatter (row, column) {
      return row.date
      // return this.$options.filter['date2string'](row.date)
    }
  },
  computed: {
    /* 日期过滤去重 */
    filtersDate: function () {
      return this.tableData.map(item => item.date).filter((el, index, arr) => {
        return arr.indexOf(el) === index
      }).map(item => {
        return {
          text: item,
          value: item
        }
      })
    }
  },
  created () {
    this.fetchData()
  }
}
</script>

<style scoped>
div#table01 {
    width: 100%;
    height: 100%;
}

div#table01 .table-container {
    width: 100%;
    height: 100%;
}
</style><style>
.el-table__body tr.hover-row>td {
    background-color: #FFFF99;
}

.el-table--enable-row-transition .el-table__body td {
    transition: background-color 0.4s ease;
}

.el-table .odd-row {
    background: oldlace;
}

.el-table .even-row {
    background: #f0f9eb;
}

.nowrap {
    white-space: nowrap
}

.nowrap>div.cell {
    white-space: nowrap
}

.text-center {
    text-align: center;
}

.text-center>div.cell {
    text-align: center;
}

.column-warning {
    background-color: #FFCCCC
}
</style>
