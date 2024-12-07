<template>
	<v-container>
	  <div class="container">
		<div class="content">
		  	<h1 class="text-center">Welcome to</h1>
		  	<h1 class="title">SpaceX</h1>
		  	<router-link to="/launches">
          		<v-btn color="primary">View Launches</v-btn>
        	</router-link>
		</div>
	  </div>
	</v-container>
</template>

<script setup lang="ts">
useHead({
	title: 'SpaceX',
	meta: [{ name: 'SpaceX', content: 'SpaceX Webpage.' }],
})
</script>

<style>
* {
  font-family: Poppins, Montserrat, Arial, Helvetica, sans-serif;
}

.container {
	display: flex;
	justify-content: center;
	align-items: center;
	height: 70vh;
}

.content {
  text-align: center;
}

.title {
	text-align: center;
	margin-bottom: 20px;
	font-size: 8rem;
	font-weight: 800;
}
h1{
	color: #5a5a5a;
}
@media screen and (max-width: 800px) {
  .title {
    font-size: 2rem;
  }

  .text-center {
    font-size: 1.5rem;
  }
}
</style>

