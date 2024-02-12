import React, { useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SlipDoc from "./SlipDoc";
import "./Payroll.css";

const validationSchema = yup.object({
  employeeId: yup.string().required("Employee Id is required"),
  password: yup.string().required("Password is required"),
});

const Payroll = () => {
  const [showSlipDoc, setShowSlipDoc] = useState(false);
  const formik = useFormik({
    initialValues: {
      employeeId: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log({
        employeeId: values.employeeId,
        password: values.password,
      });
      setShowSlipDoc(true); // Show SlipDoc component after successful login
    },
  });

  return (
    <div>
      {showSlipDoc ? (
        <SlipDoc
          employeeId={formik.values.employeeId}
          password={formik.values.password}
        />
      ) : (
        <div className="login_container">
          <div className="login_container_section">
            <form autoComplete="off" onSubmit={formik.handleSubmit}>
              <h1>
                <AccountCircleIcon className="icon" /> &nbsp;Login
              </h1>
              <div className="employeeId_section">
                <TextField
                  id="employeeId"
                  name="employeeId"
                  label="Employee Id *"
                  variant="outlined"
                  fullWidth
                  value={formik.values.employeeId}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={
                    formik.touched.employeeId &&
                    Boolean(formik.errors.employeeId)
                  }
                  helperText={
                    formik.touched.employeeId && formik.errors.employeeId
                  }
                />
              </div>
              <div className="password_section">
                <TextField
                  id="password"
                  name="password"
                  label="Password *"
                  type="password"
                  autoComplete="current-password"
                  fullWidth
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={
                    formik.touched.password && Boolean(formik.errors.password)
                  }
                  helperText={formik.touched.password && formik.errors.password}
                />
              </div>

              <Button
                variant="contained"
                className="login_button"
                fullWidth
                type="submit"
              >
                Login
              </Button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Payroll;
