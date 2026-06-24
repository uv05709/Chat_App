import multer from 'multer'

const MAX_FILE_SIZE = 25*1024*1024 //25mb

export const upload = multer({
    storage: multer.memoryStorage(),
    limits:{fileSize:MAX_FILE_SIZE},
    fileFilter:(req,res,cb)=>{ //cb-Call Back
        const isImage = file.mimetype.startsWith("image/")
        const isvideo = file.mimetype.startsWith("video/")
        if(!isImage && isvideo){
            cb(new Error(" Only image and video are allowed  "));
            return
        }
        cb(null,true)
    }
})