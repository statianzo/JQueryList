(function(){
  $('#create-todo').submit(function(e){
    e.preventDefault();
    $('#viewItem')
      .tmpl({text: $('#new-todo').val(), complete:false})
      .appendTo('#todo-list');
    $('#new-todo').val('');
  });
}());
