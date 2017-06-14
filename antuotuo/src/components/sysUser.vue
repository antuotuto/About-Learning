<template>
  <div class="sysUser">
    <div class="fond">
      <div class="fond-title">
        <el-row :gutter="20">
          <el-col :span="24">
            <p>搜索</p>
          </el-col>
        </el-row>
      </div>
      <el-row :gutter="20">
        <el-col :span="6">
          <div class="grid-content bg-purple">
            <el-input
              placeholder="用户名"
              icon="search"
              v-model="input2"
              :on-icon-click="handleIconClick">
            </el-input>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="grid-content bg-purple">
            <el-input
              placeholder="手机号"
              icon="search"
              v-model="input2"
              :on-icon-click="handleIconClick">
            </el-input>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="grid-content bg-purple">
            <el-input
              placeholder="等级"
              icon="search"
              v-model="input2"
              :on-icon-click="handleIconClick">
            </el-input>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="grid-content bg-purple">
            <el-input
              placeholder="用户名"
              icon="search"
              v-model="input2"
              :on-icon-click="handleIconClick">
            </el-input>
          </div>
        </el-col>
      </el-row>
    </div>

    <div class="excl">
      <div class="excl-title">
        <el-row :gutter="20">
          <el-col :span="24">
            <p>数据列表</p>
          </el-col>
        </el-row>
      </div>
      <el-row :gutter="20">
        <el-col :span="24">
          <el-table
              :data="tableData"
              border
              style="width: 100%">
              <el-table-column
                label="日期"
                width="180">
                <template scope="scope">
                  <el-icon name="time"></el-icon>
                  <span style="margin-left: 10px">{{ scope.row.date }}</span>
                </template>
              </el-table-column>
              <el-table-column
                label="姓名"
                width="180">
                <template scope="scope">
                  <el-popover trigger="hover" placement="top">
                    <p>姓名: {{ scope.row.name }}</p>
                    <p>住址: {{ scope.row.address }}</p>
                    <div slot="reference" class="name-wrapper">
                      <el-tag>{{ scope.row.name }}</el-tag>
                    </div>
                  </el-popover>
                </template>
              </el-table-column>
              <el-table-column
                prop="address"
                label="地址">
              </el-table-column>
              <el-table-column
                prop="address"
                label="地址">
              </el-table-column>
              <el-table-column label="操作">
                <template scope="scope">
                  <el-button
                    size="small"
                    @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
                  <el-button
                    size="small"
                    type="danger"
                    @click="handleDelete(scope.$index, scope.row)">删除</el-button>
                </template>
              </el-table-column>
            </el-table>
        </el-col>
      </el-row>
    </div>

    <div class="block">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage4"
        :page-sizes="[100, 200, 300, 400]"
        :page-size="100"
        layout="total, sizes, prev, pager, next, jumper"
        :total="400">
      </el-pagination>
    </div>

  </div>
</template>

<script>
  export default {
    name: 'sysUser',
    data() {
      return {
        input2:'',
        tableData: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        },{
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        },{
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        },{
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        },{
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        },{
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        },{
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }],
        currentPage1: 5,
        currentPage2: 5,
        currentPage3: 5,
        currentPage4: 4
      }
    },
    methods: {
      handleIconClick(ev) {
        console.log(ev);
      },
      handleEdit(index, row) {
        console.log(index, row);
      },
      handleDelete(index, row) {
        console.log(index, row);
      },
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.sysUser{
  padding:  20px;
  width:100%;
  box-sizing: border-box;
  .fond{
    .fond-title{
      padding-bottom: 10px;
      p{
        font-size: 16px;
        font-weight: bold;
        text-align: left;
        padding-left: 15px;
        height:35px;
        line-height: 35px;
        border-left: 5px solid #20a0ff;
      }
    }
  }
  .excl{
    margin-top: 30px;
    .excl-title{
      p{
        font-size: 16px;
        font-weight: bold;
        text-align: left;
        padding-left: 15px;
        height:35px;
        line-height: 35px;
        border-left: 5px solid #20a0ff;
      }
    }
  }
  .block{
    margin-top: 10px;
  }
}
</style>
