const express = require('express');
const app = express();

app.use(express.json())

app.get("/",(req,res)=>{
    res.status(200).send('Ola Docker, Atualização docker esta rodando certinho aqui ')
});
app.listen(3000,()=>{
    console.log('esta rodando na porta 3000')
})