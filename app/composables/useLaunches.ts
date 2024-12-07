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
    const launches = computed(()=>data.value?.launches ??[])
    return launches
}