import React from 'react'
import PageHeading from '../../components/ui/PageHeading'
import BookForm from '../../components/book/Form'

function ScreenBookForm({ match: { params } }) {
  const { id } = params
  const title = !id ? 'Create' : 'Update'
  return (
    <>
      <PageHeading title={`${title} Book`} />
      <BookForm id={id} />
    </>
  )
}

export default ScreenBookForm
