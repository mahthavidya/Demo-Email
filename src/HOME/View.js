import React, { Component } from "react";
import Emaildetails from "../EmailDetails/Emaildetails";
import EmailPage from "../Email/EmailPage";
import Header from "../Header";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import Avatar from "@mui/material/Avatar";
import CardContent from "@mui/material/CardContent";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import Button from "../Button/Button";

class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      emailData: "",
      read: "All",
      searchData: "",
    };
  }
  emailDetails = (objid) => {
    this.setState({ emailData: objid });
    // console.log(objid);
  };
  componentDidUpdate() {
    //  console.log(this.state);
  }
  readDetails = (data) => {
    const tempReadData = { ...this.state };
    tempReadData.read = data;
    this.setState(tempReadData);
  };
  searchData = (data) => {
    const temp = { ...this.state };
    temp.searchData = data;
    this.setState(temp);
  };
  render() {
    return (
      <>
        <Header searchDataref={this.searchData} />
        {/* <Emaildetails /> */}
        <div style={{ marginTop: 60 }}>
          <Grid item xs={12} container spacing={2}>
            <Grid item xs={12}>
              {this.state.searchData === "" && (
                <Button buttonReadref={this.readDetails} />
              )}
            </Grid>
            <Grid item xs={5}>
              <EmailPage
                emailDetailsref={this.emailDetails}
                emailReadref={this.state.read}
                searchEmailref={this.state.searchData}
              />
            </Grid>
            <Grid item xs={7} item>
              <Emaildetails emailDataref={this.state.emailData} />
            </Grid>
          </Grid>
        </div>
      </>
    );
  }
}

export default Home;
