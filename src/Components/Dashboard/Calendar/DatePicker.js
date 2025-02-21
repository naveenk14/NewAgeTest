import React, { useState } from "react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import "./datepicker.css";
import { Typography } from "@mui/material";

const DAY_BUTTON_WIDTH = "40px";

const DatePicker = () => {
  // Get current date
  const currentDate = new Date();

  // Get current month and year
  const [month, setMonth] = useState(currentDate.getMonth());
  const [year, setYear] = useState(currentDate.getFullYear());

  // State to track the selected date, initially set to the current date's day value
  const [selectedDate, setSelectedDate] = useState(currentDate.getDate());

  // Function to get the number of days in a month
  const getDaysInMonth = (month, year) => {
    return new Date(year, month + 1, 0).getDate();
  };

  // Function to get the first day of the month
  const getFirstDayOfMonth = (month, year) => {
    return new Date(year, month, 1).getDay();
  };

  // Function to handle previous month
  const prevMonth = () => {
    if (month === 0) {
      setMonth(11);
      setYear(year - 1);
    } else {
      setMonth(month - 1);
    }
  };

  // Function to handle next month
  const nextMonth = () => {
    if (month === 11) {
      setMonth(0);
      setYear(year + 1);
    } else {
      setMonth(month + 1);
    }
  };

  // Function to handle date click
  const handleDateClick = (day) => {
    setSelectedDate(day);
  };

  // Render calendar
  const renderCalendar = () => {
    const daysInMonth = getDaysInMonth(month, year);
    const firstDay = getFirstDayOfMonth(month, year);
    const lastDay = new Date(year, month, daysInMonth).getDay();
    const calendarDays = [];
    const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const redMark = [2, 18, 27];
    const greenMark = [6, 16, 25, 19];

    // Add day names
    for (let i = 0; i < 7; i++) {
      calendarDays.push(
        <div key={`day-name-${i}`} className="calendar-day day-name fw-bold">
          {dayNames[i]}
        </div>
      );
    }

    // Fill empty cells before the first day of the month
    for (let i = 0; i < firstDay; i++) {
      const prevMonthDays = getDaysInMonth(
        month - 1 < 0 ? 11 : month - 1,
        month - 1 < 0 ? year - 1 : year
      );
      const day = prevMonthDays - (firstDay - i) + 1;
      calendarDays.push(
        <button
          key={`prev-month-${day}`}
          className="calendar-day disabled"
          disabled
        >
          {day}
        </button>
      );
    }

    // Add days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      const date = new Date(year, month, day);
      const isPastDate = date < currentDate;
      const isDisabled = date < currentDate || date.getMonth() !== month;
      const isSelected = selectedDate === day;
      const pastDateStyle = isPastDate ? { opacity: 0.5 } : {};
      const RedDot = redMark.includes(day);
      const GreenDot = greenMark.includes(day);

      calendarDays.push(
        <button
          key={day}
          className={`calendar-day active-date ${
            isSelected ? "selected" : ""
          } ${isDisabled ? "disabled" : ""}`}
          onClick={() => handleDateClick(day)}
          style={{
            ...pastDateStyle, // Apply style for past dates
            width: DAY_BUTTON_WIDTH, // Set width for each day button
            backgroundColor: isSelected ? "#384656" : "white",
            color: isSelected ? "#F4F5F7" : "black",
            border: "none",
            fontWeight: "bold",
           
          }}
          disabled={isDisabled}
        >
          {day}
          {RedDot && <div className="red-mark" />}
          {GreenDot && <div className="green-mark" />}
        </button>
      );
    }
    for (let i = lastDay + 1; i < 7; i++) {
      const nextMonthDay = i - lastDay;
      calendarDays.push(
        <button
          key={`next-month-${nextMonthDay}`}
          className="calendar-day disabled"
          disabled
        >
          {nextMonthDay}
        </button>
      );
    }
    return calendarDays;
  };

  return (
    <div
      className="calendar shadow mt-1  w-100"
      style={{
        border: "1px solid rgba(231, 232, 242, 1)",
        borderRadius: "8px",
        minHeight: "382px",
        minWidth: "400px",
      }}
    >
      <div className="calendar-header p-3 mx-auto ">
        <div className="d-flex">
          <ArrowBackIosIcon className="" onClick={prevMonth} style={{cursor:'pointer'}}/>
          <Typography
            className=" fw-bold px-2"
            style={{ fontSize: "16px", fontWeight: "700" }}
          >{`${new Date(year, month).toLocaleString("default", {
            month: "long",
          })} ${year}`}</Typography>

          <ArrowForwardIosIcon onClick={nextMonth}style={{cursor:'pointer'}} />
        </div>
      </div>
      <div className="calendar-body p-2">{renderCalendar()}</div>
    </div>
  );
};

export default DatePicker;
