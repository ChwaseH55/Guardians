import { ObjectId } from "mongodb";
import mongoose from "mongoose";
const { Schema } = mongoose;

const campaignSchema = new Schema({
    name: {
        type: String,
    },
    dm_id: {
        type: ObjectId,
    },
    users: {
        type: Array,
    },
    campaign_id: {
        type: Number,
        unique: true,
    },
});

export default mongoose.model("Campaign", campaignSchema);