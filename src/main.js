import Css from './static/main.css'; //引入css要从打包后的路径开始引入
import Vue from 'vue'; //npm 安装过vue.可以直接import
import VueRouter from 'vue-router'; //引入插件
Vue.use(VueRouter); //安装插件

Vue.config.productionTip = false; //阻止vue启动提示

// import App from './app.vue';
import Login from './tpls/login.vue';
import Main from './tpls/main.vue';
import Bar from './tpls/main/bar.vue';
import Foo from './tpls/main/foo.vue';

// 定义路由
const routes = [{
        name: 'default',
        path: '',
        redirect: { name: 'login' }
    }, // 设置默认路由
    { 
    	name: 'login', 
    	path: '/login', 
    	component: Login },
    { 
    	name: 'main', 
    	path: '/main', 
    	component: Main,
    	//嵌套路由
    	children:[
    		{
    			name:"default",
	    		path:'',
	    		redirect: { name: 'bar' }
    		},
    		{
    			name:"bar",
	    		path:'bar',
	    		component: Bar
    		},
    		{
    			name:"foo",
	    		path:'foo',
	    		component: Foo
    		}
    	]
    }
]

// 创建 router 实例，然后传 `routes` 配置
const router = new VueRouter({
    routes // (缩写) 相当于 routes: routes
})

// 创建和挂载根实例。通过 router 配置参数注入路由，从而让整个应用都有路由功能
const app = new Vue({
    router, // 等价于 router: router
    // components: { App },
    // template: '<App/>'
}).$mount('#app')