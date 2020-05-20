$(function () {
    let desp = $('#desp');
    let devp = $('#devp');
    let prop = $('#prop');
    let destext = $('#destxt');
    let devtext = $('#devtext');
    let protext = $('#protext');

    $(desp).hide();
    $(devp).hide();
    $(prop).hide();

    //Show paragraph content
        $('.des').on('click', function () {
            $('.des').slideUp('slow');
            $(desp).show(500);
            $(destext).animate({fontWeight:'bolder',fontSize:'30px'})

        });
        $('.dev').on('click', function () {
            $('.dev').slideUp('slow');
            $(devp).show(500);
            $(devtext).animate({fontWeight:'bolder',fontSize:'30px'})
        });
        $('.pro').on('click', function () {
            $('.pro').slideUp('slow');
            $(prop).show(500);
            $(protext).animate({fontWeight:'bolder',fontSize:'30px'})
        });
$("button.findMatch").click(function(){
    let age = $(".ageGroup option:selected").val();
    //add array for age groups
    alert("hey");


});
