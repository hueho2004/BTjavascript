function myFunction1(){
    var a = document.getElementById('text_1').value;
    a = parseInt(a);
    var b = document.getElementById('text_2').value;
    b = parseInt(b);
    var c = document.getElementById('select').value
    c = parseInt(c);
    var k;
    switch(c){
        case 1:{
            k=(a+(b*2))/3;
            k=parseFloat(k)
            document.getElementById('result').value=k;
        }
        case 2:{
            k=((a*2)+(b*3))/5;
            k=parseFloat(k)
            document.getElementById('result').value=k;
        }
        case 3:{
            k=((a*3)+(b*4))/7;
            k=parseFloat(k)
            document.getElementById('result').value=k;
        }
    }
    if(k>=9){
        document.getElementById('display').innerHTML="Hoc sinh giỏi";
        document.getElementById('display').style.color="red";
    }   
    if(k>=7 && k<9){
        document.getElementById('display').innerHTML="Hoc sinh khá";
        document.getElementById('display').style.color="blue";
    } 
    if(k>=5 && k<7){
        document.getElementById('display').innerHTML="Hoc sinh Trung bình";
        document.getElementById('display').style.color="yellow";
    }   
}
function myFunction2(){
    document.getElementById('text_1').value="";
    document.getElementById('text_2').value="";
}