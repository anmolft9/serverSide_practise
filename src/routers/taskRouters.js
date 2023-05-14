import express from "express";

const router = express.Router();

let fakeDB = [
  { _id: 1, task: "dancing", hr: 1 },
  { _id: 2, task: "singing", hr: 2 },
  { _id: 3, task: "fucking", hr: 100 },
];

router.get("/", (req, res) => {
  //   const { _id } = req.params;

  let data = fakeDB;

  //   if (_id) {
  //     data = fakeDB.filter((item) => item._id === +_id);
  //   }

  res.json({
    status: "success",
    message: "get route",
    data,
  });
});

export default router;
