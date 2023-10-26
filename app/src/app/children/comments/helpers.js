import React from "react";

export const commentParser = (comment, styles) => {
  return comment.split(/(#\w+|\n)/g).map((segment, index) => {
    if (segment.startsWith('#')) {
      // For hashtags, create a link
      const hashtag = segment.substring(1); // Remove the '#' symbol
      return React.createElement('a', {
        href: `/search?q=${hashtag}`,
        key: index,
        style: styles.hashtag, // Apply your styles here
      }, `#${hashtag}`);
    } else if (segment === '\n') {
      // For newlines, create a <br> element
      return React.createElement('br', { key: index });
    } else {
      // For regular text, return it as is
      return segment;
    }
  });
};
