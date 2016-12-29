if (typeof(EXT_NAME_CONTENT_SCRIPT_LOADED) == 'undefined') {
	var EXT_NAME_CONTENT_SCRIPT_LOADED = true;

	var ExtName = {};

	//---------------------------------------------------------------------------------------------------------------------
	ExtName.initialize = function() {
		console.log("Initializing extension content script");

		// On document ready
		$(document).ready(function() {

			// Load CSS
			var path = chrome.extension.getURL('css/content.css');
			var link = document.createElement('link')
			link.setAttribute('rel', 'stylesheet')
			link.setAttribute('type', 'text/css')
			link.setAttribute('href', path)
			document.getElementsByTagName('head')[0].appendChild(link)

		}); // End of document.ready

		// End of initialize
	}

	//---------------------------------------------------------------------------------------------------------------------
	// Start the extension content script
	ExtName.initialize();
}