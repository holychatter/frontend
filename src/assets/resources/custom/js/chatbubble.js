var alreadyOpen = false;
var nbOfTimeOpen = 0;
function closeBubble() {
  document.getElementById("chat-buble-container-id").style.display = "none";
}

function openBubble() {
  document.getElementById("chat-buble-container-id").style.display = "block";
  alreadyOpen = true;
  if (hc_cookie_areCookiesEnabled()) {
    hc_cookie_setCookie("hc-chat-display", "true", "/", 1)
  }
}

function openThenCloseBubble() {
  openBubble();
  nbOfTimeOpen = nbOfTimeOpen + 1;
  setTimeout(function(){
    nbOfTimeOpen = nbOfTimeOpen - 1;
    if (nbOfTimeOpen == 0) {
      closeBubble();
    }
  }, 5000);
}

function openThenCloseBubbleForBigScreen() {
  if (matchMedia('only screen and (min-width: 851px)').matches) {
    openThenCloseBubble();
  }
}


if (hc_cookie_areCookiesEnabled()) {
  if (matchMedia('only screen and (min-width: 851px)').matches) {
    setTimeout(function(){
      if (!alreadyOpen) {
        openThenCloseBubble();
      }
    }, 10000);
  }
}
