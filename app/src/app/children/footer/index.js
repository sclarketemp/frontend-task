import React from "react";
import LikeButton from '../like_button'
import Timestamp from '../timestamp'
import styles from "./styles";

const Footer = (props) => {
  const {data} = props;
  return (
    <div style={styles.footer}>
      <div style={styles.footerInfo}>
        <p style={styles.footerLikeCount}>
          {data.edge_media_preview_like.count} likes
        </p>

        <Timestamp data={data} />
      </div>

        <LikeButton styles={styles} />
    </div>
  )
}

export default Footer;