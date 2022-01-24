import mongoose from 'mongoose';

// Defining schema 
const studentSchema = new mongoose.Schema({
    name: { type: String, required: true, trim: true },
    age: { type: Number, required: true, min: 18, max: 50 },
    fees: { type: mongoose.Decimal128, required: true, validate: v => v >= 5500.50 },
    hobbies: { type: Array },
    isactive: { type: Boolean },
    comments: [{ value: { type: String }, publish: { type: Date, default: Date.now } }],
    join: { type: Date, default: Date.now }
})

// Compiling Schema
const studentModel = mongoose.model('student', studentSchema);

// const createDoc = async()=>{
//     try{
//         const studentDoc = new studentModel({
//             name:"Sonam",
//             age:27,
//             fees:6500.40,
//             hobbies:['dancing','reading'],
//             isactive:true,
//             comments:[{value:"This is awesome"}]
//         })
//         const result = await studentDoc.save()
//         console.log(result);
//     }catch(error){
//         console.log(error);
//     }
// }


export default studentModel;