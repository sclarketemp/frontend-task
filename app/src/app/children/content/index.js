import React from 'react'
import Comments from '../comments'
import Header from '../header'
import Footer from '../footer'

const Content = (props) => {
  const {data} = props
  return (
    <>
      <Header data={data} />
      <Comments data={data} />
      <Footer data={data} />
    </>
  )
}

export default Content
