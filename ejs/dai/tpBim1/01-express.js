const express= require('express')
const app=express();
const port=3001;
app.use(express.json());

const NumeroAleatorio = max => Math.floor(Math.random()*(max-1))+1;
var Cartones = {};

app.post("/numero_aleatorio", (req, res)=>{
    console.log(req.body.numero);
    let num =NumeroAleatorio(req.body.numero);
    res.send([num]);
});

app.post("/iniciar_juego", (req, res)=>{
    for(let i=0; i < parseInt(req.body.numero); i++){
        let numerosCartones=[];
        for(let j=0; j<10; j++)
            numerosCartones.push(NumeroAleatorio(100));
        Cartones[i] = numerosCartones;
    }
    res.send(Cartones);
});

app.get("/obtener_carton", (req, res)=>{
    //let arrayPersonas=[]
    console.log(req.query.nombre);
    if (Cartones[req.query.nombre]) res.send(Cartones[req.query.nombre])
    /*else {
        for(let i=0; i< req.body.numero; i++){  
            arrayPersonas.push(req.body.nombre[i]);
            
        }
    }
    */
    res.send("Not found");
    //res.send([arrayPersonas])
});

app.get("/cartones", (req, res)=>{
    if (Cartones[req.query.nombre]) res.send(Cartones[req.query.nombre])
    else {

        res.send(Cartones[req.query.numero]);
            
        }
    }
    
    //res.send([arrayPersonas])
);

app.listen(port, ()=>{
    console.log(`example app listening on port ${port}`)
});