<template>
  <div ref="wrapper">
      <slot></slot>
  </div>
</template>
<script type="text/ecmascript-6">
    import BScroll from 'better-scroll';

    export default {
        props: {
            probeType: {
                type: Number,
                default: 1
            },
            click: {
                type: Boolean,
                default: true
            },
            listenScroll: {
                type: Boolean,
                default: false
            },
            data: {
                type: Array,
                default() {
                    return [];
                }
            },
            pullup: {
                type: Boolean,
                default: false
            },
            beforeScroll: {
                type: Boolean,
                default: false
            },
            refreshDelay: {
                type: Number,
                default: 20
            }
        },
        mounted() {
            // 在DOM渲染完成之后初始化better-scroll
            setTimeout(() => {
                this._initScroll();
            }, 20);
        },
        methods: {
            _initScroll() {
                if (!this.$refs.wrapper) {
                    return;
                }
                this.scroll = new BScroll(this.$refs.wrapper, {
                    probeType: this.probeType,
                    click: this.click
                });

                // 是否监听滚动
                if (this.listenScroll) {
                    this.scroll.on('scroll', (pos) => {
                        // 向父组件派发scroll事件
                        this.$emit('scroll', pos);
                    });
                }

                // 是否触发滚动底部加载更多
                if (this.pullup) {
                    this.scroll.on('scrollEnd', () => {
                        if (this.scroll.y <= (this.scroll.maxScrollY + 50)) {
                            this.$emit('scrollEnd');
                        }
                    });
                }

                // 是否监听滚动开始事件
                if (this.beforeScroll) {
                    this.scroll.on('beforeScrollStart', () => {
                        this.$emit('beforeScroll');
                    });
                }
            },
            disable() {
                this.scroll && this.scroll.disable();
            },
            enable() {
                this.scroll && this.scroll.enable();
            },
            refresh() {
                this.scroll && this.scroll.refresh();
            },
            scrollTo() {
                this.scroll && this.scroll.scrollTo.apply(this.scroll, arguments);
            },
            scrollToElement() {
                this.scroll && this.scroll.scrollToElement.apply(this.scroll, arguments);
            }
        },
        watch: {
            // 监听data的变化，触发scroll的更新
            data() {
                setTimeout(() => {
                    this.refresh();
                }, this.refreshDelay);
            }
        }
    };
</script>
<style>

</style>
