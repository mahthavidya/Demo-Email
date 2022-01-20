import React from "react";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import { styled } from "@mui/material/styles";
import TableRow from "@mui/material/TableRow";
import TableContainer from "@mui/material/TableContainer";

import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { PinDropSharp } from "@mui/icons-material";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

class EmailPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      data2: [],
      count: 0,
    };
  }

  componentDidMount() {
    this.getEmailData();
  }

  getEmailData = () => {
    setTimeout(() => {
      // fetch("https://flipkart-email-mock.vercel.app/")
      //   .then((res) => res.json())
      //   .then((res) => {
      //     console.log(res);
      //     const temp = [...res.list];
      //     const temp2 = temp.map((el) => {
      //       //el.read = false;
      //       //el["body"] =
      //       'Numen partners with providers such as doctors, hospitals, and rehab programs to expand access to primary & secondary prevention, improve patient outcomes, and lower costs. We aid our patients in adhering to their doctors" instructions and following our treatment regimens by providing tailored nutrition instructions, physiotherapy, and psychological therapy, Our partners include eminent doctors who focus on providing continuous patient care for their patients. By working with us, they achieve this without adding any additional strain to their busy practices. Keeping our focus on the patient allows us to gain unique milestones that define positive clinical outcomes desired in chronic diseases.';
      //       //return el;
      //       return {
      //         ...el,
      //         read: false,
      //         body: "Numen partners with providers such as doctors, hospitals, and rehab programs to expand access to primary & secondary prevention, improve patient outcomes, and lower costs. We aid our patients in adhering to their doctors instructions and following our treatment regimens by providing tailored nutrition instructions, physiotherapy, and psychological therapy, Our partners include eminent doctors who focus on providing continuous patient care for their patients. By working with us, they achieve this without adding any additional strain to their busy practices. Keeping our focus on the patient allows us to gain unique milestones that define positive clinical outcomes desired in chronic diseases.",
      //       };
      //     });
      //     this.setState({ data: [...temp2], count: res.total });
      //   });
      // mocking API Call
      const res = {
        list: [
          {
            id: "1",
            from: {
              email: "bounced@flipkart.com",
              name: "bounced",
            },
            date: 1582729505000,
            subject: "Lorem Ipsum",
            short_description:
              "Vestibulum sit amet ipsum aliquet, lacinia nulla malesuada, ullamcorper massa",
          },
          {
            id: "2",
            from: {
              email: "noreply@flipkart.com",
              name: "noreply",
            },
            date: 1582728505000,
            subject: "Lorem Ipsum",
            short_description:
              "Aenean ut odio eu risus sollicitudin vehicula volutpat vel ante",
          },
          {
            id: "3",
            from: {
              email: "yourfriends@flipkart.com",
              name: "yourfriends",
            },
            date: 1582727505000,
            subject: "Lorem Ipsum",
            short_description:
              "Nam eget erat accumsan, auctor sapien ut, tempor diam",
          },
          {
            id: "4",
            from: {
              email: "hello@flipkart.com",
              name: "hello",
            },
            date: 1582726505000,
            subject: "Lorem Ipsum",
            short_description:
              "Morbi eget nunc interdum felis varius tincidunt",
          },
          {
            id: "5",
            from: {
              email: "howdy@flipkart.com",
              name: "howdy",
            },
            date: 1582725505000,
            subject: "Lorem Ipsum",
            short_description:
              "Integer consequat dolor sed justo consequat, id elementum eros facilisis",
          },
          {
            id: "6",
            from: {
              email: "media@flipkart.com",
              name: "media",
            },
            date: 1582724505000,
            subject: "Lorem Ipsum",
            short_description:
              "Pellentesque sed erat pulvinar, ornare elit at, elementum tortor",
          },
          {
            id: "7",
            from: {
              email: "press@flipkart.com",
              name: "press",
            },
            date: 1582724481000,
            subject: "Lorem Ipsum",
            short_description: "Phasellus sagittis metus in gravida posuere",
          },
          {
            id: "8",
            from: {
              email: "affiliates@flipkart.com",
              name: "affiliates",
            },
            date: 1582724433000,
            subject: "Lorem Ipsum",
            short_description: "Nunc tincidunt metus vel enim tempus ultricies",
          },
          {
            id: "9",
            from: {
              email: "partners@flipkart.com",
              name: "partners",
            },
            date: 1582724402000,
            subject: "Lorem Ipsum",
            short_description:
              "Vestibulum viverra dui finibus, rutrum dui luctus, hendrerit odio",
          },
          {
            id: "10",
            from: {
              email: "domains@flipkart.com",
              name: "domains",
            },
            date: 1582724402000,
            subject: "Lorem Ipsum",
            short_description:
              "Sed vitae est id orci viverra gravida ut at turpis",
          },
          {
            id: "11",
            from: {
              email: "careers@flipkart.com",
              name: "careers",
            },
            date: 1582724349000,
            subject: "Lorem Ipsum",
            short_description: "Sed nec libero vehicula diam faucibus ornare",
          },
          {
            id: "12",
            from: {
              email: "hello@flipkart.com",
              name: "hello",
            },
            date: 1582724327000,
            subject: "Lorem Ipsum",
            short_description:
              "Suspendisse quis mauris sit amet dolor tincidunt viverra non ac sapien",
          },
          {
            id: "13",
            from: {
              email: "billing@flipkart.com",
              name: "billing",
            },
            date: 1582724294000,
            subject: "Lorem Ipsum",
            short_description: "Integer tincidunt tellus feugiat mollis porta",
          },
          {
            id: "14",
            from: {
              email: "support@flipkart.com",
              name: "support",
            },
            date: 1582723607000,
            subject: "Lorem Ipsum",
            short_description:
              "Proin scelerisque nisi eget lacus luctus finibus",
          },
          {
            id: "15",
            from: {
              email: "admin@flipkart.com",
              name: "Admin",
            },
            date: 1582723122000,
            subject: "Lorem Ipsum",
            short_description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
          },
        ],
        total: 15,
      };
      const temp = [...res.list];
      const temp2 = temp.map((el) => {
        //el.read = false;
        //el["body"] =
        'Numen partners with providers such as doctors, hospitals, and rehab programs to expand access to primary & secondary prevention, improve patient outcomes, and lower costs. We aid our patients in adhering to their doctors" instructions and following our treatment regimens by providing tailored nutrition instructions, physiotherapy, and psychological therapy, Our partners include eminent doctors who focus on providing continuous patient care for their patients. By working with us, they achieve this without adding any additional strain to their busy practices. Keeping our focus on the patient allows us to gain unique milestones that define positive clinical outcomes desired in chronic diseases.';
        //return el;
        return {
          ...el,
          read: false,
          body: "Numen partners with providers such as doctors, hospitals, and rehab programs to expand access to primary & secondary prevention, improve patient outcomes, and lower costs. We aid our patients in adhering to their doctors instructions and following our treatment regimens by providing tailored nutrition instructions, physiotherapy, and psychological therapy, Our partners include eminent doctors who focus on providing continuous patient care for their patients. By working with us, they achieve this without adding any additional strain to their busy practices. Keeping our focus on the patient allows us to gain unique milestones that define positive clinical outcomes desired in chronic diseases.",
        };
      });
      this.setState({ data: [...temp2], count: res.total });
    }, 1000);
  };
  componentDidUpdate() {
    console.log(this.state);
  }

  // updateEmailStatus = (row1) => {
  //   console.log(row1);
  //   row1.read = true;
  //   this.props.emailDetailsref(row1);
  //   const temp = [...this.state.data];
  //   //console.log(temp);
  //   //const index = temp.map((el) => el.id).indexOf(row1.id);
  //   //temp[index] = row1;
  //   const newArr = temp.map((el) => {
  //     if (el.id === row1.id) {
  //       return row1;
  //     } else return el;
  //   });
  //   console.log(newArr);
  //   //console.log(index);

  //   //data2 = [this.state.data2];
  //   // oldState.data = newArr;
  //   //oldState.data2 = data2;
  //   //const oldState = { ...this.state, data: newArr, data2: this.state.data2 };

  //   this.setState((data) => {
  //     return { ...data, data: [...newArr] };
  //   });

  //   // this.setState(oldState);
  // };
  updateEmailStatus = (row1) => {
    console.log(row1);
    this.props.emailDetailsref(row1);

    const data1 = [...this.state.data];

    // const tempData = data1.map((el) => el.id).indexOf(row1.id);
    // row1.read = true;
    // data1[tempData] = row1;

    const newData = data1.map((el) => {
      if (el.id === row1.id) {
        el.read = true;
        return el;
      } else return el;
    });

    this.setState((data) => {
      return {
        ...data,
        data: [...newData],
      };
    });
  };

  render() {
    let filteredArr;
    if (this.props.searchEmailref !== "") {
      filteredArr = this.state.data.filter((el) =>
        el.from.name
          .toLowerCase()
          .includes(this.props.searchEmailref.toLowerCase())
      );
      filteredArr = filteredArr.map((row) => (
        <StyledTableRow
          key={row.id}
          onClick={() => this.updateEmailStatus({ ...row })}
        >
          <StyledTableCell
            component="th"
            scope="row"
            sx={row.read ? "" : { fontWeight: "bold" }}
          >
            {row.from.name}
          </StyledTableCell>
          <StyledTableCell sx={row.read ? "" : { fontWeight: "bold" }}>
            {/* <a href="#" style={{ textDecoration: "none" }}> */}
            {row.subject}
            {/* </a> */}
          </StyledTableCell>
        </StyledTableRow>
      ));
    }

    let AllArr, ReadArr, UnReadArr;
    if (this.props.emailReadref === "All") {
      AllArr = this.state.data.map((row) => (
        <StyledTableRow
          key={row.id}
          onClick={() => this.updateEmailStatus({ ...row })}
        >
          <StyledTableCell
            component="th"
            scope="row"
            sx={row.read ? "" : { fontWeight: "bold" }}
          >
            {row.from.name}
          </StyledTableCell>
          <StyledTableCell sx={row.read ? "" : { fontWeight: "bold" }}>
            {/* <a href="#" style={{ textDecoration: "none" }}> */}
            {row.subject}
            {/* </a> */}
          </StyledTableCell>
        </StyledTableRow>
      ));
    } else {
      AllArr = "";
    }

    if (this.props.emailReadref === "Read") {
      ReadArr = this.state.data.map((row) => {
        if (row.read === true) {
          return (
            <StyledTableRow
              key={row.id}
              onClick={() => this.updateEmailStatus({ ...row })}
            >
              <StyledTableCell
                component="th"
                scope="row"
                sx={row.read ? "" : { fontWeight: "bold" }}
              >
                {row.from.name}
              </StyledTableCell>
              <StyledTableCell sx={row.read ? "" : { fontWeight: "bold" }}>
                {/* <a href="#" style={{ textDecoration: "none" }}> */}
                {row.subject}
                {/* </a> */}
              </StyledTableCell>
            </StyledTableRow>
          );
        }
      });
    }
    if (this.props.emailReadref === "Unread") {
      UnReadArr = this.state.data.map((row) => {
        if (row.read === false) {
          return (
            <StyledTableRow
              key={row.id}
              onClick={() => this.updateEmailStatus({ ...row })}
            >
              <StyledTableCell
                component="th"
                scope="row"
                sx={row.read ? "" : { fontWeight: "bold" }}
              >
                {row.from.name}
              </StyledTableCell>
              <StyledTableCell sx={row.read ? "" : { fontWeight: "bold" }}>
                {/* <a href="#" style={{ textDecoration: "none" }}> */}
                {row.subject}
                {/* </a> */}
              </StyledTableCell>
            </StyledTableRow>
          );
        }
      });
    }
    return (
      <Grid item xs={12} container spacing={2} padding={"20px"}>
        <TableContainer component={Paper} sx={{ width: "100%" }}>
          <Table aria-label="simple table">
            <TableBody>
              {this.props.searchEmailref !== "" ? filteredArr : AllArr}
              {this.props.emailReadref === "Read" && ReadArr}

              {this.props.emailReadref === "Unread" && UnReadArr}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
    );
  }
}

export default EmailPage;
