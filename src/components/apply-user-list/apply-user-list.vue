<template>
  <transition name="slide">
    <div class="container">
      <div class="header">
        <back class="icon-back" @click="back"></back>
        <h1 class="title">{{title}}</h1>
      </div>
      <div class="apply-wrapper">
        <apply-list class="list-wrapper" :applyType="applyType" :data="list" :nomore="nomore" @scrollEnd="scrollEnd"></apply-list>
      </div>
    </div>
  </transition>
</template>

<script type="text/ecmascript-6">
  import ApplyList from 'base/apply-list/apply-list';
  import Back from 'base/back/back';
  import {getApplyList} from 'api/tryapi';
  import {mapGetters} from 'vuex';
  const ERR_OK = 200;
  export default{
    props: {
      applyType: {
        type: Number
      },
      title: {
        type: String,
        default: ''
      }
    },
    data() {
      return {
        list: [],
        pageNum: 1,
        isLoading: false,
        nomore: false,
        firstLoad: true
      };
    },
    computed: {
      ...mapGetters([
        'tryItem'
      ])
    },
    created() {
     // this._getApplyList();
    },
    methods: {
      _getApplyList() {
        if (!this.tryItem.id) {
          this.$router.push('/trying');
          return;
        }
        if (!this.isLoading) {
          this.isLoading = true;
          getApplyList(this.pageNum, this.applyType, this.tryItem.id).then((res) => {
            this.isLoading = false;
            if (res.code === ERR_OK) {
              if (res.data.length < 10 && this.firstLoad) {
                this.nomore = true;
              }
              this.firstLoad = false;
              if (res.data.length === 0) {
                this.isLoading = true;
                this.nomore = true;
              } else {
                this.list.push(...res.data);
              }
            } else {
              if (res.data.length === 0) {
                this.isLoading = true;
                this.nomore = true;
              }
            }
          });
        }
      },
      scrollEnd() {
        this._loadNextPage();
      },
      _loadNextPage() {
        this.pageNum++;
        this._getApplyList();
      },
      back() {
        this.$router.back();
      }
    },
    /**
     * 响应路由参数的变化
     * 当使用路由参数时，例如从 /user/foo 导航到 user/bar，原来的组件实例会被复用。
     * 因为两个路由都渲染同个组件，比起销毁再创建，复用则显得更加高效。不过，这也意味着组件的生命周期钩子不会再被调用。
     复用组件时，想对路由参数的变化作出响应的话，你可以简单地 watch（监测变化） $route 对象：
     const User = {
        template: '...',
        watch: {
          '$route' (to, from) {
            // 对路由变化作出响应...
          }
        }
      }
     或者2.2引入的
     const User = {
        template: '...',
        beforeRouteUpdate (to, from, next) {
          // react to route changes...
          // don't forget to call next()
        }
      }
     */
    watch: {
//      '$route'(to, from) {
//        console.log(to);
//        console.log(from);
//        if (to.name) {
//          // 做清空数组的操作
//          this.list = [];
//          this._getApplyList();
//        }
//      }
    },
    mounted: function() {
     // console.log(2);
    },
    activated: function() {
          this.list = [];
          this._getApplyList();
    },
    deactivated: function() {
     // console.log(4);
    },
    components: {
      ApplyList,
      Back
    }
  };
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
  @import "../../common/scss/variable";
  @import "../../common/scss/mixin";
  .slide-enter-active,.slide-leave-active{
    transition:all 0.3s
  }
  .slide-enter,.slide-leave-to{
    transform: translate3d(100%, 0, 0);
  }
  .container{
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index:300;
    background-color: #fff;
    .header{
      height:100*$n;
      width:100%;
      @include border-1px($color-e9);
      .icon-back{
        top:50%;
        transform: translateY(-50%);
      }
      .title{
        width:100%;
        height:100*$n;
        line-height: 100*$n;
        font-size:30*$n;
        font-weight: 600;
        color: #000;
        text-align: center;
      }
    }
    .apply-wrapper{
      position: absolute;
      width: 100%;
      top: 100*$n;
      bottom: 0;
      box-sizing: border-box;
      overflow: hidden;
      .list-wrapper{
        width: 100%;
        height: 100%;
        overflow: hidden;
        padding-bottom: 40*$n;
      }
    }
  }

</style>
