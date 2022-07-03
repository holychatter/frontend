function openOrCloseNav() {
  if (document.getElementById("hcSidenavId").style.width == "250px") {
    closeNav();
  } else {
    openNav();
  }
}


function openNav() {
  var hcSideBarTextElements = document.getElementsByClassName("hc-sidebar-text");
  Array.prototype.filter.call(hcSideBarTextElements, function(hcSideBarTextElement){
      return hcSideBarTextElement.style.display = 'inline-block';
  });

  document.getElementById("hcSidenavId").style.width = "250px";
}


function closeNav() {
  if (window.innerWidth <= 850) {
    document.getElementById("hcSidenavId").style.width = "0px";
  } else {
    document.getElementById("hcSidenavId").style.width = "60px";
  }

  var hcSideBarTextElements = document.getElementsByClassName("hc-sidebar-text");
  Array.prototype.filter.call(hcSideBarTextElements, function(hcSideBarTextElement){
      return hcSideBarTextElement.style.display = 'none';
  });
}
