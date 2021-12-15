Honouring a user's motion setting is especially relevant for javascript-controlled animations
(e.g. using Svelte's built-in `spring`). If you use animations that rely on
javascript, please make sure to provide an alternative for users that prefer
reduced motion. CSS-based animations however are disabled by default when appropriate (see [index.css](https://github.com/rbb-data/svelte-starter/blob/185bceba56acf2b045b6b20964d275474b7b0675/src/style/index.css#L31)).
