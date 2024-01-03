let intervalID = null

function Forgatas(){
    if(intervalID != null)
        return

    let startDate = new Date()
    intervalID = setInterval(function(){
        let date = new Date()
        let sec =  parseInt((date - startDate) / 1000)
        document.getElementById("outCircle").style.rotate = `${360 / 20 * sec}deg`
        //document.getElementById("timer").style.rotate = `-${360 / 20 * parseInt((date - startDate) / 1000)}deg`
        document.getElementById("timer").innerHTML = `00:${String(20 - sec).padStart(2, '0')}`;
        if(sec >= 20){
            clearInterval(intervalID)
            intervalID = null
        }
    },100)
}
function Reset(){
    location.reload();
}
