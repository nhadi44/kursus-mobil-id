<template>
	<default-layout>
		<router-view></router-view>
	</default-layout>
</template>

<script>
import DefaultLayout from "./layouts/default.vue";

export default {
	name: "App",
	components: {
		DefaultLayout
	},
}
</script>