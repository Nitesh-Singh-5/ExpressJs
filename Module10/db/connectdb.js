import mongoose from "mongoose";

// const connectDB = (DATABASE_URL) => {
//     return mongoose.connect(DATABASE_URL)
//         .then(() => {
//             console.log("Connected Successfully");
//         }).catch((err) => {
//             console.log(err);
//         })
// }
const connectDB = async (DATABASE_URL) => {
    try{
        const DB_options = {
            user:'Nitesh',
            pass:'123456',
            dbName:'schooldb',
            authSource:'schooldb',
        }


        await mongoose.connect(DATABASE_URL)
        console.log("Connected Successfully");
    }catch(err) {
            console.log(err);
}
}

export default connectDB;