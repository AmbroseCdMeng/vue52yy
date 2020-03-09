<template>
<div id="userMgr" class="userMgr" >
    <el-table ref="tab" :data="tableData" style="width: 100%" height="100%" border highlight-current-row>
        <el-table-column fixed type="index" label="no" width="50" align="center">
        </el-table-column>
         <el-table-column label="workno" prop="workno" align="center">
        </el-table-column>
         <el-table-column label="username" prop="username" align="center">
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
      tableData: []
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
    }

  },
  created () {
    this.fetchData()
  }
}
</script>

<style scoped>
div#userMgr{
    height: 100%;
    width: 100%;
}
</style>
