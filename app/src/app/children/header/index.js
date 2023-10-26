import React from 'react'
import styles from './styles'

const Header = (props) => {
  const { data } = props
  return (
    <header style={styles.header}>
      <a href={`https://instagram.com/${data.owner.username}`}>
        <img
          src={data.owner.profile_pic_url}
          style={styles.headerIcon}
          aria-label={`Go to ${data.owner.username}'s Instagram profile`}
        />
      </a>

      <div style={styles.headerInfo}>
        <a
          href={`https://instagram.com/${data.owner.username}`}
          style={styles.headerName}
          aria-label={`Go to ${data.owner.username}'s Instagram profile`}
        >
          {data.owner.username}
        </a>

        <p style={styles.headerLocale}>
          {data.location.name}
        </p>
      </div>
    </header>
  )
}

export default Header
