<script src="../../store/state.js"></script>
<template>
  <div class="trygoods" ref="trying">
    <list-view :listType="listType" class="try-list" :nomore="nomore" :data="tryingList" @select="selectItem" @toApplyList="toApplyList" @scrollEnd="scrollEnd"></list-view>
    <router-view></router-view>
  </div>
</template>

<script type="text/ecmascript-6">
  import ListView from 'base/list-view/list-view';
  import {getTryList} from 'api/tryapi';
  import {mapMutations} from 'vuex';
  const OK_CODE = 200;
  export default {
    props: {
      listType: {
        type: Number
      }
    },
    data() {
      return {
        isLoading: false,
        pageNum: 1,
        tryingList: [],
        nomore: false
      };
    },
    created() {
      this._getTryList();
    },
    methods: {
      selectItem(tryitem) {
        if (this.listType === 3) {
          this.$router.push({
            path: `/trying/${tryitem.id}`
          });
        } else {
          this.$router.push({
            path: `/tryend/${tryitem.id}`
          });
        }
        this.setTryItem(tryitem);
      },
      toApplyList(tryitem) {
        if (this.listType === 3) {
          this.$router.push({
            path: `/applys-list/${tryitem.id}`
          });
        } else {
          this.$router.push({
            path: `/winner-list/${tryitem.id}`
          });
        }
        this.setTryItem(tryitem);
      },
      _getTryList() {
        if (!this.isLoading) {
          this.isLoading = true;
          getTryList(this.pageNum, this.listType).then((res) => {
            console.log(res);
            if (res.code === OK_CODE) {
              this.isLoading = false;
              if (res.data.length === 0) {
                this.nomore = true;
              } else {
                this.tryingList.push(...res.data);
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
        this._getTryList();
      },
      /**
       * vuex提供的一个语法糖,
       * 对操作做映射
       */
      ...mapMutations({
        setTryItem: 'SET_TRYITEM'
      })
    },
    components: {
      ListView
    }
  };
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  @import "../../common/scss/_variable.scss";
  .trygoods{
    position: fixed;
    width: 100%;
    top: 80*$n;
    bottom: 0;
    .try-list{
      height: 100%;
      overflow: hidden;
      padding-bottom: 30*$n;
    }
  }
</style>
