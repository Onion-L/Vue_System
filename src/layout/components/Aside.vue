<template>
    <el-menu style="width: 200px;min-height:calc(100vh - 50px)" router :default-active="this.$router.path"
        class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose">
        <el-menu-item v-for="(item, i) in navList" :index='item.path' :key="i">
            <i :class='item.icon'></i>
            <span slot="title">{{ item.name }}</span>
        </el-menu-item>
    </el-menu>
</template>
<script>
export default {
    name: 'Aside',
    data() {
        return {
            navList: [
                { path: '/home/data', name: '数据', icon: 'el-icon-s-data' },
                { path: '/home/menu', name: '菜单', icon: 'el-icon-menu' },
                { path: '/home/document', name: '文档', icon: 'el-icon-document' },
                { path: '/home/calender', name: '日历', icon: 'el-icon-date' },

            ]
        }
    },
    methods: {
        handleOpen(key, keyPath) {
            console.log(key, keyPath);
        },
        handleClose(key, keyPath) {
            console.log(key, keyPath);
        }
    }
}
</script>
<style scoped>

</style>