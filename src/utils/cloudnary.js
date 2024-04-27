import { v2 as cloudinary } from 'cloudinary';
import fs from "fs";

cloudinary.config({ 
    cloud_name: 'daodjxfwx', 
    api_key: '253342891769727', 
    api_secret: '***************************' 
});

const uploadOnCloudinary = async(localFilePath) => {
    try{
        if(!localFilePath) return null

        await cloudinary.uploader.upload(localFilePath, {resource_type: "auto"})
        //File has been uploaded successfully

        console.log("file is uploaded on cloudinary :", response.url );
        return response;
    }catch(error){
        fs.unlinkSync(localFilePath) // remove the locally saved temporary file as the upload operation got failed
        return null
    }
} 


export { uploadOnCloudinary }