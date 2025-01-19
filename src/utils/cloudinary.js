import { v2 as cloudinary} from 'cloudinary';
import {extractPublicId} from 'cloudinary-build-url';
import fs from 'fs';

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
})

// Function to upload a local file to Cloudinary
const uploadOnCloudinary = async (fileLocalpath) => {
    try {
        if(!fileLocalpath) return null
        const response = await cloudinary.uploader.upload(fileLocalpath,{
            resource_type: 'auto'
        })
        if (response.result === "ok") {
            fs.unlinkSync(fileLocalpath)
            return response;
        } else {
            console.error("Upload failed:", response);
            return null;
        }
    } catch (error) {
        fs.unlinkSync(fileLocalpath)
        return null
    }
}

const deleteFromCloudinary = async (oldFile) => {
    try {
        if(!oldFile) return null

        const publicId = extractPublicId(oldFile)

        let resourceType = "image"
        if (oldFile.match(/\.(mp4|mkv|mov|avi)$/)) {
            resourceType = "video";
        } else if (oldFile.match(/\.(mp3|wav)$/)) {
            resourceType = "raw"; // For audio or other file types
        }

        const response = await cloudinary.uploader.destroy(publicId,{
            resource_type: resourceType
        })

        if (response.result === "ok") {
            return response;
        } else {
            console.error("Deletion failed:", response);
            return null;
        }

    } catch (error) {
        console.error("Error deleting image from Cloudinary:", error);
        return null;
    }
}

export { uploadOnCloudinary, deleteFromCloudinary}