const {Router}  = require ('express');
const { getOrder,createOrder,getOrderById,deleteOrder,updateOrder,getOrderId} = require ('../controllers/orderController');
const {protect, retristecTo } = require ("../middleware/auth")


const router = Router();

router.route('/')
.get(getOrder)
.post(protect,createOrder)
router.route("/:id")
.put(updateOrder)
.delete(deleteOrder)

module.exports = router;