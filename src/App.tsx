import { useState } from 'react';
import './App.css';
import FeedbackList from './components/feedbacklist';
import { useQueryClient } from '@tanstack/react-query';
import type { Feedback, FeedbackStatus } from './interface/feedbackInterface';
import { voteFeedback, deleteFeedback, createFeedback } from './api/feedbackApi';
import { useMutation } from '@tanstack/react-query';
import FilterBar from './components/filterBar';
import FeedbackForm from './components/addFeedback';
import { Route, Routes, useNavigate } from 'react-router-dom';

function App() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const invalidate = () =>
    queryClient.invalidateQueries({ queryKey: ["feedback"] });
  const [filterStatus, setFilterStatus] = useState<FeedbackStatus>("All");
  const [notification, setNotification] = useState<string | null>(null);

  const createFeedbackMutation = useMutation({
    mutationFn: (data: Feedback) => createFeedback(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["feedback"] });
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

  return (
    <div className='max-w-2xl mx-auto p-6'>
      <h1 className='text-2xl font-bold mb-4'>Feedback Board</h1>

      {/* <FeedbackForm onSubmit={(data) => createFeedbackMutation.mutate(data)} />
      <FilterBar setFilterStatus={setFilterStatus} />
      <FeedbackList
        filters={filterStatus}
        upVotes={voteMutation.mutate}
        deleteFeedback={deleteFeedbackMutation.mutate}
      /> */}
      {notification && (
        <div className="fixed top-4 right-4 bg-green-500 text-white px-4 py-2 rounded shadow z-50">
          {notification}
        </div>
      )}
      <Routes>
        <Route path='/' element={
          <>
            <FilterBar setFilterStatus={setFilterStatus} />
            <FeedbackList
              filters={filterStatus}
              upVotes={voteMutation.mutate}
              deleteFeedback={deleteFeedbackMutation.mutate}
            />
          </>
        } />
        <Route path='/add-feedback' element={
          <FeedbackForm onSubmit={(data) => createFeedbackMutation.mutate(data)} />
        } />
      </Routes>
    </div>
  )
}

export default App
