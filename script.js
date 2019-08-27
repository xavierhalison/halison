window.addEventListener("load", () => {
    let more = document.querySelector("#more");
    let readme = document.querySelector("#readme");
    let experience = document.querySelector("#experience");
    let contact = document.querySelector("#contact");
    let begin = document.querySelector("#begin");


    var smoothScroll = (query) => {
        document.querySelector(query).scrollIntoView({ behavior: "smooth" })
    }

    more.addEventListener("click", () => {
        smoothScroll("#sec2")
    })

    readme.addEventListener("click", () => {
        smoothScroll("#sec3")
    })

    experience.addEventListener("click", () => {
        smoothScroll("#sec4")
    })

    contact.addEventListener("click", () => {
        smoothScroll("#sec5")
    })

    begin.addEventListener("click", () => {
        smoothScroll("#sec1")
    })

});