import {Router} from "express"

import * as productCtrl from '../controllers/productController'

const router = Router();

router.get('/:warehouse_id', productCtrl.getProducts)
router.post('/:warehouse_id', productCtrl.createProduct)
export default router