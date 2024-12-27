
// Forma para não precisar criar a Promise:
/*    
fetch("pag1.html")
    .then((res)=>{
        if (res.status !== 200) throw new Error("ERRO MEU");
        return res.text(); 
    })
    .then((res) =>{
        document.querySelector("body").innerHTML = res;
    })
    .catch((e)=>{
        console.error(e);
    })
*/


function playCode() {
    try {
        document.addEventListener("click", async (e)=>{
            const tag = e.target;
            if(tag.tagName.toLowerCase() === 'a'){
                e.preventDefault();
                let response = await fetch(tag.getAttribute("href"));
                if (response.status !== 200) throw new Error("ERRO MEU");
                
                response = await response.text();
                const div = document.querySelector("div.resultado");
                div.innerHTML = response;
            }
        });
    }
    catch(e){
        console.error(e);
    }
}


playCode();