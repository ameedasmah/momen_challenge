let fname = document.getElementById('fname');
let lname = document.getElementById('lname');
let submit = document.getElementById('submit');

var handelpost = (obj)=>{
    $.ajax({
        type: "POST",
        url: '/',
        contentType: "application/json",
        data: JSON.stringify(obj)
      });
}
let obj = {
    username : '',
    password : ''
}

let handelC = (e)=>{
    e.preventDefault()
    handelpost(obj)
}

let handelU=(e)=>{
    obj.username = e.target.value
}
let handelP=(e)=>{
    obj.password = e.target.value
}


fname.addEventListener('change',handelU );
lname.addEventListener('change', handelP);
submit.addEventListener('click',handelC );