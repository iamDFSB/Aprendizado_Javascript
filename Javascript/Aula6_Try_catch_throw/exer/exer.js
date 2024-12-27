function getDate(data) {
    if (!data) {
        data = new Date();     
    }

    if (data && !(data instanceof Date)) {
        throw new TypeError('Esperamos uma instância de Date')
    }

    return data.toLocaleTimeString('pt-BR', {
        hour12: false,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    });
}


try {
    let data = new Date('2021-10-2 20:12:10');
    console.log(getMonth(data));

} catch (error) {
    console.log(error);
    // Trata o erro

}finally{
    console.log("Tenha um bom dia");
}