import express from 'express'

const app = express()
app.use(express.json());
app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.post('/calcular  ', (req, res) => {
  const operacion = req.body;
  if (operacion.operacion === 'suma') {
    return res.send({resultado:operacion.num1 + operacion.num2});
  } else if (operacion.operacion === 'resta') {
      return res.send({resultado:operacion.num1 - operacion.num2});
  } else if (operacion.operacion === 'multiplicacion') {
      return res.send({resultado:operacion.num1 * operacion.num2});
  } else if (operacion.operacion === 'diision') {
      return res.send({resultado:operacion.num1 / operacion.num2});
  }
  res.send({ resultado: "Hola Mundo"});
});

app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
})