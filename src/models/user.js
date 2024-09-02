import "../../mongodb";
import mongoose from "mongoose";

const COLLECTION = "users";

const Schema = new mongoose.Schema(
    {
        name: String,
        email: String,
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

// Schema.index({ email: 1 });
// Schema.index({ "metadata.rewardWalletAddress": 1 });

export default mongoose.models[COLLECTION] ||
    mongoose.model(COLLECTION, Schema);

