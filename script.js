const brush = document.querySelector(".brush");
const content = document.querySelector(".page-content");

window.addEventListener("scroll", function() {
 const scrollTop = window.pageYOffset;
 const contentTop = content.offsetTop - window.innerHeight;

 if (scrollTop >= contentTop) {
  const contentHeight = content.offsetHeight;
  const currentScroll = scrollTop - contentTop;
  const percentage = currentScroll / contentHeight * 100;

  brush.style.width = `${percentage}%`;
 } else {
  brush.style.width = "0";
 }
});