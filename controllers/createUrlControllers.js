const CreateUrl = require('../models/createUrlModels')
const nanoid = require('nanoid')

const findAll = async()=> {
    return await CreateUrl.find()
}


exports.getViewPage = async (req, res, next)=>{
    const urls = await findAll()

    res.status(200).render('index', {
       taitle: 'Create you URL short' ,
       urls
    })
    
}


exports.createShortUrl =async (req, res, next)=>{
    try {

        let deta; 

        const {fullUrl}= req.body;
        const hasUrl = await CreateUrl.findOne({fullUrl}) 
        deta=hasUrl
        if (hasUrl) {
            const urls = await findAll()
            return res.status(200).render('index',{
                deta,
                urls
            })
        }

        const nanoID = nanoid(10);
        const shortUrl = `${req.protocol}://${req.get('host')}/${nanoID}`

        const newUrl = await CreateUrl.create({fullUrl,shortUrl})
        deta=newUrl

        const urls = await findAll()
        res.status(200).render('index', {
            deta,
            urls
         })
        // console.log(deta);
        
    } catch (err) {
        console.log(err.message);
    }
}

exports.excuteShortUrl = async(req, res, next)=>{
    try {
        const {nanoID} = req.params;
    
        const shortUrl = `${req.protocol}://${req.get('host')}/${nanoID}`
        const findUrl = await CreateUrl.findOne({shortUrl})

        findUrl.clicks++
        await findUrl.save()
        
        res.redirect(findUrl.fullUrl)
    } catch (err) {
        console.log(err.message);
    }
}