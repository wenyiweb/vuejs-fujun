<template>
    <scroll ref="tryingWrapper" :data="data" :pullup="pullup" @scrollEnd="scrollEnd">
      <ul>
        <li v-if="data" v-for="item in data" class="try-item" :key="item.id">
          <div @click="selectItem(item)">
            <item-img :item="item" :listType="listType"></item-img>
            <div class="infos">
              <item-info :listType="listType" :item="item"></item-info>
              <div v-if="listType === 3" class="applyBtn">
                <span class="toapply">免费申请</span>
              </div>
              <div v-else class="reportNum">
                <span v-if="item.list.length>0">{{item.reportsnum}}篇试用报告</span>
                <span v-else>未公布中奖名单</span>
              </div>
            </div>
          </div>
          <div v-if="item.list.length > 0" class="applyPers" @click="toApplyList(item)">
            <apply-persons :list="item.list" :showmore="showmore" :limit="limit" class="persons"></apply-persons>
            <span v-if="listType === 3" class="applyNum">{{item.try_applys}}人已申请</span>
            <div v-else class="toViewList"><span>中奖名单已公布</span><i class="origin-arrow"></i></div>
          </div>
        </li>
        <div class="list-load-tip" v-show="data.length" :class="{nomore:nomore}">{{loadtip}}</div>
      </ul>
      <div class="loading-container" v-show="!data.length">
        <loading></loading>
      </div>
    </scroll>
</template>

<script type="text/ecmascript-6">
  import ItemImg from 'base/item-img/item-img';
  import ItemInfo from 'base/item-info/item-info';
  import ApplyPersons from 'base/apply-persons/apply-persons';
  import Scroll from 'base/scroll/scroll';
  import Loading from 'base/loading/loading';

  export default {
    props: {
      listType: {
        type: Number,
        default: 3
      },
      nomore: {
        type: Boolean,
        default: false
      },
      data: {
        type: Array,
        default() {
          return [];
        }
      }
    },
    data() {
      return {
        pullup: true,
        showmore: true,
        limit: 5
      };
    },
    computed: {
      loadtip() {
        if (this.nomore) {
          return '全部数据加载完毕';
        } else {
          return '加载中...';
        }
      }
    },
    methods: {
      selectItem(tryitem) {
         this.$emit('select', tryitem);
      },
      toApplyList(tryitem) {
        this.$emit('toApplyList', tryitem);
      },
      scrollEnd() {
        this.$emit('scrollEnd');
      }
    },
    components: {
      ItemImg,
      ItemInfo,
      ApplyPersons,
      Scroll,
      Loading
    }
  };
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
  @import "../../common/scss/variable";
  @import "../../common/scss/mixin";

  .try-item{
    position: relative;
    width: 92%;
    margin: 0 auto;
    background-color:#fff;
    border-radius:10*$n;
    margin-bottom:20*$n;
    overflow: hidden;
    &:first-child{
      margin-top: 20*$n;
    }
    .infos{
      position: relative;
      padding:0 34*$n 20*$n 32*$n;
      margin-top:20*$n;
      @include border-1px($color-e9);
      .applyBtn{
        width:130*$n;
        height:44*$n;
        position: absolute;
        right:32*$n;
        bottom:20*$n;
        .toapply{
          font-size:22*$n;
          line-height: 44*$n;
          background-color: $origin;
          display: block;
          border-radius:44*$n;
          text-align:center;
          color: #fff;
        }
      }
      .reportNum{
        position:absolute;
        right:30*$n;
        bottom:22*$n;
        height:40*$n;
        span{
          font-size:24*$n;
          line-height: 40*$n;
          display: block;
        }
      }
    }
    .applyPers{
      font-size: 0;
      padding: 25*$n 36*$n 26*$n 32*$n;
      box-sizing: border-box;
      width: 100%;
      .persons{
        display: inline-block;
        height: 58*$n;
      }
      .applyNum{
        font-size: 24*$n;
        line-height: 28*$n;
        text-align: right;
        color: $origin;
        float:right;
        margin-top: 16*$n;
      }
      .toViewList{
        float:right;
        font-size: 0;
        margin-top: 15*$n;
        height: 28*$n;
        span{
          font-size:24*$n;
          color: $origin;
          line-height: 28*$n;
          display: inline-block;
          vertical-align: top;
        }
        i{

        }
      }
    }
  }

</style>
