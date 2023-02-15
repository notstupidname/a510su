/* skel-baseline v3.0.1 | (c) n33 | skel.io | MIT licensed */

(function($) {

	"use strict";

	// Methods/polyfills.

		// addEventsListener
			var addEventsListener=function(o,t,e){var n,i=t.split(" ");for(n in i)o.addEventListener(i[n],e)}

		// classList | (c) @remy | github.com/remy/polyfills | rem.mit-license.org
			!function(){function t(t){this.el=t;for(var n=t.className.replace(/^\s+|\s+$/g,"").split(/\s+/),i=0;i<n.length;i++)e.call(this,n[i])}function n(t,n,i){Object.defineProperty?Object.defineProperty(t,n,{get:i}):t.__defineGetter__(n,i)}if(!("undefined"==typeof window.Element||"classList"in document.documentElement)){var i=Array.prototype,e=i.push,s=i.splice,o=i.join;t.prototype={add:function(t){this.contains(t)||(e.call(this,t),this.el.className=this.toString())},contains:function(t){return-1!=this.el.className.indexOf(t)},item:function(t){return this[t]||null},remove:function(t){if(this.contains(t)){for(var n=0;n<this.length&&this[n]!=t;n++);s.call(this,n,1),this.el.className=this.toString()}},toString:function(){return o.call(this," ")},toggle:function(t){return this.contains(t)?this.remove(t):this.add(t),this.contains(t)}},window.DOMTokenList=t,n(Element.prototype,"classList",function(){return new t(this)})}}();

	// Vars.
		var	$window = $(window),
			$body = document.querySelector('body'),
			$header = $('#header'),
			$banner = $('#banner-wrapper');

	// Breakpoints.
		skel.breakpoints({
			xlarge:	'(max-width: 1680px)',
			large:	'(max-width: 1280px)',
			medium:	'(max-width: 980px)',
			small:	'(max-width: 736px)',
			xsmall:	'(max-width: 480px)'
		});
		
	// Viewport	
		skel.viewport({
			breakpoints: {
				small: {
					scalable: true
				}
			}
		});

	// Disable animations/transitions until everything's loaded.
		$body.classList.add('is-loading');

		window.addEventListener('load', function() {
			$body.classList.remove('is-loading');
		});
		
	
		
	
	//Modal
		$(document).ready(function(){
			
			var btn = document.getElementsByClassName('modal-open');
			for (var i = 0; i < btn.length; i++) {
				var thisBtn = btn[i];
				thisBtn.addEventListener("click", function(event){
					var	modal = document.getElementById(this.getAttribute('data-modal'));
					modal.classList.toggle('show');
				});
				
			};
			
			var btnClose = document.getElementsByClassName('modal-close');
			for (var i = 0; i < btnClose.length; i++) {
				var thisBtn = btnClose[i];
				thisBtn.addEventListener("click", function(event){
					var	modal = document.getElementById(this.getAttribute('data-close'));
					modal.classList.toggle('show');
				});
			};
			
		});
		
		$(document).ready(function(){
			window.addEventListener('click', function(event) {
				var modal = document.getElementsByClassName('modal');
				for (var i = 0; i < modal.length; i++) {
					var thisModal = modal[i];
					if (event.target == thisModal) {
						thisModal.classList.remove('show');
					}
				}
			});
			
		});
	//Form submission
		$(document).ready(function(){
			$('.ajax-form').submit(function(event) {
				event.preventDefault();
				var form = $(this);
				$.ajax({
					dataType: "jsonp",
					url: "https://getsimpleform.com/messages/ajax?form_api_token=0b144f9c0b9d040d7b6278f3b2c6d00e",
					data: form.serialize()
						}).done(function(data) {
							$(".ajax-form").hide();
							$(".form-succes").fadeIn("400");
							yaCounter24649415.reachGoal('lead');
							ga('send', 'event', 'form', 'lead');
							fbq('track', 'Lead');
						}).fail(function(data) {
							$(".ajax-form").hide();
							$(".form-error").fadeIn("400");
						});
			  });
		});

})(jQuery);
