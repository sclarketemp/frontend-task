import React from 'react'
import styles from './styles'
import Comments from '../comments'
import Header from '../header'
import Footer from '../footer'

const Content = (props) => {
  const {data} = props
  return (
    <>
      <header style={styles.contentHeader}>
        <Header data={data} />
      </header>
      <div style={styles.contentMain}>
        <Comments data={data} />
      </div>
      <footer style={styles.contentFooter}>
        <Footer data={data} />
      </footer>
    </>
  )
}

export default Content
