const request = (obj) => {
    return new Promise((resolve, reject) =>{
        const xhr = new XMLHttpRequest();
        xhr.open(obj.method, obj.url, true);
        xhr.send(); // Se for POST ai manda algo, neste caso é GET, então não manda nada.
    
        xhr.addEventListener('load', () => {
            if (xhr.status >= 200 && xhr.status < 300){
                resolve(xhr.responseText);
            } else{
                console.log(xhr.status);
                reject(xhr.statusText);
            }
        })
    })
}; 


// Forma com async-await:

async function loadPage(element){
    try{
        const href = element.href;
        const objConfig = {
            method: 'GET',
            url: href,
        }
        const response = await request(objConfig);
        if (response) {
            const div = document.querySelector("div.resultado");
            div.innerHTML = response;
        }
    }
    catch(e){
        console.log(e);
    }
}


// Forma com Promise - (then-catch)

/*
    function loadPage(element){
        const href = element.href;
        const objConfig = {
            method: 'GET',
            url: href,
        }
        request(objConfig)
            .then((response)=>{
                if(response){
                    const div = document.querySelector("div.resultado");
                    div.innerHTML = response;
                }
            })
            .catch((e)=>{
                console.log(e);
            })
    }
*/

document.addEventListener('click', (e)=>{
    const element = e.target;
    const tag = element.tagName.toLowerCase();
    
    if(tag === 'a'){
        e.preventDefault();
        loadPage(element);
    }
})
