// import Feedback from "../pages/Feedback";
import FeedbackCards from "./FeedbackCards";

export default function FeedbackFetch() {
  const fetchingFeedback = async () => {
    const response = await fetch("http://localhost:3000/getfeedback", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
    
      return await response.json();
  }

  return <FeedbackCards fetchingFeedback={fetchingFeedback} />
}