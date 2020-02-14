<template>
  <div class="app-container">
    <div>
      <el-button @click="showAddModel">新增标签</el-button>
    </div>
    <el-table
      :data="tableData"
      :height="600"
      style="width: 100%">
      <el-table-column
        prop="id"
        label="序号"
        sortable
        width="180">
      </el-table-column>
      <el-table-column
        prop="tagName"
        label="标签名称"
        width="180">
      </el-table-column>
      <el-table-column
        prop="tid"
        label="唯一ID">
      </el-table-column>
      <el-table-column
        prop="billFeild"
        label="匹配字段">
      </el-table-column>
      <el-table-column
        prop="keyWord"
        label="匹配词">
      </el-table-column>
      <el-table-column
        prop="date"
        label="创建日期">
      </el-table-column>
      <!--<el-table-column
        prop="keyWord"
        label="匹配词"
        width="100"
        filter-placement="bottom-end">
        <template slot-scope="scope">
          <el-tag
            :type="scope.row.tag === '家' ? 'primary' : 'success'"
            close-transition>{{scope.row.tag}}
          </el-tag>
        </template>
      </el-table-column>-->
    </el-table>
    <el-dialog title="新增标签" :visible.sync="dialogFormVisible">
      <el-form :model="form">
        <el-form-item label="标签名称" :label-width="formLabelWidth">
          <el-input v-model="form.tagName" auto-complete="off"/>
        </el-form-item>
        <el-form-item label="匹配字段" :label-width="formLabelWidth">
          <el-input v-model="form.billFeild" auto-complete="off"/>
        </el-form-item>
        <el-form-item label="匹配词" :label-width="formLabelWidth">
          <el-input v-model="form.keyWord" auto-complete="off"/>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="saveTagForm">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
  import {saveBillTag,tagList} from '@/api/bill'

  export default {
    name: "billTag",
    data() {
      return {
        formLabelWidth: '120px',
        form: {
          tagName: '',
          billFeild: '',
          keyWord: '',
          tid:'',
          date: ''
        },
        dialogFormVisible: false,
        tableData: []
      }
    },

    mounted() {
      this.funTagList();
    },
    methods: {

      showAddModel() {
        //清空表单
        this.form = {
          tagName: '',
          billFeild: '',
          keyWord: '',
        },
        //展示表单
        this.dialogFormVisible = true
      },

      //新增标签
      saveTagForm() {
        const data = {
          tagName: this.form.tagName,
          billFeild: this.form.billFeild,
          keyWord: this.form.keyWord,
          tid:this.form.tid,

        };
        console.log(this.data)
        saveBillTag(data).then(data => {
          this.$message({
            message: '操作成功！',
            type: 'success'
          });

          //关闭表单
          this.dialogFormVisible = false;

          //查询列表
          this.funTagList();

        })
      },

      //查询标签列表
      funTagList(){
        tagList().then(data =>{
          this.tableData = data.data;
          console.log(JSON.stringify(data.data))
        })
      }
      /*formatter(row, column) {
        return row.address;
      },
      filterTag(value, row) {
        return row.tag === value;
      }*/
    }
  }
</script>

<style scoped>

</style>
