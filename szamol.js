
function szamol(){
    a = parseFloat(document.getElementById("a").value)
    b = parseFloat(document.getElementById("b").value)

    // pont = a*10 + b*150

    document.getElementById("pont").value = pont;
    
    if (a<0){
        alert("A szám nem lehet kisebb 0-nál!")
        return 1

    } else{
        pont = a*10 + b*150
    }
    if(b<0){
        alert("A szám nem lehet kisebb 0-nál!")
    } else{
        pont = a*10 + b*150 
    }
}
