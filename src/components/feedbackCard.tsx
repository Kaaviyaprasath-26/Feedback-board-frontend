import { motion } from 'framer-motion';
import type {FeedbackCardInterface } from '../interface/feedbackInterface';
import type React from 'react';


const FeedbackCard: React.FC<FeedbackCardInterface> = (props) => {
    const { feedback, votes, deleteFeedback } = props;

    const handleDelete = () => {
        const confirmDelete = window.confirm("Are you sure you want to delete this feedback?");
        if (confirmDelete) {
            deleteFeedback(feedback._id);
        }
    };

    return (
        <div>
            <motion.div whileHover={{ scale: 1.2 }}
                className='bg-white p-4 rounded-xl shadow-md mb-4'>
                <div className='flex justify-between items-center'>
                    <button
                        onClick={() => votes(feedback._id)}
                        className="bg-blue-100 px-3 py-1 rounded-lg"
                    >
                        👍 {feedback.votes}
                    </button>
                    <span className="text-sm text-gray-500">{feedback.status}</span>
                </div>
                <h2 className="text-lg text-gray-500 font-semibold mt-2">{feedback.title}</h2>

                <p className="text-gray-600">{feedback.description}</p>
                <div className="flex justify-between mt-3 text-sm text-gray-500">
                    <span>Posted by: {feedback.name}</span>

                    <button
                        onClick={handleDelete}
                        className="text-red-500"
                    >
                        Delete
                    </button>
                </div>
                <p className="text-xs text-gray-400">
                    Created: {new Date(feedback.createdAt).toDateString()}
                </p>
            </motion.div>
        </div>
    )
};

export default FeedbackCard;