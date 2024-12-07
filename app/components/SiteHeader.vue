<template>
	<v-app-bar :elevation="5" color="primary">
		<template #prepend />
		<v-app-bar-title>
			<h2>
				<nuxt-link style="color: whitesmoke" to="/">
					<v-icon icon="mdi-rocket-launch-outline" />
				</nuxt-link>
				SpaceX
			</h2>
		</v-app-bar-title>
		<div class="pc-links">
			<v-btn class="nav-button" variant="text" to="/launches">
				<v-icon icon="mdi-rocket-launch" class="icon" />
				Launches
			</v-btn>
			<v-btn class="nav-button" variant="text" to="/rockets">
				<v-icon icon="mdi-rocket" class="icon" />
				Rockets
			</v-btn>
			<v-btn class="nav-button" variant="text" to="/favorites">
				<v-icon icon="mdi-star" class="icon" />
				Favorites
			</v-btn>
		</div>
		<div class="mobile-links">
			<v-btn class="nav-button" variant="text" to="/launches">
				<v-icon icon="mdi-rocket-launch" class="icon" />
			</v-btn>
			<v-btn class="nav-button" variant="text" to="/rockets">
				<v-icon icon="mdi-rocket" class="icon" />
			</v-btn>
			<v-btn class="nav-button" variant="text" to="/favorites">
				<v-icon icon="mdi-star" class="icon" />
			</v-btn>
		</div>
	</v-app-bar>
</template>

<style>
.nav-button {
	margin-left: 10px;
}


.mobile-links {
	display: none;
	margin-right: 20px;
}

@media screen and (max-width: 800px) {

	.pc-links {
		display: none;
	}

	.mobile-links {
		display: block;
	}
}
</style>