var timeString = document.querySelector("#timeString");
var goup = document.querySelector(".goup");
var waves = document.querySelector(".waves");
var overMsg = document.getElementById("overMsg");
localStorage.setItem("limit", 10 * 1000);
localStorage.setItem("msg", "Time is over");
var repeat;

function init() {
  repeat = setInterval(ticktok, 80);
}

var startBtn = document.getElementById("start");
startBtn.addEventListener("click", function (event) {
  overMsg.style.visibility = "hidden";
  localStorage.setItem("start", new Date().getTime());
  setTimeout(init, 100);
});

function stop() {
  overMsg.innerText = localStorage.getItem("msg");
  overMsg.style.visibility = "visible";
  localStorage.removeItem("start");
  timeString.innerText = `00 : 00`;
  goup.style.height = "15vh";
  waves.style.bottom = "8vh";
}

var stopBtn = document.getElementById("stop");
stopBtn.addEventListener("click", function (event) {
  let before = new Date();
  clearInterval(repeat);
  var returnValue = confirm("Are you really going to Stop?");

  if (returnValue) {
    stop("Next time you can do better");
  } else {
    let start = parseInt(localStorage.getItem("start"));
    localStorage.setItem("start", start + (new Date() - before));
    repeat = setInterval(ticktok, 80);
  }
});

function ticktok() {
  let end = new Date().getTime();
  let time = end - parseInt(localStorage.getItem("start"));

  let m = parseInt(time / 1000 / 60)
    .toString()
    .padStart(2, "0");
  let s = (parseInt(time / 1000) % 60).toString().padStart(2, "0");
  timeString.innerText = `${m} : ${s} `;

  let limit = parseInt(localStorage.getItem("limit"));
  console.log(typeof time, typeof limit);
  if (limit < time) {
    clearInterval(repeat);
    stop();
  } else {
    let process = parseInt((10000 * time) / limit);
    goup.style.height = `${process / 115 + 15}vh`;
    waves.style.bottom = `${process / 115 + 8}vh`;
  }
}
