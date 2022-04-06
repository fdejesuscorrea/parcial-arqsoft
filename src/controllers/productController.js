import productModel from "../models/productModel";

export const getProducts = async (req, res) => {
    const products = await  productModel.find({warehouse_id:req.params.warehouse_id})

    console.log(products)
    res.status('201').json({
        res: 'correcto',
        products:products
    })
}
export const createProduct = async (req,res) => {
    const product = new productModel(
        {
            name:req.body.name,
            quantity:req.body.quantity,
            price:req.body.price,
            stock:req.body.stock,
            warehouse_id:req.body.warehouse_id
        }
    )
    
}