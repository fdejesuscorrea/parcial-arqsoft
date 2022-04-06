import mongoose from "mongoose";

(async () => {
    try {
        const db = await mongoose.connect(`mongodb+srv://juand410:parcial2@cluster0.hzy1u.mongodb.net/inventarioSA?retryWrites=true&w=majority`)
        console.log(`Database is connected: ${db.connection.name}`)
    } catch (error) {
        console.log(error)
    }
})()