import React from 'react'
import { useParams } from 'react-router-dom'
import { useQuery } from 'react-query'
import AuthorService from '../../services/AuthorService'

import PageHeading from '../../components/ui/PageHeading'
import AuthorForm from '../../components/author/Form'
import Alert from '../../components/ui/Alert'

function ScreenAuthorForm() {
  let { id } = useParams()

  // Display Edit Form
  if (id) {
    const { data, isLoading, error, status } = useQuery(
      ['author', { id }],
      AuthorService.get
    )
    return (
      <>
        <PageHeading title="Edit Author" />
        <div className="mt-12">
          {error && <Alert type="error" message={error.message} />}
          {isLoading && (
            <Alert
              type="info"
              message="Loading..."
              innerClass="animate animate-pulse"
            />
          )}
          {status === 'success' && <AuthorForm data={data} />}
        </div>
      </>
    )
  }

  // Display Create Form
  return (
    <>
      <PageHeading title="Create Author" />
      <AuthorForm />
    </>
  )
}

export default ScreenAuthorForm
