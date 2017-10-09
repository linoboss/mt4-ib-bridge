var express = require('express');
var OperationCtrl = require("../controllers/operations")
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post("/", OperationCtrl.addOperation)

router.post("/operations",  OperationCtrl.addOperation);

module.exports = router;
