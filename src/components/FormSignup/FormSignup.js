import React from "react";
import useForm from "../../useForm";
import validate from "../../validateInfo";

const FormSignup = ({ submitForm }) => {
	const { handleChange, values, handleSubmit, errors } = useForm(
		validate,
		submitForm
	);

	return (
		<div className="form__contentRight">
			<form className="form" onSubmit={handleSubmit}>
				<h1>
					Get started with us today! Create your account by filling
					out the information below.
				</h1>
				<div className="form__inputs">
					<label htmlFor="username" className="form__label">
						Username
					</label>
					<input
						id="username"
						type="text"
						name="username"
						className="form__input"
						placeholder="Enter your username"
						value={values.username}
						onChange={handleChange}
					/>
					{errors.username && <p>{errors.username}</p>}
				</div>
				<div className="form__inputs">
					<label htmlFor="email" className="form__label">
						Email
					</label>
					<input
						id="email"
						type="email"
						name="email"
						className="form__input"
						placeholder="Enter your email"
						value={values.email}
						onChange={handleChange}
					/>
					{errors.email && <p>{errors.email}</p>}
				</div>
				<div className="form__inputs">
					<label htmlFor="password" className="form__label">
						Password
					</label>
					<input
						id="password"
						type="password"
						name="password"
						className="form__input"
						placeholder="Enter your password"
						value={values.password}
						onChange={handleChange}
					/>
					{errors.password && <p>{errors.password}</p>}
				</div>
				<div className="form__inputs">
					<label htmlFor="password2" className="form__label">
						Confirm Password
					</label>
					<input
						id="password2"
						type="password"
						name="password2"
						className="form__input"
						placeholder="Enter your password again"
						value={values.password2}
						onChange={handleChange}
					/>
					{errors.password2 && <p>{errors.password2}</p>}
				</div>
				<button className="form__inputBtn" type="submit">
					Sign up
				</button>

				<span className="form__inputLogin">
					Already have an account? Login <a href="#">here</a>
				</span>
			</form>
		</div>
	);
};

export default FormSignup;
