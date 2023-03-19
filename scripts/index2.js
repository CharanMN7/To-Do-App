$(function(){
// Menu



// Form to add tasks
/*  Task:
<div class="task">
  <div class="task-text">Text goes here</div>
  <div>
    <img src="css/images/icons/check-line.svg" alt="" class="done-btn">
    <img src="css/images/icons/x.svg" alt="" class="delete-btn">
    <img src="css/images/icons/star-line.svg" alt="" class="important-btn">
  </div>
</div>
*/

$("#adder").submit(function(e){
  var task = $("#new-task").val();
  if ($.trim(task) !== ""){
    res = '<div class="task"><div class="task-text">' + task + '</div>';
    res += '<div>';
    res += '<img src="css/images/icons/check-line.svg" alt="" class="done-btn">';
    res += '<img src="css/images/icons/x.svg" alt="" class="delete-btn" id="del">';
    res += '<img src="css/images/icons/star-line.svg" alt="" class="important-btn">';
    res += '</div>';
    res += '</div>';
    $("#tasks").append(res);
    $("#new-task").val("");
  }
  e.preventDefault();
});


/*****/
});