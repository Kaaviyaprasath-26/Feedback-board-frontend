import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import type { Feedback, UseFeedbackMutationInterface } from '../../../interface/feedbackInterface';
import { createFeedback, voteFeedback, deleteFeedback } from '../../../api/endpoints/feedback.api';

export const UseFeedbackMutation = (props: UseFeedbackMutationInterface) => {
    const { setNotification } = props;
    const queryClient = useQueryClient();
    const navigate = useNavigate();
    const invalidate = () => queryClient.invalidateQueries({ queryKey: ["feedback"] });

    const createFeedbackMutation = useMutation({
        mutationFn: (data: Feedback) => createFeedback(data),
        onSuccess: () => {
            invalidate()
            setNotification("Feedback added Successfully");

            setTimeout(() => {
                setNotification(null);
                navigate("/");
            }, 1000);
        },
        onError: (error) => {
            console.error("Error creating feedback:", error);
            setNotification("Failed to add feedback. Please try again.");

            setTimeout(() => {
                setNotification(null);
            }, 3000);
        }
    });

    const voteMutation = useMutation({
        mutationFn: (id: string) => voteFeedback(id),
        onSuccess: invalidate,
        onError: (error) => {
            console.error("Error voteing the feedback:", error);
            setNotification("Failed to vote the feedback. Please try again.");
        }
    });

    const deleteFeedbackMutation = useMutation({
        mutationFn: (id: string) => deleteFeedback(id),
        onSuccess: invalidate,
        onError: (error) => {
            console.error("Error delete feedback:", error);
            setNotification("Failed to delete the feedback. Please try again.");
        }
    });

    return {
        createFeedbackMutation,
        voteMutation,
        deleteFeedbackMutation
    }
};