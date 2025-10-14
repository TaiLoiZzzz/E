const app = require("./src/app");

const server = app.listen(3055, () => {
    console.log(`Server is running on port ${3055}`);
})
 
process.on('SIGINT', ()=>{
    server.close(() => console.log('Exit server'))
    app.notify.send("Server is shutting down");
})