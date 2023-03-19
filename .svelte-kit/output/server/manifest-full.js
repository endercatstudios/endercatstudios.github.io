export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png","robots.txt"]),
	mimeTypes: {".png":"image/png",".txt":"text/plain"},
	_: {
		client: {"start":{"file":"_app/immutable/entry/start.19443f29.js","imports":["_app/immutable/entry/start.19443f29.js","_app/immutable/chunks/index.6eed8bf6.js","_app/immutable/chunks/singletons.58206bbc.js","_app/immutable/chunks/index.fe00b169.js"],"stylesheets":[],"fonts":[]},"app":{"file":"_app/immutable/entry/app.e3292511.js","imports":["_app/immutable/entry/app.e3292511.js","_app/immutable/chunks/index.6eed8bf6.js"],"stylesheets":[],"fonts":[]}},
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
