import React from 'react'
import PageHeading from '../../components/ui/PageHeading'
import BookDetail from '../../components/book/Detail'

function ScreenBookDetail({ match: { params } }) {
  return (
    <>
      <PageHeading title="Book Detail" />
      <BookDetail id={params.id} />
    </>
  )
}

export default ScreenBookDetail
