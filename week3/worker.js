function counting() {
    postMessage(new Date())
    setInterval("counting()", 1000)
}
counting();