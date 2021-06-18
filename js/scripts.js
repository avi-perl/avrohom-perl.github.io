$('.more').on('click', function() {
    $('.card-footer').slideToggle(200);
    $('#skills').slideToggle(200);
})

// Rotate the menu button when its pressed
var rotation = 0;

jQuery.fn.rotate = function(degrees) {
    $(this).css({ 'transform': 'rotate(' + degrees + 'deg)' });
};

$('#menu-button').click(function() {
    rotation += 180;
    $(this).rotate(rotation);
});

$(document).ready(function() {
    // Anti email spam step to fight off evil devs who make web scrapers.
    var r = 'antiemailspam';

    $('.' + r).each(function() {
        var $this = $(this),
            value = new String($this.text());
        value = value.replace('[' + r + ']', '@');
        $this.replaceWith($('<a></a>').text(value).attr('href', 'mailto:' + value));
    });

    // Anti phone spam step to fight off evil devs who make web scrapers.
    var r = 'antiphonespam';

    $('.' + r).each(function() {
        var $this = $(this),
            value = new String($this.text());
        value = value.replace('[' + r + ']', '.256.');
        $this.replaceWith($('<a></a>').text(value).attr('href', 'mailto:' + value));
    });
});