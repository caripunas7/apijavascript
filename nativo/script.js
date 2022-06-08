async function carregarDados(){
    const url = "https://swapi.dev/api/people/?format=json"


try {
    let resultado = await fetch(url)

    const dados = await resultado.json()
    for(elemtentos of dados.results){
        console.log(`$elementos.name) nasci no ano $(elementos.birth_year}`)
    }

    console.log(dados.results)
    
    } catch (error) {
        console.log("O seguinte erro ocorreu: ", error)
    
    }

}

carregarDados()