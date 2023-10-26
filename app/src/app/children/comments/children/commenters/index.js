import React from 'react';
import LikeButton from '../../../like_button';
import { commentParser } from '../../helpers';

const Commenters = (props) => {
  const {data, styles} = props;
  const edges = data.edge_media_to_comment.edges;

  const comments = edges.map((edge) => {
    const comment = edge.node;

    if (comment.deleted) return;

    return (
      <li
        style={styles.comment}
        key={comment.id}
      >
        <p>
          <a
            href={`https://instagram.com/${comment.owner.username}`}
            style={styles.user}
          >
            {comment.owner.username}
          </a>

          <span style={styles.text}>
            {commentParser(comment.text, styles)}
          </span>
        </p>

        <LikeButton styles={styles} />
      </li>
    );
  });

  return (
    <>
      {comments}
    </>
  )
};

export default Commenters;
