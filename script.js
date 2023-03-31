// import { send } from "./grow";

window.onload = function(){
    let power = '3.3'
    // send();
    var content = `
        power: ${power}
        soc:
        load:
        `

    document.getElementById('solar-data').innerHTML = content

};