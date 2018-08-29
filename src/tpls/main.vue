<template>
    <div>
        <div>
        	<h1 class="title">主页面</h1>
        	<button @click="bckToLogin" class="loginBtn">返回登录</button>
        </div>
        <div class="mainCont">
        	<ul>
        		<router-link :to="{ path: 'bar' }" tag="li">Bar</router-link>
        		<router-link :to="{ path: 'foo' }" tag="li">Foo</router-link>
        	</ul>
        	<div class="cont">
        		<router-view></router-view>
        	</div>
        </div>
    </div>
</template>

<script>
    export default {
        methods: {
            bckToLogin () {
                this.$router.replace('/login')
            }
        }
    }
</script>
<style scoped>
	.title {
		display: inline-block;
	}
	.loginBtn {
		background-color: gray;
	}
	.mainCont {
		border: 1px solid #000;
		border-radius: 5px;
	}
	.mainCont > ul,.mainCont > div {
		display: inline-block;

	}
	.mainCont > ul {
		margin: 0;
		border-right: 1px solid #000;
		width: 50px;
		vertical-align: middle;
		background-color: gray;
	}
	.mainCont > ul > li {
		padding: 10px;
	}
	.mainCont > div {
		width: 500px;
	}
</style>