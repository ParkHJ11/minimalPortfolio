$(function(){

    /* common element form */
    var $fields = $('.request-field'),
        $input = $fields.find('input'),
        $select = $fields.find('select'),
        $textarea = $fields.find('textarea');

    //$('input,select,textarea').click.. 이라고해도 동일
    $input.add($select).add($textarea).click(function(){

        $fields.removeClass('active');
        $(this).closest('.request-field').addClass('active');
    });

    /* portfolio filter */
    // init Isotope
    var $grid = $('.latest_portfolio').isotope({
        // options
        itemSelector:'.item',
        layoutMode:'fitRows'
    });
    // filter items on button click
    $('.portfolio-filters').on( 'click', 'button', function() {
        var filterValue = $(this).attr('data-filter');
        $grid.isotope({ filter: filterValue });
    });

});












