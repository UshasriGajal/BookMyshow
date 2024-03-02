// document.getElementById("movie").onclick = myfunction()
// function myfunction(){
//     // window.location.href="Display.html"
//     console.log("yes")
// }

function fetching(){
    var fetchcount=0
    var mail = document.getElementById('mail').value;
    var password = document.getElementById('password').value;
    // password=Number(password)
    // console.log((mail),(password))
    fetch("http://localhost:3000/user")
      .then(response => response.json())
      .then(data =>{
        console.log(data[1].mail==mail)
        for(var i=0;i<data.length;i++){
            if(data[i].mail==mail && data[i].password==password){
                fetchcount++
                alert("You're logged in Successfully!!")
                window.location.href="bookMyshow.html"
                console.log("yes")
            }
        }
        if(fetchcount==0){
            alert("Enter valid details!!")
        }
        // console.log(mail)
            } );
}

var count=0


function post(){
    var UserName=document.getElementById('uName').value
var mail = document.getElementById('mail').value;
var password = document.getElementById('password').value;
var count=0
    fetch("http://localhost:3000/user")
      .then(response => response.json())
      .then(data =>{
        
        for(var i=0;i<data.length;i++){
            console.log(data[i].mail==mail)
            if(data[i].mail==mail){
                count++
            }
        }
        if(count>0){
            alert("Email already exist! Please try new one")
        }
        else{
            fetch('http://localhost:3000/user', {
                method: 'POST',
                body: JSON.stringify({UserName,mail,password}),
                headers: {
                    'Content-Type': 'application/json',
                },
                
            })
            .then(response => response.json())
            .then(updatedData => {
                alert("You are signed-up successfully")
                window.location.href = "login.html"
                // console.log('Data posted successfully:', updatedData);
            })
        }
    
            } );
}

// function display(){
//     var div=document.createElement("div")
//     div.setAttribute("class","rundiv")
//     var divimg=document.getElementById("divimg")
//     divimg.append(div)
//     document.body.append(divimg)
//     console.log("yes")
// }
fetch("http://localhost:3000/poster")
.then(response=>response.json())
.then(data=>{
    for(var i=0;i<data.length;i++){
        console.log(data[i].MovieImg)
        console.log(data[i].movieName)
        console.log(data[i].genre)
        divimg=document.createElement("img")
        divimg.setAttribute("class","cartimg")
        divimg.src+=data[i].MovieImg

        var moviename=document.createElement("h5")
        moviename.innerText+=data[i].movieName
        moviename.setAttribute("class","namefont")
        console.log(moviename)
        var genre=document.createElement("h6")
        genre.innerText+=data[i].genre
        genre.setAttribute("class","genrefont")
        console.log(genre)
        var matdiv=document.createElement("div")
        matdiv.setAttribute("class","imgmatter")
        matdiv.append(moviename,genre)
        cartimg=document.getElementById("item"+i)
        var button=document.createElement("button")
        button.setAttribute("class","butclass")
        button.append(divimg,matdiv)
        button.addEventListener('click',movieDetails)
        cartimg.append(button)
        // h5.append(moviename)
        // genre.append(genre)
    }
    
    // document.body.append(cartimg)
    // image.src+=obj.result[n].posterURLs[780]
})

 function movieDetails(){
    var details=document.getElementById("bodyMatter")
    document.getElementById("bodyMatter").innerHTML=" "
    console.log("yes")
 }