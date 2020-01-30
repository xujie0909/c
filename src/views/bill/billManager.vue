<template>
  <div class="app-container bill-manager">

    <el-radio-group v-model="billType">
      <el-radio :label="1">微信</el-radio>
      <el-radio :label="2">支付宝</el-radio>
    </el-radio-group>

    <el-upload
      class="upload-demo"
      action="http://localhost:8080/mgmt/upload"
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
    <el-table
      class="table-detail"
      :data="tableData3"
      height="250"
      border
      style="width: 100%">
      <el-table-column
        prop="id"
        label="序号">
      </el-table-column>
      <el-table-column
        prop="date"
        label="时间">
      </el-table-column>
      <el-table-column
        prop="productName"
        label="商品名称"
        width="180">
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
        prop="pay_type"
        label="支付类型">
      </el-table-column>
      <el-table-column
        prop="tranStatus"
        label="交易状态">
      </el-table-column>
      <el-table-column
        prop="trans_type"
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



  <!--<div>
    <el-table
      :data="tableData3"
      height="250"
      border
      style="width: 100%">
      <el-table-column
        prop="date"
        label="日期"
        width="180">
      </el-table-column>
      <el-table-column
        prop="name"
        label="姓名"
        width="180">
      </el-table-column>
      <el-table-column
        prop="address"
        label="地址">
      </el-table-column>
    </el-table>
  </div>-->

</template>

<script>
  export default {
    data() {
      return {
        billType: 1,
        fileList: [],
        tableData3: [{
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-08',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-06',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-07',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }]
      };
    },
    methods: {
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
      handleSuccess (file) {
        console.log(file)
      }
    }
  }
</script>

<style lang="scss">
  .bill-manager{
    .el-radio-group{
      margin-bottom: 10px;
    }
    .table-detail{
      margin-top: 20px;
    }
  }

</style>
