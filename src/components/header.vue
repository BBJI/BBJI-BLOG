<template>
	<div id="header">
		<div class="container">
			<div class="header-top">
				<h1 class="blogTitle">BBJI の 彼方</h1>
				<h3 class="blogTitle">my little blog</h3>
			</div>
		</div>
		<hr />
		<div v-if="userData[0].userName == ''">
			<router-link to="/" tag="span" class="index">主页</router-link>
			<span class="userLogin"><a href="http://127.0.0.1:3000/userLogin">登录</a></span>
			<span class="userReg"><a href="http://127.0.0.1:3000/userReg">注册</a></span>
		</div>
		<div v-if="userData[0].userName != ''">
			<router-link to="/" tag="span" class="index">主页</router-link>
			<router-link to="/post" tag="span" class="post">发表文章</router-link>
			<span class="logout" @click="logout">注销</span>	
			<span class="userData">{{ userData[0].userName }}</span>
		</div>
		<br />
		<hr />
	</div>
</template>

<script>
export default {
  name: 'header',
  computed: {
  	userData() {
  		return this.$store.getters.userData;
  	}
  },
  
  methods: {
  	logout() {
  		this.$store.dispatch('logout');
  	}
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	a {
		color: black;
	}
	#header {
		width: 100%;
	}
	.container {
		width: 1000px;
		height: 220px;
		overflow: hidden;
		margin: 0 auto;
	}
	.header-top {
		width: 1000px;
		height: 500px;
		background: url('/static/imgs/header.jpg');
		background-repeat: no-repeat;
		position: absolute;
		top: -250px;
	}
	.blogTitle{
		position: relative;
		top: 300px;
		left: 200px;
	}
	.userLogin {
		margin-right: 280px;
		float: right;
	}
	.userReg {
		float: right;
		margin-right: 50px;
	}
	.logout {
		float: right;
		margin-right:280px;
		cursor: pointer;
	}
	.post {
		float: left;
		margin-left: 50px;
		cursor: pointer;
	}
	.index {
		float: left;
		margin-left: 280px;
		cursor: pointer;	
	}
	.userData {
		margin-right:50px;	
		float: right;	
	}
	a{
		text-decoration: none;
	}
	
</style>
