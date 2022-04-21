const express= require('express')
const app=express();
const port=3000;
app.use(express.json());

function NumeroAleatorio(max){
return Math.floor(Math.random()*(max-1))+1;
}
function crearCartones(num){
}

app.post("/numero_aleatorio", (req, res)=>{
    console.log(req.body.numero);
    let num =NumeroAleatorio(req.body.numero);
    res.send([num]);
});

app.post("/iniciar_juego", (req, res)=>{
    let arrayCartones=[];
    for(let i=0; i< req.body.numero; i++){
        let carton=[];
        for(let i=0; i<10; i++){
            let numero=NumeroAleatorio(100);

            carton.push(numero);
        }
        arrayCartones.push(carton);
    }
    res.send([arrayCartones]);
});

app.listen(port, ()=>{
    console.log(`example app listening on port ${port}`)
});
