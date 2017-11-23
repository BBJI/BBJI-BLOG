<template>
	<div class="postDiv">
		<form enctype="multipart/form-data" action="http://127.0.0.1:3000/articlePost" method="post">
			title: <br />
			<input type="text" name="articleTitle" placeholder="请输入标题......"/><br/>
			image: <br />
			<input type="file" name="image"/><br />
			content: <br /><br />
			<textarea rows="10" cols="80" type="text" name="articleContent" placeholder="请输入内容......"></textarea>
			<input type="submit" />
		</form>
	</div>
</template>

<script>
	export default {
		name: 'post'
	}
</script>

<style scoped>
	.postDiv {
		width: 500px;
		height: 500px;
		margin: 0 auto;
		text-align: center;
	}
</style>