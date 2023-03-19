<script lang="ts">
	let gh_secret = process.env.MY_SECRET;
	let gh_var = process.env.MY_VAR;
</script>

<svelte:head>
	<title>cool endercat epic</title>
	<meta name="description" content="me makes game" />
</svelte:head>

<section>
	<h1>Meow</h1>
	<h2>play my games loser</h2>
	<h3>secret is: {gh_secret}...</h3>
	<h3>variable is: {gh_var}!</h3>
</section>

<style>
</style>
