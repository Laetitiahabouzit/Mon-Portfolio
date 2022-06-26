function show(montrer) {
    var ob = document.getElementById(montrer);
    if (ob.style.height=="0px" || ob.style.height=="")
        ob.style.height = ob.scrollHeight + "px";
    else (ob.style.height="0px")
}