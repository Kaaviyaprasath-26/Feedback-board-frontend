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

export interface FilterBarProps {
    setFilterStatus:(value:FeedbackStatus) => void;
}

// add feedback form interface
export interface AddFeedbackProps {
  onSubmit: (data: any) => void;
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