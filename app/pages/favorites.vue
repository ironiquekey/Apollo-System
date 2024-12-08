<template>
	<v-container>
		<v-lazy :min-height="200" :options="{ threshold: 0.5 }" transition="fade-transition">
			<v-card>
				<h2 style="text-align: center; padding-top: 20px">SpaceX Rockets</h2>
                <v-row justify="end">
	                <v-col cols="auto">
                        <v-btn style="margin: 20px" variant="tonal" @click="favorite.removeAllFavorites()">
                            <v-icon icon="mdi-delete-sweep" class="icon" />
                            Clear
                        </v-btn>
                    </v-col>
                </v-row>
				<v-table style="padding-left: 50px; padding-right: 50px">
					<thead>
						<tr>
							<th class="text-left"><h3>Rocket</h3></th>
							<th class="text-left"><h3>Mission</h3></th>
							<th class="text-left"><h3>Launch Date</h3></th>
							<th class="text-center"><h3>Action</h3></th>
						</tr>
					</thead>
					<tbody>
						<tr v-for="launch in favoriteLaunches" :key="launch.id">
							<td style="width: 25%"><h4>{{ launch.rocket.rocket_name }}</h4></td>
							<td style="width: 25%">{{ launch.mission_name }}</td>
							<td class="hide-text" style="width: 25%">{{ launch.launch_date_local }}</td>
							<td style="width: 5%" class="favorite text-center">
								<v-icon
									icon="mdi-star-remove"
									class="icon"
									@click="favorite.removeFromFavorites(launch.mission_name)"
								/>
							</td>
						</tr>
					</tbody>
				</v-table>
			</v-card>
		</v-lazy>
	</v-container>
</template>

<script lang="ts" setup>
useHead({
	title: 'SpaceX Favorites',
	meta: [{ name: 'SpaceX', content: 'SpaceX Rockets.' }],
})


const { favoriteLaunches, favorite } = useFavorite()
</script>

<style>
@media screen and (max-width: 800px) {
	.hide-text {
		display: none;
	}
}
</style>
