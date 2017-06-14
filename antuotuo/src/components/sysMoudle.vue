<template>
  <div class="sysMoudle">
    <div class="fond">
      <div class="fond-title">
        <el-row :gutter="20">
          <el-col :span="24">
            <p>搜索</p>
          </el-col>
        </el-row>
      </div>
      <el-row :gutter="20">
        <el-col :span="5">
          <div class="grid-content bg-purple">
            <el-input
              placeholder="用户名"
              icon="search"
              v-model="input2"
              :on-icon-click="handleIconClick">
            </el-input>
          </div>
        </el-col>
        <el-col :span="5">
          <div class="grid-content bg-purple">
            <el-input
              placeholder="手机号"
              icon="search"
              v-model="input2"
              :on-icon-click="handleIconClick">
            </el-input>
          </div>
        </el-col>
        <el-col :span="5">
          <div class="grid-content bg-purple">
            <el-input
              placeholder="等级"
              icon="search"
              v-model="input2"
              :on-icon-click="handleIconClick">
            </el-input>
          </div>
        </el-col>
        <el-col :span="5">
          <div class="grid-content bg-purple">
            <el-input
              placeholder="用户名"
              icon="search"
              v-model="input2"
              :on-icon-click="handleIconClick">
            </el-input>
          </div>
        </el-col>
        <el-col :span="4">
          <div class="drobe-down">
            <el-dropdown>
                <span class="el-dropdown-link">
                  菜单选择<i class="el-icon-caret-bottom el-icon--right"></i>
                </span>
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item>基金会系统</el-dropdown-item>
                  <el-dropdown-item>基金会系统2</el-dropdown-item>
                  <el-dropdown-item>基金会系统3</el-dropdown-item>
                  <el-dropdown-item disabled>基金会系统4</el-dropdown-item>
                  <el-dropdown-item divided>基金会系统5</el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>
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
        <el-col :span="2" class="new-button">
          <el-button type="primary"  @click="dialogFormVisible = true">新 增</el-button>
        </el-col>
        <el-col :span="2" class="new-button">
          <el-button type="primary" @click="dialogTableVisible = true" >操 作</el-button>
        </el-col>
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


    <el-dialog title="收货地址" :visible.sync="dialogFormVisible">
      <el-form :model="form">
        <el-form-item label="活动名称" :label-width="formLabelWidth">
          <el-input v-model="form.name" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="活动区域" :label-width="formLabelWidth">
          <el-select v-model="form.region" placeholder="请选择活动区域">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
      </div>
    </el-dialog>

    <el-dialog title="收货地址" :visible.sync="dialogTableVisible">
      <el-table :data="gridData">
        <el-table-column property="date" label="日期" width="150"></el-table-column>
        <el-table-column property="name" label="姓名" width="200"></el-table-column>
        <el-table-column property="address" label="地址"></el-table-column>
      </el-table>
    </el-dialog>

  </div>
</template>

<script>
  export default {
    name: 'sysMoudle',
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
        currentPage4: 4,
        dialogFormVisible: false,
        gridData: [{
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
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }],
        dialogTableVisible: false,
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
        formLabelWidth: '120px'
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
.sysMoudle{
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
        height:35px;
        line-height: 35px;
        border-bottom: 1px solid #eee;
      }
    }
    .drobe-down{
      background-color: #fff;
      background-image: none;
      border-radius: 4px;
      border: 1px solid #bfcbd9;
      box-sizing: border-box;
      color: #1f2d3d;
      font-size: inherit;
      height: 36px;
      line-height: 1;
      outline: 0;
      padding: 10px 10px;
    }
  }
  .excl{
    margin-top: 30px;
    .new-button{
      padding-bottom: 10px;
    }
    .excl-title{
      p{
        font-size: 16px;
        font-weight: bold;
        text-align: left;
        height:35px;
        line-height: 35px;
        border-bottom: 1px solid #eee;
      }
    }
  }
  .block{
    margin-top: 10px;
  }
}
</style>
