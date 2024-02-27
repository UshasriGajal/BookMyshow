
document.getElementById("movie").onclick = myfunction()
function myfunction(){
    // window.location.href="Display.html"
    console.log("yes")
}

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

// function post(){
//     var UserName=document.getElementById('uName').value
// var mail = document.getElementById('mail').value;
// var password = document.getElementById('password').value;
//     fetch("http://localhost:3000/user")
//       .then(response => response.json())
//       .then(data =>{
//         // console.log(data)
//         // if(data.)
//         // console.log(data[1])
//         for(var i=0;i<data.length;i++){
            
//             if(data[i].mail===mail){
//                 count++
//                 console.log(data[i].mail)
//                 alert("Email already exit,Please enter new one !!")
//                 break
//             }
//             // else{
//             //     count++
//             // }
//             // console.log(data[i].mail)
            
//             // if(UserName<6){
//             //     alert("Please enter atleast 6 characters")
//             //     break
//             // }
//             // break
//         }
//         if(count===0){
//             console.log("yes")
//             fetch("http://localhost:3000/user",{
        
//             method: "POST",
//             body: JSON.stringify({UserName,mail,password}),
//             headers: {
//                 "Content-type": "application/json"
//             },
//             })
//             .then(response => response.json())
//             .then(data =>{
//                 alert("You are signed-up successfully")
//                 // localStorage.setItem("customerUsername", person.username)
//                 window.location.href = "login.html"
//             })
//             // break
//         }
//         // console.log(data)

    
//             } );
    
    

// }

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