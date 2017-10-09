var express = require('express');
var OperationCtrl = require("../controllers/operations")
var router = express.Router();

/* GET home page. */
router.route('/')
  .get(function(req, res, next){
    res.render('index', { title: 'MT4-IB Bridge' });
  })
  .post(OperationCtrl.addOperation)

router.route("/operations")
  .get(OperationCtrl.getUnseen)
  .post(OperationCtrl.markAsSeen);

router.route("/operations/all")
  .get(OperationCtrl.getAll)

module.exports = router;
