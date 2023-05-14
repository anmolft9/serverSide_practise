import express from "express";

const router = express.Router();

let fakeDB = [
  { _id: 1, task: "dancing", hr: 1 },
  { _id: 2, task: "singing", hr: 2 },
  { _id: 3, task: "fucking", hr: 100 },
];

// console.log(router);

router.get("/:_id?", (req, res, next) => {
  //   console.log("get");
  const { _id } = req.params;
  console.log(_id);

  let data = fakeDB;

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

router.post("/", (req, res, next) => {
  try {
    res.json({
      status: "success",
      message: "post route",
    });
  } catch (error) {
    error.status = 500;
    next(error);
  }
});

export default router;
