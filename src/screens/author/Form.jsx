import React from 'react'
import { useParams, Redirect } from 'react-router-dom'
import { useQuery, useMutation, useQueryClient } from 'react-query'
import AuthorService from '../../services/AuthorService'

import PageHeading from '../../components/ui/PageHeading'
import AuthorForm from '../../components/author/Form'
import Alert from '../../components/ui/Alert'

function ScreenAuthorForm() {
  let { id } = useParams()
  const queryClient = useQueryClient()

  // Display Edit Form
  if (id) {
    const { data, isLoading, error, status } = useQuery(
      ['author', { id }],
      AuthorService.getOne
    )

    const mutation = useMutation((data) => AuthorService.update(id, data), {
      onSuccess: () => {
        queryClient.invalidateQueries(['author', { id }])
      },
    })

    const { isSuccess } = mutation

    const onSubmit = async (submittedData) => {
      mutation.mutate(submittedData)
    }

    if (isSuccess) {
      return <Redirect to="/author" />
    }

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
          {status === 'success' && (
            <AuthorForm values={data} action={onSubmit} />
          )}
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
