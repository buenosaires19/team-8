const app = require('express')
const router = app.Router()
const mailer = require('../mailer/mailer');

router.post('/sendEmail', (req,res) => {
    console.log('HOLAAAAAA', req.body)
    mailer({
        emailCandidata: req.body.data.emailCandi,
        subject: 'Felicidades! Fuiste postulada para aparecer en Grandes Mujeres de Chicas en Tecnología',
        nameCandidata: req.body.data.candidataName,
        postulanteName: req.body.data.postulanteName,
        formCandidata: 'localhost:2400/formCandidata'
    })
    res.send(200)
})

module.exports = router;