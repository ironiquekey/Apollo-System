import { computed } from 'vue'
export const useLaunches = () =>{
    const query = gql` 
        query Launches {
			launches {
                mission_name
                launch_date_utc
                launch_site {
                    site_name
                }
                rocket {
                    rocket_name
                }
                details
            }
		}
    `
    const { data } = useAsyncQuery<{
        launches: {
            id: string
            mission_name: string
            launch_date_utc: string
            launch_site: {
                site_name: string
            }
            rocket: {
                rocket_name: string
            }
            details: string
        }[]
    }>(query)
    const filterYear = ref<string | null>(null)
    const sortOrder = ref<'asc' | 'desc'>('asc')
    
    const launches = computed(() => {
        const allLaunches = data.value?.launches ?? []
        if (!filterYear.value) return allLaunches
        return allLaunches.filter(launch => {
            const launchYear = new Date(launch.launch_date_utc).getFullYear().toString()
            return launchYear === filterYear.value
        })
    })

    const sortedLaunches = computed(() => {
        return [...launches.value].sort((a, b) => {
            const dateA = new Date(a.launch_date_utc).getTime()
			const dateB = new Date(b.launch_date_utc).getTime()
            return sortOrder.value === 'asc' ? dateA - dateB : dateB - dateA
        })
    })

    const toggleSortOrder = () => {
		sortOrder.value = sortOrder.value === 'asc' ? 'desc' : 'asc'
	}
    const favorite = favoriteStore()

  return { launches: sortedLaunches, toggleSortOrder, sortOrder, filterYear, favorite}
}