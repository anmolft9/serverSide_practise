import TaskSchema from "./TaskSchema.js";

export const insertTask = (taskObj) => {
  return TaskSchema(taskObj).save();
};
