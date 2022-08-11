$(document).ready(function() {
  $(".list-item").click(function (e) {
    e.preventDefault();
    $('.list-item').toggleClass("active");
  });
  
})

