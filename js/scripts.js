$ = jQuery.noConflict();

//HTML5 MARKUP
document.createElement('main');
document.createElement('article');
document.createElement('section');
document.createElement('aside');
document.createElement('hgroup');
document.createElement('nav');
document.createElement('header');
document.createElement('footer');
document.createElement('figure');
document.createElement('figcaption');

// JQUERY DOCUMENT READY FUNCTIONS
$(document).ready(function()
{

	//CHANGE LOGOS
	var month = new Date().getMonth(); // 0 = Jan, 11 = Dec
    var season = 'spring';

    if (month >= 2 && month <= 4) {
        season = 'spring'; // Mar–May
    } else if (month >= 5 && month <= 7) {
        season = 'summer'; // Jun–Aug
    } else if (month >= 8 && month <= 10) {
        season = 'fall';   // Sep–Nov
    } else {
        season = 'winter'; // Dec–Feb
    }

    $('#footer-logo').attr('src', 'images/logo-footer-' + season + '.svg');
	$('#header-logo').attr('src', 'images/logo-monogram-' + season + '.svg');
	$('#logo-full').attr('src', 'images/logo-full-' + season + '.svg');

	// HERO PARALLAX
	$(function () {
	const $window = $(window);
	const $hero = $('.hero');

	const layers = [
		{ el: $('.layer-1'), speed: 0.2 },
		{ el: $('.layer-2'), speed: 0.4 },
		{ el: $('.layer-3'), speed: 0.6 }
	];

	function updateParallax() {
		const scrollTop = $window.scrollTop();
		const heroTop = $hero.offset().top;
		const heroHeight = $hero.outerHeight();

		if (scrollTop + window.innerHeight < heroTop || scrollTop > heroTop + heroHeight) {
		return;
		}

		const offset = scrollTop - heroTop;

		layers.forEach(layer => {
		layer.el.css(
			'transform',
			`translateY(${offset * layer.speed}px)`
		);
		});
	}

	let ticking = false;
	$window.on('scroll', function () {
		if (!ticking) {
		window.requestAnimationFrame(() => {
			updateParallax();
			ticking = false;
		});
		ticking = true;
		}
	});
	});

	// REPOSITION NAVIGATION ON REFRESH
	if(window.scrollY==0){ } else {
		$('.header').addClass('nav-up').removeClass('nav-down');
	}

	// ACCORDION
	$('.accordion-header').on('click', function () {
		const $accordion = $(this).closest('.accordion');
		const $content = $accordion.find('.accordion-content');

		$('.accordion').not($accordion).removeClass('open')
		.find('.accordion-content').slideUp(300);

		$accordion.toggleClass('open');
		$content.stop(true, true).slideToggle(300);
	});

	var didScroll;
  var lastScrollTop = 0;
  var delta = 5;
  var $header = $('.header');
  var navbarHeight = $header.outerHeight();
  var solidOffset = 200;

  $(window).on('scroll', function () {
    didScroll = true;
  });

  setInterval(function () {
    if (didScroll) {
      hasScrolled();
      didScroll = false;
    }
  }, 250);

  function hasScrolled() {
    var st = $(window).scrollTop();

    if (Math.abs(lastScrollTop - st) <= delta) return;

    // Scroll down
    if (st > lastScrollTop && st > navbarHeight) {
      $header.removeClass('nav-down').addClass('nav-up');
    } else {
      // Scroll up
      if (st + $(window).height() < $(document).height()) {
        $header.removeClass('nav-up').addClass('nav-down');
      }
    }

    // Solid background toggle
    if (st >= solidOffset) {
      $header.addClass('solid');
    } else {
      $header.removeClass('solid');
    }

    lastScrollTop = st;
  }

  // BADGES
  // $(function () {

//		let fallenCount = 0;
//		const totalBadges = 2;

//		$('.badge-1, .badge-2, .badge-3').one('click', function () {
//			const $badge = $(this);

//			$badge.animate(
//				{
//					top: $(window).height() + 300,
//					opacity: 0
//				},
//				700,
//				'swing',
//				function () {
//					$badge.hide(); // fully remove visually
//					fallenCount++;
//
//					if (fallenCount === totalBadges) {
//						showCouponModal();
//					}
//				}
//			);
//		});

//		function showCouponModal() {
//			$('#coupon-modal').fadeIn(300);
//		}

		// close modal
//		$('.modal-close').on('click', function () {
//			$('#coupon-modal').fadeOut(200);
//		});

//	});

	// OVERLAY
	$(function () {

		const content = {
			terms: `
			<div class="flex-container flex-col gap-md">
				<h2 class="heading heading-lg">Terms of Service</h2>
				<div class="flex-container flex-col gap-md">
					<div class="flex-container flex-col gap-sm">
						<p>Shared Care of The Cozy Hollow</p>
						<p>By accessing or using The Cozy Hollow website, booking a session, or attending programming, you agree to the following terms.</p>
						<p>All children attending The Cozy Hollow must be accompanied by a responsible caregiver unless otherwise stated for specific programs. Caregivers are responsible for supervising their children at all times.</p>
						<p>Participation in play-based and nature-based activities involves inherent risk. By attending, you acknowledge and accept these risks and agree that The Cozy Hollow is not liable for injuries, loss, or damage except where required by law.</p>
						<p>The Cozy Hollow reserves the right to modify schedules, programming, pricing, and policies at any time. We also reserve the right to refuse service if behavior compromises the safety or experience of others.</p>
						<p>All content on this website, including text and images, is the property of The Cozy Hollow and may not be reproduced without permission.</p>
					</div>
				</div>
			</div>
			`,
			privacy: `
			<div class="flex-container flex-col gap-md">
				<h2 class="heading heading-lg">Privacy Policy</h2>
				<div class="flex-container flex-col gap-md">
					<div class="flex-container flex-col gap-sm">
						<p>What We Keep, and Why</p>
						<p>The Cozy Hollow respects your privacy and is committed to protecting your personal information.</p>
						<p>We collect only the information necessary to operate our website, manage bookings, and communicate with you. This may include names, email addresses, and booking details.</p>
						<p>Your information will never be sold or shared with third parties except where required to provide services (such as booking platforms) or by law.</p>
						<p>We take reasonable steps to protect your personal information. You may request access to, correction of, or deletion of your data at any time by contacting us.</p>
						<p>By using our website, you consent to this Privacy Policy.</p>
					</div>
				</div>
			</div>
			`,
			accessibility: `
			<div class="flex-container flex-col gap-md">
				<h2 class="heading heading-lg">Accessibility</h2>
				<div class="flex-container flex-col gap-md">
					<div class="flex-container flex-col gap-sm">
						<p>Welcoming All Who Wander In</p>
						<p>The Cozy Hollow is committed to creating an inclusive and welcoming environment for children and caregivers.</p>
						<p>We aim to make our website accessible by using clear language, readable fonts, and simple navigation. If you experience difficulty accessing any part of our website, please contact us and we will do our best to assist.</p>
						<p>Our physical space is being designed with accessibility in mind. We welcome feedback and encourage families to reach out with questions or specific accessibility needs prior to visiting.</p>
						<p>Accessibility matters to us, and we are always learning and improving.</p>
					</div>
				</div>
			</div>
			`
		};

		$('.legal-link').on('click', function (e) {
			e.preventDefault();

			const type = $(this).data('legal');

			$('#legal-inner').html(content[type]);
			$('body').addClass('no-scroll');
			$('#legalOverlay')
				.addClass('is-open')
				.attr('aria-hidden', 'false');
		});

		$('.legal-close').on('click', function (e) {
			e.preventDefault();
			closeOverlay();
		});

		function closeOverlay() {
			$('#legalOverlay')
				.removeClass('is-open')
				.attr('aria-hidden', 'true');

			$('body').removeClass('no-scroll');
		}
	});

});