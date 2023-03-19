import { c as create_ssr_component } from "../../chunks/index.js";
const styles = "";
const _layout_svelte_svelte_type_style_lang = "";
const css = {
  code: "body.svelte-1q5i416{margin:0}",
  map: null
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${$$result.head += `<!-- HEAD_svelte-1qa4yyp_START --><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.3.0/css/all.min.css"><!-- HEAD_svelte-1qa4yyp_END -->`, ""}

<body class="svelte-1q5i416">${slots.default ? slots.default({}) : ``}
</body>`;
});
export {
  Layout as default
};
