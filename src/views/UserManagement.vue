<template>
<div id="userMgr" class="userMgr">
    <div class="search">
        <el-row class="demo-autocomplete">
  <el-col :span="12">
    <div class="sub-title">激活即列出输入建议</div>
    <el-autocomplete
      class="inline-input"
      v-model="state1"
      :fetch-suggestions="querySearch"
      placeholder="请输入内容"
      @select="handleSelect"
    ></el-autocomplete>
  </el-col>
  <el-col :span="12">
    <div class="sub-title">输入后匹配输入建议</div>
    <el-autocomplete
      class="inline-input"
      v-model="state2"
      :fetch-suggestions="querySearch"
      placeholder="请输入内容"
      :trigger-on-focus="false"
      @select="handleSelect"
    ></el-autocomplete>
  </el-col>
</el-row>
    </div>
    <el-table ref="tab" :data="tableData" style="width: 100%" height="100%" border highlight-current-row>
        <el-table-column fixed type="index" label="no" width="50" align="center">
        </el-table-column>
        <el-table-column label="workno" prop="workno" align="center">
        </el-table-column>
        <el-table-column label="name" prop="name" align="center">
        </el-table-column>
        <el-table-column label="gender" prop="gender" align="center">
        </el-table-column>
        <el-table-column label="entrydate" prop="entrydate" align="center">
        </el-table-column>
        <el-table-column label="email" prop="email" align="center">
        </el-table-column>
        <el-table-column label="position" prop="position" align="center">
        </el-table-column>
    </el-table>
</div>
</template>

<script>
export default {
  name: 'UserManagement',
  data () {
    return {
      tableData: [],
      restaurants: [{ value: 'MCD', address: '龙华' }],
      state1: '',
      state2: ''
    }
  },
  methods: {
    fetchData () {
      const url = './json/users.json'
      this.axios.get(url).then(response => {
        if (response.status === 200) {
          //   console.log(response.data)
          this.tableData = response.data.data
        } else {
          this.$message({
            message: '数据获取失败',
            type: 'error'
          })
        }
      }).catch(err => {
        // console.log(err)
        this.$message({
          message: err.message,
          type: 'error'
        })
      })
    },
    querySearch (queryString, callBack) {
      var results = queryString ? this.tableData.filter(this.createFilter(queryString)) : this.restaurants
      callBack(results)
    },
    createFilter (queryString) {
      return data => {
        return (data.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0)
      }
    },
    handleSelect (item) {
      console.log(item)
    }
  },
  created () {
    this.fetchData()
  }
}
</script>

<style scoped>
div#userMgr {
    height: 100%;
    width: 100%;
}
</style>
