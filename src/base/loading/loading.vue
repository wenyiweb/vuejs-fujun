<template>
  <div class="loading">
      <img src="./loading.gif" width="24" height="24">
      <p class="desc">{{title}}</p>
  </div>
</template>
<script type="text/ecmascript-6">
    export default {
        props: {
            title: {
                type: String,
                default: '加载中...'
            }
        }
    };
</script>
<style rel="stylesheet/scss" lang="scss" scope>
    .loading{
        width: 100%;
        text-align: center;
        .desc{
            line-height: 20px;
            font-size: 12px;
            color:rgba(0, 0, 0, 0.5);
        }
    }
</style>
