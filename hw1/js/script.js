let name=prompt("Lütfen adınızı giriniz:");
let span=document.getElementsByTagName("span");
span[0].innerHTML=`<strong>${name}</strong>`;
setInterval(() => {
    let date=new Date();
    if(date.getHours()<10){
        span[1].innerHTML='0';
    }
    else{
        span[1].innerHTML='';
    }
    span[1].innerHTML+=`${date.getHours()}:`
    if(date.getMinutes()<10){
        span[1].innerHTML+='0';
    }
    span[1].innerHTML+=`${date.getMinutes()}:`
    if(date.getSeconds()<10){
        span[1].innerHTML+='0';
    }
    span[1].innerHTML+=`${date.getSeconds()} `
    let day=date.getDay();
    switch(day){
        case 0:
            span[1].innerHTML+='Pazar';
            break;
        case 1:
            span[1].innerHTML+='Pazartesi';
            break;
        case 2:
            span[1].innerHTML+='Salı';
            break;
        case 3:
            span[1].innerHTML+='Çarşamba';
            break;
        case 4:
            span[1].innerHTML+='Perşembe';
            break;
        case 5:
            span[1].innerHTML+='Cuma';
            break;
        case 6:
            span[1].innerHTML+='Cumartesi';
            break;
    }
}, 1000);