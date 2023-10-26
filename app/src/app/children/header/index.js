import React from 'react'
import styles from './styles'

const Header = (props) => {
  const { data } = props
  return (
    <div style={styles.header}>
      <div style={styles.headerIcon}></div>
      <div style={styles.headerInfo}>
        <a
          href={`https://instagram.com/${data.owner.username}`}
          style={styles.headerName}
        >
          {data.owner.username}
        </a>

        <p style={styles.headerLocale}>
          {data.location.name}
        </p>
      </div>
    </div>
  )
}

export default Header
