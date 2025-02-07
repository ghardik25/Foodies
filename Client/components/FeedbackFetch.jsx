// import Feedback from "../pages/Feedback";
import FeedbackCards from "./FeedbackCards";

export default function FeedbackFetch() {

  const BASE_URL = process.env.VITE_APP_API_URL
  const API_URL = `${BASE_URL}/getfeedback`

  const fetchingFeedback = async () => {
    const response = await fetch(API_URL, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
    
      return await response.json();
  }

  return <FeedbackCards fetchingFeedback={fetchingFeedback} />
}