var express = require('express');
var router = express.Router();


router.get('/ho',
function(req,res,next)
{
  res.status(200).json({'name':'malith uba wadda'});
})
module.exports = router;