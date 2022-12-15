import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import authLayout from '../../hoc/authLayout'
import { FormInput } from '../../form-controls'
import { loginUser, isLoggedIn, isValidUser } from '../../utils/authHandler'
import '../../assets/css/login.css'

// Validation rules
const schema = yup
  .object({
    email: yup.string().email().required('Enter a valid email address'),
    password: yup.string().required('Enter password'),
  })
  .required()

export const LoginPage = () => {
  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      email: '',
      password: '',
      rememberMe: false,
    },
    // mode: 'all',
  })

  const onSubmit = (data) => {
    const user = isValidUser(data)
    if (user) {
      loginUser({ ...user })
      navigate('/dashboard')
      return
    }

    setError('email', { type: 'custom', message: 'Invalid Email or Password' })
  }

  useEffect(() => {
    if (isLoggedIn()) {
      navigate('/dashboard')
    }
  }, [navigate])

  return (
    <>
      <form className="login-form" onSubmit={handleSubmit(onSubmit)}>
        <div className="d-flex align-items-center my-4">
          <h1 className="text-center fw-normal mb-0 me-3">Sign In</h1>
        </div>
        {/* <!-- Email input --> */}
        <div className="form-outline mb-4">
          <label className="form-label" htmlFor="email">
            Email address
          </label>
          <FormInput
            id="email"
            name="email"
            {...register('email', { required: true })}
            className="form-control form-control-lg"
            placeholder="Enter a valid email address"
            error={errors.email}
          />
        </div>

        {/* <!-- Password input --> */}
        <div className="form-outline mb-3">
          <label className="form-label" htmlFor="password">
            Password
          </label>
          <FormInput
            type="password"
            id="password"
            {...register('password', { required: true })}
            className="form-control form-control-lg"
            placeholder="Enter password"
            error={errors.password}
          />
        </div>

        <div className="d-flex justify-content-between align-items-center">
          {/* <!-- Checkbox --> */}
          <div className="form-check mb-0">
            <input
              className="form-check-input me-2"
              type="checkbox"
              value=""
              id="rememberMe"
              {...register('rememberMe')}
            />
            <label className="form-check-label" htmlFor="rememberMe">
              Remember me
            </label>
          </div>
          <Link to="/reset-password" className="text-body">
            Forgot password?
          </Link>
        </div>

        <div className="text-center text-lg-start mt-4 pt-2">
          <button
            type="submit"
            className="btn btn-primary btn-lg"
            disabled={Object.keys(errors).length}
          >
            Login
          </button>
          <p className="small fw-bold mt-2 pt-1 mb-0">
            Don't have an account?{' '}
            <Link to="/signup" className="link-danger">
              Sign Up
            </Link>
          </p>
        </div>
      </form>
    </>
  )
}

export default authLayout(LoginPage)
