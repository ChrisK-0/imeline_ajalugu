// scrolls to accordion on red anchor text click
document.getElementById("goto_accord_anchor").onclick = scrollToAccord;
function scrollToAccord() {
  var scrollDestination = document.getElementById("accord_title");
  scrollDestination.scrollIntoView({ behavior: "smooth", block: "start" });

}