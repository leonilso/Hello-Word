let container = document.getElementById("container")

container.addEventListener( "mouseleave", event => {
    container.style.width = "800"
    container.style.height = "600"
})
container.addEventListener( "mouseout", event => {
    container.style.width = "600"
    container.style.height = "400"
})