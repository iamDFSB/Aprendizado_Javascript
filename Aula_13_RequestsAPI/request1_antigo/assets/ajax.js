const request = (obj) =>{
    const xhr = new XMLHttpRequest();
    xhr.open(obj.method, obj.url, true);
    xhr.send(); // Se for POST ai manda algo, neste caso é GET, então não manda nada.

    xhr.addEventListener('load', () => {
        if (xhr.status >= 200 && xhr.status < 300){
            obj.success(xhr.responseText);
        } else{
            console.log(xhr.status);
            obj.error(xhr.statusText);
        }
    })
}; 

function loadPage(element){
    const href = element.href;
    request({
        method: 'GET',
        url: href,
        success: function (response){
            if (response){
                const div = document.querySelector("div.resultado");
                div.innerHTML = response;
            }
        },
        error: function (status){
            console.log("Ocorreu um erro com status: ", status);
        }
    })
}


document.addEventListener('click', (e)=>{
    const element = e.target;
    const tag = element.tagName.toLowerCase();
    
    if(tag === 'a'){
        e.preventDefault();
        loadPage(element);
    }
})