import React from 'react'
import styles from './styles'
import LikeButton from '../like_button'
import Timestamp from '../timestamp'

const Content = (props) => {
  const {data} = props
  return (
    <>
      <header style={styles.contentHeader}>
        <div style={styles.contentHeaderInner}>
          <div style={styles.userIcon}></div>
          <div style={styles.userInfo}>
            <p style={styles.userName}>
              {data.owner.username}
            </p>
            <p style={styles.userLocale}>
              {data.location.name}
            </p>
          </div>
        </div>
      </header>
      <div style={styles.contentMain}>
        <p>Comments block</p>
      </div>
      <footer style={styles.contentFooter}>
        <div style={styles.contentFooterInner}>
          <div style={styles.info}>
            <p style={styles.likeCount}>
              {data.edge_media_preview_like.count} likes
            </p>

            <Timestamp data={data} />
          </div>

            <LikeButton />
        </div>
      </footer>
    </>
  )
}

export default Content
