<template>
  <try-list :listType="listType"></try-list>
</template>

<script type="text/ecmascript-6">
  import TryList from 'components/try-list/try-list';
  export default {
    data() {
      return {
        listType: 3
      };
    },
    components: {
      TryList
    }
  };
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
</style>
