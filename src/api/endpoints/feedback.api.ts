import type { Feedback } from "../../interface/feedbackInterface";
import { api } from "../axios";

const feedbackUrl = import.meta.env.VITE_API_URL;

// create a new feedback
export const createFeedback = async (feedbackData: Feedback) => {
    return await api.post<Feedback>(`${feedbackUrl}/add`, feedbackData);
}

// get all feedbacks
export const getAllFeedbacks = async (status:string): Promise<Feedback[]> => {
    const data = await api.get<Feedback[]>(`${feedbackUrl}/list?status=${status}`);
    if(Array.isArray(data)){
        return data;
    }

    if(data && Array.isArray(data.data)){
        return data.data;
    }
    return [];
};

// vote for feedback
export const voteFeedback = async (id: string) => {
    return await api.patch(`${feedbackUrl}/edit/${id}`);
};

export const deleteFeedback = async (id: string) => {
    return await api.delete(`${feedbackUrl}/delete/${id}`);
};