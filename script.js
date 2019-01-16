window.addEventListener("load", () => {
    let skills = document.querySelectorAll("[data-level]");

    const levelFactory = (level) => {
        let aux = "";

        for (i = 0; i < Math.floor(level); i++) {
            aux += "<i class='fas fa-star' style='font-size: 12px'></i>"
        }
        if (level - Math.floor(level) != 0) {
            aux += "<i class='fas fa-star-half' style='font-size: 12px'></i>"
        }
        return aux;
    }

    Object.entries(skills).forEach((entry) => {
        entry[1].innerHTML = levelFactory(entry[1].dataset.level)
    });

    let btnLinkedin = document.getElementById("btn-linkedin");
    btnLinkedin.addEventListener("click", () => { window.location = "https://linkedin.com/in/halison-xavier" })
    
    let btnGithub = document.getElementById("btn-github");
    btnGithub.addEventListener("click", () => { window.location = "https://github.com/xavierhalison" })

    let btnDown = document.getElementById("btn-down");
    btnDown.addEventListener("click", () => { window.location = "#sidebar" })
});