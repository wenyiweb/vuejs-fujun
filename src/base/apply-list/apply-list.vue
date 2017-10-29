<template>
  <scroll class="apply-list" ref="apply-list" :data="data" @scrollEnd="scrollEnd" :pullup="pullup">
    <ul>
      <li v-for="item in data" class="apply-item">
        <div class="avatar">
          <img v-lazy="item.avatar" alt="">
        </div>
        <div class="content">
          <h1 class="name">{{item.name}}</h1>
          <p class="desc">{{item.apply_content}}</p>
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
  import Scroll from 'base/scroll/scroll';
  import Loading from 'base/loading/loading';
  export default {
    props: {
      data: {
        type: Array
      },
      nomore: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        pullup: true
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
      scrollEnd() {
        this.$emit('scrollEnd');
      }
    },
    components: {
      Scroll,
      Loading
    }
  };
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
  @import "../../common/scss/variable";
  @import "../../common/scss/mixin";
  .apply-list{
    width:100%;
    height:100%;
    overflow: hidden;
    padding-bottom: 100*$n;
  }
  .apply-item{
    display: flex;
    padding:26*$n 0 0 30*$n;
    overflow: hidden;
    &:nth-last-child(2){
      .content{
        @include border-none();
      }
    }
    .avatar{
      width:90*$n;
      height:90*$n;
      border-radius:50%;
      overflow: hidden;
      margin-right:14*$n;
      img{
        width:100%;
        height:100%;
      }
    }
    .content{
      flex:1;
      padding-bottom:20*$n;
      @include border-1px($color-e9);
      .name{
        font-size:24*$n;
        line-height: 34*$n;
        color: $color-102;
      }
      .desc{
        padding-right:30*$n;
        font-size:26*$n;
        line-height: 42*$n;
        margin-top:10*$n;
        display: -webkit-box;
        overflow: hidden;
        -webkit-line-clamp:3;
        text-overflow: ellipsis;
        -webkit-box-orient:vertical;
      }
    }
  }
</style>
