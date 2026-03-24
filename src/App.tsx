import { lazy, useState } from 'react';
import './App.css';
import FeedbackList from './components/feedbacklist';
import type { FeedbackStatus } from './interface/feedbackInterface';
import FilterBar from './components/filterBar';
import FeedbackForm from './components/addFeedback';
import { Route, Routes } from 'react-router-dom';
import {UseFeedbackMutation} from "./tanStackQuery/feedback/mutation/useFeedbackMutation";
import { Toaster } from 'react-hot-toast';

const Login = lazy(()=> import('./modules/auth/Login'));

function App() {
  
  const [filterStatus, setFilterStatus] = useState<FeedbackStatus>("All");
  const [notification, setNotification] = useState<string | null>(null);

  const { createFeedbackMutation, voteMutation, deleteFeedbackMutation } = UseFeedbackMutation({
    setNotification
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
      <Toaster position="top-right" reverseOrder={false} />
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
        <Route path='/login' element={<Login/>} />
      </Routes>
    </div>
  )
}

export default App
