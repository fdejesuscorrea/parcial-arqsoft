import { Schema, model, models } from "mongoose";

const productSchema = new Schema(
  {
    name: { type: String, required: true },
    quantity: { type: Number, required: true },
    price: {type: Number, required: true},
    stock: {type: Number, required: true},
    warehouse_id:{type:String,required:true}
  },
  { timestamps: true, versionKey: false }
);

export default models.product || model("product", productSchema);
