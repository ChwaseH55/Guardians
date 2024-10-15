import { ObjectId } from "mongodb";
import mongoose from "mongoose";
const { Schema } = mongoose;

const userSchema = new Schema({
    name: {
        type: String,
        trim: true,
        required: true,
    },
    email: {
        type: String,
        trim: true,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
        min: 6,
        max: 64,
    },
    characters: {
        type: Array,
    },
});

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

const characterSchema = new Schema({
    campaignId: {
        type: Number,
    },
});

export default mongoose.model("User", userSchema);