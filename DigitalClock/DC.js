document.getElementById('clock');

setInterval(function(){
    // console.log(date.toLocaleTimeString)
    let date = new Date()
    clock.innerHTML = date.toLocaleTimeString();
},1000)