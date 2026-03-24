import { useQuery } from "@tanstack/react-query";
import { getAllFeedbacks } from "../../../api/endpoints/feedback.api";
import type { UseFeedbackQueryInterface } from "../../../interface/feedbackInterface";

export const UseFeedbackQuery = (props: UseFeedbackQueryInterface) => {
    const { filters } = props;

    return useQuery({
        queryKey: ["feedback", filters],
        queryFn: () => getAllFeedbacks(filters)
    });
};