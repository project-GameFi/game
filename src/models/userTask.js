import "../../mongodb";
import mongoose from "mongoose";
const Schema = mongoose.Schema;
import user from "./user";
import task from "./task";

const COLLECTION = "userTask";

// UserTask Schema
const UserTaskSchema = new Schema(
    {
        user: { type: Schema.Types.ObjectId, ref: "user", required: true },
        task: { type: Schema.Types.ObjectId, ref: "task", required: true },
        taskStartTimestamp: { type: Date, default: Date.now },
        isCompleted: { type: Boolean, default: false },
        updatedAt: { type: Date, default: Date.now },
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

UserTaskSchema.index({ user: 1, task: 1 }, { unique: true });

export default mongoose.models[COLLECTION] ||
    mongoose.model(COLLECTION, UserTaskSchema);

