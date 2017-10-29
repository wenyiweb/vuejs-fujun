<template>
  <div>
    <h1 class="title">{{item.product.title}}</h1>
    <div class="info">
      <div class="tags">
        <span class="t gz">{{item.is_trial_product?'试用装':'正装'}}{{item.spec}}</span>
        <span class="t price">{{item.price==0?'未知':'￥'+item.price}}</span>
        <span class="t amount" :class="{gray:listType === 4}">{{item.amount}}份</span>
        <span v-if="ptype === 'end'" class="applyNum" @click="toapplyList"><span>{{item.applayed.applay_num}}人已申请</span><i class="origin-arrow"></i> </span>
      </div>
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
      default: 3
    },
    ptype: {
      type: String,
      default: ''
    }
  },
  methods: {
    toapplyList() {
      this.$emit('toapplyList');
    }
  }
};
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
  @import "../../common/scss/variable";
  @import "../../common/scss/mixin";
  .title{
    font-size:28*$n;
    line-height: 40*$n;
    width:100%;
    box-sizing:border-box;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .info{
    display: flex;
    height:44*$n;
    .tags{
      flex:1;
      color: #999;
      font-size:0;
      .t{
        font-size:24*$n;
        line-height:40*$n;
        margin-top:2*$n;
        display: inline-block;
        vertical-align: top;
      }
      .price{
        padding:0 10*$n;
        &:before,&:after{
          content: '';
          width:2*$n;
          height:26*$n;
          background-color: $color-e9;
          display: inline-block;
          vertical-align: top;
          margin-top:7*$n;

        }
        &:before{
          margin-right:10*$n;}
        &:after{
          margin-left:10*$n;}
      }
      .amount {
        color: $origin;
        &.gray {
          color: #999;
        }
      }
      .applyNum{
        float:right;
        line-height: 0;
        display: block;
        margin-top:2*$n;
        font-size:0;
        span{
          font-size:24*$n;
          color: $origin;
          line-height: 40*$n;
          display: inline-block;
          vertical-align: top;
        }
        .origin-arrow{
          margin-top:11*$n;
        }
      }
    }
  }
</style>
