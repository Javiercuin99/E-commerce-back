const {Schema, model} = require ('mongoose');


const productSchema = new Schema ({
    name: {
        type:String,
        required: true,
        trim: true
    },
    image:{
        type: String,
       required: true
    },
    brand: {
        type: String,
        required:true,
        trim: true
    },
    description:{
        type: String,
        required:true,
        maxlength:500
    },
    price: {
        type:Number,
        required:true,
        default: 0
    },
    stock:{
        type:Number,
        required:true,
        default:0
    },
    isInOffer:{
        type:Boolean,
        default: false
    },
    category: {
        type:String,
        required:true,
        enum : {
            values:["Procesador","Mouse", 
            "Teclado","Auricular","Gpu", "Monitor"]
        },
        default:"Procesador"
    }
    
}, {
    timestamps: true 
});

const Product = model('Product', productSchema);

module.exports = Product;

//mouse teclado proce, fuente joystick y gpu.