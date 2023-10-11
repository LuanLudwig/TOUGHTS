const express = require('express')
const router = express.Router()
// controler
const ToughtController = require('../controller/ToughtController')

// helpers
const checkAuth = require('../helpers/auth').checkAuth


// rota principal (inicial)
router.get('/add', checkAuth, ToughtController.createTought)
router.post('/add', checkAuth, ToughtController.createToughtSave)
router.get('/edit/:id', checkAuth, ToughtController.updateTought)
router.post('/edit', checkAuth, ToughtController.updateToughtSave)
router.get('/dashboard', checkAuth, ToughtController.dashboard)
router.post('/remove', checkAuth, ToughtController.removeTought)
router.get('/', ToughtController.showToughts)

module.exports = router