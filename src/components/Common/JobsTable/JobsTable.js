import React, { useState } from "react";
import "../../../pages/ShiftLogs/ShiftLogs.scss";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import EyeIcon from "../../../asset/jobs/EyeIcon.svg";
import CrossIcon from "../../../asset/jobs/close-circle.svg";
import { Modal } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";

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
import JobsHeader from "../JobsHeader/JobsHeader";
import BreadCrumb from "../BreadCrumb/BreadCrumb";

import { setJobModal,setJobDetaialsModal } from "../../../redux/userReducer";
import JobOptionModel from "../../Common/JobModal/JobModal";
import JobDetailsModal from "../JobDetailsModal/JobDetailsModal";
const columns = [
  { id: "jobId", label: "Job ID", minWidth: 100 },
  {
    id: "specialization",
    label: "Specialization",
    minWidth: 100,
    align: "center",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "professionName",
    label: "Profession Name",
    minWidth: 150,
    align: "center",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "date",
    label: "Start Date",
    minWidth: 150,
    align: "center",
    format: (value) => value.toFixed(2),
  },
  {
    id: "endDate",
    label: "End Date",
    minWidth: 150,
    align: "center",
    
    
    format: (value) => value.toFixed(2),
  },
  // { id: "inTime", label: "In-Time", minWidth: 100 },
  // { id: "outTime", label: "Out-Time", minWidth: 100 },
  // { id: "totalCost", label: "Total Cost", minWidth: 100 },
  { id: "status", label: "Status", minWidth: 100, align: "center" },
  { id: "action", label: "Action", minWidth: 100, align: "center" },
];

function createData(
  jobId,
  specialization,
  professionName,
  date,
  endDate,
  status,
  action
) {
  // const density = population / size;
  return {
    jobId,
    specialization,
    professionName,
    date,
    endDate,
    status,
    action,
  };
}

const rows = [
  createData(
    "JO1234567",
    "Cardiology",
    "Safari Sharma",
    "19/12/2022",
    "13/02/2023",
    "NA",
    EyeIcon
  ),
  createData(
    "JO1234567",
    "Cardiology",
    "Safari Sharma",
    "19/12/2022",
    "13/02/2023",
    "NA",
    EyeIcon
  ),
  createData(
    "JO1234567",
    "Cardiology",
    "Safari Sharma",
    "19/12/2022",
    "13/02/2023",
    "NA",
    EyeIcon
  ),
  createData(
    "JO1234567",
    "Cardiology",
    "Safari Sharma",
    "19/12/2022",
    "13/02/2023",
    "NA",
    EyeIcon
  ),
  createData(
    "JO1234567",
    "Cardiology",
    "Safari Sharma",
    "19/12/2022",
    "13/02/2023",
    "NA",
    EyeIcon
  ),
  createData(
    "JO1234567",
    "Cardiology",
    "Safari Sharma",
    "19/12/2022",
    "13/02/2023",
    "NA",
    EyeIcon
  ),
  createData(
    "JO1234567",
    "Cardiology",
    "Safari Sharma",
    "19/12/2022",
    "13/02/2023",
    "NA",
    EyeIcon
  ),
  createData(
    "JO1234567",
    "Cardiology",
    "Safari Sharma",
    "19/12/2022",
    "13/02/2023",
    "NA",
    EyeIcon
  ),
  createData(
    "JO1234567",
    "Cardiology",
    "Safari Sharma",
    "19/12/2022",
    "13/02/2023",
    "NA",
    EyeIcon
  ),
  createData(
    "JO1234567",
    "Cardiology",
    "Safari Sharma",
    "19/12/2022",
    "13/02/2023",
    "NA",
    EyeIcon
  ),
  createData(
    "JO1234567",
    "Cardiology",
    "Safari Sharma",
    "19/12/2022",
    "13/02/2023",
    "NA",
    EyeIcon
  ),
  createData(
    "JO1234567",
    "Cardiology",
    "Safari Sharma",
    "19/12/2022",
    "13/02/2023",
    "NA",
    EyeIcon
  ),
  createData(
    "JO1234567",
    "Cardiology",
    "Safari Sharma",
    "19/12/2022",
    "13/02/2023",
    "NA",
    EyeIcon
  ),
  createData(
    "JO1234567",
    "Cardiology",
    "Safari Sharma",
    "19/12/2022",
    "13/02/2023",
    "NA",
    EyeIcon
  ),
  createData(
    "JO1234567",
    "Cardiology",
    "Safari Sharma",
    "19/12/2022",
    "13/02/2023",
    "NA",
    EyeIcon
  ),
];

function JobsTable(props) {
  
  let { jobModal, detailsJobModal } = useSelector((state) => state.user);
  let dispatch = useDispatch();
  const handleClose = () => dispatch(setJobModal());
  const handleCloseDetail = ()=> dispatch(setJobDetaialsModal());
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
    <>
      <div className="jobs-logs-container">
        <div className="jobs-logs-wrapper">
          <div className="jobs-table">
            <Paper sx={{ width: "100%", overflow: "hidden" }}>
              <TableContainer sx={{ maxHeight: 520 }}>
                <Table stickyHeader aria-label="sticky table">
                  <TableHead>
                    <TableRow>
                      {columns.map((column) => {
                        return column.id === "date" ||
                          column.id === "endDate" ? (
                          <TableCell
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
                            <div className="date-input" style={{display:"flex", flexFlow:"row-reverse", marginTop:"-22px"}}>

                            <CalendarMonthIcon
                              onClick={() => setOpenDate(!openDate)}
                              className="calendar-logo"
                           />
                           </div>

                           {/* {openDate && (
                                <DateRange
                                  editableDateInputs={true}
                                  onChange={(item) => setDate([item.selection])}
                                  moveRangeOnFirstSelection={false}
                                  ranges={date}
                                  className="jobs-date"
                                  style={{position:"absolute", backgroundColor:"#fff  "}}
                                />
                              )} */}
                          </TableCell>
                        ) : (
                          <>
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
                          </>
                        );
                      })}
                    </TableRow>
                  </TableHead>

                  <TableBody>
                    {rows
                      .slice(
                        page * rowsPerPage,
                        page * rowsPerPage + rowsPerPage
                      )
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
                                  <img src={CrossIcon} onClick={()=>dispatch(setJobModal())}/>
                                  <img src={EyeIcon} onClick={()=>dispatch(setJobDetaialsModal())}/>
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
      <Modal
        open={jobModal}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      ><JobOptionModel />
      </Modal>
      <Modal
        open={detailsJobModal}
        onClose={handleCloseDetail}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      ><JobDetailsModal />
      </Modal>
    </>
  );
}

export default JobsTable;
