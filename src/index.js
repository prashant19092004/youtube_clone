import dotenv from "dotenv";
import connectDb from "./db/index.js";

dotenv.config({
    path : './env'
})




connectDb()
.then( () =>{
    app.on("error", (error) => {
        console.log("ERROR : ", error);
    })
    app.listen(process.env.PORT || 8000, ()=> {
        console.log(`Server is started at ${process.env.PORT}`);
    } )
})
.catch(()=> {
    console.log("MongoDB Connection Error !!");
})