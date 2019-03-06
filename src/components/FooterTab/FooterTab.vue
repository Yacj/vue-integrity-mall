<template>
    <van-tabbar v-model="active" @change="onTabChange">
        <van-tabbar-item icon="wap-home" >首页</van-tabbar-item>
        <van-tabbar-item icon="orders-o" >分类</van-tabbar-item>
        <van-tabbar-item icon="cart">购物车</van-tabbar-item>
        <van-tabbar-item icon="contact">我的</van-tabbar-item>
    </van-tabbar>
</template>

<script>
    export default {
        data() {
            return {
                active: 0
            }
        },
        props: ['current'],
        created() {
            const pathMap = {
                home: 0,
                category: 1,
                cart: 2,
                'mine': 3
            };
            let pathname = this.$route.path.slice(1)
            this.active = pathMap[pathname] || 0;
        },
        watch: {
            current(activeIndex) {
                activeIndex !== this.active && (this.active = activeIndex)
            }
        },
        methods: {
            onTabChange(i) {
                switch(i) {
                    case 0:
                        this.$route.path !== '/home' && this.$router.push('/home');
                        break;
                    case 1:
                        this.$route.path !== '/category' && this.$router.push('/category');
                        break;
                    case 2:
                        this.$route.path !== '/cart' && this.$router.push('/cart');
                        break;
                    case 3:
                        this.$route.path !== '/personal-center' && this.$router.push('/mine');
                        break;
                }
            }
        }
    }
</script>
