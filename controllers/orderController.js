// logica de compra 
const Order  = require('../models/Order');


//Controlador para crear Ordero
exports.createOrder = async (req, res) => {
    try {
        const order = new Order ({...req.body});
        const savedOrder = await order.save(); 
        return res.status(201).json({message:"la order fue guardado exitosamente", order:savedOrder});
    } catch (error) {
        console.log(error);
        res.status(500).json({message:"el servidor ha fallado"})
    }
};

//controlador para traer todas las order
// exports.getOrder = async (req, res) => {  
//   try {
//     const order  = await Order.find({});
//     return res.status(200).json({ ok: true, order  });
//   } catch (error) {
//     console.log(error);
//     return res.status(500).json({ message: "Algo salio mal" });
//   }
// };

exports.getOrder = async (req, res) => {  
  try {
    let orders = [];
    console.log("estamos aca", req.body.userId)
        req.query.userId ? 
         orders = await Order.find({user : req.body.userId})
         :
         orders = await Order.find({});
         return res.status(200).json({ ok: true, orders  });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Algo salio mal" });
  }
};


//controlador para traer una Order por id
exports.getOrderById = async (req, res) => {
    try {
        const orderById = await Order.findById(id)
        return res.status(200).json({ok:true, orderById  })
    } catch (error) {
        console.log(error);
        res.status(500).json( {message: 'El servidor ha fallado'} )
    }
}


exports.getOrderId = async (req,res) =>{
    try{
        let order = [];
        req.query.orderId ? 
         order = await Order.find({order : req.query.orderId})
         :
         order = await Order.findOne({});
         return res.status(200).json({ ok: true, order  });

    }   
    catch (error) {
        res.status(500).json( {message: 'El servidor  fallado'} )
    }
}


//controlador para actualizar Order
exports.updateOrder = async (req, res) => {
    const {id} = req.params;
    try {
        const order = await Order.findById(id);
        if (!order) {//"!"entra a la condicion si es null 0 o undefined
            return res.status(404).json({ok:false, message: 'No se encontro ninguna order con esa id'});
        }
        const updateOrder = await Order.findByIdAndUpdate(id, req.body, {new: true});
        return res.status(200).json({ok: true, order: updateOrder})
    } catch (error) {
        console.log(error);
        res.status(500).json( {message: 'El servidor ha fallado'} )
    }
}

exports.deleteOrder = async (req, res) => {
    const {id} = req.params;
    try {
        const orderDeleted = await Order.findById(id)//busca y encontra el id del order y alamac en la const
        await Order.findByIdAndDelete(id)//
        return res.status(200).json ({ok:true, message:`La Order ${id} fue eliminado con exito`,
         orderDeleted:orderDeleted})
    } catch{

        return res.status(500).json ({ok:false, message:"no se encontro ninguna order con esa id" })
        
    }
}





