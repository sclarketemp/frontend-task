import React from 'react'
import Image from './children/image'
import Content from './children/content'
import styles from './styles'

const App = (props) => {
  const { data } = props
  return (
    <main style={styles.main}>
      <div style={styles.imageColumn}>
        <Image data={data} />
      </div>
      <div style={styles.contentColumn}>
        <Content data={data} />
      </div>
    </main>
  )
}

export default App
