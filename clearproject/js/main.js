function searchToggle(obj, evt) {
    let container = $(obj).closest('.search-wrapper');
    if (!container.hasClass('active')) {
        container.addClass('active');
        evt.preventDefault();
    }
    else if (container.hasClass('active') && $(obj).closest('.input-holder').length == 0) {
        container.removeClass('active');
        // clear input
        container.find('.search-input').val('');
    }
}
// modal

// $(document).ready(function () {
//     $('.popup-modal').magnificPopup();

// });
$(function () {
	$('.popup-modal').magnificPopup({
		type: 'inline',
		preloader: false,
		focus: '#username',
		modal: true
	});
	$(document).on('click', '.popup-modal-dismiss', function (e) {
		e.preventDefault();
		$.magnificPopup.close();
	});
});

//   Mixitup

// let config = document.querySelector('.myMixicont');
// let mixer = mixitup(config);
var containerEl = document.querySelector('.myMixicont');
var mixer = mixitup(containerEl);



