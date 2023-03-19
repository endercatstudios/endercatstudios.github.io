export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png","robots.txt"]),
	mimeTypes: {".png":"image/png",".txt":"text/plain"},
	_: {
		client: {"start":{"file":"_app/immutable/entry/start.1c5bfe5c.js","imports":["_app/immutable/entry/start.1c5bfe5c.js","_app/immutable/chunks/index.55486355.js","_app/immutable/chunks/singletons.1991262c.js"],"stylesheets":[],"fonts":[]},"app":{"file":"_app/immutable/entry/app.b970f61c.js","imports":["_app/immutable/entry/app.b970f61c.js","_app/immutable/chunks/index.55486355.js"],"stylesheets":[],"fonts":[]}},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js'),
			() => import('./nodes/2.js'),
			() => import('./nodes/3.js')
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 2 },
				endpoint: null
			},
			{
				id: "/about",
				pattern: /^\/about\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 3 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
