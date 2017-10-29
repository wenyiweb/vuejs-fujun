<template>
  <div>
    <span v-for="(item, index) of list" class="perimg" :key="index">
      <img v-if="index < limit" v-lazy="item" alt="">
  </span>
  <span class="iconmore" v-if="(list.length > limit-1) && showmore" ></span>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    props: {
      list: {
        type: Array,
        default() {
          return [];
        }
      },
      limit: {
        type: Number,
        default: 5
      },
      showmore: {
        type: Boolean,
        default: true
      }

    }
  };
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
  @import "../../common/scss/variable";
  @import "../../common/scss/mixin";
  .perimg{
    display: inline-block;
    margin-right:8*$n;
    img{
      width:58*$n;
      height:58*$n;
      border-radius:58*$n;
    }
  }
  .iconmore{
    width:58*$n;
    height:58*$n;
    display: inline-block;
    background-repeat:no-repeat;
    background-size: 100% 100%;
    @include bg-image('more');
  }
</style>
