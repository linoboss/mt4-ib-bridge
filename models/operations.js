module.exports = function(app, mongoose){
    var operationSchema = new mongoose.Schema({
        "price": Number,
        "date": String,
        "seen": Boolean
    });

    mongoose.model("Operation", operationSchema);
}

  