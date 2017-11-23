<template>
	<div>
			<app-content 
				v-for="(article, index) in articles" 
				:key="index" :title="article.articleTitle" 
				:content="article.articleContent" 
				:author="article.articleAuthor" 
				:time="article.postTime"
				:deleteArticle="deleteArticle"
				:num="index"
				:src="article.image"
				v-if="index/page < 5 && index >= (page-1)*5"
			>
			</app-content>
			<ul>
				<li class="pre" @click="pre">pre</li>
				<li type="button" @click="choose(index + 1)" v-for="(eachPage,index) in pageLength" :key="index">{{ eachPage }}</li>
				<li class="next" @click="next">next</li>
			</ul>
	</div>
</template>

<script>
	import content from './content';
	export default {	
		computed: {
			articles() {
				return this.$store.getters.article;
			},
			page() {
				return this.$store.getters.page;
			},
			pageLength() {
				var pageLength = Math.ceil(this.articles.length/5);
				return pageLength;
				
			},
		},
		
		methods: {
			choose(num) {
				this.$store.dispatch('page', num);
				$('li').eq(num).addClass('active').siblings().removeClass('active');
			},
			pre() {
				this.$store.dispatch('pre');
				$('li').eq(this.page).addClass('active').siblings().removeClass('active');
			},
			next() {
				this.$store.dispatch('next');
				$('li').eq(this.page).addClass('active').siblings().removeClass('active');
			},
			deleteArticle(num) {
				var r = confirm('确定删除该文章？');
				if(r == true){
					var demo = $.ajax({
						type:"get",
						data: {articleId: this.$store.getters.article[num]._id},
						url:"http://127.0.0.1:3000/articleRemove",
						async:true,
					});
					window.location.href = '/';
				}else{
					return;
				}
			}
		},
		
		components: {
			appContent: content
		}
	}
</script>

<style scoped>
	.pre{
		width: 40px;
		height: 20px;
		border: 1px solid black;
	}
	.next{
		width: 40px;
		height: 20px;
		border: 1px solid black;
	}
	ul {
		width: 350px;
		height:20px;
		margin: 0 auto;
	}
	li {
		list-style: none;
		width:20px;
		height:20px;
		background-color: white;
		border: 1px solid black;
		text-align: center;
		line-height: 20px;
		margin-left: 5px;
		float: left;
	}
	li:hover {
		cursor: pointer;
		background-color: limegreen;
		color: white;
	}
	.pre:hover {
		cursor: pointer;
		background-color: limegreen;
		color: white;		
	}
	.next:hover{
		cursor: pointer;
		background-color: limegreen;
		color: white;
	}
	.active {
		background-color: pink;
	}
</style>