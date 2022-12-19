import { toHaveFormValues } from "@testing-library/jest-dom/dist/matchers";
import React from "react";

const Form = (props) => {

    const handleChange = event => {
        const { name, value } = event.target;
        props.handleChange(name, value)
    }

    handleSubmit = event => {
        event.preventDefault();
        props.submit();
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>Name: 
                <input
                    placeholder="Enter your name:"
                    value={values.name}
                    name="name"
                    onChange={handleChange}
                />
            </label>
            <label>Email: 
                <input
                    placeholder="Enter your email:"
                    value={values.email}
                    name="email"
                    onChange={handleChange}
                />
            </label>
            <label>Role: 
                <input
                    placeholder="Enter your Role:"
                    value={values.role}
                    name="role"
                    onChange={handleChange}
                />
            </label>
            <input type="submit" value="Create your team!" />
        </form>
    )

}

export default Form;