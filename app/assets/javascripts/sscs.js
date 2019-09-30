function ShowHideUpdates () {
    var self = this;

    self.toggleUpdates = function() {
        var $updatesContainer = $('.updates-container');
        var $i = $('.updates-toggle i');
        $i.on('click', function() {
            var $this = $(this);
            if ($this.hasClass('fa-caret-right')) {
                $this.removeClass('fa-caret-right');
                $this.addClass('fa-caret-down');
                $this.find('span').text('Hide previous updates');
                $updatesContainer.css('display', 'block');
            } else {
                $this.removeClass('fa-caret-down');
                $this.addClass('fa-caret-right');
                $this.find('span').text('View previous updates');
                $updatesContainer.css('display', 'none');
            }
        })
    }
}

function tabs() {
  // Tabs

// as JS is working, add 'tabs' class, which will style tabs and allow
// functionality
  $('.js-tabs').addClass('tabs');

// hide all of the tab content for now
  $('.tab-content').hide();
//show the first tab and content
  $('.tabs').each(function(){
    $(this).find('.tab-content:first').show();
    $(this).find('ul li:first').addClass('active');
  });

// click function for tabs
  $('.tabs__link').click(function(e){
    e.preventDefault();

    var tabs = $(this).parents('.tabs');
    var link = $(this);
    var currentTab = link.attr('href');

    // remove active class from nav and add to newly selected tab
    tabs.find('li').removeClass('active');
    link.parent('li').addClass('active');

    // hide all of the tab content and show newly selected then update hash in URL
    tabs.find('.tab-content').hide();
    $(currentTab).show();
    history.pushState({}, '', currentTab);
  });

// check for hash in url and open that tab if its there
  var hash = window.location.hash;
  if (hash) {
    $('.tabs__link[href="' + hash +'"]').click();
  }
}

$(document).ready(function () {
    var showHideUpdates =  new ShowHideUpdates();
    showHideUpdates.toggleUpdates();
    tabs();
});
