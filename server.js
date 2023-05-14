import express from "express";

const app = express();

const PORT = 8000;

app.use(express.json());

//routers
import taskRouters from "./src/routers/taskRouters.js";
app.use("api/v1/task", taskRouters);

console.log(taskRouters);

app.use("/", (req, res) => {
  res.json({
    status: "success",
    message: "Welcome",
  });
});

app.listen(PORT, (error) => {
  error && console.log(error);
  console.log(`server connected on http://localhost:${PORT}`);
});
