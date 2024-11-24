import express from "express";
import routes from "./src/routes/postsRoutes.js";

const PORT = process.env.APP_HTTP_PORT;

const app = express();
app.use(express.static('uploads'))
routes(app);

app.listen(PORT, () => {
    console.log('Listening...');
});
