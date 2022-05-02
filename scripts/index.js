// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page
import { navbar } from "../components/navbar.js";
document.getElementById('navbar').innerHTML = navbar();

document.getElementById('in').addEventListener('click', newsIn)

function newsIn(){
    document.getElementById('results').innerHTML = null;

    let x = document.getElementById('in').ariaValueText;
    
    fetch(`https://masai-mock-api.herokuapp.com/news/top-headlines?country=${x}`)
    .then((res) => res.json())
    .then((data) => append(data.articles))
    .catch(err => console.log('Error: ', err))

    function append(x){
        x.forEach(el => {
            let results = document.getElementById('results')

            let mainBox = document.createElement('div')
            mainBox.style.display = 'flex';

            let imgBox = document.createElement('div')
            
            let textBox = document.createElement('div')

            let img = document.createElement('img')
            img.src = el.urlToImage
            img.style.height = '300px'
            img.style.width = '300px'

            let title = document.createElement('h3')
            title.textContent = el.title

            let script = document.createElement('p')
            script.textContent = el.description

            imgBox.append(img)
            textBox.append(title, script)
            mainBox.append(imgBox, textBox)
            results.append(mainBox)
        });
    }
}

document.getElementById('ch').addEventListener('click', newsCh)
function newsCh(){
    document.getElementById('results').innerHTML = null;
    let x = document.getElementById('ch').ariaValueText;
    
    fetch(`https://masai-mock-api.herokuapp.com/news/top-headlines?country=${x}`)
    .then((res) => res.json())
    .then((data) => append(data.articles))
    .catch(err => console.log('Error: ', err))

    function append(x){
        x.forEach(el => {
            let results = document.getElementById('results')

            let mainBox = document.createElement('div')
            mainBox.style.display = 'flex';

            let imgBox = document.createElement('div')
            
            let textBox = document.createElement('div')

            let img = document.createElement('img')
            img.src = el.urlToImage
            img.style.height = '300px'
            img.style.width = '300px'

            let title = document.createElement('h3')
            title.textContent = el.title

            let script = document.createElement('p')
            script.textContent = el.description

            imgBox.append(img)
            textBox.append(title, script)
            mainBox.append(imgBox, textBox)
            results.append(mainBox)
        });
    }
}

document.getElementById('us').addEventListener('click', newsUs)
function newsUs(){
    document.getElementById('results').innerHTML = null;
    let x = document.getElementById('us').ariaValueText;
    
    fetch(`https://masai-mock-api.herokuapp.com/news/top-headlines?country=${x}`)
    .then((res) => res.json())
    .then((data) => append(data.articles))
    .catch(err => console.log('Error: ', err))

    function append(x){
        x.forEach(el => {
            let results = document.getElementById('results')

            let mainBox = document.createElement('div')
            mainBox.style.display = 'flex';

            let imgBox = document.createElement('div')
            
            let textBox = document.createElement('div')

            let img = document.createElement('img')
            img.src = el.urlToImage
            img.style.height = '300px'
            img.style.width = '300px'

            let title = document.createElement('h3')
            title.textContent = el.title

            let script = document.createElement('p')
            script.textContent = el.description

            imgBox.append(img)
            textBox.append(title, script)
            mainBox.append(imgBox, textBox)
            results.append(mainBox)
        });
    }
}

document.getElementById('uk').addEventListener('click', newsUk)
function newsUk(){
    document.getElementById('results').innerHTML = null;
    let x = document.getElementById('uk').ariaValueText;
    
    fetch(`https://masai-mock-api.herokuapp.com/news/top-headlines?country=${x}`)
    .then((res) => res.json())
    .then((data) => append(data.articles))
    .catch(err => console.log('Error: ', err))

    function append(x){
        x.forEach(el => {
            let results = document.getElementById('results')

            let mainBox = document.createElement('div')
            mainBox.style.display = 'flex';

            let imgBox = document.createElement('div')
            
            let textBox = document.createElement('div')

            let img = document.createElement('img')
            img.src = el.urlToImage
            img.style.height = '300px'
            img.style.width = '300px'

            let title = document.createElement('h3')
            title.textContent = el.title

            let script = document.createElement('p')
            script.textContent = el.description

            imgBox.append(img)
            textBox.append(title, script)
            mainBox.append(imgBox, textBox)
            results.append(mainBox)
        });
    }
}

document.getElementById('nz').addEventListener('click', newsnz)
function newsnz(){
    document.getElementById('results').innerHTML = null;
    let x = document.getElementById('nz').ariaValueText;
    
    fetch(`https://masai-mock-api.herokuapp.com/news/top-headlines?country=${x}`)
    .then((res) => res.json())
    .then((data) => append(data.articles))
    .catch(err => console.log('Error: ', err))

    function append(x){
        x.forEach(el => {
            let results = document.getElementById('results')

            let mainBox = document.createElement('div')
            mainBox.style.display = 'flex';

            let imgBox = document.createElement('div')
            
            let textBox = document.createElement('div')

            let img = document.createElement('img')
            img.src = el.urlToImage
            img.style.height = '300px'
            img.style.width = '300px'

            let title = document.createElement('h3')
            title.textContent = el.title

            let script = document.createElement('p')
            script.textContent = el.description

            imgBox.append(img)
            textBox.append(title, script)
            mainBox.append(imgBox, textBox)
            results.append(mainBox)
        });
    }
}

