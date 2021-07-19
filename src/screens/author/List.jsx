import React from 'react'
import { useQuery } from 'react-query'
import { db } from '../../firebase'
import PageHeading from '../../components/ui/PageHeading'
import AuthorList from '../../components/author/List'
import Alert from '../../components/ui/Alert'

function ScreenAuthorList() {
  const authorsRef = db.collection('authors')

  const fetchAuthors = async () => {
    const snapshot = await authorsRef.get()
    return snapshot.docs.map((doc) => {
      const data = doc.data()
      data.id = doc.id
      return data
    })
  }

  const { data, isLoading, isError, error, status } = useQuery(
    'authors',
    fetchAuthors
  )

  return (
    <>
      <PageHeading title="Author List" />
      <div className="mt-12">
        {isError && <Alert type="error" message={error.message} />}
        {isLoading && (
          <Alert
            type="info"
            message="Loading..."
            innerClass="animate animate-pulse"
          />
        )}
        {status === 'success' && <AuthorList data={data} />}
      </div>
    </>
  )
}

export default ScreenAuthorList
