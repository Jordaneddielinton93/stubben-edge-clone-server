import app from "../src/app.js";
const PORT = process.env.PORT || 5001;

app.listen(PORT, () => {
  console.log("listening on port: ", PORT);
});
