import React from "react";
import { useFormik } from "formik";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import dayjs from "dayjs";
import { useState } from "react";
import SalarySlip from "./SalarySlip";

const SlipDoc = ({ employeeId, password }) => {
  const [showPrintComponent, setShowPrintComponent] = useState(false);

  const formik = useFormik({
    initialValues: {
      selectedDate: null,
    },
    onSubmit: (values) => {
      const selectedDate = values.selectedDate
        ? dayjs(values.selectedDate).format("MMMM YYYY")
        : dayjs().subtract(1, "month").startOf("month").format("MMMM YYYY");
      console.log({
        employeeId: employeeId,
        password: password,
        selectedDate: selectedDate,
      });
      setShowPrintComponent(true);
    },
  });

  const handleDateChange = (date) => {
    formik.setFieldValue("selectedDate", date);
  };

  return (
    <div className="slipdocument">
      <div className="slipdocument_section">
        <div className="calender_section">
          {!showPrintComponent ? (
            <form autoComplete="off" onSubmit={formik.handleSubmit}>
              <h1>Select the Month and Year</h1>
              <div className="print">
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker
                    className="calender"
                    label={'month and year'}
                    views={["month", "year"]}
                    format="MMMM YYYY"
                    fullWidth
                    value={formik.values.selectedDate}
                    onChange={handleDateChange}
                    renderInput={(params) => (
                      <TextField {...params} />
                    )}
                  />
                </LocalizationProvider>
                <Button
                  variant="contained"
                  className="print_button"
                  type="submit"
                >
                  Print
                </Button>
              </div>
            </form>
          ) : (
            <SalarySlip employeeId={employeeId}
              password={password}
              selectedDate={formik.values.selectedDate} />
          )}
        </div>
      </div>
    </div>
  );
};

export default SlipDoc;
