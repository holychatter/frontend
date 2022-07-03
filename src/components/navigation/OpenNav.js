
function OpenNav() {
    var hcSideBarTextElements = document.getElementsByClassName("hc-sidebar-text");
    Array.prototype.filter.call(hcSideBarTextElements, function (hcSideBarTextElement) {
        return hcSideBarTextElement.style.display = 'inline-block';
    });
    document.getElementById("hcSidenavId").style.width = "250px";
}

export default OpenNav
