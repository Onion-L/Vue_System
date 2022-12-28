<template>
    <div class="header">
        <div class="title">后台管理</div>
        <div class="dropdown">
            <el-dropdown>
                <span class="el-dropdown-link">
                    <div class="avatar">
                        <el-avatar icon="el-icon-user-solid"></el-avatar>
                    </div>
                </span>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item>个人信息</el-dropdown-item>
                    <el-dropdown-item>退出</el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
        </div>
    </div>
</template>
<script>
export default {
    name: 'Header',
}
</script>
<style scoped>
.header {
    display: flex;
    height: 50px;
    padding-left: 30px;
    line-height: 50px;
    border-bottom: 1px solid #bababa;
}

.title {
    color: #409EFF;
    font-size: 22px;
    font-weight: 700;
    flex: 5;
}

.avatar {
    width: 40px;
    height: 40px;
    line-height: 78px;
}

.dropdown {
    width: 100px;
    float: right;
}


.el-dropdown-link {
    cursor: pointer;
    color: #409EFF;
}

.el-icon-arrow-down {
    font-size: 12px;
}
</style>