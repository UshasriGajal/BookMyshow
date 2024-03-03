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
        moviename.setAttribute("id","getname")
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
        button.setAttribute("id","movie_"+i)
        button.append(divimg,matdiv)
        button.addEventListener('click',movieDetails)
        cartimg.append(button)
        // h5.append(moviename)
        // genre.append(genre)
    }
    
    // document.body.append(cartimg)
    // image.src+=obj.result[n].posterURLs[780]
})

//  function movieDetails1(){
    
//     var namemovie = document.getElementById("getname").textContent
//     console.log(namemovie)
//     var details=document.getElementById("bodyMatter")
//     document.getElementById("bodyMatter").innerHTML=" "
//     console.log("yes")

//  }










 
function movieDetails()
{
   var ele = document.activeElement.getAttribute("id")
   Id = ele.split("_")[1]
   console.log(Id)
   fetch("http://localhost:3000/poster")
   .then(response => response.json())
   .then(data => {
    console.log(data[Id].movieName)
    var m_n = data[Id].movieName
    sessionStorage.setItem("moviename",m_n)
})
    var details=document.getElementById("bodyMatter")
    details.innerText = " "
    //document.getElementById("bodyMatter").innerHTML=" "
    //console.log(sessionStorage.getItem("moviename"))
     fetch("http://localhost:3000/movies")
     .then(response => response.json())
  
     .then(data =>{
        //var name1 = "Eagel"
        for(var i = 0;i < 5;i++)
        {
            if(data[i].Name == sessionStorage.getItem("moviename"))
            {
                var main_data = data[i]
                console.log(main_data)
           
     
    // Create parent div
var parentDiv = document.createElement("div");
parentDiv.classList.add("parent_div");

// Create child_div1
var childDiv1 = document.createElement("div");
childDiv1.classList.add("child_div1");

// Create img element
var img = document.createElement("img");
img.src = main_data.Movieurl;
img.alt = "img";

// Create div with class "child_div" and text "In cinemas"
var childDiv = document.createElement("div");
childDiv.classList.add("child_div");
childDiv.textContent = "In cinemas";

// Create child_div2-mobile
var childDiv2Mobile = document.createElement("div");
childDiv2Mobile.classList.add("child_div2-mobile");

// Create ratings div
var ratings = document.createElement("div");
ratings.classList.add("ratings");

// Create paragraph for ratings
var ratingsParagraph = document.createElement("p");
ratingsParagraph.classList.add("child_div2-p");
ratingsParagraph.style.fontWeight = "700";
ratingsParagraph.style.fontSize = "13px";
ratingsParagraph.textContent = main_data.ratings;
var span = document.createElement("span");
span.classList.add("child_div2-p-span");
span.style.fontSize = "10px";
span.style.color = "black";
span.textContent = main_data.Votes;
ratingsParagraph.appendChild(span);
ratings.appendChild(ratingsParagraph);

// Create "Rate now" button
var rateNowButton = document.createElement("button");
rateNowButton.classList.add("ratenow");
rateNowButton.textContent = "Rate now";
ratings.appendChild(rateNowButton);

childDiv2Mobile.append(document.createElement("br"),ratings);

// Create lang div
var lang = document.createElement("div");
lang.classList.add("lang");

// Create "2D" button
var button2D = document.createElement("button");
button2D.textContent = "2D";
lang.appendChild(button2D);

// Create "Telugu" button
var buttonTelugu = document.createElement("button");
buttonTelugu.textContent = main_data.lang;
lang.appendChild(buttonTelugu);

childDiv2Mobile.appendChild(lang);

// Create paragraph for timing
var timingParagraph = document.createElement("p");
timingParagraph.classList.add("timing");
timingParagraph.textContent = main_data.About;
childDiv2Mobile.appendChild(timingParagraph);

childDiv1.appendChild(img);
childDiv1.appendChild(childDiv);
childDiv1.appendChild(childDiv2Mobile);

// Create child_div2
var childDiv2 = document.createElement("div");
childDiv2.classList.add("child_div2");

// Create heading h1
var heading = document.createElement("h1");
heading.textContent = main_data.Name;
childDiv2.appendChild(heading);

// Create paragraph for rating
var ratingParagraph = document.createElement("p");
ratingParagraph.classList.add("child_div2-p");
ratingParagraph.style.fontWeight = "700";
ratingParagraph.textContent = main_data.ratings;
var ratingSpan = document.createElement("span");
ratingSpan.classList.add("child_div2-p-span");
ratingSpan.textContent = main_data.Votes;
ratingParagraph.appendChild(ratingSpan);
childDiv2.appendChild(ratingParagraph);

// Create ratings div for child_div2
var ratingsDiv = document.createElement("div");
ratingsDiv.classList.add("ratings");
var addRatingParagraph = document.createElement("p");
addRatingParagraph.textContent = "Add your rating & review";
var yourRatingsMatterSpan = document.createElement("span");
yourRatingsMatterSpan.textContent = "Your ratings matter";
yourRatingsMatterSpan.style.fontSize = "15px";
yourRatingsMatterSpan.style.color = "rgb(146, 150, 154)";
addRatingParagraph.appendChild(document.createElement("br"));
addRatingParagraph.appendChild(yourRatingsMatterSpan);
ratingsDiv.appendChild(addRatingParagraph);
var rateNowButton2 = document.createElement("button");
rateNowButton2.classList.add("ratenow");
rateNowButton2.textContent = "Rate now";
ratingsDiv.appendChild(rateNowButton2);
childDiv2.appendChild(ratingsDiv);

// Create lang div for child_div2
var langDiv2 = document.createElement("div");
langDiv2.classList.add("lang");
var button2D2 = document.createElement("button");
button2D2.textContent = "2D";
langDiv2.appendChild(button2D2);
var buttonTelugu2 = document.createElement("button");
buttonTelugu2.textContent = main_data.lang;
langDiv2.appendChild(buttonTelugu2);
childDiv2.appendChild(langDiv2);

// Create timing paragraph for child_div2
var timingParagraph2 = document.createElement("p");
timingParagraph2.classList.add("timing");
timingParagraph2.textContent = main_data.About;
childDiv2.appendChild(timingParagraph2);

// Create "Book tickets" button for child_div2
var bookTicketsButton = document.createElement("button");
bookTicketsButton.classList.add("book-tickets");
bookTicketsButton.textContent = "Book tickets";
childDiv2.appendChild(bookTicketsButton);

parentDiv.appendChild(childDiv1);
parentDiv.appendChild(childDiv2);




// Append the parent div to the document body
details.appendChild(parentDiv);

var container = document.createElement("div");
container.classList.add("cast-crew");

// Create heading element for movie description
var descriptionHeading = document.createElement("h4");
descriptionHeading.textContent = "About the movie";

// Create paragraph element for movie description
var descriptionParagraph = document.createElement("p");
descriptionParagraph.textContent = main_data.Discription

var hr = document.createElement("hr");


var castHeading = document.createElement("h4");
castHeading.textContent = "Cast";




//     // Create container for cast members
var castContainer = document.createElement("div");
castContainer.classList.add("cast-container");
   
function castmem(){
const scrollableDiv = document.createElement("div");
scrollableDiv.classList.add("scrollable-div");

const buttonContainer = document.createElement("div");
//buttonContainer.style.position = "sticky"
buttonContainer.classList.add("button-container");
//document.body.appendChild(buttonContainer);


// Create the left button
const div_leftbutton = document.createElement("div")

const leftButton = document.createElement("button");
leftButton.classList.add("left-button");
leftButton.innerText = "<";
div_leftbutton.appendChild(leftButton);

// Create the right button
const div_rightbutton = document.createElement("div")
const rightButton = document.createElement("button");
rightButton.classList.add("right-button");
rightButton.innerText = ">";
div_rightbutton.appendChild(rightButton);
scrollableDiv.append(buttonContainer)
// Create and append image elements to the scrollable div
for(var i = 0; i < main_data.Cast.length;i++)
{
    const div_cast = document.createElement("div")
    
    div_cast.classList.add("cast-circle")
    const p_cast = document.createElement("p")
    p_cast.innerHTML=`<p>${main_data.Cast[i][1]}<br>${main_data.Cast[i][2]}</p>`
    const img = document.createElement("img");
    img.src = main_data.Cast[i][0];
    img.alt = "Image";
    img.style.width = "100px";
    img.style.height = "100px";
    img.style.borderRadius = "50%";
    img.style.marginRight = "10px";
    div_cast.append(img,p_cast);
    scrollableDiv.append(div_cast)
}

const div_scrolling = document.createElement("div")
div_scrolling.classList.add("div-scrolling")
div_scrolling.append(div_leftbutton,scrollableDiv,div_rightbutton)
container.append(descriptionHeading,descriptionParagraph,hr,castHeading,div_scrolling)

leftButton.addEventListener("click", function() {
    scrollableDiv.scrollBy({ left: -100, behavior: "smooth" });
});

// Scroll right
rightButton.addEventListener("click", function() {
    scrollableDiv.scrollBy({ left: 100, behavior: "smooth" });
});

// Hide buttons if screen width is less than 640px

            
}
castmem()

var hr1 = document.createElement("hr");


var crewHeading = document.createElement("h4");
crewHeading.textContent = "Crew";




//     // Create container for cast members
var castContainer1 = document.createElement("div");
castContainer1.classList.add("cast-container");
   
function crewmem(){
const scrollableDiv1 = document.createElement("div");
scrollableDiv1.classList.add("scrollable-div");

//const buttonContainer = document.createElement("div");
//buttonContainer.style.position = "sticky"
//buttonContainer.classList.add("button-container");
//document.body.appendChild(buttonContainer);


// Create the left button
const div_leftbutton1 = document.createElement("div")

const leftButton1 = document.createElement("button");
leftButton1.classList.add("left-button");
leftButton1.innerText = "<";
div_leftbutton1.appendChild(leftButton1);

// Create the right button
const div_rightbutton1 = document.createElement("div")
const rightButton1 = document.createElement("button");
rightButton1.classList.add("right-button");
rightButton1.innerText = ">";
div_rightbutton1.appendChild(rightButton1);
//scrollableDiv1.append(buttonContainer)
// Create and append image elements to the scrollable div
for(var i = 0; i < main_data.Crew.length;i++)
{
    const div_cast = document.createElement("div")
    
    div_cast.classList.add("cast-circle")
    const p_cast = document.createElement("p")
    p_cast.innerHTML=`<p>${main_data.Crew[i][1]}<br>${main_data.Crew[i][2]}</p>`
    const img = document.createElement("img");
    img.src = main_data.Crew[i][0];
    img.alt = "Image";
    img.style.width = "100px";
    img.style.height = "100px";
    img.style.borderRadius = "50%";
    img.style.marginRight = "10px";
    div_cast.append(img,p_cast);
    scrollableDiv1.append(div_cast)
}

const div_scrolling1 = document.createElement("div")
div_scrolling1.classList.add("div-scrolling")
div_scrolling1.append(div_leftbutton1,scrollableDiv1,div_rightbutton1)
container.append(hr1,crewHeading,div_scrolling1)

leftButton1.addEventListener("click", function() {
    scrollableDiv1.scrollBy({ left: -100, behavior: "smooth" });
});

// Scroll right
rightButton1.addEventListener("click", function() {
    scrollableDiv1.scrollBy({ left: 100, behavior: "smooth" });
});


            
}
crewmem()

var div_tickets = document.createElement("div")
div_tickets.classList.add("bottom")
div_tickets.innerHTML=`<button>Book tickets</button>`
container.append(document.createElement("br"),div_tickets)
details.append(container)
}
}
//console.log(user1)
})

}


