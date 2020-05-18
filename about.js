function myFunction() {
  var x = document.getElementById("Idabout");
  if (x.innerHTML === "") {
    x.innerHTML = "<h3>Foodie is India's online food ordering and delivery platform. Founded in 2020,Foodie is operating out of 100 Indian cities.<h3>";
  } else {
    x.innerHTML = "";
  }
}
function myFunction1() {
  var x = document.getElementById("Idhelp");
  if (x.innerHTML === "") {
    x.innerHTML = "<h3>These terms of use govern your use of our website www.foodie.in. <br>If you do not agree to these Terms of Use, you may not install, download or use the Services.<br>By installing,downloading or using the Services, you signify your acceptance to the Terms of Use and Privacy Policy (being hereby incorporated by reference herein)<br> which takes effect on the date on which you download, install or use the Services, and create a legally binding arrangement to abide by the same.";
  } else {
    x.innerHTML = "";
  }
}