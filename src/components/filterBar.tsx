import type React from "react";
import type { FeedbackStatus, FilterBarProps } from "../interface/feedbackInterface";

const FilterBar:React.FC<FilterBarProps>  = (props) => {
    const { setFilterStatus } = props;
    const filters:FeedbackStatus[] = ["All", "Planned", "Open", "Completed"];

    return(
        <div className="flex gap-3 mb-4">
            {filters?.map((filter)=> (
                <button
                    key={filter}
                    onClick={() => setFilterStatus(filter)}
                    className="bg-gary-200 px-3 py-1 rounded-lg"
                >
                    {filter}
                </button>
            ))}
        </div>
    )
};

export default FilterBar;