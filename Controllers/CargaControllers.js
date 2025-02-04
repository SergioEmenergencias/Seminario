const { leerPublicaciones } = require("./HomeControllers")

const cargalogin=(req,res)=>{
    res.render('login',{messages: req.flash('success') })
}
const cargarRegister=(req,res)=>{
    res.render('register',{messages: req.flash('success') })
}
const cargahome=(req,res)=>{
    res.render('home',{user:req.user} )
}
const cargarForos=(req,res)=>{
    res.render('foros',console.log(req.user),{messages: req.flash('success') })
}
const cargarCultivos=(req,res)=>{
    res.render('cosechaCultivos',{messages: req.flash('success') })
}

const cargarAgregarCulti=(req,res)=>{
    res.render('agregarCultivos',{messages: req.flash('success') })
}
const cargarActividades=(req,res)=>{
    res.render('Actividades',{messages: req.flash('success') })
}

const cargarResetPasword=(req,res)=>{
    res.render('reset-password',{messages: req.flash('success') })
}
const cargaformularioCosechas=(req,res)=>{
    res.render('cosechaCultivo')
}
const cargarFormularioCultivos=(req,res)=>{
    res.render('agregarCultivo')
}
module.exports={
    cargalogin,
    cargahome,
    cargarForos,
    cargarCultivos,
    cargarAgregarCulti,
    cargarResetPasword,
    cargarRegister,
    cargarActividades,
    cargarFormularioCultivos,
    cargaformularioCosechas,
}