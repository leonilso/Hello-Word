let container = document.getElementById("container")

container.addEventListener( "mouseover", event => {
    container.style.width = "800"
    container.style.height = "600"
})
container.addEventListener( "mouseleave", event => {
    container.style.width = "600"
    container.style.height = "400"
})