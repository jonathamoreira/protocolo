const express = require("express")
const router = express.Router()
const Protocolo = require("./Protocolo")


router.get("/", (req,res) =>{
    res.render("index")
})

router.get("/admin/protocolos/index",(req,res)=>{
    Protocolo.findAll().then(protocolos =>{
      res.render("protocolos/index", {protocolos: protocolos})
    })
})

router.get("/admin/protocolos/new", (req,res)=>{
    res.render("admin/protocolos/new")
})

router.post("/protocolos/save", (req,res)=>{
    var nome = req.body.nome
    var telefone = req.body.telefone
    var endereco = req.body.endereco
    var veiculos = req.body.veiculos
    var observ = req.body.observ

   if(nome != undefined || telefone != undefined || endereco != undefined || veiculos != undefined || observ != undefined){

    Protocolo.create({
        nome: nome,
        telefone: telefone,
        endereco: endereco,
        veiculos: veiculos,
        observ: observ
    }).then(()=>{
        res.redirect("/protocolos/index")
    }).catch((err)=>{
        console.log(err);
    })
   }else{
    res.redirect("/protocolos/new")
   }
})

/*router.get("/amt/protocolos", (req, res) => {
    Protocolo.findAll().then(protocolos => {
      console.log(protocolos); // Verifique se os dados estão sendo retornados corretamente
      res.render("amt/protocolos/index", { protocolos: protocolos });
    }).catch(err => {
      console.log(err); // Verifique se há erros na consulta
      res.redirect("/"); // Redirecione para outra página ou manipule o erro adequadamente
    });
  });*/

module.exports = router
