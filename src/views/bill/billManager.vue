<template>
  <div class="app-container bill-manager">

    <el-radio-group v-model="billType">
      <el-radio :label="1">微信</el-radio>
      <el-radio :label="2">支付宝</el-radio>
    </el-radio-group>

    <el-upload
      class="upload-demo"
      action="http://localhost:8080/bill/upload"
      :on-preview="handlePreview"
      :on-remove="handleRemove"
      :before-remove="beforeRemove"
      multiple
      :limit="30"
      :on-success="handleSuccess"
      :on-exceed="handleExceed"
      :data="{
        'billType':billType
      }"
      :file-list="fileList">
      <el-button size="small" type="primary">点击上传</el-button>
      <div slot="tip" class="el-upload__tip">只能上传csv文件</div>
    </el-upload>

    <div>
      <el-form ref="form" :model="form" :data="queryform" class="queryForm">
        <el-form-item label="账单来源">
          <el-input v-model="queryform.billSource" class="querInput"></el-input>
        </el-form-item>
        <el-form-item label="收支类型">
          <el-input v-model="queryform.billType" class="querInput"></el-input>
        </el-form-item>
        <el-form-item label="支付类型">
          <el-input v-model="queryform.payType" class="querInput"></el-input>
        </el-form-item>
        <el-form-item label="交易类型">
          <el-input v-model="queryform.transType" class="querInput"></el-input>
        </el-form-item>
        <el-form-item label="处理状态">
          <el-input v-model="queryform.status" class="querInput"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">查询</el-button>
        </el-form-item>
      </el-form>
    </div>

    <div>
      <el-table
        class="table-detail"
        :data="billData"
        :fit="true"
        height="350"
        border>
        <el-table-column
          prop="id"
          label="序号">
        </el-table-column>
        <el-table-column
          prop="billSource"
          label="账单来源">
        </el-table-column>
        <el-table-column
          prop="date"
          label="时间">
        </el-table-column>
        <el-table-column
          prop="productName"
          label="商品名称">
        </el-table-column>
        <el-table-column
          prop="businessName"
          label="商户名称">
        </el-table-column>
        <el-table-column
          prop="amount"
          label="金额">
        </el-table-column>
        <el-table-column
          prop="billType"
          label="收/支">
        </el-table-column>
        <el-table-column
          prop="payType"
          label="支付类型">
        </el-table-column>
        <el-table-column
          prop="tranStatus"
          label="交易状态">
        </el-table-column>
        <el-table-column
          prop="transType"
          label="交易类型">
        </el-table-column>
        <el-table-column
          prop="transid"
          label="交易单号">
        </el-table-column>
        <el-table-column
          prop="businessTransId"
          label="商户单号">
        </el-table-column>
        <el-table-column
          prop="status"
          label="处理状态">
        </el-table-column>
      </el-table>

    </div>
  </div>

</template>

<script>

  import {fetchList} from '@/api/bill'

  export default {

    data() {
      return {
        queryform: {},
        form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
        billType: 1,
        fileList: [],
        billData: []
      };
    },
    mounted() {
      this.getData();
    },

    methods: {

      // 获取列表数据
      getData() {
        fetchList().then(data => {
          this.billData = data.data
        })
      },

      //提交查询表单
      onSubmit() {
        fetchList(this.queryform).then(data => {
          this.billData = data.data
        })
      },

      handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePreview(file) {
        console.log(file);
      },
      handleExceed(files, fileList) {
        this.$message.warning(`当前限制选择 3 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`);
      },
      beforeRemove(file, fileList) {
        return this.$confirm(`确定移除 ${file.name}?`);
      },
      handleSuccess(file) {
        this.getData();
      }
    }
  }
</script>

<style lang="scss">
  .bill-manager {
    .el-radio-group {
      margin-bottom: 10px;
    }

    .table-detail {
      margin-top: 20px;
    }

    .querInput {
      width: 200px;
    }

    .queryForm {
      margin-top: 20px;
      .el-form-item--medium {
        display: inline-block;
        .el-form-item__content {
          display: inline-block;
        }
      }
    }
  }


</style>
