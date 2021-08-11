import React from 'react'
import { Link } from 'react-router-dom'
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
    </div>
  )
}

export default BookCard
