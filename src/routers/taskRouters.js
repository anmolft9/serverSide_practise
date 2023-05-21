import express from "express";

const router = express.Router();

// let fakeDB = [
//   { _id: 1, task: "dancing", hr: 1 },
//   { _id: 2, task: "singing", hr: 2 },
//   { _id: 3, task: "fucking", hr: 100 },
// ];

// console.log(router);

import { insertTask } from "../model/TaskModel.js";

router.get("/:_id?", (req, res, next) => {
  //   console.log("get");
  const { _id } = req.params;
  //   console.log(_id);

  let data = fakeDB;

  const specData = fakeDB.filter((item) => item._id === +_id);
  console.log(specData);

  try {
    res.json({
      status: "success",
      message: "get route",
      data,
    });
  } catch (error) {
    error.status = 500;
    next(error);
  }
});

router.post("/", async (req, res, next) => {
  const insertData = await insertTask(req.body);

  try {
    res.json({
      status: "success",
      message: "post route",
      insertData,
    });
  } catch (error) {
    error.status = 500;
    next(error);
  }
});

router.patch("/", (req, res, next) => {
  try {
    res.json({
      status: "success",
      message: "patch route",
    });
  } catch (error) {
    error.status = 500;
    next(error);
  }
});

router.delete("/", (req, res, next) => {
  const { _id } = req.body;
  let afterDeletion = fakeDB.filter((item) => item._id !== +_id);
  try {
    res.json({
      status: "success",
      message: "delete route",
      afterDeletion,
    });
  } catch (error) {
    error.status = 500;
    next(error);
  }
});

export default router;
