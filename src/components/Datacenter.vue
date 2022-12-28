<template>
    <div style="width:calc(100vw - 200px);">

        <el-button type="primary" style="margin: 20px;" @click="dialogVisible = true">增加</el-button>
        <!-- <el-input v-model="date" suffix-icon="el-icon-date" style="width:20%;" placeholder="请输入日期"></el-input>
        <el-input v-model="name" placeholder="请输入姓名" style="width:20%;margin:5px;"></el-input>
        <el-input v-model="address" placeholder="请输入地址" style="width:20%"></el-input> -->

        <el-dialog title="提示" :visible.sync="dialogVisible" width="30%" :before-close="handleClose">
            <el-form ref="form" :model="form" label-width="80px">
                <el-form-item label="姓名">
                    <el-input v-model="form.name" placeholder="请输入姓名"></el-input>
                </el-form-item>
                <el-form-item label="地址">
                    <el-input v-model="form.address" placeholder="请输入地址"></el-input>
                </el-form-item>
                <el-form-item label="日期">
                    <el-date-picker v-model="form.date" type="date" placeholder="选择日期" size="large">
                    </el-date-picker>
                </el-form-item>
            </el-form>
            <span slot="footer" class="dialog-footer">
                <el-button @click="dialogVisible = false">取 消</el-button>
                <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
            </span>
        </el-dialog>


        <el-table :data="tableData" style="width: 100%;margin: 10px;" stripe>
            <el-table-column fixed prop="date" label="日期" sortable>
            </el-table-column>
            <el-table-column prop="name" label="姓名">
            </el-table-column>
            <el-table-column prop="address" label="地址">
            </el-table-column>
            <el-table-column fixed="right" label="操作">
                <template slot-scope="scope">
                    <el-button @click.native.prevent="deleteRow(scope.$index, tableData)" type="text" size="small">
                        移除
                    </el-button>
                </template>
            </el-table-column>
        </el-table>
        <div class="block">
            <span class="demonstration">显示总数</span>
            <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange"
                :current-page.sync="currentPage" :page-size="100" layout="total, prev, pager, next"
                :total="tableData.length">
            </el-pagination>
        </div>
    </div>
</template>
  
<script>
export default {
    name: 'Datacenter',
    methods: {
        deleteRow(index, rows) {
            rows.splice(index, 1);
        },
        handleSizeChange(val) {
            console.log(`每页 ${val} 条`);
        },
        handleCurrentChange(val) {
            console.log(`当前页: ${val}`);
        },
        handleClose(done) {
            this.$confirm('确认关闭？')
                .then(_ => {
                    done();
                })
                .catch(_ => { });
        },
        add() {

        },
    },
    beforeMount() {
        this.$axios.get('/user').then(
            res => {
                this.tableData = res.data.msg
                console.log(res);
            },
            err => {
                console.log(err);
            })
    },
    data() {
        return {
            name: '',
            date: '',
            address: '',
            currentPage: 1,
            dialogVisible: false,
            form: {},
            tableData: []
        }
    }
}
</script>

<style>
.el-table {
    max-width: 98%;
    margin: 0;
}
</style>
