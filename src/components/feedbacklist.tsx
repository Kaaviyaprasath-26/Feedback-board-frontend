import { useQuery } from "@tanstack/react-query";
import { getAllFeedbacks } from "../api/endpoints/feedback.api";
import FeedbackCard from "./feedbackCard";
import type { Feedback, FeedbackListInterface } from "../interface/feedbackInterface";
import type React from "react";
import { useNavigate } from "react-router-dom";

const FeedbackList: React.FC<FeedbackListInterface> = (props) => {
    const { filters, upVotes, deleteFeedback } = props;
    const navigate = useNavigate();
    const { data, isLoading } = useQuery({
        queryKey: ["feedback", filters],
        queryFn: () => getAllFeedbacks(filters)
    });

    if (isLoading) {
        return <p>Feedback Loading</p>
    }

    return (
        <div className="max-w-3xl mx-auto p-4">
            <p>Feedback List</p>
            <button
                className="mb-4 bg-blue-600 text-white px-4 py-2 rounded"
                onClick={() => navigate("/add-feedback")}
            >
                + Add Feedback
            </button>
            {data?.map((feedback: Feedback) => (
                <FeedbackCard
                    key={feedback?._id}
                    feedback={feedback}
                    votes={upVotes}
                    deleteFeedback={deleteFeedback}
                />
            ))}
        </div>
    )
};

export default FeedbackList;