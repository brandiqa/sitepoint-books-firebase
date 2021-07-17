import React from 'react'
import PageHeading from '../../components/ui/PageHeading'
import AuthorList from '../../components/author/AuthorList'

function AuthorsView() {
  return (
    <>
      <PageHeading title="Author List" />
      <AuthorList />
    </>
  )
}

export default AuthorsView
