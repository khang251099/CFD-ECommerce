$(".drop-trigger").on("click", function () {
  $(this.hash).toggleClass("active").focus();
});

$(".drop-down").on("focusout", function () {
  $(this).removeClass("active");
});
