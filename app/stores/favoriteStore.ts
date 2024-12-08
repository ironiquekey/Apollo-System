import { defineStore } from 'pinia'

export const favoriteStore = defineStore('favorite', {
	state: () => ({
		favorites: [] as string[],
	}),
	actions: {
		toggleFavorite(missionName: string) {
			if (this.isFavorite(missionName)) {
				this.removeFromFavorites(missionName)
			} else {
				this.addToFavorites(missionName)
			}
		},
		addToFavorites(missionName: string) {
			this.favorites.push(missionName)
			this.showAlert(`${missionName} Added to favorites.`)
		},
		removeFromFavorites(missionName: string) {
			this.favorites = this.favorites.filter((fav) => fav !== missionName)
			this.showAlert(`${missionName} Removed from favorites.`)
		},
		removeAllFavorites() {
			this.favorites = []
			this.showAlert('All favorites removed.')
		},
		showAlert(message: string) {
			alert(message)
		},
		isFavorite(missionName: string) {
			return this.favorites.includes(missionName)
		},
	},
})
