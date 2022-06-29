//Get the Element
var inputContentActivityEl = $('#activityContent');
var btnAddActivityEl = $('#addActivity');
var listActivitiesEl = $('#listActivity');

var list_activities = [];

// FUNCTIONALITY
btnAddActivityEl.on('click', function(e){
  
  var activity = {
    content: inputContentActivityEl.val(),
    done: false
  }

  list_activities.push(activity);

  setActivityHtml(activity, list_activities.length - 1 );

  e.preventDefault();
})

var setActivityHtml = function(activity, index){
  var html = `<li class="list-group-item d-flex justify-content-between align-items-center">
                <p>`+ activity.content +`</p>
                <div class="text-center">
                  <button class="btn btn-success my-2" onClick="checkActivity(this)">
                    <i class="fa fa-check"></i>
                  </button>
                  <button class="btn btn-danger my-2" onClick="deleteActivity(`+ index +`, this)">
                    <i class="fa fa-trash"></i>
                  </button>
                </div>
              </li>`;
  
  listActivitiesEl.append(html); //add HTML to Element List Activity
}

var checkActivity = function(btnEl) {
  toggleCheckButton(btnEl);
}

var toggleCheckButton = function(btnEl) {
  var el = $(btnEl);
  
  if( el.hasClass('btn-success') ) {
    el.removeClass('btn-success');
    el.addClass('btn-warning');
    el.children('i').removeClass();
    el.children('i').addClass('fas fa-undo');
    el.parent().siblings("p").css("text-decoration", "line-through");
  }
  else {
    el.removeClass('btn-warning');
    el.addClass('btn-success');
    el.children('i').removeClass();
    el.children('i').addClass('fa fa-check');
    el.parent().siblings("p").css("text-decoration", "unset");
  }

}

var deleteActivity = function(index, btnDeleteEl) {
  var el = $(btnDeleteEl);
  el.parent().parent("li").remove();

  //remove an activity from list_activities array by index number
  list_activities.splice(index, 1);
}