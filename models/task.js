import mongoose from "mongoose";

const TaskSchema = new mongoose.Schema(
  {
    content: { type: String, required: true },
    completed: { type: Boolean, default: false },
    isPriority: { type: Boolean, default: false },
  },
  { timestamps: true }
);

export default mongoose.models.Task || mongoose.model("Task", TaskSchema);
