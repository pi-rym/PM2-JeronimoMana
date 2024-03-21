const mongoose = require("mongoose")

const dbCon = async () => {
    await mongoose.connect("mongodb+srv://manajeronimo7:FdOiln1FKn5m55l5@cluster0.ph5yd6h.mongodb.net/FirstDBB?retryWrites=true&w=majority&appName=Cluster0")
}

module.exports = dbCon