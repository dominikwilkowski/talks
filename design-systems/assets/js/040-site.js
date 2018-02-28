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


function dynamicClasses( event ) {
	var $this = $( event.fragment );

	if( $this.hasClass('js-addclass') ) {
		var selector = $this.attr('data-selector');
		var className = $this.attr('data-class');

		$( selector ).addClass( className );
	}

	if( $this.hasClass('js-removeclass') ) {
		var selector = $this.attr('data-selector');
		var className = $this.attr('data-class');

		$( selector ).removeClass( className );
	}

	if( $this.hasClass('js-toggleclass') ) {
		var selector = $this.attr('data-selector');
		var className = $this.attr('data-class');
		var _hasClass = $( selector ).hasClass( className );

		if( _hasClass ) {
			$( selector ).removeClass( className );
		}
		else {
			$( selector ).addClass( className );
		}
	}
}


Reveal.addEventListener( 'fragmentshown', dynamicClasses);
Reveal.addEventListener( 'fragmenthidden', dynamicClasses);