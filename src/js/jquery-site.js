/*
 * jQuery commands for paulrobertlloyd.com
 */

$(document).ready(function() {
	/* 
	 * Awesompersands
	 * http://patrickhaney.com/thinktank/2008/08/19/automatic-awesompersands
	 */
	$("h1:contains('&'), h1 *:contains('&'), h2:contains('&'), h2 *:contains('&'), h3:contains('&'), h3 *:contains('&')")
		.contents()
		.each(
			function() {
				if( this.nodeType == 3 ) {
					$(this)
					.replaceWith( this
						.nodeValue
						.replace( /&/g, "<abbr title='and' class='amp'>&</abbr>" )
					);
				}
			}
		);

	/* 
	 * Action Stream: Last.fm Tracks
	 */
	$("ul.stream li.lastfm-tracks ul.tracklisting").hide();
	$("ul.stream li.lastfm-tracks h4").append(" <a class='toggle' href='javascript:void(0);'>Show Tracklisting</a>");
	
	$("ul.stream li.lastfm-tracks h4 a.toggle").toggle(
		function () {
			$(this).text("Hide Tracklisting")
			$(this).parent().next().slideDown("slow")
		}, 
		function () {
			$(this).text("Show Tracklisting")
			$(this).parent().next().slideUp("fast")
		}
	);

	/* 
	 * Action Stream: Flickr Photos
	 */
	$("ul.stream li.flickr-photos .more").hide();
	$("ul.stream li.flickr-photos .more").after("<p><a class='toggle' href='javascript:void(0);'>Show All Photos</a></p>");
	
	$("ul.stream li.flickr-photos a.toggle").toggle(
		function () {
			$(this).text("Hide Photos")
			$(this).parent().prev().slideDown("slow")
		}, 
		function () {
			$(this).text("Show All Photos")
			$(this).parent().prev().slideUp("fast")
		}
	);
});