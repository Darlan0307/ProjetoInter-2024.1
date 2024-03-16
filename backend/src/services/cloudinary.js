import cloudinary from 'cloudinary'

// export const configCloud = cloudinary.v2.config({
//   cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
//   api_key: process.env.CLOUDINARY_API_KEY,
//   api_secret: process.env.CLOUDINARY_API_SECRET,
// });

const configCloud = {
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
};

export async function uploadImage(path) {
  cloudinary.v2.config(configCloud);
  const result = await cloudinary.v2.uploader.upload(path);
  return result.url ? { url: result.secure_url } : null;
}
