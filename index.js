
var v1=document.getElementById('title').value;
console.log(v1);
var txt=document.getElementsByClassName('output');
function km(){
    document.getElementById('t1').innerHTML=`KILOMETERS TO MILES CONVERSION`;
    var v1=document.getElementById('val').value;
    kms=v1*0.621;
    // txt.innerHTML=`The ${v1} KILOMETERS is Equal to ${kms} MILES`;
    document.querySelector('.output').innerHTML = `The ${v1} KILOMETERS is Equal to ${kms} MILES`;
}
function mt(){
    document.getElementById('t1').innerHTML=`MILES TO KILOMETERS CONVERSION`;
    var v1=document.getElementById('val').value;
    console.log(v1);
    kms=1.609*v1;
    document.querySelector('.output').innerHTML = `The ${v1} MILES is Equal To ${kms} KILOMETERS`;

}
