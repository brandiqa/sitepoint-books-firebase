import React from 'react'
import PageHeading from '../../components/ui/PageHeading'
import BookList from '../../components/book/List'

function ScreenBookList() {
  return (
    <>
      <PageHeading title="Book List" />
      <BookList />
    </>
  )
}

export default ScreenBookList
