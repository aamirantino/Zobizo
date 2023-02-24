import React, { useState } from "react";
import "./ShiftLogs.scss";
import shiftlogs from "../../asset/shiftlogs/kanban.svg";
import Vector from "../../asset/shiftlogs/Vector.svg";
import { MenuItem, Select } from "@mui/material";
import { DateRange } from "react-date-range";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { format } from "date-fns";

//table checking..
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { color } from "@mui/system";

////table checking data start..
const columns = [
  { id: "jobId", label: "Job ID", minWidth: 100 },
  { id: "department", label: "Department", minWidth: 100 },
  {
    id: "specialization",
    label: "Specialization",
    minWidth: 100,
    align: "right",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "professionName",
    label: "Profession Name",
    minWidth: 150,
    align: "right",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "date",
    label: "Date",
    minWidth: 100,
    align: "right",
    format: (value) => value.toFixed(2),
  },
  { id: "inTime", label: "In-Time", minWidth: 100 },
  { id: "outTime", label: "Out-Time", minWidth: 100 },
  { id: "totalCost", label: "Total Cost", minWidth: 100 },
  { id: "action", label: "Action", minWidth: 100 },
];

function createData(
  jobId,
  department,
  specialization,
  professionName,
  date,
  inTime,
  outTime,
  totalCost,
  action
) {
  // const density = population / size;
  return {
    jobId,
    department,
    specialization,
    professionName,
    date,
    inTime,
    outTime,
    totalCost,
    action,
  };
}

const rows = [
  createData(
    "JO1234567",
    "Cardiology",
    "Cardiology",
    "Safari Sharma",
    "19/12/2022",
    "00:00 am/pm",
    "00:00 am/pm",
    "Rs123456",
    "Raise a query"
  ),
  createData(
    "JO1234567",
    "Cardiology",
    "Cardiology",
    "Safari Sharma",
    "19/12/2022",
    "00:00 am/pm",
    "00:00 am/pm",
    "Rs123456",
    "Raise a query"
  ),
  createData(
    "JO1234567",
    "Cardiology",
    "Cardiology",
    "Safari Sharma",
    "19/12/2022",
    "00:00 am/pm",
    "00:00 am/pm",
    "Rs123456",
    "Raise a query"
  ),
  createData(
    "JO1234567",
    "Cardiology",
    "Cardiology",
    "Safari Sharma",
    "19/12/2022",
    "00:00 am/pm",
    "00:00 am/pm",
    "Rs123456",
    "Raise a query"
  ),
  createData(
    "JO1234567",
    "Cardiology",
    "Cardiology",
    "Safari Sharma",
    "19/12/2022",
    "00:00 am/pm",
    "00:00 am/pm",
    "Rs123456",
    "Raise a query"
  ),
  createData(
    "JO1234567",
    "Cardiology",
    "Cardiology",
    "Safari Sharma",
    "19/12/2022",
    "00:00 am/pm",
    "00:00 am/pm",
    "Rs123456",
    "Raise a query"
  ),
  createData(
    "JO1234567",
    "Cardiology",
    "Cardiology",
    "Safari Sharma",
    "19/12/2022",
    "00:00 am/pm",
    "00:00 am/pm",
    "Rs123456",
    "Raise a query"
  ),
  createData(
    "JO1234567",
    "Cardiology",
    "Cardiology",
    "Safari Sharma",
    "19/12/2022",
    "00:00 am/pm",
    "00:00 am/pm",
    "Rs123456",
    "Raise a query"
  ),
  createData(
    "JO1234567",
    "Cardiology",
    "Cardiology",
    "Safari Sharma",
    "19/12/2022",
    "00:00 am/pm",
    "00:00 am/pm",
    "Rs123456",
    "Raise a query"
  ),
  createData(
    "JO1234567",
    "Cardiology",
    "Cardiology",
    "Safari Sharma",
    "19/12/2022",
    "00:00 am/pm",
    "00:00 am/pm",
    "Rs123456",
    "Raise a query"
  ),
  createData(
    "JO1234567",
    "Cardiology",
    "Cardiology",
    "Safari Sharma",
    "19/12/2022",
    "00:00 am/pm",
    "00:00 am/pm",
    "Rs123456",
    "Raise a query"
  ),
  createData(
    "JO1234567",
    "Cardiology",
    "Cardiology",
    "Safari Sharma",
    "19/12/2022",
    "00:00 am/pm",
    "00:00 am/pm",
    "Rs123456",
    "Raise a query"
  ),
  createData(
    "JO1234567",
    "Cardiology",
    "Cardiology",
    "Safari Sharma",
    "19/12/2022",
    "00:00 am/pm",
    "00:00 am/pm",
    "Rs123456",
    "Raise a query"
  ),
  createData(
    "JO1234567",
    "Cardiology",
    "Cardiology",
    "Safari Sharma",
    "19/12/2022",
    "00:00 am/pm",
    "00:00 am/pm",
    "Rs123456",
    "Raise a query"
  ),
  createData(
    "JO1234567",
    "Cardiology",
    "Cardiology",
    "Safari Sharma",
    "19/12/2022",
    "00:00 am/pm",
    "00:00 am/pm",
    "Rs123456",
    "Raise a query"
  ),
];
////table checking data end..

let hospitals = [
  { id: 1, name: "Hospital one" },
  { id: 2, name: "Hospital two" },
  { id: 3, name: "Hospital three" },
  { id: 4, name: "Hospital four" },
  { id: 5, name: "Hospital five" },
];
let professions = [
  { id: 1, name: "Profession one" },
  { id: 2, name: "Profession two" },
  { id: 3, name: "Profession three" },
  { id: 4, name: "Profession four" },
  { id: 5, name: "Profession five" },
];

function ShiftLogs(props) {
  //table checking start...
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  //table checking end...

  let [hospitalName, setHospitalName] = useState("");
  let [professionsName, setProfessionsName] = useState("");
  let [openDate, setOpenDate] = useState(false);
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  return (
    <div className="shift-logs-container">
      <div className="shift-logs-wrapper">
        <div className="sl-heading">
          <img src={shiftlogs} alt="shiftlog-logo" />
          <h3>Shift Logs</h3>
        </div>
        <div className="sl-path">
          <p className="job-type">Gig Jobs</p>
          <img src={Vector} alt="left arrow" />
          <p className="job">Shift Logs</p>
        </div>
        <div className="sl-filter">
          <Select
            sx={{
              width: "300px",
            }}
            value={hospitalName}
            onChange={(e) => setHospitalName(e.target.value)}
            displayEmpty
            inputProps={{ "aria-label": "Without label" }}
          >
            <MenuItem disabled value="">
              Hospital
            </MenuItem>
            {hospitals.map((data) => (
              <MenuItem value={data.name}>{data.name}</MenuItem>
            ))}
          </Select>
          <Select
            sx={{ width: "300px" }}
            value={professionsName}
            onChange={(e) => setProfessionsName(e.target.value)}
            displayEmpty
            inputProps={{ "aria-label": "Without label" }}
            placeholder="Hospital"
          >
            <MenuItem disabled value="">
              Professions
            </MenuItem>
            {professions.map((data) => (
              <MenuItem value={data.name}>{data.name}</MenuItem>
            ))}
          </Select>
          <div className="date-input">
            <span>{`${format(date[0].startDate, "dd/MM/yy")} to ${format(
              date[0].endDate,
              "dd/MM/yy"
            )} `}</span>
            <CalendarMonthIcon
              onClick={() => setOpenDate(!openDate)}
              className="calendar-logo"
            />
          </div>
          {openDate && (
            <DateRange
              editableDateInputs={true}
              onChange={(item) => setDate([item.selection])}
              moveRangeOnFirstSelection={false}
              ranges={date}
              className="date"
            />
          )}
        </div>
        <div className="sl-table">
          <Paper sx={{ width: "100%", overflow: "hidden" }}>
            <TableContainer sx={{ maxHeight: 520 }}>
              <Table stickyHeader aria-label="sticky table">
                <TableHead>
                  <TableRow>
                    {columns.map((column) => (
                      <TableCell
                        key={column.id}
                        align={column.align}
                        style={{
                          minWidth: column.minWidth,
                          backgroundColor: "#2D5FA1",
                          fontSize: "16px",
                          fontWeight: "500",
                          lineHeight: "18px",
                          color: "#FFFFFF",
                        }}
                      >
                        {column.label}
                      </TableCell>
                    ))}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map((row) => {
                      return (
                        <TableRow
                          hover
                          role="checkbox"
                          tabIndex={-1}
                          key={row.code}
                        >
                          {columns.map((column) => {
                            const value = row[column.id];
                            return column.id === "action" ? (
                              <TableCell key={column.id} align={column.align}>
                                <button className="raise-query">
                                  Raise a query
                                </button>
                              </TableCell>
                            ) : (
                              <TableCell key={column.id} align={column.align}>
                                {column.format && typeof value === "number"
                                  ? column.format(value)
                                  : value}
                              </TableCell>
                            );
                          })}
                        </TableRow>
                      );
                    })}
                </TableBody>
              </Table>
            </TableContainer>
            <TablePagination
              rowsPerPageOptions={[10, 25, 100]}
              component="div"
              count={rows.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
            />
          </Paper>
        </div>
      </div>
    </div>
  );
}

export default ShiftLogs;
<h1>ShiftLogs</h1>;
