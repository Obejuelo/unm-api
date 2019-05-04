const Notice = require('../models/news.model');
const upload = require('../config/upload');

const find = async (req, res) => {
    try {
        const docs = await Notice.find();
        res.json(docs);
    } catch (err) {
        res.json(err);
        console.log(err);
    }
}

const findById = async (req, res) => {
    let id = req.params.id;
    try {
        const result = await Notice.findOne({'_id':id});
        res.json(result)
    } catch (err) {
        res.json(err);
        console.log(err);
    }
}

const create = async (req, res, next) => {
    let body = req.body;

    try {
        const docs = await Notice.create({
            title: body.title,
            info: body.info,
            date: body.date
        });
        req.notice = docs;
        next()
    } catch (err) {
        next(err)
    }
}

// middleware to upload files
const multerMiddleware = () => {
    return upload.fields([
        {name: 'image', maxCount: 1}
    ])
}

const saveImage = async (req, res) => {
    if(req.notice) {
        if(req.files && req.files.image) {
            const path = req.files.image[0].path;
            req.notice.updateImage(path)
                .then(result => {
                    res.json(req.notice);
                    console.log(result);
                }).catch(err => {
                    res.json(err);
                    console.log(err);
                });
        } else {
            res.json(req.notice);
        }
    } else {
        res.status(422).json({
            error: req.error || 'Could not save image'
        })
    }
}

const update = async (req,res) => {
    let body = req.body;
    let id = req.params.id;
    try {
        const result = await Notice.findOneAndUpdate({ '_id': id }, body, { new: true, runValidators: true });
        res.json(result);
    } catch (err) {
        res.json(err);
        console.log(err);
    }
}

const destroy = async (req, res) => {
    let id = req.params.id;
    try {
        await Notice.findByIdAndRemove(id);
        res.json({
            message: 'Ususario eliminado'
        });
    } catch (err) {
        res.json(err);
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