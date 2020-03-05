<template>
<div>
    <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="工号">
            <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="姓名">
            <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="厂区">
            <el-select v-model="form.region" placeholder="请选择厂区">
                <el-option label="深圳龙华" value="LH"></el-option>
                <el-option label="深圳观澜" value="GL"></el-option>
                <el-option label="四川成都" value="CD"></el-option>
            </el-select>
        </el-form-item>
        <el-form-item label="出生日期">
            <el-col :span="24">
                <el-date-picker type="date" placeholder="选择日期" v-model="form.date1" style="width: 100%;"></el-date-picker>
            </el-col>
        </el-form-item>
        <el-form-item label="有效性">
            <el-switch v-model="form.delivery" active-color="green" active-text="有效" active-icon-class="el-icon-check" active-value="1"
            inactive-color="red" inactive-text="无效" inactive-icon-class="el-icon-close" inactive-value="0"></el-switch>
        </el-form-item>
        <el-form-item label="近期旅行">
            <el-checkbox-group v-model="form.type">
                <el-checkbox label="湖北全省" name="type"></el-checkbox>
                <el-checkbox label="湖北周边省市" name="type"></el-checkbox>
                <el-checkbox label="海外" name="type"></el-checkbox>
                <el-checkbox label="非湖北及周边省市" name="type"></el-checkbox>
                <el-checkbox label="其他" name="type"></el-checkbox>
            </el-checkbox-group>
        </el-form-item>
        <el-form-item label="体温范围">
            <el-radio-group v-model="form.resource" text-color="#362" fill="#555555">
                <el-radio label="36.0 以下" border disabled ></el-radio>
                <el-radio label="36.0 - 37.2" border></el-radio>
                <el-radio label="37.3 - 37.5" border ></el-radio>
                <el-radio label="37.5 - 38.0" border ></el-radio>
                <el-radio label="38.0 以上" border ></el-radio>
            </el-radio-group>
        </el-form-item>

        <el-form-item label="备注信息">
            <el-input type="textarea" v-model="form.desc"></el-input>
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
      form: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      }
    }
  },
  methods: {
    onSubmit () {
      console.log('submit!')
    }
  }
}
</script>

<style scoped>

</style>
