document.getElementById("form").addEventListener("submit",(e)=>{
    e.preventDefault();

    let users = {
        img : document.getElementById("img").value,
        name : document.getElementById("name").value,
        email : document.getElementById("email").value,
        Id : document.getElementById("stid").value,
        pass : document.getElementById("password").value,
        course : document.getElementById("course").value,
        Number : document.getElementById("number").value,
    };

    fetch("http://localhost:3000/user",{
        method : "POST",
        headers :{"content-Type": "application/json"},
        body : JSON.stringify(users),
    });
});

const uimaker = (data)=> {
    document.getElementById("uimaker").innerHTML = "";
    data.map((item) => {
        let img = document.createElement("img");
        img.src = item.img;
        let Id = document.createElement("h4");
        Id.innerHTML = item.Id;
        let name = document.createElement("h2");
        name.innerHTML = item.name;
        let email = document.createElement("h4");
        email.innerHTML = item.email;
        let pass = document.createElement("h4");
        pass.innerHTML = item.pass;
        let course = document.createElement("h4");
        course.innerHTML = item.course;
        let number = document.createElement("h4");
        number.innerHTML = item.number;
        let btn = document.createElement("button");
        btn.innerHTML = "Delete";
        btn.addEventListener("click",()=>{
            dlt(item.id);
        });
        let div = document.createElement("div");
        div.append(img,Id,name,email,pass,course,number,btn);
        document.getElementById("uimaker").append(div);
    });
};

fetch("http://localhost:3000/user",{})
.then((Response)=>Response.json())
.then((data)=> uimaker(data));