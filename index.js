import express from "express"
import ejs from "ejs"
import cookieParser from "cookie-parser";
import fetch from "node-fetch";
const app = express();

// USING MIDDLEWARES
app.use(express.urlencoded({extended: true}))
app.use(cookieParser())
app.use(express.json())
app.use(express.static("public"))

app.post("/cityinfo", async(req, res)=>{
    // const response = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=1394c8f8681a496cb5c121423232705&q=${req.body.city}`)

    
    const data = await response.json()
    console.log(data)
    res.render("weather.ejs",{name: data.location.name, temp_cel: data.current.temp_c, weather_cond: data.current.condition.text, icon: data.current.condition.icon})
    // res.send("no data")
})

app.get("/", (req, res)=>{
    res.render("Home.ejs");
})

app.listen(3000, (req, res)=>{
    console.log("Application has been started on port 3000");
})