import React, { useEffect, useState } from "react";
import logo from "../../assets/images/seabed2crest-logo.png";
import { LiaRupeeSignSolid } from "react-icons/lia";
import axios from "axios"
import dayjs from "dayjs";
import { useFormik } from "formik";
import { CleaningServicesOutlined } from "@mui/icons-material";

const SalarySlip = ({ employeeId, password, selectedDate }) => {
  const [data, setData] = useState({})

  const formik = useFormik({
    initialValues: {
      selectedDate: selectedDate || dayjs().subtract(1, "month").startOf("month").toDate(), // Set initial value for selectedDate
    },
    onSubmit: (values) => {
      const formattedDate = dayjs(values.selectedDate).format("MMMM YYYY");
      console.log("Selected Date:", formattedDate);
    },
  });

  useEffect(() => {
    const formattedDate = dayjs(formik.values.selectedDate).format("MMMM YYYY");
    console.log("Formatted Date:", formattedDate);
 const requestBody = {
    employeeId: employeeId,
    payPeriod: formattedDate,
    password: password,
  };
    axios
    .get("http://localhost:8081/salary/get", {
      params: {
        employeeId: employeeId,
        payPeriod: formattedDate,
        password: password,
      },
    })
    .then((res) => {
      setData(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
}, [formik.values.selectedDate]);


  return (
    <div>
      <div className="header1">
        <header className="header">
          <div className="logo">
            <img src={logo} alt="Logo" />
          </div>
          <div className="content">
            <h1>Seabed2Crest Technologies Pvt Ltd</h1>
            <p>
              1st floor, R D, Rajanna Complex, Yelahanka Taluk, Rajanukunte,
              Bengaluru, Karnataka 560064.
            </p>
          </div>
          <div className="additional-content">
            <p>
              Payslip for the Month:
              <br></br>{data.payrollDTO?.payPeriod}
            </p>
          </div>
        </header>
      </div>
      <div className="container">
        <div className="employee-summary">
          <h2>Employee Summary</h2>
          <div className="employee-summary1">
            <div className="details">
              <p> Employee Name:</p>
              <p> Employee ID: </p>
              <p>Pay Period: </p>
              <p>Pay Date: </p>
            </div>
            <div className="details1">
              <p>{data.employeeDTO?.employeeName}</p>
              <p>{data.employeeDTO?.employeeID}</p>
              <p>{data.payrollDTO?.payPeriod}</p>
              <p>{data.payrollDTO?.payDate}</p>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="card-header">
            <h3>
              <LiaRupeeSignSolid className="icon" />
              {data.payrollDTO?.totalNetPayable}
            </h3>
            <p>Employee Net Pay</p>
          </div>
          <div className="card-header1">
            <div className="card-body">
              <p>Paid Days: </p>
              <p>LOP days:</p>
            </div>
            <div className="card-body1">
              <p>31</p>
              <p>0</p>
            </div>
          </div>
        </div>
      </div>

      <div className="additional-details">
        <div className="left-details">
          <p>PAN Card: </p>
          <p>Designation: </p>
          <p>Location:</p>
        </div>
        <div className="left-details1">
          <p>BLSPJ9929H</p>
          <p>{data.employeeDTO?.designation}</p>
          <p>{data.employeeDTO?.location}</p>
        </div>
        <div className="right-details">
          <p>Bank Name: </p>
          <p>Account Number: </p>
          <p>Date of Joining: </p>
        </div>
        <div className="right-details1">
          <p>{data.employeeDTO?.bankName}</p>
          <p>{data.employeeDTO?.accountNo}</p>
          <p>{data.employeeDTO?.dateOfJoin}</p>
        </div>
      </div>
      <div className="main">
        <div className="main-container">
          <div className="earnings">
            <div className="earning">
              <h3>Earnings</h3>
              <p>Basic:</p>
              <p>Home Rent Allowance:</p>
              <p>Medical Allowances:</p>
              <p>Other Allowances:</p>
              <br></br>
              <p>Gross Earning:</p>
            </div>
            <div className="amount">
              <h3>Amount</h3>
              <p>{data.payrollDTO?.basic}</p>
              <p>{data.payrollDTO?.houseRentAllowance}</p>
              <p>{data.payrollDTO?.medicalAllowance}</p>
              <p>{data.payrollDTO?.otherAllowance}</p>
              <br></br>
              <p>{data.payrollDTO?.grossEarnings}</p>
            </div>
          </div>
          <div className="deductions">
            <div className="deduction">
              <h3>Deductions</h3>
              <p>Provident fund:</p>
              <p></p>
              <br></br>
              <br></br>
              <br></br>
              <p>Total Deduction:</p>
            </div>
            <div className="amount">
              <h3>Amount</h3>
              <p>{data.payrollDTO?.providentFund}</p>
              <p></p>
              <br></br>
              <br></br>
              <br></br>
              <p>{data.payrollDTO?.totalDeductions}</p>
            </div>
          </div>
        </div>
        <div className="total-container">
          <div className="total-section">
            <div className="total-left">
              <h4>Total Net Payable</h4>
              <p>Gross Earnings: Total Deduction</p>
            </div>
            <div className="total-right">
              <p>{data.payrollDTO?.totalNetPayable}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="footer">
        <h5>Amount in Words: Indian Rupee One Lakh Fifteen Thousand Only</h5>
        <div className="border"></div>
        <p>
          This is a system generated payslip, hence the signature is not
          required.
        </p>
      </div>
    </div>
  );
};

export default SalarySlip;
