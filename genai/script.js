const travelData = {

paris:{
places:[
{name:"Eiffel Tower",img:"https://upload.wikimedia.org/wikipedia/commons/a/a8/Tour_Eiffel_Wikimedia_Commons.jpg"},
{name:"Louvre Museum",img:"https://upload.wikimedia.org/wikipedia/commons/a/af/Louvre_Museum_Wikimedia_Commons.jpg"},
{name:"Notre Dame Cathedral",img:"https://upload.wikimedia.org/wikipedia/commons/a/a6/Notre-Dame_de_Paris_Wikimedia_Commons.jpg"},
{name:"Montmartre",img:"https://upload.wikimedia.org/wikipedia/commons/6/65/Montmartre_Wikimedia_Commons.jpg"},
{name:"Seine River Cruise",img:"https://upload.wikimedia.org/wikipedia/commons/2/2c/Seine_River_Cruise_Wikimedia_Commons.jpg"},
{name:"Arc de Triomphe",img:"https://upload.wikimedia.org/wikipedia/commons/3/3e/Arc_de_Triomphe_Wikimedia_Commons.jpg"}
],
restaurants:["Le Jules Verne","Cafe de Flore","Epicure","L'Ambroisie","Septime"],
hotels:["Ritz Paris","Le Meurice","Hotel Paris Centre","Shangri-La Paris","Hotel Regina"]
},

tokyo:{
places:[
{name:"Tokyo Tower",img:"https://upload.wikimedia.org/wikipedia/commons/3/37/Tokyo_Tower_Wikimedia_Commons.jpg"},
{name:"Senso-ji Temple",img:"https://upload.wikimedia.org/wikipedia/commons/6/6e/Sensoji_Temple_Wikimedia_Commons.jpg"},
{name:"Shibuya Crossing",img:"https://upload.wikimedia.org/wikipedia/commons/5/54/Shibuya_Crossing_Wikimedia_Commons.jpg"},
{name:"Akihabara",img:"https://upload.wikimedia.org/wikipedia/commons/6/6c/Akihabara_Wikimedia_Commons.jpg"},
{name:"Meiji Shrine",img:"https://upload.wikimedia.org/wikipedia/commons/7/7e/Meiji_Shrine_Wikimedia_Commons.jpg"},
{name:"Ueno Park",img:"https://upload.wikimedia.org/wikipedia/commons/6/69/Ueno_Park_Wikimedia_Commons.jpg"}
],
restaurants:["Ichiran Ramen","Sushi Dai","Afuri Ramen","Gyukatsu Motomura"],
hotels:["Park Hotel Tokyo","Shinjuku Granbell","Hotel Gracery","Hilton Tokyo"]
},

rome:{
places:[
{name:"Colosseum",img:"https://upload.wikimedia.org/wikipedia/commons/d/de/Colosseum_Wikimedia_Commons.jpg"},
{name:"Trevi Fountain",img:"https://upload.wikimedia.org/wikipedia/commons/f/f3/Trevi_Fountain_Wikimedia_Commons.jpg"},
{name:"Pantheon",img:"https://upload.wikimedia.org/wikipedia/commons/6/6e/Pantheon_Rome_Wikimedia_Commons.jpg"},
{name:"Roman Forum",img:"https://upload.wikimedia.org/wikipedia/commons/d/d5/Roman_Forum_Wikimedia_Commons.jpg"},
{name:"Vatican Museums",img:"https://upload.wikimedia.org/wikipedia/commons/7/79/Vatican_Museums_Wikimedia_Commons.jpg"},
{name:"Spanish Steps",img:"https://upload.wikimedia.org/wikipedia/commons/1/1e/Spanish_Steps_Wikimedia_Commons.jpg"}
],
restaurants:["La Pergola","Roscioli","Da Enzo","Piperno"],
hotels:["Hotel Eden","Rome Cavalieri","The Hive","Hotel Artemide"]
}

};


function planTrip(){

let city=document.getElementById("destination").value;
let days=parseInt(document.getElementById("days").value);
let data=travelData[city];

let itineraryHTML="";

for(let i=0;i<days;i++){

let morning=data.places[(i*3)%data.places.length];
let afternoon=data.places[(i*3+1)%data.places.length];
let evening=data.places[(i*3+2)%data.places.length];

let restaurant=data.restaurants[i%data.restaurants.length];
let hotel=data.hotels[i%data.hotels.length];

itineraryHTML+=`

<div class="dayCard">

<div class="dayTitle">📅 Day ${i+1}</div>

<img src="${morning.img}">
<div class="activity">🌅 Morning — Visit <b>${morning.name}</b></div>
<div style="color:gray;">⏱ Travel time: 20 mins | 💰 $15</div>

<img src="${afternoon.img}">
<div class="activity">🍜 Afternoon — Explore <b>${afternoon.name}</b></div>
<div style="color:gray;">⏱ Travel time: 25 mins | 💰 $20</div>

<img src="${evening.img}">
<div class="activity">🌇 Evening — Relax at <b>${evening.name}</b></div>
<div style="color:gray;">⏱ Travel time: 15 mins | 💰 $10</div>

<hr>

<div class="activity">🍽 Restaurant: <b>${restaurant}</b></div>
<div class="activity">🏨 Hotel: <b>${hotel}</b></div>

</div>

`;

}

document.getElementById("itinerary").innerHTML=itineraryHTML;

document.getElementById("map").src=
"https://maps.google.com/maps?q="+city+"&output=embed";

}