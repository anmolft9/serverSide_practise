import express from "express";

const router = express.Router();

let fakeDB = [
  { _id: 1, task: "dancing", hr: 1 },
  { _id: 2, task: "singing", hr: 2 },
  { _id: 3, task: "fucking", hr: 100 },
];

// console.log(router);

router.get("/", (req, res, next) => {
  //   console.log("get");
  const { _id } = req.params;
  console.log(_id);

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

// import express from "express";

// let fakeDB = [
//   { _id: 1, task: "dancing", hr: 1 },
//   { _id: 2, task: "singing", hr: 2 },
//   { _id: 3, task: "fucking", hr: 100 },
// ];
// const router = express.Router();

// router.get("/", (req, res, next) => {
//   let data = fakeDB;

//   try {
//     res.json({
//       status: "success",
//       message: "you hit the get root route",
//       data,
//     });
//   } catch (error) {
//     error.status = 500;
//     next(error);
//   }
// });

// router.post("/", (req, res, next) => {
//   try {
//     res.json({
//       status: "success",
//       message: "you hit the post root route",
//     });
//   } catch (error) {
//     error.status = 500;
//     next(error);
//   }
// });

// export default router;
