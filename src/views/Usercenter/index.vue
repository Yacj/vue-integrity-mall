<template>
    <div>

    </div>
</template>

<script>
    export default {
        name: "index",
        data() {
            return {}
        },
        created() {
            !this.State.isLogin && this.$router.replace('/login')
        },
    }
</script>

<style scoped>

</style>
