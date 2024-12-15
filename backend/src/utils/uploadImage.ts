import cloudinary from 'cloudinary';

export const uploadImage = async (imageFile: Express.Multer.File) => {
    const b64 = Buffer.from(imageFile.buffer).toString("base64");
    let dataURI = "data:" + imageFile.mimetype + ";base64," + b64;
    const res = await cloudinary.v2.uploader.upload(dataURI);
    return res.url;
}