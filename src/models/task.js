import "../../mongodb";
import mongoose from "mongoose";
const Schema = mongoose.Schema;

// Task Schema
const COLLECTION = "task";

const TaskSchema = new Schema(
    {
        title: { type: String, required: true },
        description: { type: String, required: true },
        points: { type: Number, required: true },
        type: {
            type: String,
            enum: ["VISIT", "TELEGRAM", "REFERRAL"],
            required: true,
        },
        category: { type: String, required: true },
        image: { type: String, required: true },
        callToAction: { type: String, required: true },
        taskData: Schema.Types.Mixed,
        isActive: { type: Boolean, default: true },
        userTasks: [{ type: Schema.Types.ObjectId, ref: "UserTask" }],
    },
    {
        collection: COLLECTION,
        autoCreate: true,
        autoIndex: true,
        timestamps: {
            updatedAt: "updatedAt",
            createdAt: "createdAt",
        },
        toObject: { virtuals: true },
        toJSON: { virtuals: true },
    },
);

export default mongoose.models[COLLECTION] ||
    mongoose.model(COLLECTION, TaskSchema);

