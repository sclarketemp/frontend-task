import React, { useState } from 'react';
import styles from './styles';
import UnlikedIcon from './children/unliked_icon';
import LikedIcon from './children/liked_icon';

const LikeButton = () => {
  const [liked, setLiked] = useState(false);

  const handleLike = () => {
    setLiked(!liked);
  };

  return (
    <button
      type='button'
      style={styles}
      onClick={handleLike}
    >
      {liked ? <UnlikedIcon /> : <LikedIcon /> }
    </button>
  );
};

export default LikeButton;
