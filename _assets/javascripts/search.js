// Jekyll Simple Search options
$(document).ready(function() {
    SimpleJekyllSearch({
        searchInput: document.getElementById('search-field'),
        resultsContainer: document.getElementById('search-results'),
        json: '/search.json',
        searchResultTemplate: '<li><article><a href="{url}">{title} <span class="entry-date"><time datetime="{date}">{shortdate}</time></span></a></article></li>',
        noResultsText: '<p>Nothing found.</p>'
  });


    var bs = {
        close: $(".fa-times-circle"),
        searchform: $(".search-form"),
        body: $("body"),
        dothis: $(".dosearch")
    };

    var close = function() {
        $('.search-wrapper').removeAttr( 'style' );
        bs.searchform.removeClass('active');
        $("body").removeClass('search-overlay');
    };

    bs.dothis.on('click', function() {
        $('.search-wrapper').css({ display: "block" });
        bs.searchform.find('input').focus();
        bs.body.addClass('search-overlay');
        bs.searchform.addClass('active');

    });

    $(document).click(function(event) {
        if(!$(event.target).closest('.search-form').length
        && !$(event.target).closest('.dosearch').length) {
            if(bs.searchform.hasClass('active')) {
                close();
            }
        }
    });

    bs.close.on('click', close);

    $(document).keyup(function(e) {

      if (e.keyCode == 27) {
        if(bs.searchform.hasClass('active'))
          close();
      }
    });

});
