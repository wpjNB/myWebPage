/* Sidebar */
var toggleSidebar = function(){
  $("#sidebar").toggleClass('sidebar-hide');
  $("#toggle-sidebar").toggleClass('sidebar-button-shift');
}
var hideSidebar = function(){
  $("#sidebar").addClass('sidebar-hide');
  $("#toggle-sidebar").addClass('sidebar-button-shift');
}
$("#toggle-sidebar").on("click",toggleSidebar);
$("header").on("click",hideSidebar);
$("#mainContent").on("click",hideSidebar);
$("#footerContent").on("click",hideSidebar);