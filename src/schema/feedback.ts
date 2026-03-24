import * as Yup from "yup";

export const FeedbackSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  title: Yup.string().required("Title is required"),
  description: Yup.string().required("Description is required"),
  status: Yup.string().oneOf(["Open", "Planned", "Completed"]).required(),
});