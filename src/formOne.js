import React from 'react';
import { Formik } from 'formik'


const FormOne = () => {

    return (
      <Formik
        initialValues={{
          firstname:'Leanne',
          lastname:'Graham',
          email:'sincere@april.biz',
          country:'',
          zip:'700000'
        }} 
        onSubmit={(values)=>{
          console.log(values)
        }}
      >
        { ({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit
        }) => (
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
                />
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
                />
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
              />
            </div>
    
      
            <div className="row">
              <div className="col-md-5 mb-3">
                <label htmlFor="country">Country</label>
                <select className="form-select d-block w-100" id="country" name="country"  defaultValue="">
                <option  value="" disabled>Open this to select your country</option>
                <option value="US">India</option>
                <option value="CA">Bangladesh</option>
                <option value="NL">China</option>
                </select>
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
                />
              </div>
            </div>
    
            <hr className="mb-4"/>
            <button className="btn btn-primary btn-lg btn-block" type="submit">
              Submit
            </button>
          </form>
          </div>
        </div>
        )}
      </Formik>


    
    );

}

export default FormOne;