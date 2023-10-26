import React from "react";
import LikeButton from '../like_button';
import Timestamp from '../timestamp';
import styles from "./styles";

const Footer = (props) => {
  const {data} = props;
  const likeCount = data.edge_media_preview_like.count;

  return (
    <footer style={styles.footer}>
      <div style={styles.footerInfo}>
        <p style={styles.footerLikeCount}>
          {likeCount} {likeCount === 1 ? "like" : "likes"}
        </p>

        <Timestamp data={data} />
      </div>

      <LikeButton styles={styles} />
    </footer>
  );
};

export default Footer;
