import { motion } from "framer-motion";
import { Formik, Form, Field, ErrorMessage } from "formik";
import type React from "react";
import type { AddFeedbackProps, OptionsInterfcae } from "../interface/feedbackInterface";
import { FeedbackSchema } from "../schema/feedback";
import { useNavigate } from "react-router-dom";

const options: OptionsInterfcae[] = [
  { id: 1, label: "Open", value: "Open" },
  { id: 2, label: "Planned", value: "Planned" },
  { id: 3, label: "Completed", value: "Completed" },
];

const FeedbackForm: React.FC<AddFeedbackProps> = (props) => {
  const { onSubmit } = props;
  const naviagte = useNavigate();

  return (
    <Formik
      initialValues={{
        name: "",
        title: "",
        description: "",
        status: "Open",
      }}
      validationSchema={FeedbackSchema}
      onSubmit={(values, { resetForm }) => {
        onSubmit(values);
        resetForm();
      }}
    >
      {() => (
        <Form>
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            className="border border-white-300 rounded-xl shadow-md mb-6 p-4"
          >
            {/* Name */}
            <div className="mb-3 mt-2">
              <Field
                name="name"
                placeholder="Name"
                className="border p-2 w-full rounded text-black-200"
              />
              <ErrorMessage
                name="name"
                component="div"
                className="text-red-500 text-sm mt-1"
              />
            </div>

            {/* Title */}
            <div className="mb-3">
              <Field
                name="title"
                placeholder="Title"
                className="border p-2 w-full rounded"
              />
              <ErrorMessage
                name="title"
                component="div"
                className="text-red-500 text-sm mt-1"
              />
            </div>

            {/* Description */}
            <div className="mb-3">
              <Field
                name="description"
                as="textarea"
                placeholder="Description"
                className="border p-2 w-full rounded"
              />
              <ErrorMessage
                name="description"
                component="div"
                className="text-red-500 text-sm mt-1"
              />
            </div>

            {/* Status */}
            <div className="mb-3">
              <Field
                as="select"
                name="status"
                className="border p-2 w-full rounded"
              >
                {options?.map((option:OptionsInterfcae) => (
                  <option value={option.value} key={option?.id} className="bg-gray-100 text-white">{option.label}</option>
                ))}
              </Field>
              <ErrorMessage
                name="status"
                component="div"
                className="text-red-500 text-sm mt-1"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded"
            >
              Add Feedback
            </button>

            <button
              type="submit"
              className="bg-gray-500 text-white px-4 py-2 rounded ml-4"
              onClick={() => naviagte("/")}
            >
              Cancel
            </button>
          </motion.div>
        </Form>
      )}
    </Formik>
  );
}

export default FeedbackForm;