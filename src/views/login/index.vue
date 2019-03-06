<template>
    <div class="login-page">
        <div class="store_header">
            <div class="store_avatar">
                <img src="../../assets/img/avatar.png" alt="头像" width="55" height="55">
            </div>
            <div class="store_name">溥美</div>
        </div>
        <van-field v-model="mobile" class="login-field" type="number" label="手机号" placeholder="请输入手机号" icon="clear" @click-icon="clearMobile" required></van-field>
        <van-field v-model="password" class="login-field" type="password" label="密码" placeholder="请输入密码" icon="clear" @click-icon="clearPsw" required></van-field>
        <van-button class="login-btn" size="large" @click="login">立即登录</van-button>
    </div>
</template>

<script>
    export default {
        name: "index",
        data() {
            return {
                    mobile: '',
                    password: ''
            }
        },
        methods:{
            clearMobile(){
                this.mobile = ''
            },
            clearPsw() {
                this.password = ''
            },
            login() {
                if (!this.validate()) return
                this.handleSuccess();
            },
            validate() {
                const mobileReg = /^(13[0-9]|14[579]|15[0-3,5-9]|16[6]|17[0135678]|18[0-9]|19[89])\d{8}$/
                if (!this.mobile) {
                    this.$toast({
                        message: "请输入手机号",
                    });
                    return false
                }
                if (!this.password) {
                    this.$toast({
                        message: "请输入密码",
                    });
                    return false
                }
                if (!mobileReg.test(this.mobile)) {
                    this.$toast({
                        message: "手机号格式不正确",
                    });
                    return false
                }
                return true
            },
            handleSuccess(){
                const json = {
                        id: 4,
                        telephone: "13922222922",
                        member_name: "John",
                        sex: 1,
                        address: "",
                        avatar: "",
                        access_token: "DB3HBUwmXh2yj5iOy6PBMwbCrs8aaOwp"

                };
                window.localStorage.setItem('Pumei_user', JSON.stringify(json));
                this.$router.push({path:'/mine'})
            }
        }
    }
</script>

<style scoped >
    #app{
        background: #ffff !important;
    }
    .store_header {
        text-align: center;
        padding: 30px 0;
    }
    .store_avatar img {
        border-radius: 50%;
    }
    .store_name {
        padding-top: 5px;
        font-size: 16px;
    }
    .login-page {
        padding: 30px;
    }
    .logo-img {
        display: block;
        margin: 0 auto;
    }
    .login-field {
        margin-bottom: 15px;
        border: 1px solid #dedede;
        border-radius: 4px;
    }
    .login-btn {
        display: block;
        margin-bottom: 15px;
        background-color: #1989fa;
        color: #fff;
    }
</style>
