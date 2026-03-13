const express = require ("express")
const app = express()

app.get("/idade/:nome/:idade", (req, res)=>{
    const {nome, idade} = req.params
    res.status (200).json({
        mensagem:`Nome: ${nome}, Idade: ${idade}`
    })

})

app.listen(3001, ()=>{
    console.log("alexa abrir lata de monster")
})