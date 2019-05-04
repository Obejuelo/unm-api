const Image = require('../models/images.model');
const upload = require('../config/upload');

const find = async (req, res) => {
    try {
        const result = await Image.find();
        res.json(result);
    } catch (err) {
        res.json(err);
        console.log(err);
    }
}

const findById = async (req, res) => {
    let id = req.params.id;
    try {
        const result = await Image.findOne({'_id': id});
        res.json(result);
    } catch (err) {
        res.json(err);
        console.log(err);
    }
}

const create = async (req, res, next) => {
    let body = req.body;
    try {
        const result = await Image.create({
            description: body.description,
            image: body.image
        });
        req.image = result;
        next();
    } catch (err) {
        next(err)
    }
}

const update = async (req, res) => {
    let id = req.params.id;
    let body = req.body;
    try {
        const result = await Image.findByIdAndUpdate({ '_id': id }, body, { new: true, runValidators: true });
        res.json(result);
    } catch (err) {
        res.json(err);
        console.log(err);
    }
}

const destroy = async (req, res) => {
    let id = req.params.id;
    try {
        await Image.findByIdAndRemove(id);
        res.json({
            message: 'Registro eliminado'
        });
    } catch (err) {
        res.json(err);
        console.log(err);
    }
}

// middleware to upload files
const multerMiddleware = () => {
    return upload.fields([
        {name: 'image', maxCount: 1}
    ])
}

const saveImage = async (req, res) => {
    if(req.image) {
        if(req.files && req.files.image) {
            const path = req.files.image[0].path;
            req.image.updateImage(path)
                .then(result => {
                    res.json(req.image);
                    console.log(result);
                }).catch(err => {
                    res.json(err);
                    console.log(err);
                });
        } else {
            res.json(req.image);
        }
    } else {
        res.status(422).json({
            error: req.error || 'Could not save image'
        })
    }
}

module.exports = {
    find,
    findById,
    create,
    update,
    destroy,
    multerMiddleware,
    saveImage
}