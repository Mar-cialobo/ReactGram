// backend\models\Photo.js

const mongoose = require("mongoose")
const {Schema} = mongoose

const photoSchema = new Schema(
    {
    image: String,
    title: String,
    likes: Array,
    userId: mongoose.ObjectId,
    userName: String,
    comments: [
        {
            userId: mongoose.Schema.Types.ObjectId,
            userName: String,
            userImage: String,
            comment: String,
            createdAt: { type: Date, default: Date.now }
        }
    ],
    }, 
    {
    timestamps: true,
    }
);

const Photo = mongoose.model("Photo", photoSchema)

module.exports = Photo;