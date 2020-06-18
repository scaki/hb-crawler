import app from "./app";
import Dayly from "./jobs";
const port = process.env.PORT || 5000;

Dayly();
app.listen(port);

console.log(`Listening on port ${port}`);