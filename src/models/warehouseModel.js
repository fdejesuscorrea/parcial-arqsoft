import {Schema, model, models } from 'mongoose'

const warehouseSchema = new Schema({
    name: {type: String, required: true},
    direction: {type: String, required: true},
    telephone: {type: String, required: true},
}, {timestamps : true, versionKey: false});

export default models.wharehouse || model('wharehouse', warehouseSchema)