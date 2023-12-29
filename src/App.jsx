import React, { useState } from 'react';

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>{text}</button>
);

const StatisticLine = ({ text, value }) => (
  <tr>
    <td>{text}</td>
    <td>{value}</td>
  </tr>
);

const Statistics = ({ good, neutral, bad, all }) => {
  const calculateAverage = () => {
    if (all === 0) {
      return 0;
    }
    return (good - bad) / all;
  };

  const calculatePositivePercentage = () => {
    if (all === 0) {
      return 0;
    }
    return (good / all) * 100;
  };

  return (
    <div>
      <h1>Statistics</h1>
      {all > 0 ? (
        <table>
          <tbody>
            <StatisticLine text="good" value={good} />
            <StatisticLine text="neutral" value={neutral} />
            <StatisticLine text="bad" value={bad} />
            <StatisticLine text="all" value={all} />
            <StatisticLine text="average" value={calculateAverage()} />
            <StatisticLine
              text="positive"
              value={`${calculatePositivePercentage()}%`}
            />
          </tbody>
        </table>
      ) : (
        <p>No feedback given</p>
      )}
    </div>
  );
};

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [all, setAll] = useState(0);

  const handleButtonClick = (feedbackType) => {
    if (feedbackType === 'good') {
      setGood(good + 1);
    } else if (feedbackType === 'neutral') {
      setNeutral(neutral + 1);
    } else if (feedbackType === 'bad') {
      setBad(bad + 1);
    }

    setAll(all + 1);
  };

  return (
    <div>
      <h1>Give feedback</h1>
      <Button handleClick={() => handleButtonClick('good')} text="good" />
      <Button handleClick={() => handleButtonClick('neutral')} text="neutral" />
      <Button handleClick={() => handleButtonClick('bad')} text="bad" />
      <Statistics good={good} neutral={neutral} bad={bad} all={all} />
    </div>
  );
};

export default App;
