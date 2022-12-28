<template lang="">
  <el-calendar v-model="value">
</el-calendar>
</template>
<script>
export default {
    name: 'Calender',
    data() {
        return {
            value: new Date()
        }
    }
}

</script>
<style>
.el-calendar {
    width: calc(100vw - 200px);
}
</style>