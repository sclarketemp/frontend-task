import React from 'react';
import { commentParser } from '../../helpers';

const Poster = (props) => {
  const {data, styles} = props;

  const comment = data.edge_media_to_caption.edges[0].node.text;

  return (
    <li
      style={styles.comment}
      key={data.id}
    >
      <p>
        <a
          href={`https://instagram.com/${data.owner.username}`}
          style={styles.user}
        >
          {data.owner.username}
        </a>

        <span style={styles.text}>
          {commentParser(comment, styles)}
        </span>
      </p>
    </li>
  );
};

export default Poster;
