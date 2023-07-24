import { useState } from "react";
import data from "./data";
import SingleQuestion from "./Question";
function App() {
  const [questions, setQuestions] = useState(data);

  const toggleQuestionInfo = (id) => {
    setQuestions((prevQuestions) => {
      return prevQuestions.map((question) => {
        if (question.id === id) {
          return { ...question, showInfo: !question.showInfo };
        } else {
          return question;
        }
      });
    });
  };

  return (
    <main>
      <div className="container">
        <h3>Questions and answers about login</h3>
        <section className="info">
          {questions.map((question) => (
            <SingleQuestion
              key={question.id}
              {...question}
              toggleInfo={() => toggleQuestionInfo(question.id)}
            />
          ))}
        </section>
      </div>
    </main>
  );
}
export default App;
