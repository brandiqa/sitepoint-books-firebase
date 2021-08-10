import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

import StorageService from '../../services/StorageService'
import Alert from '../../components/ui/Alert'

const schema = yup.object().shape({
  name: yup.string().label('Name').required().min(2),
  cover: yup.string().label('Cover').required(),
})

function CategoryForm({ values, action }) {
  const [errorMsg, setErrorMsg] = useState('')
  const [cover, setCover] = useState()

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  })

  useEffect(() => {
    reset(values)
  }, [reset])

  if (values) {
    useEffect(async () => {
      const url = await StorageService.getImageURL(values.cover)
      setCover(url)
    }, [values])
  }

  const onSubmit = (submittedData) => {
    try {
      action(submittedData) // submit data to action handler
    } catch (err) {
      setErrorMsg(err.message)
    }
  }

  return (
    <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
      <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
        {errorMsg && <Alert type="error" message={errorMsg} />}

        <div className="form-control">
          <label className="label" htmlFor="name">
            <span className="label-text">Name</span>
          </label>
          <input
            type="text"
            autoComplete="off"
            {...register('name')}
            className={`input input-bordered ${errors.name && 'input-error'}`}
          />
          {errors.name && (
            <span className="mt-1 text-xs text-error">
              {errors.name.message}
            </span>
          )}
        </div>

        <div className="form-control">
          <label className="label" htmlFor="cover">
            <span className="label-text">Cover</span>
          </label>
          <div className="avatar">
            <div className="mb-8 rounded-btn w-36 h-36">
              <img src={cover} />
            </div>
            <button className="btn btn-secondary btn-sm ml-8 ">Upload</button>
          </div>
        </div>

        <div className="flex justify-end space-x-4">
          <button type="submit" className="btn btn-primary btn-sm w-24">
            Save
          </button>
          <Link to="/category" className="btn btn-outline btn-sm w-24">
            Cancel
          </Link>
        </div>
      </form>
    </div>
  )
}

export default CategoryForm
