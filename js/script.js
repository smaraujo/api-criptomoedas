//Minha API KEY

    var apikey = {
        key:'b0ec52a2-70a3-4135-83ab-bc5a55df3e78'
    }

    //GET FETCH  REQUISIÇÃO
   fetch('https://pro-api.coinmarketcap.com/v1/cryptocurrency/map?CMC_PRO_API_KEY=' + apikey.key)
    .then((Response) => {
        if(!Response.ok) throw new Error('Erro ao executar a requisição, status ' + Response.status);
        return Response.json();
    })
    .then((api) =>{
        var texto = "";
        //loop para pegar as 10 criptomoedas e seus simbolos
        for (let i = 0; i < 10 ; i++) {
        
        //informações a mostrar da api

        texto = texto + `
            <div class="media">
          
                <img src="./img/criptomoedas.png" class="align-self-center mr-3" alt="coin" width="60" height="60">
                <div class="media-body">
                    <h5 class="mt-2">${api.data[i].name}</h5>
                    <p>Símbolo: ${api.data[i].symbol}</p>
                    <p>Primeira Data Histórica: ${api.data[i].first_historical_data}</p>
                </div>
            </div>

        `;
          document.getElementById("coins").innerHTML = texto;     
        }
    })
    .catch((error) => {
        console.error(error.message);
    });

