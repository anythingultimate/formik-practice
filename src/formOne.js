import React from 'react';
import { Formik } from 'formik';

const FormOne = () => {
	return (
		<Formik
			initialValues={{
				firstname: 'Leanne',
				lastname: 'Graham',
				email: 'sincere@april.biz',
				country: '',
				zip: '700000'
			}}
			validate={(values) => {
				const errors = {};

				if (!values.firstname) {
					errors.firstname = 'Sorry, first name is required';
				}

				if (!values.lastname) {
					errors.lastname = 'Sorry, last name is required';
				}

				if (!values.country) {
					errors.country = 'Sorry, Country name is required';
				}

				if (!values.email) {
					errors.email = 'Please enter the email';
				} else if (
					!/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
						values.email
					)
				) {
					errors.email = 'Not a valid email';
				}

				return errors;
			}}
			onSubmit={(values) => {
				console.log(values);
			}}
		>
			{({ values, errors, touched, handleChange, handleBlur, handleSubmit }) => (
				<div className="container">
					<div className="col-md-12 mt-5">
						<form onSubmit={handleSubmit}>
							<h4 className="mb-3">Personal information</h4>

							<div className="row">
								<div className="col-md-6 mb-3">
									<label htmlFor="firstname">First name</label>
									<input
										type="text"
										className="form-control"
										id="firstname"
										name="firstname"
										value={values.firstname}
										onChange={handleChange}
										onBlur={handleBlur}
									/>
									{errors.firstname && touched.firstname ? (
										<span className="text-danger">{errors.firstname}</span>
									) : null}
								</div>
								<div className="col-md-6 mb-3">
									<label htmlFor="lastname">Last name</label>
									<input
										type="text"
										className="form-control"
										id="lastname"
										name="lastname"
										value={values.lastname}
										onChange={handleChange}
										onBlur={handleBlur}
									/>
									{errors.lastname && touched.lastname ? (
										<span className="text-danger">{errors.lastname}</span>
									) : null}
								</div>
							</div>

							<div className="mb-3">
								<label htmlFor="email">Email</label>
								<input
									type="email"
									className="form-control"
									id="email"
									name="email"
									placeholder="you@example.com"
									value={values.email}
									onChange={handleChange}
									onBlur={handleBlur}
								/>
								{errors.email && touched.email ? (
									<span className="text-danger">{errors.email}</span>
								) : null}
							</div>

							<div className="row">
								<div className="col-md-5 mb-3">
									<label htmlFor="country">Country</label>
									<select
										className="form-select d-block w-100"
										id="country"
										name="country"
										value={values.country}
										onChange={handleChange}
										onBlur={handleBlur}
									>
										<option value="" disabled>
											Open this to select your country
										</option>
										<option value="India">India</option>
										<option value="Bangladesh">Bangladesh</option>
										<option value="China">China</option>
									</select>
									{errors.country && touched.country ? (
										<span className="text-danger">{errors.country}</span>
									) : null}
								</div>

								<div className="col-md-3 mb-3">
									<label htmlFor="zip">Zip Code</label>
									<input
										type="text"
										className="form-control"
										id="zip"
										name="zip"
										value={values.zip}
										onChange={handleChange}
										onBlur={handleBlur}
									/>
								</div>
							</div>

							<hr className="mb-4" />
							<button className="btn btn-primary btn-lg btn-block" type="submit">
								Submit
							</button>
						</form>
					</div>
				</div>
			)}
		</Formik>
	);
};

export default FormOne;
