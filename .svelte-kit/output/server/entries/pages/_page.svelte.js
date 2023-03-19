import { c as create_ssr_component, e as escape } from "../../chunks/index.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let gh_secret = process.env.MY_SECRET;
  let gh_var = process.env.MY_VAR;
  return `${$$result.head += `<!-- HEAD_svelte-s96sti_START -->${$$result.title = `<title>cool endercat epic</title>`, ""}<meta name="description" content="me makes game"><!-- HEAD_svelte-s96sti_END -->`, ""}

<section><h1>Meow</h1>
	<h2>play my games loser</h2>
	<h3>secret is: ${escape(gh_secret)}...</h3>
	<h3>variable is: ${escape(gh_var)}!</h3>
</section>`;
});
export {
  Page as default
};
