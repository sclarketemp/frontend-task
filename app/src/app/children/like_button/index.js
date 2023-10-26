import React, { useState } from 'react';
import UnlikedIcon from './children/unliked_icon';
import LikedIcon from './children/liked_icon';

const LikeButton = (props) => {
  const {styles} = props;
  const [liked, setLiked] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleLike = () => {
    setLiked(!liked);
  };

  return (
    <button
      type='button'
      style={styles.likeButton}
      onClick={handleLike}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {liked || isHovered ? <LikedIcon styles={styles} /> : <UnlikedIcon styles={styles} /> }
    </button>
  );
};

export default LikeButton;
