
function connectWithInputSearch(responseObj) {
    const div = document.querySelector("div.resultado");

    if (div.children.length > 0) document.querySelector("table").remove();
    
    const table = document.createElement("table");

    const thead = document.createElement("thead");
    const tbody = document.createElement("tbody");

    const trHead = document.createElement("tr");

    Object.keys(responseObj[0]).forEach((column) => {
        const th = document.createElement("th");
        th.textContent = column;
        trHead.appendChild(th);
    });

    thead.appendChild(trHead);
    table.appendChild(thead);
    
    Array.from(responseObj).forEach((obj) => {
        const tr = document.createElement("tr");
        
        Object.values(obj).forEach((value) => {
            const td = document.createElement("td");
            td.textContent = value;
            tr.appendChild(td);
        });

        tbody.appendChild(tr);

    })

    table.appendChild(tbody);
    div.appendChild(table);
}


function getSearchItem() {
    const input = document.querySelector("input.input-to-search");
    if (input.value.trim() !== '') return input.value;
    return;
}



axios("assets/pessoas.json")
    .then((response)=>{
        if(response.status > 200 && response.status < 600) {
            throw new Error("Deu erro, com o status: ", response.status)
       }

       let responseData = response.data;
       let resultOfSearch;
        document.addEventListener("click", (e) => {
            const elem = e.target;
            if (elem.className === 'btn-to-search') {
                resultOfSearch = getSearchItem(); 
                let listFromSearch = [];
        
                if (resultOfSearch) {
                    listFromSearch = responseData.filter( obj => (obj.nome.toLowerCase()).includes(resultOfSearch.toLowerCase()));

                    if (listFromSearch.length > 0) {
                        connectWithInputSearch(listFromSearch);
                    }
                } else {
                    connectWithInputSearch(responseData);
                }
            }
    
        });

        connectWithInputSearch(responseData);

       

    })


// fetch("assets/pessoas.json")
//     .then((response) => {
//         if(response.status > 200 && response.status < 600) {
//              throw new Error("Deu erro, com o status: ", response.status)
//         }
//         return response.json()
//     })
//     .then((response) => {
//         let resultOfSearch;
//         document.addEventListener("click", (e) => {
//             const elem = e.target;
//             if (elem.className === 'btn-to-search') {
//                 resultOfSearch = getSearchItem(); 
//                 let listFromSearch = [];
        
//                 if (resultOfSearch) {
//                     listFromSearch = response.filter( obj => (obj.nome.toLowerCase()).includes(resultOfSearch.toLowerCase()));

//                     if (listFromSearch.length > 0) {
//                         connectWithInputSearch(listFromSearch);
//                     }
//                 } else {
//                     connectWithInputSearch(response);
//                 }
//             }
    
//         });

//         connectWithInputSearch(response);
//     })
//     .catch((e) => {
//         console.log(e);
//     });