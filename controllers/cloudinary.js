const cloudinary = require('cloudinary').v2

const CLOUDINARY_API_SECRET  = require('../database-mysql/env');
const CLOUDINARY_CLOUD_NAME = require('../database-mysql/env');
const CLOUDINARY_API_key= require('../database-mysql/env');
cloudinary.config({
    cloud_name : CLOUDINARY_CLOUD_NAME,
    api_key: CLOUDINARY_API_key,
    api_secret: CLOUDINARY_API_SECRET
})

module.exports = cloudinary;