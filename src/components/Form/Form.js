import React, { useState } from "react";
import FormSignup from "../FormSignup/FormSignup";
import FormSuccess from "../FormSuccess/FormSuccess";

const Form = () => {
	const [isSubmitted, setIsSubmitted] = useState(false);

	function submitForm() {
		setIsSubmitted(true);
	}
	return (
		<>
			<div className="form__container">
				<span className="close__btn">x</span>
				<div className="form__contentLeft">
					<img
						src="img/img-2.svg"
						alt="spaceship"
						className="form__img"
					/>
				</div>
				{!isSubmitted ? (
					<FormSignup submitForm={submitForm} />
				) : (
					<FormSuccess />
				)}
			</div>
		</>
	);
};

export default Form;
