const {app, BrowserWindow} = require("electron")
const path = require("node:path")
const filePath = "./index.html"

const createWindow = () => {
    const win = new BrowserWindow({
        width:600,
        height:600,
        webPreferences:{
            preload:path.join(__dirname, "preload.js")
        }
    })

    win.loadFile(filePath)
}

app.whenReady().then(() => {
    console.log("the express app is ready!!")
    createWindow()
    
    
    app.on("window-all-closed", () => {
        if (process.platform != "darwin"){
            app.quit()
        }
    })
})
