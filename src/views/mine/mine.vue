<template>
    <div>
        个人主页
    </div>
</template>

<script>
    export default {
        name: "mine",
        data() {
            return {}
        },
        created() {
            !this.State.isLogin && this.$router.replace('/login')
        }
    }
</script>

<style scoped>

</style>
