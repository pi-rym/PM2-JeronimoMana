const dbCon = require("./src/config/dbCon");
const app = require("./src/server")


dbCon().then(
    res => {
        app.listen(3000, () => {
            console.log("Serividor listo en el 3000");
        })

    }
).catch(
    res => {
        console.log("No se puedo establecer conexión con la DB")
    }
)
