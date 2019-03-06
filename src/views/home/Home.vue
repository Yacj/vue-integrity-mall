<template>
    <div class="home">
        <div class="banner">
            <van-swipe :autoplay="3000" indicator-color="white">
                <van-swipe-item v-for="(item, index) in images" :key="index">
                    <img v-lazy="item.realPath" />
                </van-swipe-item>
            </van-swipe>
        </div>
        <van-notice-bar
                text="纸巾商城纸巾商城纸巾商城。"
                left-icon="volume-o"
        />
        <van-list
                v-model="loading"
                :finished="finished"
                finished-text="没有更多了"
                @load="onLoad"
                class="goods-list-wrapper">
            <ul class="goods-list">
                <li v-for="(list,index) in lists" :key="index">
                    <router-link :to="{name:'detail',params:{id:list.id}}">
                        <div class="photo">
                            <img v-lazy="list.img">
                        </div>
                        <div class="info">
                            <h3 class="title">
                                {{list.name}}
                            </h3>
                            <div class="bot">
                                <span class="price">{{list.price}}</span>
                                <div class="btn-buy">
                                    <i class="van-icon van-icon-shopping-cart"></i>
                                </div>
                            </div>
                        </div>
                    </router-link>
                </li>
            </ul>
        </van-list>
    </div>
</template>

<script>
    import _ from 'lodash'

    export default {
        name: 'home',
        data() {
            return {
                images: [],
                lists: null,
                loading: false,   //是否处于加载状态
                finished: false,  //是否已加载完所有数据
                isLoading: false,
            }
        },
        methods:{
            getBanner(){
               this.$http.get('https://www.easy-mock.com/mock/5c259ce7d1696002aa62e6a3/index/Banner').then(res=>{
                   let BannerData = res.data.DATA.Banner;
                   this.images = BannerData
               })},
            onLoad() {
                let that = this;
                setTimeout(() => {
                   this.$http.post('https://www.easy-mock.com/mock/5c259ce7d1696002aa62e6a3/index/Lists').then(res => {
                      this.lists = res.data.lists;
                       this.loading = false;
                       if(res.data.lists.length >= 0){
                           this.finished = true;
                       }
                    })
                }, 500);
            }
        },
        mounted() {
            this.getBanner();
        }
    }
</script>

<style lang="scss" scoped>
    .home{
        padding-bottom: 1.8rem;
        .van-swipe{
            height: 4.46rem;
            img{
                width: 100%; height: 100%;
            }
        }
        .goods-list-wrapper{
            .goods-list{
                display: flex;
                flex-wrap: wrap;
                justify-content: space-between;
                margin: 0 2%;
                li{
                    width: 49%;
                    background: #fff;
                    margin: 0.1rem 0;
                    .photo{
                        img{
                            width: 100%;
                            height: 100%;
                        }
                    }
                    .info{
                        padding: 0.08rem 0.15rem 0.15rem 0.15rem;
                        .title{
                            font-size: 0.28rem;
                            color: #333;
                            line-height: 0.38rem;
                            overflow: hidden;
                            text-overflow: ellipsis;
                            display: -webkit-box;
                            -webkit-line-clamp: 2;
                            -webkit-box-orient: vertical;
                        }
                        .bot{
                            display: flex;
                            justify-content: space-between;
                            align-items: center;
                            margin: 0.1rem 0 0.2rem 0;
                            .price{
                                font-size: 0.32rem;
                                color: #f44;
                            }
                            .btn-buy{
                                width: 0.48rem;
                                height: 0.48rem;
                                color: #f44;
                                background-color: #fff;
                                -webkit-box-sizing: border-box;
                                -moz-box-sizing: border-box;
                                box-sizing: border-box;
                                text-align: center;
                                font-size: 0.24rem;
                                cursor: pointer;
                                border: 1px solid #f44;
                                border-radius: 50%;
                                display: flex;
                                justify-content: center;
                                align-items: center;
                                float: right;
                            }
                        }

                    }
                }
            }
        }
    }
    .van-notice-bar{
        font-size: 14px !important;
    }
</style>
