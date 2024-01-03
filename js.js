function Forgatas(){
    let startDate = new Date()
    setInterval(function(){
        let date = new Date()
        document.getElementById("outCircle").style.rotate = `${360 / 20 * parseInt((date - startDate) / 1000)}deg`
        document.getElementById("timer").style.rotate = `-${360 / 20 * parseInt((date - startDate) / 1000)}deg`
    },100)
}
function Reset(){
    location.reload();
}