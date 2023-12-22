import mongoose from 'mongoose';

const tokenSchema = mongoose.Schema({
    token : {
        type: String,
        required: true
    }
})

const tokens = mongoose.model("tokens", tokenSchema);
export default tokens;