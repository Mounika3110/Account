function hack(){
    let x= +prompt("Enter the pin")
    const pin=4321
    const valid = x === pin
    if(valid){
    alert("Acces Granted");
    window.location.href="details.html"
}
    else{
        alert("plese enter valid pin");
}
}