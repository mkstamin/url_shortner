const express = require('express')
const {getViewPage,createShortUrl,excuteShortUrl} = require('../controllers/createUrlControllers')


const router = express.Router();

router.route('/').get(getViewPage).post(createShortUrl)
router.get('/:nanoID', excuteShortUrl)


module.exports = router