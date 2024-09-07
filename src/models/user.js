import "../../mongodb";
import mongoose from "mongoose";
const Schema = mongoose.Schema;
import UserTask from "./userTask";

const COLLECTION = "user";

// User Schema
const UserSchema = new Schema(
    {
        telegramId: { type: String, unique: true },
        name: String,
        isPremium: { type: Boolean, default: false },
        points: { type: Number, default: 0 },
        pointsBalance: { type: Number, default: 0 },
        multitapLevelIndex: { type: Number, default: 0 },
        energy: { type: Number, default: 100 },
        energyRefillsLeft: { type: Number, default: 6 },
        energyLimitLevelIndex: { type: Number, default: 0 },
        mineLevelIndex: { type: Number, default: 0 },
        lastPointsUpdateTimestamp: { type: Date, default: Date.now },
        lastEnergyUpdateTimestamp: { type: Date, default: Date.now },
        lastEnergyRefillsTimestamp: { type: Date, default: Date.now },
        tonWalletAddress: String,
        referralPointsEarned: { type: Number, default: 0 },
        offlinePointsEarned: { type: Number, default: 0 },
        referrals: [{ type: Schema.Types.ObjectId, ref: "User" }],
        referredBy: { type: Schema.Types.ObjectId, ref: "User" },
        completedTasks: [{ type: Schema.Types.ObjectId, ref: UserTask }],
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
    mongoose.model(COLLECTION, UserSchema);

