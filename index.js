let celcius=document.getElementById('celc');

let fahrenheit=document.getElementById('fahr');

let kelvin=document.getElementById('kelv');

celcius.oninput=()=>{
    let output1=(parseFloat(celcius.value)*9)/5+32;
    let output2=parseFloat(celcius.value)+273.15;
    fahrenheit.value=parseFloat(output1.toFixed(2));
    kelvin.value=parseFloat(output2.toFixed(2));
};

fahrenheit.oninput=()=>{
    let output1=(parseFloat(fahrenheit.value)-32)*5/9;
    let output2=(parseFloat(fahrenheit.value)-32)/1.8000 +273.15;
    celcius.value=parseFloat(output1.toFixed(2));
    kelvin.value=parseFloat(output2.toFixed(2));
}

kelvin.oninput=()=>{
    let output1=parseFloat(kelvin.value)-273.15;
    let output2=(parseFloat(kelvin.value)*9)/5-459.67;
    celcius.value=parseFloat(output1.toFixed(2));
    fahrenheit.value=parseFloat(output2.toFixed(2));

}

