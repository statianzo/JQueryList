(function(){
  function updateStats(){
    if ($('.todo').length){
      $('#todo-stats').show();
      var remaining = $('.todo:not(.complete)');
      $('#remaining-count').text(remaining.length);
      $('#remaining-count-word').text(remaining.length === 1 ? 'item' : 'items');
      
      var complete = $('.todo.complete');
      if (complete.length){
        $('.todo-clear').show();
        $('#completed-count').text(complete.length);
        $('#completed-count-word').text(complete.length === 1 ? 'item' : 'items');
        $('.todo-clear a').click(function(){
          complete.remove();
          updateStats();
        });
      }
      else {
        $('.todo-clear').hide();
      }
    }
    else {
      $('#todo-stats').hide();
    }
  }
  $('#create-todo').submit(function(e){
    e.preventDefault();
    var item = $('#viewItem')
      .tmpl({text: $('#new-todo').val(), complete:false})
      .appendTo('#todo-list');

    //Complete items
    $('.check', item).click(function(){
      if ($(this).is(':checked')) {
        item.addClass('complete');
      }
      else {
        item.removeClass('complete');
      }
      updateStats();
    });

    //Remove items
    $('.todo-destroy',item).click(function(){
      item.remove();
      updateStats();
    });
    $('#new-todo').val('');
    updateStats();
  });
}());
