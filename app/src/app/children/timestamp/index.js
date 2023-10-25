import React from 'react';
import styles from './styles';

const Timestamp = (props) => {
  const { data } = props;

  // Convert the Unix timestamp to a JavaScript Date object
  const date = new Date(data.taken_at_timestamp * 1000); // Multiply by 1000 to convert seconds to milliseconds

  // Calculate the time difference in milliseconds
  const currentTime = new Date();
  const timeDifference = currentTime - date;

  // Calculate time difference in hours, days, and weeks
  const hoursAgo = Math.floor(timeDifference / (1000 * 60 * 60));
  const daysAgo = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  const weeksAgo = Math.floor(timeDifference / (1000 * 60 * 60 * 24 * 7));

  let timeAgoText = '';

  if (weeksAgo > 0) {
    timeAgoText = `${weeksAgo} week${weeksAgo > 1 ? 's' : ''} ago`;
  } else if (daysAgo > 0) {
    timeAgoText = `${daysAgo} day${daysAgo > 1 ? 's' : ''} ago`;
  } else {
    timeAgoText = `${hoursAgo} hour${hoursAgo > 1 ? 's' : ''} ago`;
  }

  return (
    <p style={styles}>
      {timeAgoText}
    </p>
  );
};

export default Timestamp;
