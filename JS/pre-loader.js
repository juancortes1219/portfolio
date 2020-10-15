var toggle;

function stopLoader() {
  toggle = setTimeout(showPage, 4000);
}

function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("page-content").style.display = "block";
}