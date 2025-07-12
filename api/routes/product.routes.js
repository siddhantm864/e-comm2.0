import express from 'express'
const router =express.Router()
import ProductController from '../controllers/productControllers.js'

router.get('/find/:id"',ProductController.getProductById)
router.get('/category/',ProductController.getProductByCategory)

// ====================================================================================
export default router
