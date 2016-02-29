/*
 * jQuery Plugin: For Sending WebNotifications. Modified
 * Version 1.0
 *
 * Copyright (c) 2015 Gowtham Rupavatharam
 *
 */
 

(function($) {
	var DEFAULT_OPTIONS = {
		close: false,
		closeDelay: 10000
	}

	$.fn.WebNotification = function(options) {
		var options = $.extend({}, DEFAULT_OPTIONS, options || {});
		if(window.Notification && options.title && options.body) {
			var notification = new Notification(options.title, {icon: options.icon, iconUrl: options.icon, body: options.body, tag: options.tag}); 
			if(options.close) {
				// Close after the specified delay
				setTimeout(function() {
					notification.close();
				}, options.closeDelay)
			}
			if(options.onclick) {
				notification.onclick = function(event) {
					if(options.windowFocus) window.focus();
					notification.close();
					var tgt = event.target || event.srcElement;
					if(tgt) options.onclick.apply(this, [tgt.tag]);
				}
			}
		}
	};

	WebNotification = {
		init : function(options) {
			options = options || {};
			if(window.Notification) {
				if(Notification.permission == "default") {
					// Request permissions
					Notification.requestPermission(function(permission) {
						if(options.callback) options.callback.apply(this, [Notification.permission]);
					});
				} else {
					// In case of denied or granted
					if(options.callback) options.callback.apply(this, [Notification.permission]);
				}
			}
		}
	};
})(jQuery);
