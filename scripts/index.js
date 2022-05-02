// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page
import { navbar } from "../components/navbar.js";
document.getElementById('navbar').innerHTML = navbar();

document.getElementById('in').addEventListener('click', newsIn)

function newsIn(){
    let x = document.getElementById('in').ariaValueText;
    
    fetch(`https://masai-mock-api.herokuapp.com/news/top-headlines?country=${x}`)
    .then((res) => res.json())
    .then((data) => console.log(data.articles))
    .catch(err => console.log('Error: ', err))
}

document.getElementById('ch').addEventListener('click', newsCh)
function newsCh(){
    let x = document.getElementById('ch').ariaValueText;
    
    fetch(`https://masai-mock-api.herokuapp.com/news/top-headlines?country=${x}`)
    .then((res) => res.json())
    .then((data) => console.log(data.articles))
    .catch(err => console.log('Error: ', err))
}

document.getElementById('us').addEventListener('click', newsUs)
function newsUs(){
    let x = document.getElementById('us').ariaValueText;
    
    fetch(`https://masai-mock-api.herokuapp.com/news/top-headlines?country=${x}`)
    .then((res) => res.json())
    .then((data) => console.log(data.articles))
    .catch(err => console.log('Error: ', err))
}

document.getElementById('uk').addEventListener('click', newsUk)
function newsUk(){
    let x = document.getElementById('uk').ariaValueText;
    
    fetch(`https://masai-mock-api.herokuapp.com/news/top-headlines?country=${x}`)
    .then((res) => res.json())
    .then((data) => console.log(data.articles))
    .catch(err => console.log('Error: ', err))
}

document.getElementById('nz').addEventListener('click', newsnz)
function newsnz(){
    let x = document.getElementById('nz').ariaValueText;
    
    fetch(`https://masai-mock-api.herokuapp.com/news/top-headlines?country=${x}`)
    .then((res) => res.json())
    .then((data) => console.log(data.articles))
    .catch(err => console.log('Error: ', err))
}

