import React from 'react';
import styles from './styles';

import Poster from './children/poster';
import Commenters from './children/commenters';

const Comments = (props) => {
  const {data} = props;

  return (
    <ul style={styles.comments}>
      <Poster data={data} styles={styles} />
      <Commenters data={data} styles={styles} />
    </ul>
  )
};

export default Comments;
