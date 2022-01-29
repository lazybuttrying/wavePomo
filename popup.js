var popup = document.querySelector(".popup");
var btn = document.querySelector(".btn");
var timeString = document.querySelector("#timeString");

var setting = document.getElementById("setting");
setting.addEventListener("click", function (event) {
  popup.style.visibility = "visible";
  btn.style.visibility = "hidden";
  timeString.style.visibility = "hidden";
});

var exit = document.getElementById("exit");
exit.addEventListener("click", function (event) {
  popup.style.visibility = "hidden";
  timeString.style.visibility = "visible";
  btn.style.visibility = "visible";
});

var setTime = document.getElementById("setTime");
setTime.addEventListener("click", function (event) {
  let limit = 1000 * 60 * event.target.parentNode.querySelector("#time").value;
  localStorage.setItem("limit", limit);
  console.log(event.target.parentNode.querySelector("#msg").value);
  let msg = event.target.parentNode.querySelector("#msg").value;
  localStorage.setItem("msg", msg);
  overMsg.innerText = "Successfully Saved";
});
