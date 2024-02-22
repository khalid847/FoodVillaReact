import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useFormik, Formik, Form, Field } from "formik";
import * as Yup from "yup";
//import React from "react";

const schema = Yup.object().shape({
    name: Yup.string().min(3).required("Please Enter name"),
    email: Yup.string()
      .required("Email is a required field")
      .email("Invalid email format"),
    password: Yup.string()
      .required("Password is a required field")
      .min(8, "Password must be at least 8 characters"),
    cpassword: Yup.string().oneOf([Yup.ref("password")],"Password not matched")
  });

const initialValues={
    name:'',
    email:'',
    password:'',
    cpassword:''
}

const Login = () =>{
//    const {values, handleBlur, handleChange, handleSubmit, errors}  = useFormik({
//         initialValues: initialValues,
//         validationSchema: schema,
//         onSubmit: (values)=>{
//             console.log(values);
//         }
//     })
    function handleNavigate(values) {
    // Alert the input values of the form that we filled
        alert(values);
    // setTimeout for navigate from login page to home page
        setTimeout(() => {
        navigate("/");
      
        }, 0);
    }
    
    const navigate = useNavigate();
    // console.log(formik);
    return (
    <div className="login-container">
        <Formik
            validationSchema={schema}
            initialValues={initialValues}
            onSubmit={(values) => {
                // call handleNavigate and pass input filed data
                handleNavigate(JSON.stringify(values));
            }}
            
        >
            {({errors})=>(

        <Form >
            <label htmlFor="name">Username</label>
            <br/>
            <Field type="name" name="name"></Field>
            <br/>
            {errors.name && <small>{errors.name}</small>}
            <br/>

            <label htmlFor="email">Email</label>
            <br/>
            <Field type="email" name="email"></Field>
            <br/>
            {errors.email && <small>{errors.email}</small>}
            <br/>

            <label htmlFor="Password" >Password</label>
            <br/>
            <Field type="password" name="password"></Field>
            <br/>
            {errors.password && <small>{errors.password}</small>}
            <br/>

            <label htmlFor="Password">Confirm Password</label>
            <br/>
            <Field type="Password" name="cpassword"></Field>
            <br/>
            {errors.cpassword && <small>{errors.cpassword}</small>}
            <br/>
            <button type="submit" className='logged-btn'>Login</button>
            <br/>
            <br/>

        </Form>
     )}

        </Formik>
        <button className='goback-btn' onClick={()=>{
            navigate('/');
        }}>Go Back</button>
    </div>)
}

export default Login