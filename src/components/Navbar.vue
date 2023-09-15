<template>
	<nav class="bg-yellow-500 h-20 flex items-center">
		<div class="container px-6 xl:px-0">
			<div class="flex items-center gap-5">
				<offcanvas-component v-if="menuOffcanvas" />
				<router-link to="/" class="font-semibold text-xl">Kursus Mobil ID</router-link>
			</div>
		</div>
	</nav>
</template>

<script>
import OffcanvasComponent from "./Offcanvas.vue";
import { useStore } from "vuex";
import { computed, onBeforeMount } from "vue";

export default {
	name: "NavbarComponent",
	components: {
		OffcanvasComponent
	},
	setup() {

		const store = useStore()
		const isMobile = computed(() => store.getters.isMobile)

		onBeforeMount(() => {
			store.dispatch('setIsMobile')
		})

		// get action from store
		store.dispatch('setIsWindowResize')
		return {
			OffcanvasComponent,
			menuOffcanvas: isMobile
		}
	}
}
</script>