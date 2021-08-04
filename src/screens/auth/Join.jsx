import React from 'react'
import { Link } from 'react-router-dom'
import PageHeading from '../../components/ui/PageHeading'

function ScreenJoin() {
  return (
    <>
      <PageHeading title="Join Sitepoint Books" />
      <div className="flex flex-col justify-center py-12 bg-base sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <h2 className="mt-6 text-3xl font-extrabold text-center">
            Create User Account
          </h2>
        </div>
        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="px-4 py-8 shadow bg-base-200 sm:rounded-lg sm:px-10">
            <form className="space-y-6" action="#" method="POST">
              <div className="form-control">
                <label className="label" htmlFor="email">
                  <span className="label-text">Email address</span>
                </label>
                <input
                  type="email"
                  autoComplete="email"
                  required
                  className="input"
                />
              </div>

              <div className="form-control">
                <label className="label" htmlFor="password">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" required className="input" />
              </div>

              <div className="form-control">
                <label className="label" htmlFor="passwordConfirm">
                  <span className="label-text">Password Confirmation</span>
                </label>
                <input type="password" required className="input" />
              </div>

              <div>
                <button type="submit" className="btn btn-primary btn-block">
                  Sign up
                </button>
              </div>
            </form>

            <div className="flex justify-end mt-4 text-sm">
              Already have an account?{' '}
              <Link className="ml-2 link" to="/login">
                Log In
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ScreenJoin
