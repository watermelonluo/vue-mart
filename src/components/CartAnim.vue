<template>
    <div class="ball-wrap">
        <transition @before-enter="beforeEnter"
            @enter="enter"
            @after-enter="afterEnter"
        >
            <div class="ball" v-show="show">
                <div class="inner">
                    <!-- <div class="cubeic-add"></div> -->
                    <van-icon class="cubeic-add" name="add"/>
                </div>
            </div>
        </transition>
    </div>
</template>

<script>
export default {
    name: 'cartAnim',
    data() {
        return {
            show: false
        }
    },
    methods: {
        start(el){          
            this.el=el;
            this.show=true
        },
        beforeEnter(el){     
            console.log(this.el);
                  
            const rect=this.el.getBoundingClientRect();
            const x=rect.left-window.innerWidth/2;
            const y=-(window.innerHeight-rect.top);
            console.log(x,y);
            el.style.transform=`translate3d(0,${y}px,0)`;
            const inner=el.querySelector('.inner');
            inner.style.transform=`translate3d(${x}px,0,0)`;
        },
        enter(el,done){
            console.log(el);
            document.body.offsetHeight;
            el.style.transform=`translate3d(0,0,0)`;
            const inner=el.querySelector('.inner');
            inner.style.transform=`translate3d(0,0,0)`;
            el.addEventListener('transitionend',done)
        },
        afterEnter(el){
            this.show=false;
            el.style.display='none';
            this.$emit('transitionend')
        }
    },
}
</script>

<style lang="less">
    .ball-wrap{
        .ball{
            position: fixed;
            left: 50%;
            bottom: 10px;
            z-index: 10000;
            color: red;
            transition: all .5s cubic-bezier(.49,-0.42,.75,.41);
            .inner{
                width: 16px;
                height: 16px;
                transition: all .5s linear;
                .cubeic-add{
                    font-size: 22px;
                }
            }
        }
    }
</style>


