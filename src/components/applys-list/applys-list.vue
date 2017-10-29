<template>
    <apply-user-list :applyType="applyType" :pageNum="pageNum" :title="title"></apply-user-list>
</template>

<script type="text/ecmascript-6">
  import ApplyUserList from 'components/apply-user-list/apply-user-list';
  export default{
    data() {
      return {
        pageNum: 1,
        applyType: 3,
        title: '申请名单'
      };
    },
    components: {
      ApplyUserList
    }
  };
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
</style>
