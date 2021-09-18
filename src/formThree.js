import React from 'react';
import { Formik , Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const FormThree = () => {
    const formikProps = {
        initialValues: { firstname: '' },
		validationSchema: Yup.object({
			firstname: Yup
            .string()
            .required('Sorry, first name is required')
		}),
		onSubmit: (values) => {
			console.log(values);
		}
    }
    return(
        <Formik {...formikProps}>
            { formik => (
                <div className="container">
                    <div className="col-md-12 mt-5">
                        <Form>
                            <div>
                                <label htmlFor="firstname">First name</label>
                                <Field name="firstname" type="text" className="form-control mt-1"/>
                                {formik.values.firstname}
                                <span className="text-danger"><ErrorMessage name="firstname"/></span>
                            </div>

                            <div>
                            <label htmlFor="color" className="mt-4">Color</label>
                            <Field
                                as="select"
                                name="color"
                                className="form-select mt-1"
                            >
                                <option value="">
                                    Open this to select the Color
                                </option>
                                <option value="red">Red</option>
                                <option value="green">Green</option>
                                <option value="blue">Blue</option>
                            </Field>
                            </div>

                            
                            <hr className="mb-4" />
                            <button className="btn btn-primary btn-lg btn-block" type="submit">
                                Submit
                            </button>
                        </Form>
                    </div>
                </div>
            ) }
        </Formik>
        
    )
}

export default FormThree;