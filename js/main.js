$(document).ready (function() {
    
    new WOW().init();

    $('#sqr11').waypoint(function() {

        $('#sqr11').addClass('animated flash');

    }, {
        offset: '70%'
    });

    $('#sqr12').waypoint(function() {

        $('#sqr12').addClass('animated bounce');

    }, {
        offset: '70%'
    });

    $('#sqr13').waypoint(function() {

        $('#sqr13').addClass('animated flash');

    }, {
        offset: '70%'
    });

    $('#sqr14').waypoint(function() {

        $('#sqr14').addClass('animated bounce');

    }, {
        offset: '70%'
    });

    $('#sqr21').waypoint(function() {

        $('#sqr21').addClass('animated flash');

    }, {
        offset: '70%'
    });

    $('#sqr22').waypoint(function() {

        $('#sqr22').addClass('animated swing');

    }, {
        offset: '70%'
    });

    $('#sqr23').waypoint(function() {

        $('#sqr23').addClass('animated flash');

    }, {
        offset: '70%'
    });

    $('#sqr24').waypoint(function() {

        $('#sqr24').addClass('animated swing');

    }, {
        offset: '70%'
    });

});

$( "#burger-nav" ).click(function() {
    $('#Home h2').addClass('open');
    $('#Home .container ul').addClass('open');
});