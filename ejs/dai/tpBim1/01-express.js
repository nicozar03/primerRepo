/*const express= require('express')
const app=express();
const port=3001;
app.use(express.json());ccc

const NumeroAleatorio = max => Math.floor(Math.random()*(max-1))+1;
max=150;
var Cartones = {};



app.post("/numero_aleatorio", (req, res)=>{
    console.log(req.body.numero);
    let num =NumeroAleatorio(req.body.numero);
    res.send([num]);
});

app.post("/iniciar_juego", (req, res)=>{
    for(let i=0; i < parseInt(req.body.numero); i++){
        let numerosCartones=[];
        for(let j=0; j<15; j++)
            numerosCartones.push(NumeroAleatorio(100));
        Cartones[i] = numerosCartones;
    }
    res.send(Cartones);
});

app.get( "/obtener_carton", (req, res)=>{
    //let arrayPersonas=[]
    console.log(req.query.nombre);
    if (Cartones[req.query.nombre]) res.send(Cartones[req.query.nombre])
});

app.get( "/cartones", (req, res)=>{
    //let arrayPersonas=[]
    console.log(req.query.nombre);
    if (Cartones[req.query.nombre]) {
        res.send(Cartones[req.query.nombre])
    }
    else{
        res.send(Cartones);
    }

});

app.get("/sacar_numero"),(req,res)=>{
    console.log("Perdón, no lo pudimos hacer")
    res.send()
        



}










app.listen(port, ()=>{
    console.log(`example app listening on port ${port}`)
});
*/

const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.json());

let cartones_del_juego;

let nombres = [];

const numeros_sacados = [];

const buscar_indice_nombre = (nombre) => {

    let indice = null;
        
    for (let i = 0; i < nombres.length; i++) {

        if (nombres[i] === nombre) {
            indice = i;
        }
        
    }

    return indice;
}

const random = (num) => Math.round(Math.random() * num) + 1;

const crear_carton = () => {
    const carton = [];

    for (let i = 0; i < 15; i++) {
        carton.push(random(100));
    }

    return carton;
}

const crear_cartones = (cantidad) => {
    const cartones = [];

    for (let i = 0; i < cantidad; i++) {
        cartones.push(crear_carton());
    }

    return cartones;
}
	
app.post("/numero_aleatorio", function (req, res) {
    const num = req.body.num;
    res.send(`El número aleatorio es ${random(num)}`);
});

app.post("/iniciar_juego", function (req, res) {
	const cantidad = req.body.cantidad;
    cartones_del_juego = crear_cartones(cantidad);
    res.send(cartones_del_juego);
});

app.get("/obtener_carton/:nombre", function (req, res) {
	const nombre = req.params.nombre;

    nombres.push(nombre);

    res.send(cartones_del_juego[nombres.length-1]);
});

app.get("/cartones/:nombre?", function (req, res) {
    const nombre = req.params.nombre;
    console.log(nombre);
    if (nombre === undefined) {
        res.send(cartones_del_juego);
    } else {

        const indice = buscar_indice_nombre(nombre);

        res.send(cartones_del_juego[indice]);
    }
});

const verificar_ganador = (carton) => {

    let aciertos = 0;

    for (let i = 0; i < carton.length; i++) {

        const numero = carton[i];

        if (numeros_sacados.includes(numero)) {
            aciertos++;
        }
        
    }

    return (aciertos === carton.length);

}

app.get("/sacar_numero", function (req, res) {
	const numero = random();

    numeros_sacados.push(numero);

    const ganadores = [];

    for (let i = 0; i < cartones_del_juego.length; i++) {

        const carton = cartones_del_juego[i];

        const ganador = verificar_ganador(carton);

        if (ganador) {

            ganadores.push(carton);

        } 
        
    }

    res.send(ganadores);
});

app.listen(PORT, function(err){
	if (err) console.log(err);
	console.log("Server listening on PORT", PORT);
});
