import express from 'express'
const router =express.Router()
import ProductController from '../controllers/productControllers.js'

router.get('/:id',ProductController.getProductById)
router.get('/',ProductController.getProductByCategory)

// ====================================================================================
export default router
