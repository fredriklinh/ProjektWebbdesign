function myFunction() {
  var popup = document.getElementById("minBokning");
  popup.classList.toggle("visa");
  document.getElementById("input1").value = "";
  document.getElementById("input2").value = "";
  document.getElementById("input3").value = "";
  document.getElementById("input4").value = "";
  document.getElementById("input5").value = "";
  document.getElementById("input6").value = "";
  document.getElementById("input7").value = "";
}
function myFunction1() {
  var popdown = document.getElementById("minTablå");
  popdown.classList.toggle("visa");
}
smoothScroll.init();
