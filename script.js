$(".arrow").click(function () {
  const ul = $(".slider ul");
  const li = $(".slider ul li");
  const liWidth = li.innerWidth();
  const aroow = $(this).attr("data-arrow");
  if (!ul.is(":animated")) {
    if (arrow === "prev") {
      ul.prepend(li.last())
        .css("margin", `000 -${liWidth}px`)
        .animate({ margin: "0" }, 600);
    }
    if (arrow === "next") {
    }
  }
});
