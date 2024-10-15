import { ObjectId } from "mongodb";
import mongoose from "mongoose";
const { Schema } = mongoose;

const characterSchema = new Schema({
    campaignId: {
        type: Number,
    },
});

export default mongoose.model("Character", characterSchema);