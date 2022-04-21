const express= require('express')
const app=express();
const port=3000;
app.use(express.json());

function NumeroAleatorio(max){
return Math.floor(Math.random()*(max-1))+1;
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
app.get("/obtener_carton", (req, res)=>{
    let arrayPersonas=["Cherni", "Zarlen", "Melvin", "Popo", "Mati1", "Mati2","Mati3", "Mati4", "Mati5", "Mati6"]
    for(let i=0; i< req.body.numero; i++){  
        let personas=[];
        for(let i=0; i<10; i++){
            let numero=NumeroAleatorio(100);
            personas.push(numero);
        }
        arrayPersonas.push(personas);

    }

res.send([arrayPersonas])
});

app.listen(port, ()=>{
    console.log(`example app listening on port ${port}`)
});
