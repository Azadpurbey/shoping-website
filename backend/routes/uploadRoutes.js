import path from 'path'
import express from 'express'
import multer from 'multer'

const router = express.Router()

// showing storage location
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/')
  },
  filename: function (req, file, cb) {
    cb(
      null,
      `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`
    )
  },
})

// Middle ware - validation work - correct file type or not
function checkFileType(file, cb) {
  const filetypes = /jpg|jpeg|png|webp/
  const extname = filetypes.test(path.extname(file.originalname).toLowerCase())
  const mimetype = filetypes.test(file.mimetype)

  if (extname && mimetype) {
    return cb(null, true)
  } else {
    cb('Image only!')
  }
}

const upload = multer({
  storage: storage,
  fileFilter: function (req, file, cb) {
    checkFileType(file, cb)
  },
})

// route setup
router.post('/', upload.single('image'), (req, res) => {
  //   console.log('I an inside route')
  //   console.log(req.file.path)
  res.send(`/${req.file.path}`)
})

export default router
