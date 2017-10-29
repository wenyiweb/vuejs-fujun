<template>
  <div class="star" :class="starType">
    <span v-for="(itemClass, index) in itemClasses" :class="itemClass" class="star-item"></span>
  </div>
</template>

<script type="text/ecmascript-6">
  const LENGTH = 5;
  const CLASS_ON = 'on';
  const CLASS_HALF = 'half';
  const CLASS_OFF = 'off';

  export default {
    props: {
      size: {
        type: Number
      },
      score: {
        type: Number
      }
    },
    computed: {
      starType() {
        // 动态设置class,表示不同大小的星星
        return 'star-' + this.size;
      },
      itemClasses() {
        let result = [];
        let score = Math.floor(this.score * 2) / 2;
        let hasDecimal = score % 1 !== 0;
        let integer = Math.floor(score);
        for (let i = 0; i < integer; i++) {
          result.push(CLASS_ON);
        }
        if (hasDecimal) {
          result.push(CLASS_HALF);
        }
        while (result.length < LENGTH) {
          result.push(CLASS_OFF);
        }
        return result;
      }
    }
  };
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
  @import "../../common/scss/variable";
  @import "../../common/scss/mixin";

  .star{
    font-size: 0;
    .star-item{
      display: inline-block;
      background-repeat: no-repeat;
    }
    &.star-16{
      .star-item{
        width:16*$n;
        height:16*$n;
        margin-right: 7*$n;
        background-size:16*$n 16*$n;
        &:last-child{
          margin-right:0;
        }
        &.on{
          @include bg-image('star16_full');
        }
        &.half{
          @include bg-image('star16_half');
        }
        &.off{
          @include bg-image('star16_empty');
        }
      }
    }
  }
</style>
