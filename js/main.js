heading.addEventListener("click", myFunction);


function myFunction() {
    var count = 0;
    var section1 = document.createElement("section");
    var p = document.createTextNode("This is click number " + count );
    section1.appendChild(p);
    document.body.appendChild(section1);
    count++;
    p.innerHTML = count;
};



var nameInput1 = document.getElementById('firstname');
var nameInput2 = document.getElementById('lastname');
var nameInput3 = document.getElementById('email');
var nameInput4 = document.getElementById('message');


document.querySelector('form.event').addEventListener("submit", function (e) {

    //prevent the normal submission of the form
    e.preventDefault();

    console.log('The firstName is ' + nameInput1.value);
    console.log('The lastName is ' + nameInput2.value);
    console.log('The email is ' + nameInput3.value);
    console.log('The message is ' + nameInput4.value);
});



document.getElementById("q1").addEventListener("click", function(){
    document.getElementById("a1").innerHTML = "1853";
});

document.getElementById("q2").addEventListener("click", function(){
    document.getElementById("a2").innerHTML = "W. Kent Fuchs";
});

document.getElementById("q3").addEventListener("click", function(){
    document.getElementById("a3").innerHTML = "52,519";
});
