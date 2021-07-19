import React from 'react'
import { useParams } from 'react-router-dom'
import PageHeading from '../../components/ui/PageHeading'
import CategoryForm from '../../components/category/Form'

function ScreenCategoryForm() {
  let { id } = useParams()
  const title = !id ? 'Create' : 'Update'
  return (
    <>
      <PageHeading title={`${title} Category`} />
      <CategoryForm id={id} />
    </>
  )
}

export default ScreenCategoryForm
