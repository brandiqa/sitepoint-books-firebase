import React from 'react'
import PageHeading from '../../components/ui/PageHeading'
import AuthorList from '../../components/author/List'

function ScreenAuthorList() {
  const authors = [
    { id: '123', name: 'Jane Cooper' },
    { id: '124', name: 'Cody Fisher' },
  ]

  return (
    <>
      <PageHeading title="Author List" />
      <div className="mt-12">
        <AuthorList data={authors} />
      </div>
    </>
  )
}

export default ScreenAuthorList
