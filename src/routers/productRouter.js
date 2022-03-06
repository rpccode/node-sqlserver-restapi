import { Router } from "express";
import { getProducts, newProlduct, getProductById,deleteProduct, getTotalProducts, updateProductById  } from "../controllers/productControllers";

const router = Router();

router.get('/products',getProducts );
router.post('/products', newProlduct);
router.post('/products/count', getTotalProducts);
router.put('/products/:id', updateProductById);
router.delete('/products/:id', deleteProduct);
router.get('/products/:id',getProductById );


export default router;