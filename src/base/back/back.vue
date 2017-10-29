<template>
  <div class="back" @click="hide"></div>
</template>

<script type="text/ecmascript-6">
export default {
  methods: {
    hide() {
      this.$emit('click');
    }
  }
};
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
  @import "../../common/scss/variable";
  @import "../../common/scss/mixin";
  .back{
    position: absolute;
    top:20*$n;
    left:20*$n;
    width:54*$n;
    height:54*$n;
    z-index: 50;
    background-repeat:no-repeat;
    background-color: rgba(0,0,0,0.5);
    background-size:54*$n 54*$n;
    border:10*$n solid rgba(255,255,255,0.5);
    border-radius: 50%;
    @include bg-image('return');
  }
</style>
