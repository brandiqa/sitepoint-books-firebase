import React from 'react'
import { useParams } from 'react-router-dom'
import PageHeading from '../../components/ui/PageHeading'
import AuthorForm from '../../components/author/Form'

function ScreenAuthorForm() {
  let { id } = useParams()
  const title = !id ? 'Create' : 'Update'
  return (
    <>
      <PageHeading title={`${title} Author`} />
      <AuthorForm id={id} />
    </>
  )
}

export default ScreenAuthorForm
