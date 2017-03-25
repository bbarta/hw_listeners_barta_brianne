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

    console.log(nameInput1.value);
    console.log(nameInput2.value);
    console.log(nameInput3.value);
    console.log(nameInput4.value);
});
