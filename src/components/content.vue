<template>
	<div class="content">
		<h1>{{ title }}</h1>
		<p>
			{{ content }}
			<img :src="src" />
		</p>
		<span>作者：{{ author }}&nbsp;&nbsp;&nbsp;日期：{{ time }}</span>
		<div v-if="userData[0].userName != ''">
			<br /><span class="deleteArticle" @click="deleteArticle(num)">删除</span>
		</div>
		<hr />
	</div>
</template>

<script>
	export default {
		props: ['title', 'content', 'author', 'time', 'deleteArticle', 'num', 'src'],
		computed: {
  			userData() {
  				return this.$store.getters.userData;
  			}
  		}
	
	}
</script>

<style scoped>
	hr {
		width: 1000px;
		margin: 0 auto;
	}
	.content {
		text-align: center;
	}
	.deleteArticle {
		cursor: pointer;
	}
</style>