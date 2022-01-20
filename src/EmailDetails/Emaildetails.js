import React from "react";
import Avatar from "@mui/material/Avatar";
// import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";

class Emaildetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allData: {},
    };
  }

  componentDidMount() {
    console.log("componentDidMount - [Email Details]");
  }
  componentDidUpdate(prevProps, prevState) {
    console.log(
      "[componentDidUpdate - this.props]",
      this.props.emailDataref,
      "[componentDidUpdate - this.prevProps]",
      prevProps.emailDataref
    );
    if (prevProps.emailDataref.id !== this.props.emailDataref.id) {
      console.log("****");
      this.setState({ allData: this.props.emailDataref });
    }
  }
  render() {
    return (
      <>
        {this.state.allData && this.state.allData.hasOwnProperty("id") ? (
          <>
            <Card
              sx={{
                border: 1,
                borderRadius: 3,
                padding: 2,
                margin: 1,
              }}
            >
              <CardHeader
                avatar={
                  <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                    G
                  </Avatar>
                }
                title={this.state.allData.from.name}
                subheader={this.state.allData.from.email}
              />

              <CardContent>
                <Typography variant="h6">
                  Subject : {this.state.allData.subject}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {this.state.allData.body}
                </Typography>
              </CardContent>
            </Card>
            {/* )) }<div>{this.state.allData.from.name}</div>
            <br />
            <div>{this.state.allData.from.email}</div> */}
          </>
        ) : (
          "No Data to Show"
        )}
      </>
    );
  }
}

export default Emaildetails;
