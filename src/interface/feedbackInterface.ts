export type FeedbackStatus =
  | "All"
  | "Planned"
  | "Open"
  | "Completed";

export interface Feedback {
    _id: string;
    name:string;
    title: string;
    description: string;
    status: FeedbackStatus;
    votes: number;
    createdAt: string;
}

export interface FeedbackCardInterface {
    feedback: Feedback;
    votes: (id: string) => void;
    deleteFeedback: (id: string) => void;
};

interface FeedbackFormValues {
    name: string;
    title: string;
    description: string;
    status: FeedbackStatus | string; // adjust if needed
}

export interface FilterBarProps {
    setFilterStatus:(value:FeedbackStatus) => void;
}

// add feedback form interface
export interface AddFeedbackProps {
  onSubmit: (data: FeedbackFormValues) => void;
}

export interface OptionsInterfcae {
  id: number;
  label: string;
  value: string;
}
// add feedback form interface end

export interface FeedbackListInterface {
    filters: string;
    upVotes: (id: string) => void;
    deleteFeedback: (id: string) => void;
};

// hooks -> useFeedbackMutation file interface
export interface UseFeedbackMutationInterface {
    setNotification: (value: string | null) => void;
}

// hooks -> useFeedbackQuery file interface
export interface UseFeedbackQueryInterface {
    filters: string;
}