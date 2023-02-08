const parentTag = document.getElementById("parent-col")
let col1 = (document.getElementById("col1"));
let col2 = (document.getElementById("col2"))
let col3 = (document.getElementById("col3"))


//////////main section hide + col1 show///////////////

let image = document.querySelectorAll(".pImage").forEach(image =>
    image.addEventListener("click", () => {
        parentTag.style.display = "none"
        col1.style.display = "block"
    })
)

//////////main section hide + col1 show///////////////
//////////section1 hide+ col2 show///////////////
let image1 = document.querySelectorAll(".col-1Image").forEach(image =>
    image.addEventListener("click", () => {
        col1.style.display = "none"
        col2.style.display = "block"
    })
)
//////////section1 hide+ col2 show///////////////
//////////section2 hide+ col3 show///////////////
let image2 = document.querySelectorAll(".col-2Image").forEach(image =>
    image.addEventListener("click", () => {
        col2.style.display = "none"
        col3.style.display = "block"
    })
)

    //////////section2 hide+ col3 show///////////////