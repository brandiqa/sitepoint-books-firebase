import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import StorageService from '../../services/StorageService'

function CategoryCard({ category }) {
  const [cover, setCover] = useState()

  useEffect(async () => {
    const url = await StorageService.getImageURL(category.cover)
    setCover(url)
  }, [category])

  return (
    <div>
      <Link to={`/category/edit/${category.id}`}>
        <img src={cover} alt={category.name} />
      </Link>
    </div>
  )
}

export default CategoryCard
