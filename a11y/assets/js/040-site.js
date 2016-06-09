Reveal.initialize({
	history: true,
	transition: 'convex',

	dependencies: [
		{
			src: 'assets/js/plugins/highlight/highlight.js',
			async: true,
			callback: function() {
				hljs.initHighlightingOnLoad();
			}
		},
		{
			src: 'assets/js/plugins/notes/notes.js',
			async: true
		},
	]
});