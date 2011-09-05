(function(){
  $('#create-todo').submit(function(e){
    e.preventDefault();
    var item = $('#viewItem')
      .tmpl({text: $('#new-todo').val(), complete:false})
      .appendTo('#todo-list');

    //Complete items
    $('.check', item).click(function(){
      if($(this).is(':checked')){
        item.addClass('complete');
      }
      else {
        item.removeClass('complete');
      }
    });

    //Remove items
    $('.todo-destroy',item).click(function(){
      item.remove();
    });
    $('#new-todo').val('');
  });
}());
