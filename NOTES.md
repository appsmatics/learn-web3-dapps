### How to use Svelte routing
	https://www.npmjs.com/package/svelte-routing
	Example of how to use the routing
	https://github.com/EmilTholin/svelte-routing/tree/master/example 


### Show the routed page when using link or typing URL
    https://stackoverflow.com/questions/68655730/page-not-found-issue-when-directly-visit-the-link-in-svelte-routing

    "dev": "rollup -c -w",
    "start": "sirv public -s --no-clear",

### Using relative paths in .svelte files
//https://dev.to/sjafferi/absolute-paths-in-svelte-488c
const aliases = alias({
  resolve: ['.svelte', '.js', '.ts'], //optional, by default this will just look for .js files or folders
  entries: [
    { find: 'public', replacement: 'public' },
		{ find: 'lib', replacement: 'src/lib' },
    { find: 'types', replacement: 'src/types' },
    { find: 'utils', replacement: 'src/utils' },
    { find: 'components', replacement: 'src/components' }
  ]

  entries2: [
    { find: 'src', replacement: './src' },
  ]
});

