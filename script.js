$(function () {
  $(".card").draggable();

  $("#yesButton").click(function () {
    $("#popup-card").removeClass("hidden");
  });

  // Code for the "No" button's hover effect
});
// $(document).on("click", "#yesButton", function () {
//   $("#popup-card").removeClass("hidden");
// });

$(function () {
  $("#yesButton").on("click touchstart", function (e) {
    e.preventDefault(); // Prevent default action of the event
    $("#popup-card").removeClass("hidden");
  });
});

$("#noButton").hover(function () {
  const card = $(this).closest(".card");
  const cardWidth = card.outerWidth();
  const cardHeight = card.outerHeight();

  const buttonWidth = $(this).outerWidth();
  const buttonHeight = $(this).outerHeight();

  const maxX = cardWidth - buttonWidth;
  const maxY = cardHeight - buttonHeight;

  const newX = Math.random() * maxX;
  const newY = Math.random() * maxY;

  $(this).css({
    position: "absolute",
    left: newX + "px",
    top: newY + "px",
  });
});
