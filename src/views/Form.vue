<template>
<div>
    <el-form ref="form" :model="user" label-width="80px">
        <el-form-item label="工号">
            <el-input v-model="user.workno" clearable></el-input>
        </el-form-item>
        <el-form-item label="姓名">
            <el-input v-model="user.name" maxlength="8" minlength="2" show-word-limit clearable></el-input>
        </el-form-item>
        <el-form-item label="厂区">
            <el-select v-model="user.plantarea" placeholder="请选择厂区">
                <el-option label="深圳龙华" value="LH"></el-option>
                <el-option label="深圳观澜" value="GL"></el-option>
                <el-option label="四川成都" value="CD"></el-option>
            </el-select>
        </el-form-item>
        <el-form-item label="部门">
          <div class="block">
            <el-cascader
              v-model="user.dept"
              :options="departments"
              :props="{ expandTrigger: 'hover' }"
              @change="handleChange"
              clearable
              filterable
              placeholder="可搜索，如：开发"
              show-all-levels=true
              props.multiple=false ></el-cascader>
          </div>
        </el-form-item>
        <el-form-item label="出生日期">
            <el-col :span="24">
                <el-date-picker type="birthday" placeholder="选择日期" v-model="user.date1" style="width: 100%;"></el-date-picker>
            </el-col>
        </el-form-item>
        <el-form-item label="有效性">
            <el-switch v-model="user.isvalild" active-color="green" active-text="有效" active-icon-class="el-icon-check" active-value="1" inactive-color="red" inactive-text="无效" inactive-icon-class="el-icon-close" inactive-value="0"></el-switch>
        </el-form-item>

        <el-form-item label="职位">
            <template>
                <el-select v-model="user.position" placeholder="请选择职位" clearable>
                    <el-option v-for="item in positions" :key="item.value" :label="item.text" :value="item.value" :disabled="item.isvalid === false">
                    </el-option>
                </el-select>
            </template>
        </el-form-item>

        <el-form-item label="直属领导">
            <template>
                <el-select class="el-select" v-model="user.leader" placeholder="请选择直属领导" clearable>
                    <el-option v-for="item in leaders" :key="item.workno" :label="item.name" :value="item.workno" :disabled="item.isvalid === false">
                        <span style="float: left">{{ `${item.workno}  --  ${item.name}` }}</span>
                        <span style="float: right; color: #8492a6; font-size: 13px">{{ item.email }}</span>
                    </el-option>
                </el-select>
            </template>
        </el-form-item>

        <el-form-item label="邮箱" class="email">
            <el-input placeholder="请输入邮箱地址" v-model="user.email" class="input-with-select">
                <el-select v-model="email_prefix" slot="prepend" placeholder="请选择">
                    <el-option label="hzlh" value="hzlh"></el-option>
                    <el-option label="hzgl" value="hzgl"></el-option>
                    <el-option label="hzcd" value="hzcd"></el-option>
                </el-select>
                <template slot="append">@.mail.foxconn.com</template>
            </el-input>
        </el-form-item>
        <el-form-item label="近期旅行">
            <el-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange">全选</el-checkbox>
            <el-checkbox-group v-model="user.cities" @change="handleCheckedCitiesChange">
                <el-checkbox v-for="(item, index) in cities" :key="index" :label="item" name="city">{{item}}</el-checkbox>
            </el-checkbox-group>
        </el-form-item>
        <el-form-item label="体温范围">
            <el-radio-group v-model="user.heatRange" @change="handleRadioChange">
                <el-radio label="0" border disabled>36.0 以下</el-radio>
                <el-radio label="1" border>36.0 - 37.2</el-radio>
                <el-radio label="2" border>37.3 - 37.5</el-radio>
                <el-radio label="3" border>37.5 - 38.0</el-radio>
                <el-radio label="4" border>38.0 以上</el-radio>
            </el-radio-group>
        </el-form-item>
        <el-form-item label="正常体温范围参考">
          <el-slider v-model="user.heat" range show-stops :min="34.0" :max="42.0" value="[36.5, 37.5]" disabled :format-tooltip="formatTooltip"></el-slider>
        </el-form-item>
        <el-form-item label="体温滑块显示">
          <el-slider v-model="user.heat" :step="0.1" show-input :format-tooltip="formatTooltip"></el-slider>
        </el-form-item>
        <el-form-item>
            <template>
                <el-input-number v-model="user.heat" :precision="1" :step="0.1" :max="40.0" :min="35.0"></el-input-number>
            </template>
        </el-form-item>

        <el-form-item>
          <el-time-picker
            v-model="startWorkTime"
            :picker-options="{
              selectableRange: '18:30:00 - 20:30:00'
            }"
            placeholder="上班时间（固定时间）">
          </el-time-picker>
          <el-time-picker
            arrow-control
            v-model="endWorkTime"
            :picker-options="{
              start: '08:30',
              step: '00:15',
              end: '17:30',
              minTime: startWorkTime
            }"
            placeholder="下班时间（任意时间）">
          </el-time-picker>
        </el-form-item>

        <el-form-item>
          <el-date-picker
            v-model="hopeInWorkDate"
            type="daterange"
            align="right"
            unlink-panels
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
            :picker-options="pickerOptions">
          </el-date-picker>
        </el-form-item>

        <el-form-item>
            <template>
                <el-select v-model="user.hobby" multiple placeholder="请选择">
                  <el-option v-for="item in hobbies" :key="item.key" :value="item.value" :label="item.label">
                  </el-option>
                </el-select>
            </template>
        </el-form-item>

        <el-form-item label="备注信息">
            <el-input type="textarea" v-model="user.desc" placeholder="请输入备注内容" :autosize="{minRows: 2, maxRows: 4}"></el-input>
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="onSubmit">立即创建</el-button>
            <el-button>取消</el-button>
        </el-form-item>
    </el-form>
</div>
</template>

<script>
export default {
  name: 'Form',
  data () {
    return {
      user: {
        workno: '',
        name: '',
        plantarea: '',
        dept: [],
        birthday: '',
        isvalild: false,
        positions: 3,
        email: '',
        cities: ['湖北全省', '非湖北及周边省市'],
        heatRange: '1',
        heat: '36.5',
        hobby: '',
        startWorkTime: new Date(2020, 3, 12, 8, 30),
        endWorkTime: new Date(2020, 3, 12, 17, 30),
        hopeInWorkDate: new Date(),
        desc: ''
      },
      cities: ['湖北全省', '湖北周边省市', '海外', '非湖北及周边省市', '其他'],
      /* checkbox 的全选 */
      isIndeterminate: true,
      checkAll: false,
      email_prefix: 'hzlh',

      departments: [],
      positions: [{
        value: 0,
        text: '无'
      }, {
        value: 1,
        text: '组长'
      }, {
        value: 2,
        text: '课长'
      }, {
        value: 3,
        text: '部长'
      }, {
        value: 4,
        text: '处长'
      }, {
        value: 5,
        text: '总经理',
        isvalid: false
      }],
      leaders: [{
        workno: 'F1680502',
        name: '孟承笃',
        email: 'mcd.951026@foxmail.com'
      },
      {
        workno: 'F1680438',
        name: '徐钰',
        email: 'xy.4399@qq.com'
      },
      {
        workno: 'F1668123',
        name: '张三',
        email: '369652@gmail.com'
      }
      ],

      hobbies: [{
        key: 0,
        value: 'coding',
        label: '写代码'
      }, {
        key: 1,
        value: 'learning',
        label: '学习'
      }, {
        key: 2,
        value: 'reading',
        label: '阅读'
      }, {
        key: 3,
        value: 'working',
        label: '工作'
      }],
      /* 日期快捷选项规则 */
      pickerOptions: {
        shortcuts: [{
          text: '最近一周',
          onClick (picker) {
            const end = new Date()
            const start = new Date()
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 7)
            picker.$emit('pick', [start, end])
          }
        }, {
          text: '最近一个月',
          onClick (picker) {
            const end = new Date()
            const start = new Date()
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 30)
            picker.$emit('pick', [start, end])
          }
        }, {
          text: '最近三个月',
          onClick (picker) {
            const end = new Date()
            const start = new Date()
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 90)
            picker.$emit('pick', [start, end])
          }
        }]
      }
    }
  },
  methods: {
    onSubmit () {
      // console.log('submit!')
    },
    formatTooltip (val) {
      return `${val}℃ `
    },
    handleRadioChange (val) {

    },
    handleCheckAllChange (val) {
      //   console.log(val)
      this.user.cities = val ? this.cities : []
      this.isIndeterminate = false
    },
    handleCheckedCitiesChange (val) {
      const length = val.length
      this.checkAll = length === this.cities.length
      this.isIndeterminate = length > 0 && length < this.cities.length
    },
    handleChange (val) {

    },
    loadDepartments () {
      const url = './json/departments.json'
      this.axios.get(url).then(response => {
        this.departments = response.data.data
      }).catch(error => {
        this.$message({
          message: error.message,
          type: 'error'
        })
      })
    }

  },
  created () {
    this.loadDepartments()
  }
}
</script>

<style scoped>

</style>
<style>
.el-select .el-input {
    width: 300px;
}

.email .el-select .el-input {
    width: 130px;
}

.input-with-select .el-input-group__prepend {
    background-color: #fff;
}
</style>
