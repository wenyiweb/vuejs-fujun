<template>
  <div id="app">
    <div class="tab">
      <div class="tab-item">
        <router-link to="/trying">进行中</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/tryend">已结束</router-link>
      </div>
    </div>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <router-view name="applyList"></router-view>
    <router-view name="winnerList"></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
};
</script>

<style rel="stylesheet/scss" lang="scss" scope>
  @import "common/scss/_variable.scss";
  @import "common/scss/_mixin.scss";

  html{
    background-color: #F2F7F7;
  }
  .tab{
    display: flex;
    width:100%;
    height:80*$n;
    line-height:80*$n;
    background-color:#fff;
    position: relative;
    .tab-item{
      flex:1;
      text-align: center;
      & > a{
            display: block;
            font-size: 28*$n;
            color:$black;
            &.active{
               color: $origin;
               @include border-1px($border-origin)
             }
      }
    }
  }

</style>
