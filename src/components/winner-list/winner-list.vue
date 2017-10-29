<template>
  <apply-user-list :applyType="applyType" :title="title"></apply-user-list>
</template>

<script type="text/ecmascript-6">
  import ApplyUserList from 'components/apply-user-list/apply-user-list';
  export default{
    data() {
      return {
        applyType: 4,
        title: '中奖名单'
      };
    },
    components: {
      ApplyUserList
    }
  };
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
</style>
