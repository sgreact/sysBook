import React from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import authLayout from '../../hoc/authLayout'
import { FormInput } from '../../form-controls'
import { signupUser } from '../../utils/authHandler'
import '../../assets/css/login.css'

// Validation rules
const schema = yup
  .object({
    name: yup.string().required('Enter your name'),
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
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      name: '',
      email: '',
      password: '',
    },
  })

  const onSubmit = (data) => {
    if (data) {
      signupUser({ ...data })
      navigate('/dashboard')
      return
    }
  }

  return (
    <>
      <form className="login-form" onSubmit={handleSubmit(onSubmit)}>
        <div className="d-flex align-items-center my-4">
          <h1 className="text-center fw-normal mb-0 me-3">Sign Up</h1>
        </div>

        <div className="form-outline mb-4">
          <label className="form-label" htmlFor="email">
            Full name
          </label>
          <FormInput
            id="name"
            name="name"
            {...register('name', { required: true })}
            className="form-control form-control-lg"
            placeholder="Enter your name"
            error={errors.name}
          />
        </div>

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
        <div className="text-center text-lg-start mt-4 pt-2">
          <button
            type="submit"
            className="btn btn-primary btn-lg"
            disabled={Object.keys(errors).length}
          >
            Sign Up
          </button>
          <p className="small fw-bold mt-2 pt-1 mb-0">
            Already have an account?{' '}
            <Link to="/login" className="link-danger">
              Login
            </Link>
          </p>
        </div>
      </form>
    </>
  )
}

export default authLayout(LoginPage)
