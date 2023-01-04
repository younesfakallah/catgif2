const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.sendFile(__dirname + '/index.html');
});
app.get("/javascripts.js", (req, res) => {
    res.sendFile(__dirname + '/javascripts.js');
});
app.get("/api/gif", (req, res) => {
    const images = [
        {
            desc: "Funny cat",
            gif: "https://media.giphy.com/media/BzyTuYCmvSORqs1ABM/giphy.gif"
        },
        {
            desc: "Cat playing",
            gif: "https://media.giphy.com/media/3oriO0OEd9QIDdllqo/giphy.gif"
        },
        {
            desc: "Funny cat",
            gif: "https://media.giphy.com/media/BzyTuYCmvSORqs1ABM/giphy.gif"
        },
        {
            desc: "Developer cat",
            gif: "https://media.giphy.com/media/VbnUQpnihPSIgIXuZv/giphy.gif"
        },
        {
            desc: "Sleeping cat",
            gif: "https://media.giphy.com/media/DPiuat0EsqP3a/giphy.gif"
        }
      ];
      res.json(images);
});
app.listen(3000, () => console.log("Server ready!"));