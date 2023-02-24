function counting() {
    postMessage(new Date())
    setTimeout("counting()", 1000)
}
counting();