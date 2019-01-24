
 // <div class="fullScreen">
 //   <img src="./images/wrong.png">
 //   <button class="close">Close</button>
 // </div>


var galleryItems = document.querySelectorAll(".gallery__item");
var body = document.querySelector("body");

for (var i = 0; i < galleryItems.length; i++) {

    galleryItems[i].addEventListener("click", function () {

        var fullScreenDiv = document.createElement("div");
        fullScreenDiv.className = "fullScreen";

        var fullScreenBoxDiv = document.createElement("div");
        fullScreenDiv.appendChild(fullScreenBoxDiv);
        fullScreenBoxDiv.className = "box";

        var imgSrc = this.firstElementChild.getAttribute("src");
        var fullScreenImg = document.createElement("img");
        fullScreenImg.setAttribute("src", imgSrc);
        fullScreenBoxDiv.appendChild(fullScreenImg);

        var toCloneInfo = this.children[1];
        var fullScreenInfo = toCloneInfo.cloneNode(true);
        fullScreenBoxDiv.appendChild(fullScreenInfo);
        for (var i = 0; i < fullScreenInfo.children.length; i++) {
            fullScreenInfo.children[i].className = "";
        }

        var fullScreenCloseBtn = document.createElement("button");
        fullScreenCloseBtn.className = "close";
        fullScreenBoxDiv.appendChild(fullScreenCloseBtn);

        fullScreenCloseBtn.addEventListener("click", function () {

            body.removeChild(fullScreenDiv);
        })

        var fullScreenInfoHideBtn = document.createElement("button");
        fullScreenInfoHideBtn.innerText = "Info";
        fullScreenInfoHideBtn.className = "info"
        fullScreenBoxDiv.children[1].appendChild(fullScreenInfoHideBtn);

        fullScreenInfoHideBtn.addEventListener("click", function () {

            this.parentElement.classList.toggle("full-info")

            var info = this.parentElement.querySelector("p");
            info.classList.toggle("show-info")

            if (this.innerText === "Hide") {
                this.innerText = "Info";
            } else {
                this.innerText = "Hide";
            }
        })

        body.appendChild(fullScreenDiv);
    });

    galleryItems[i].addEventListener("mouseover", function () {

        for (var i = 0; i < galleryItems.length; i++) {
            galleryItems[i].classList.add("smoke");
        }

        this.classList.remove("smoke");
    })

    galleryItems[i].addEventListener("mouseout", function () {

        for (var i = 0; i < galleryItems.length; i++) {
            galleryItems[i].classList.remove("smoke");
        }
    })
}

document.addEventListener("keyup", function (event) {

    if (event.code = "Escape") {
        var fullScreenDiv = document.querySelector(".fullScreen");

        if (fullScreenDiv) {
            body.removeChild(fullScreenDiv);
        }

    }
})
