<template>
    <div>
        账户：<Input /><br/>
        密码：<Input /><br/>
        <button @click="login" class="loginBtn">点击登录</button>
    </div>
</template>

<script>
    export default {
        methods: {
            login () {
                this.$router.replace('/main')
            }
        }
    }
</script>

<style scoped>
	.loginBtn {
		background-color: red;
	}
</style>