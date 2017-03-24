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
