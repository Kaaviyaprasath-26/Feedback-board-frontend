import axios from "axios";
import type { Feedback } from "../interface/feedbackInterface";

const baseURL = import.meta.env.VITE_DOMAIN + import.meta.env.VITE_API_URL;

// create a new feedback
export const createFeedback = async (feedbackData: Feedback) => {
    const { data } = await axios.post(baseURL, feedbackData);
    return data;
}

// get all feedbacks
export const getAllFeedbacks = async (status:string): Promise<Feedback[]> => {
    const { data } = await axios.get(`${baseURL}?status=${status}`);
    console.log('feedback list123', data);
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
    const { data } = await axios.patch(`${baseURL}/${id}`);
    return data;
};

export const deleteFeedback = async (id: string) => {
    const { data } = await axios.delete(`${baseURL}/${id}`);
    return data
};