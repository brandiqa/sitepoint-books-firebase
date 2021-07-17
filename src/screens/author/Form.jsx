import React from 'react'
import PageHeading from '../../components/ui/PageHeading'
import AuthorForm from '../../components/author/Form'

function ScreenAuthorForm() {
  const { id } = params
  const title = !id ? 'Create' : 'Update'
  return (
    <>
      <PageHeading title={`${title} Author`} />
      <AuthorForm id={id} />
    </>
  )
}

export default ScreenAuthorForm
