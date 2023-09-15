<template>
	<header>
		<NavbarComponent/>
	</header>
	<main>
		<slot/>
	</main>
	<footer>
		<p>Footer</p>
	</footer>
</template>
<script>
import NavbarComponent from "../components/Navbar.vue";

export default {
	name: "DefaultLayout",
	components: {
		NavbarComponent
	}
}
</script>