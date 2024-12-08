<template>
	<v-container>
		<v-lazy :min-height="200" :options="{ threshold: 0.5 }" transition="fade-transition">
			<v-card>
				<h2 style="text-align: center; padding-top: 20px">SpaceX Launches</h2>
                <v-row justify="end">
                    <v-col cols="auto">
                        <v-select
                            v-model="filterYear"
                            :items="years"
                            label="Filter by Year"
                            dense
                            clearable
                            outlined
                            class="small-filter"
                        />
                    </v-col>
                    <v-col cols="auto">
                        <v-btn
                            class="small-filter"
                            style="margin: 12px; margin-right: 50px; min-width: 280px;"
                            @click="toggleSortOrder"
                        >
					        Sort by Date ({{ sortOrder === 'asc' ? 'Ascending' : 'Descending' }})
				        </v-btn>
                    </v-col>
                </v-row>
                <v-table height="620px" style="padding-left: 50px; padding-right: 50px">
                    <thead>
                        <tr>
                            <th class="text-left"><h3>Mission</h3></th>
                            <th class="text-left"><h3>Date</h3></th>
                            <th class="text-center"><h3>Site</h3></th>
                            <th class="text-left"><h3>Rocket</h3></th>
                            <th class="text-center"><h3>Details</h3></th>
                            <th class="text-center"><h3>Action</h3></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="launch in launches" :key="launch.mission_name">
                            <td style="width: 200px">
                                <h4>{{ launch.mission_name }}</h4>
                            </td>
                            <td class="header">
                                {{ launch.launch_date_utc }}
                            </td>
                            <td class="text-center hide-text header">
                                {{ launch.launch_site ? launch.launch_site : 'N/A' }}
                            </td>
                            <td class="header">
                                {{ launch.rocket.rocket_name }}
                            </td>
                            <td class="hide-text description">
                                {{ launch.details ? launch.details : 'N/A' }}
                            </td>
                            <td class="favorite text-center"
                                @click="favorite.toggleFavorite(launch.mission_name)">
                                <v-icon
                                    :icon="favorite.isFavorite(launch.mission_name) ? 'mdi-star' : 'mdi-star-plus-outline'"
                                    class="icon"/>
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
    title: 'SpaceX Launches',
    meta: [{ name: 'SpaceX', content: 'SpaceX Launches.' }],
})

const { launches, filterYear, toggleSortOrder, sortOrder, favorite } = useLaunches()

const years = computed(() => {
    const allYears = launches.value.map((launch) => {
        return new Date(launch.launch_date_utc).getFullYear().toString()
    })
    return [...new Set(allYears)].sort().reverse()
})
</script>

<style scoped>
.small-filter {
    min-width: 200px;
    float: right;
}
</style>

<style>
.favorite {
	cursor: pointer;
}
</style>
