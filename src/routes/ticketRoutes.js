const controllerTicket = require('../controller/ticketController')
const authentication = require('../auth/auth')

const express = require('express')
const router = express.Router()

// rota para gerar ticket de embarque
router.post('/ticket/create', controllerTicket.createTicket)

// retornar todos os tickets
router.get('/ticket/', authentication.auth, controllerTicket.getAll)

// rota para alterar ticket
router.put('/ticket/update/:id', authentication.auth, controllerTicket.updateTicket)

// rota para remover ticket
router.delete('/ticket/remove/:id', authentication.auth, controllerTicket.deleteTicket)


module.exports = router