<template>
  <div class="img">
    <img v-lazy="item.product.cover" alt="">
    <div v-if="listType === 3" class="remain-day">
      <span v-if="item.try_end_date">距离结束<br>{{item.try_end_date}}</span>
      <span v-else>距离结束<br>{{item.try_span_time}}</span>
    </div>
    <div v-else class="remain-day" :class="{end: ptype === 'end'}">
      <span v-if="ptype !== 'end'">已结束<br>{{item.try_applys}}人申请</span>
      <span v-else>已结束</span>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    props: {
      item: {
        type: Object,
        default() {
          return {};
        }
      },
      listType: {
        type: Number,
        detault: 3
      },
      ptype: {
        type: String,
        default: ''
      }
    }
  };
</script>

<style lang="scss" rel="stylesheet/scss" scoped>

  @import "../../common/scss/_variable.scss";
  @import "../../common/scss/_mixin.scss";
  .img{
    position:relative;
    height: 0;
    overflow: hidden;
    padding-top: 50%;
    img{max-width: 100%;display: block;position: absolute;top: 0;}
    .remain-day{
      position: absolute;
      right: 0;
      top:20*$n;
      width:156*$n;
      height:78*$n;
      display: table;
      background-repeat:no-repeat;
      background-size:100% 100%;
      @include bg-image('listtimebg');
      &.end{
        height:36*$n;
        @include bg-image('detailtimebg');
      }
      span{
        font-size:20*$n;
        line-height: 30*$n;
        color: #FFF;
        text-align: center;
        display:table-cell;
        vertical-align: middle;
      }
    }
  }

</style>
