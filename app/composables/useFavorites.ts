import { computed } from 'vue'
import { favoriteStore } from '@/stores/favoriteStore'
export const useFavorite = () =>{
    const favorite = favoriteStore()
    const query = gql`
		query Launches {
			launches {
				mission_name
				launch_site {
					site_name
				}
				rocket {
					rocket_name
				}
				details
				launch_date_local
			}
		}
	`

	const { data } = useAsyncQuery<{
		launches: {
			id: string
			mission_name: string
			launch_date_local: string
			launch_site: {
				site_name: string
			}
			rocket: {
				rocket_name: string
			}
			details: string
		}[]
	}>(query)
    const launches = computed(() => data.value?.launches ?? [])
	const favoriteLaunches = computed(() =>
		launches.value.filter((launch) =>
			favorite.favorites.includes(launch.mission_name)
		)
	)

    return { launches, favorite, favoriteLaunches }
}