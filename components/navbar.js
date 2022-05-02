function navbar(){
    return `<h3>News App</h3>
    <input type="text" id="search_input" placeholder="Search">`
}

export {navbar}

function append(x){
    x.forEach(el => {
        let results = document.getElementById('results')

        let mainBox = document.createElement('div')
        mainBox.style.display = 'flex';
        mainBox.setAttribute('class', 'news')

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

export {append}