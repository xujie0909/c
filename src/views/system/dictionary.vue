<template>
  <div class="app-container">
    <div>
      <el-button @click="showAddModel">新增字典</el-button>
    </div>
    <el-table
      :data="tableData"
    >
      <el-table-column
        prop="id"
        label="序号"
      />
      <el-table-column
        prop="dicType"
        label="字典类型"
      />
      <el-table-column
        prop="dicName"
        label="字典名称"
      />
      <el-table-column
        prop="dicValue"
        label="字典值"
      />
      <el-table-column
        prop="dicDesc"
        label="字典描述"
      />
      <el-table-column
      prop="createTime"
      label="创建时间"
      />
      <el-table-column
        prop="updateTime"
        label="更新时间"
      />
      <el-table-column
        label="操作"
        width="100"
      >
        <template slot-scope="scope">
          <el-button type="text" size="small" @click="edit(scope.row)">编辑</el-button>
          <el-button type="text" size="small" @click="del(scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-dialog title="新增字典" :visible.sync="dialogFormVisible">
      <el-form :model="form">
        <el-form-item label="字典类型" :label-width="formLabelWidth">
          <!--<el-input v-model="form.dicType" auto-complete="off" />-->
          <el-select
          v-model="form.dicType"
          filterable
          allow-create
          default-first-option
          placeholder="请选择字典类型">
          <el-option
            v-for="(item,index) in dicTypes"
            :key="dictionary"
            :label="item"
            :value="item">
          </el-option>
        </el-select>
        </el-form-item>

        <el-form-item label="字典名称" :label-width="formLabelWidth">
          <el-input v-model="form.dicName" auto-complete="off" />
        </el-form-item>
        <el-form-item label="字典值" :label-width="formLabelWidth">
          <el-input v-model="form.dicValue" auto-complete="off" />
        </el-form-item>
        <el-form-item label="字典描述" :label-width="formLabelWidth">
          <el-input v-model="form.dicDesc" auto-complete="off" />
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <!--<el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>-->
        <el-button type="primary" @click="submitFormData()">确 定</el-button>
      </div>
    </el-dialog>
  </div>

</template>

<script>
import { fetchList, editDictionary, del,fetchDicTypes } from '@/api/dictionary'

export default {
  data() {
    return {
      dicTypes:[],
      tableData: [],
      dialogFormVisible: false,
      form: {
        id: '',
        dicType: '',
        dicName: '',
        dicValue: '',
        dicDesc: '',
        createTime:'',
        updateTime:''
      },
      query: {},
      formLabelWidth: '120px'

    }
  },
  mounted() {
    //获取字典列表数据
    this.getData()
  },
  methods: {

    // 打开新增面板
    showAddModel() {
      // 清空表单内容
      this.form = {
        id: '',
        dicType: '',
        dicName: '',
        dicValue: '',
        dicDesc: '',
        createTime:'',
        updateTime:''

      }
      this.getDicTypes();
      this.dialogFormVisible = true
    },

    // 提交表单
    submitFormData() {
      const data = {
        id: this.form.id,
        dicType: this.form.dicType,
        dicName: this.form.dicName,
        dicValue: this.form.dicValue,
        dicDesc: this.form.dicDesc,
        createTime:this.form.createTime,
        updateTime:this.form.updateTime
      };
      editDictionary(data).then(data => {
        this.$message({
          message: '操作成功！',
          type: 'success'
        });
        // 刷新列表
        this.getData();
        // 成功的处理
        this.dialogFormVisible = false;

      })
    },

    // 获取列表数据
    getData() {
      fetchList().then(data => {
        this.tableData = data.data
      })
    },

    //获取字典类型数据
    getDicTypes() {
      fetchDicTypes().then(data => {
        console.log(JSON.stringify(data.data));
        this.dicTypes = data.data
      })
    },

    // 打开编辑数据面板
    edit(row) {
      // 打开模态框
      this.showAddModel();
      this.form = row
    },

    // 删除数据
    del(row) {
      const data = {
        id: row.id
      }
      del(data).then(data => {
        this.$message({
          message: '操作成功！',
          type: 'success'
        });
        // 刷新列表
        this.getData()
      })
    }
  }
}
</script>

