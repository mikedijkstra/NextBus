// remap jQuery to $
(function($){})(window.jQuery);
/* trigger when page is ready */

// Number of seconds after midnight
var WorkArray = [17640, 19920, 20820, 21960, 23340, 24360, 25080, 25800, 26580, 27420, 27960, 28560, 29340, 29940, 30660, 31260, 31860, 32220, 32580, 33180, 33780, 34680, 35280, 35880, 36420, 37020, 37620, 38220, 38820, 39420, 40020, 40620, 41220, 41820, 42420, 43020, 43620, 44220, 44820, 45420, 46020, 46620, 47220, 47820, 48420, 49020, 49620, 50220, 50820, 51420, 52020, 52620, 53220, 53820, 54060, 54540, 55140, 55740, 56340, 56940, 57540, 58140, 58740, 59340, 59700, 60240, 60660, 61140, 61620, 62040, 62520, 62940, 63540, 63840, 64320, 64740, 65340, 65940, 66540, 67140, 67980, 69240, 70860, 72000, 73200, 74400, 75600, 76860, 78060, 79560, 81360, 83160, 84960];

// Actual time matched to WorkArray
var WorkTimeArray = ["4:54am","5:32am","5:47am","6:06am","6:29am","6:46am","6:58am","7:10am","7:23am","7:37am","7:46am","7:56am","8:09am","8:19am","8:31am","8:41am","8:51am","8:57am","9:03am","9:13am","9:23am","9:38am","9:48am","9:58am","10:07am","10:17am","10:27am","10:37am","10:47am","10:57am","11:07am","11:17am","11:27am","11:37am","11:47am","11:57am","12:07pm","12:17pm","12:27pm","12:37pm","12:47pm","12:57pm","1:07pm","1:17pm","1:27pm","1:37pm","1:47pm","1:57pm","2:07pm","2:17pm","2:27pm","2:37pm","2:47pm","2:57pm","3:01pm","3:09pm","3:19pm","3:29pm","3:39pm","3:49pm","3:59pm","4:09pm","4:19pm","4:29pm","4:35pm","4:44pm","4:51pm","4:59pm","5:07pm","5:14pm","5:22pm","5:29pm","5:39pm","5:44pm","5:52pm","5:59pm","6:09pm","6:19pm","6:29pm","6:39pm","6:53pm","7:14pm","7:41pm","8:00pm","8:20pm","8:40pm","9:00pm","9:21pm","9:41pm","10:06pm","10:36pm","11:06pm","11:36pm"];

// Number of seconds after midnight
var HomeArray = [18240, 19680, 20880, 21660, 22260, 22860, 23460, 24060, 24660, 25140, 25560, 26040, 26460, 27180, 27540, 27900, 28260, 28740, 28980, 29340, 29760, 30180, 30780, 31380, 31980, 32580, 33180, 33780, 34320, 34920, 35640, 36300, 36900, 37500, 38100, 38700, 39300, 39900, 40500, 41100, 41700, 42300, 42900, 43500, 44100, 44700, 45300, 45900, 46500, 47100, 47700, 48300, 48900, 49500, 50100, 50700, 51300, 51900, 52500, 53100, 53700, 54360, 55020, 55620, 56220, 56820, 57420, 58020, 58620, 59220, 59820, 60420, 61020, 61620, 62280, 62760, 63780, 64980, 66180, 67380, 68580, 69780, 70920, 72120, 73320, 74700, 76500, 78300, 80100, 81900, 83700, 85500];

// Actual time matched to HomeArray
var HomeTimeArray = ["5:04am","5:28am","5:48am","6:01am","6:11am","6:21am","6:31am","6:41am","6:51am","6:59am","7:06am","7:14am","7:21am","7:33am","7:39am","7:45am","7:51am","7:59am","8:03am","8:09am","8:16am","8:23am","8:33am","8:43am","8:53am","9:03am","9:13am","9:23am","9:32am","9:42am","9:54am","10:05am","10:15am","10:25am","10:35am","10:45am","10:55am","11:05am","11:15am","11:25am","11:35am","11:45am","11:55am","12:05pm","12:15pm","12:25pm","12:35pm","12:45pm","12:55pm","1:05pm","1:15pm","1:25pm","1:35pm","1:45pm","1:55pm","2:05pm","2:15pm","2:25pm","2:35pm","2:45pm","2:55pm","3:06pm","3:17pm","3:27pm","3:37pm","3:47pm","3:57pm","4:07pm","4:17pm","4:27pm","4:37pm","4:47pm","4:57pm","5:07pm","5:18pm","5:26pm","5:43pm","6:03pm","6:23pm","6:43pm","7:03pm","7:23pm","7:42pm","8:02pm","8:22pm","8:45pm","9:15pm","9:45pm","10:15pm","10:45pm","11:15pm","11:45pm"];


function NextBusSwipe() {
  var nextpage = $(this).next('div[data-role="page"]');
	var prevpage = $(this).prev('div[data-role="page"]');
	// swipe using id of next page if exists
	if (prevpage.length > 0) {
		$.mobile.changePage(prevpage, 'flip');
	}
	else {
		$.mobile.changePage(nextpage, 'flip');
	}
};

$(document).ready(function (){

	$(function () {
		
		// Current Time
		var now = new Date();
		var hours = now.getHours();
		var minutes = now.getMinutes();
		var seconds = now.getSeconds();
		var timeNow = (hours * 60 * 60) + (minutes * 60) + seconds;
		
		// Pollenizer Work

		for (i=0;i<WorkArray.length;i++)
		if (WorkArray[i] > timeNow) {
			var nextWork = WorkArray[i];
			var nextWorkTime = WorkTimeArray[i];
			i++;
			var laterWork = WorkArray[i];
			var laterWorkTime = WorkTimeArray[i];
			i++;	
			var evenLaterWork = WorkArray[i];	
			var evenLaterWorkTime = WorkTimeArray[i];
			i++;	
			var evenEvenLaterWork = WorkArray[i];	
			var evenEvenLaterWorkTime = WorkTimeArray[i];
			break;
		}
		var nextBusWork = nextWork - timeNow;
		var laterBusWork = laterWork - timeNow;
		var evenLaterBusWork = evenLaterWork - timeNow;
		var evenEvenLaterBusWork = evenEvenLaterWork - timeNow;
		
		if (nextWorkTime) {
		$('#nextBusWork').countdown({
			until: nextBusWork, 
			format: 'MS',
			layout: '<div id="t7_timer"><div class="block"><p class="value">{mnn}</p><p class="label">minutes</p></div><div class="spacer_block"><p class="value">:</p></div><div class="block"><p class="value">{snn}<p class="label">seconds</p></div></div>'
		});
		$('#nextWorkTime').text(nextWorkTime);
		}
		else {
			$('#nextBusWork').countdown({
				until: +1, 
				format: 'MS',
				layout: '<div id="t7_timer"><div class="block"><p class="value">{mnn}</p><p class="label">minutes</p></div><div class="spacer_block"><p class="value">:</p></div><div class="block"><p class="value">{snn}<p class="label">seconds</p></div></div>'
			});
			$('#nextWorkTime').text(nextWorkTime);
		}
		if (laterWorkTime) {
		$('#laterBusWork').countdown({
			until: laterBusWork, 
			format: 'MS',
			layout: '{mnn}:{snn}'
		});	
		$('#laterWorkTime').text(laterWorkTime);
		}		
		else {
			$('#WorkLaterBus').html('&nbsp;');
		}
		if (evenLaterWorkTime) {	
		$('#evenLaterBusWork').countdown({
			until: evenLaterBusWork, 
			format: 'MS',
			layout: '{mnn}:{snn}'
		});	
		$('#evenLaterWorkTime').text(evenLaterWorkTime);					
		}
		else {
			$('#WorkEvenLaterBus').html('&nbsp;');
		}
		if (evenEvenLaterWorkTime) {	
		$('#evenEvenLaterBusWork').countdown({
			until: evenEvenLaterBusWork, 
			format: 'MS',
			layout: '{mnn}:{snn}'
		});				
		$('#evenEvenLaterWorkTime').text(evenEvenLaterWorkTime);
		}
		else {
			$('#WorkEvenEvenLaterBus').html('&nbsp;');
		}

		// Home

		for (i=0;i<HomeArray.length;i++)
		if (HomeArray[i] > timeNow) {
			var nextHome = HomeArray[i];
			var nextHomeTime = HomeTimeArray[i];
			i++;
			var laterHome = HomeArray[i];
			var laterHomeTime = HomeTimeArray[i];
			i++;
			var evenLaterHome = HomeArray[i];	
			var evenLaterHomeTime = HomeTimeArray[i];
			i++;
			var evenEvenLaterHome = HomeArray[i];
			var evenEvenLaterHomeTime = HomeTimeArray[i];	
			break;
		}
		
		var nextBusHome = nextHome - timeNow;
		var laterBusHome = laterHome - timeNow;
		var evenLaterBusHome = evenLaterHome - timeNow;
		var evenEvenLaterBusHome = evenEvenLaterHome - timeNow;
		
		
		if (nextHomeTime) {
		$('#nextBusHome').countdown({
			until: nextBusHome, 
			format: 'MS',
			layout: '<div id="t7_timer"><div class="block"><p class="value">{mnn}</p><p class="label">minutes</p></div><div class="spacer_block"><p class="value">:</p></div><div class="block"><p class="value">{snn}<p class="label">seconds</p></div></div>'
		});
		$('#nextHomeTime').text(nextHomeTime);
		}
		else {
			$('#nextBusHome').countdown({
				until: +1, 
				format: 'MS',
				layout: '<div id="t7_timer"><div class="block"><p class="value">{mnn}</p><p class="label">minutes</p></div><div class="spacer_block"><p class="value">:</p></div><div class="block"><p class="value">{snn}<p class="label">seconds</p></div></div>'
			});
			$('#nextHomeTime').text(nextHomeTime);
		}
		if (laterHomeTime) {
		$('#laterBusHome').countdown({
			until: laterBusHome, 
			format: 'MS',
			layout: '{mnn}:{snn}'
		});	
		$('#laterHomeTime').text(laterHomeTime);
		}		
		else {
			$('#HomeLaterBus').html('&nbsp;');
		}
		if (evenLaterHomeTime) {	
		$('#evenLaterBusHome').countdown({
			until: evenLaterBusHome, 
			format: 'MS',
			layout: '{mnn}:{snn}'
		});	
		$('#evenLaterHomeTime').text(evenLaterHomeTime);					
		}
		else {
			$('#HomeEvenLaterBus').html('&nbsp;');
		}
		if (evenEvenLaterHomeTime) {	
		$('#evenEvenLaterBusHome').countdown({
			until: evenEvenLaterBusHome, 
			format: 'MS',
			layout: '{mnn}:{snn}'
		});				
		$('#evenEvenLaterHomeTime').text(evenEvenLaterHomeTime);
		}
		else {
			$('#HomeEvenEvenLaterBus').html('&nbsp;');
		}
	});
	
	$('.refresh').live('tap',function(event) {
		
		$(function () {

			// Current Time
			
			var now = new Date();
			var hours = now.getHours();
			var minutes = now.getMinutes();
			var seconds = now.getSeconds();
			var timeNow = (hours * 60 * 60) + (minutes * 60) + seconds;
			
			// Work

			for (i=0;i<WorkArray.length;i++)
			if (WorkArray[i] > timeNow) {
				var nextWork = WorkArray[i];
				var nextWorkTime = WorkTimeArray[i];
				i++;
				var laterWork = WorkArray[i];
				var laterWorkTime = WorkTimeArray[i];
				i++;	
				var evenLaterWork = WorkArray[i];	
				var evenLaterWorkTime = WorkTimeArray[i];
				i++;	
				var evenEvenLaterWork = WorkArray[i];	
				var evenEvenLaterWorkTime = WorkTimeArray[i];
				break;
			}
			var nextBusWork = nextWork - timeNow;
			var laterBusWork = laterWork - timeNow;
			var evenLaterBusWork = evenLaterWork - timeNow;
			var evenEvenLaterBusWork = evenEvenLaterWork - timeNow;
			
			$('#nextBusWork').countdown('change', 'until', nextBusWork);
			$('#laterBusWork').countdown('change', 'until', laterBusWork);
			$('#evenLaterBusWork').countdown('change', 'until', evenLaterBusWork);
			$('#evenEvenLaterBusWork').countdown('change', 'until', evenEvenLaterBusWork);
					
			$('#nextWorkTime').text(nextWorkTime);
			$('#laterWorkTime').text(laterWorkTime);
			$('#evenLaterWorkTime').text(evenLaterWorkTime);		
			$('#evenEvenLaterWorkTime').text(evenEvenLaterWorkTime);
			
			// Home		

			for (i=0;i<HomeArray.length;i++)
			if (HomeArray[i] > timeNow) {
				var nextHome = HomeArray[i];
				var nextHomeTime = HomeTimeArray[i];
				i++;
				var laterHome = HomeArray[i];
				var laterHomeTime = HomeTimeArray[i];
				i++;
				var evenLaterHome = HomeArray[i];	
				var evenLaterHomeTime = HomeTimeArray[i];
				i++;
				var evenEvenLaterHome = HomeArray[i];
				var evenEvenLaterHomeTime = HomeTimeArray[i];	
				break;
			}

			var nextBusHome = nextHome - timeNow;
			var laterBusHome = laterHome - timeNow;
			var evenLaterBusHome = evenLaterHome - timeNow;
			var evenEvenLaterBusHome = evenEvenLaterHome - timeNow;
					
			$('#nextBusHome').countdown('change', 'until', nextBusHome);
			$('#laterBusHome').countdown('change', 'until', laterBusHome);
			$('#evenLaterBusHome').countdown('change', 'until', evenLaterBusHome);
			$('#evenEvenLaterBusHome').countdown('change', 'until', evenEvenLaterBusHome);
			
			$('#nextHomeTime').text(nextHomeTime);
			$('#laterHomeTime').text(laterHomeTime);
			$('#evenLaterHomeTime').text(evenLaterHomeTime);		
			$('#evenEvenLaterHomeTime').text(evenEvenLaterHomeTime);
		});
	});
	
		$('div.ui-page').live("swipeleft", NextBusSwipe);
	  $('div.ui-page').live("swiperight", NextBusSwipe);
	
});