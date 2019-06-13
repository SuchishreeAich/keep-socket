const router = require('express').Router();
const ctrl = require('./notes.controller');

router.post('/share', ctrl.shareNotes);
router.get('/share', ctrl.getNoteForUserID);

module.exports = router;