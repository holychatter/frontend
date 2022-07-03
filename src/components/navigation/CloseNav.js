
	function CloseNav() {
		if (window.innerWidth <= 850) {
			document.getElementById("hcSidenavId").style.width = "0px";
		} else {
			document.getElementById("hcSidenavId").style.width = "60px";
		}

		var hcSideBarTextElements = document.getElementsByClassName("hc-sidebar-text");
		Array.prototype.filter.call(hcSideBarTextElements, function (hcSideBarTextElement) {
			return hcSideBarTextElement.style.display = 'none';
		});
	}

    export default CloseNav