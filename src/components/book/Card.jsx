import React from 'react'
import { Link } from 'react-router-dom'
import { PencilAltIcon } from '@heroicons/react/outline'
import StorageService from '../../services/StorageService'

function BookCard({ book }) {
  const [coverURL, setCoverURL] = useState()

  useEffect(async () => {
    const url = await StorageService.getImageURL(book.cover)
    setCoverURL(url)
  }, [book])

  return (
    <div>
      <Link to={`/book/detail/${book.id}`}>
        <img src={coverURL} alt={book.title} />
      </Link>
      <Link to={`/book/edit/${book.id}`} title="Edit Book">
        <PencilAltIcon className="w-5 h-5 mr-2 -ml-1" aria-hidden="true" />
      </Link>
    </div>
  )
}

export default BookCard
