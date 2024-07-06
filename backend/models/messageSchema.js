import mongoose from "mongoose";
import validator from "validator";

const messageSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        minLength: [3, "First Name Must Contain At Least 3 Characters!"],
    },
    lastName: {
        type: String,
        required: true,
        minLength: [3, "Last Name Must Contain At Least 3 Characters!"],
    },
    email: {
        type: String,
        required: true,
        validate: [validator.isEmail, "Please Provide Valid Email!"],
    },
    phone: {
        type: String,
        required: true,
        minLength: [11, "Phone Number must conatin exact 11 digits"],
        maxLength: [11, "Phone Number must conatin exact 11 digits"],
    },
    message: {
        type: String,
        required: true,
        minLength: [10, "Message must conation atleast 10 characters!"],
    },

 
});

export const Message = mongoose.model("Message", messageSchema);