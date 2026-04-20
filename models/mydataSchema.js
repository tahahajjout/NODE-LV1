const mongoose = require("mongoose")
const schema = mongoose.Schema;

const articleSchema = new schema({
    userNamee: String
});

const Mydata = mongoose.model("Mydataa", articleSchema);

module.exports = Mydata