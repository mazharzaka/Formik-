import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {useState} from "react";
import * as Yup from "yup";
import {useFormik} from "formik";
import {useDispatch} from "react-redux";
import {Add} from "../feathers/form";

function Form() {
  const [Enter, setEnter] = useState(false);
  let objectLength;
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      fname: "",
      Lname: "",
      email: "",
      Password: "",
    },
    validationSchema: Yup.object({
      fname: Yup.string()
        .min(2, "username is Too Short!")
        .max(10, "less than 10")
        .required("Error"),
      Lname: Yup.string()
        .min(2, "username is Too Short!")
        .max(10, "less than 10")
        .required("Error"),
      email: Yup.string().email("invaild").required("Error"),
      Password: Yup.string()
        .required("No password provided.")
        .min(8, "Password is too short - should be 8 chars minimum.")
        .matches(/[a-zA-Z]/, "Password can only contain Latin letters."),
    }),
    onSubmit: (e) => {
      // console.log(e);
    },
  });
  // console.log(formik.values);
  //   console.log(formik.errors);
  objectLength = Object.keys(formik.errors).length;
  // console.log(objectLength);
  // console.log(formik.errors);

  const sub = () => {
    if (
      objectLength == 0 &&
      formik.values.Lname &&
      formik.values.Password &&
      formik.values.email &&
      formik.values.fname != ""
    ) {
      console.log(formik.values);
      dispatch(Add(formik.values));
    }
  };
  return (
    <div className="container mt-5 d-flex justify-content-center  align-items-center">
      {/* <div className="card" style={{width: "18rem"}}>      </div> */}
      <form style={{width: "18rem"}} onSubmit={formik.handleSubmit}>
        <div className="form-group">
          <label for="exampleInputEmail1">FristName</label>
          <input
            className="form-control"
            type="text"
            id="fname"
            aria-describedby="emailHelp"
            onChange={formik.handleChange}
            value={formik.values.fname}
            placeholder="Frist Name"
          />
          {formik.errors.fname ? (
            <small id="emailHelp" className="form-text text-muted">
              {formik.errors.fname}
            </small>
          ) : null}
        </div>{" "}
        <div className="form-group">
          <label for="exampleInputEmail1">LastName</label>
          <input
            className="form-control"
            type="text"
            id="Lname"
            aria-describedby="emailHelp"
            value={formik.values.Lname}
            placeholder="LastName"
            onChange={formik.handleChange}
          />
          {formik.errors.Lname ? (
            <small id="emailHelp" className="form-text text-muted">
              {formik.errors.Lname}
            </small>
          ) : null}
        </div>
        <div className="form-group">
          <label for="exampleInputEmail1">Email address</label>
          <input
            className="form-control"
            type="text"
            id="email"
            aria-describedby="emailHelp"
            value={formik.values.email}
            placeholder="Enter email"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
          />
          {formik.errors.email ? (
            <small id="emailHelp" className="form-text text-muted">
              {formik.errors.email}
            </small>
          ) : null}
        </div>
        <div className="form-group">
          <label for="exampleInputPassword1">Password</label>
          <input
            className="form-control"
            type="password"
            id="Password"
            value={formik.values.Password}
            placeholder="Password"
            onChange={formik.handleChange}
          />
          {formik.errors.Password ? (
            <small id="emailHelp" className="form-text text-muted">
              {formik.errors.Password}
            </small>
          ) : null}
        </div>
        <div className="d-flex justify-content-center">
          <button type="submit" className="btn btn-primary mt-2" onClick={sub}>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default Form;
