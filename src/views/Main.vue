<template>
<div>
    <router-view></router-view>
    <FooterTab v-show="showFooter" :current="current"></FooterTab>
</div>
</template>

<script>
    import store from 'vuex'
    import {mapState} from 'vuex'
    import FooterTab from "../components/FooterTab/FooterTab";

    export default {
        name: "Main",
        components: {FooterTab},
        store,
        data(){
            return{
                cartCount:'',
                showFooter: true,
                current: 0
            }
        },
    }
</script>

<style scoped>

</style>
