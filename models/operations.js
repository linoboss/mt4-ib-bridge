module.exports = function(app, mongoose){
    var operationSchema = new mongoose.Schema({
        "symbol": String,
        "price": Number,
        "date": Number,
        "discarded": Boolean
    });

    mongoose.model("Operation", operationSchema);
}
