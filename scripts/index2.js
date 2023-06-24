$(function () {
  $.fn.actions = function () {
    // Check variables to handle "impotant" & "done" clash
    var imp = false;
    var done = false;
    // Mark Important:
    $(".important-btn").click(function () {
      if (imp) {
        imp = false;
        $(this).parent().parent().removeClass("important");
        if (done) {
          $(this).parent().parent().addClass("done");
        }
      } else {
        imp = true;
        $(this).parent().parent().addClass("important");
        if (done) {
          $(this).parent().parent().removeClass("done");
        }
      }
    });

    // Mark Complete:
    $(".done-btn").click(function () {
      let task = $(this).parent().parent();
      if (done) {
        done = false;
        $(this).parent().parent().removeClass("done-txt");
        if (!imp) {
          $(this).parent().parent().removeClass("done");
        }
      } else {
        done = true;
        $(this).parent().parent().addClass("done-txt");
        if (!imp) {
          $(this).parent().parent().addClass("done");
        }
      }
    });

    // Delete Functionality:
    $(".delete-btn").click(function () {
      $(this).parent().parent().remove();
    });
  };

  // Local Storage Functionality:

  window.onload = () => {
    if (window.localStorage.length !== 0) {
      let tasks = document.getElementById("tasks");
      tasks.innerHTML = window.localStorage.getItem("saved");
      $.fn.actions();
    }
  };

  window.onunload = () => {
    let tasks = document.getElementById("tasks");
    window.localStorage.clear;
    window.localStorage.setItem("saved", tasks.innerHTML);
  };

  // Menu

  $("#menu").hide();
  $("#menu-btn").click(function () {
    $("#menu").slideToggle(200);
  });
  $("#menu-close").click(function () {
    $("#menu").slideToggle(200);
  });

  // Form to add tasks
  $("#adder").on("submit load", function (e) {
    var task = $.trim($("#new-task").val());
    if (task !== "") {
      // Task HTML:
      res = '<div class="task">';
      res += '<div class="task-text">' + task + "</div>";
      res += "<div>";
      res +=
        '<img src="css/images/icons/check-line.svg" alt="" class="done-btn">';
      res +=
        '<img src="css/images/icons/x.svg" alt="" class="delete-btn" id="del">';
      res +=
        '<img src="css/images/icons/star-line.svg" alt="" class="important-btn">';
      res += "</div>";
      res += "</div>";

      // Adding the task:
      $("#tasks").append(res);

      // Defines the actions
      $.fn.actions();
    }

    $("#new-task").val("");
    e.preventDefault();
  });

  //Dark Mode Light Mode Toggle.
  $("#theme").click(function () {
    $("body").toggleClass("dark-background");
    $(".task").toggleClass("dark-task");
    $("header").toggleClass("dark-header");
  });
  /*****/
});
