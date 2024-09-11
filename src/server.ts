import express from "express";
import { configuration } from "./config.js";
import { esPalindromo } from "./palindromo.js";
import { esPrimo } from "./numeros.js";

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send(`Hola, esta api fue configurada por el usuario ${configuration.username}`);
});

app.get("/key", (req, res) => {
  res.send(`Hola, esta api contiene la siguiente api-key: ${configuration.apiKey}`);
});

app.get("/palindromo/:frase", (req, res) => {
  const { frase } = req.params
  res.send(`Hola, La frase ingresada ${esPalindromo(frase) ? "es" : "no es"} palindromo`);
});

app.get("/primo/:numero", (req, res) => {
  const { numero } = req.params
  res.send(`Hola, el numero ingresado ${esPrimo(+numero) ? "es" : "no es"} un numero primo`);
});

export default app;