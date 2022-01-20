import React from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Header from "../Header";

const Documents = () => {
  return (
    <>
      <div>
        <Header />
      </div>
      <div>
        <Grid container spacing={2} padding={3} marginTop={5}>
          <Grid item xs={12}>
            <Typography variant="subtitle2" gutterBottom component="div">
              Welcome to App, designed and develped only for demo purpose.
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="subtitle2" gutterBottom component="div">
              This app is based on both functional and class components.
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="subtitle2" gutterBottom component="div">
              This is the Email Page in which there are three buttons All,Read
              and Unread.
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="subtitle2" gutterBottom component="div">
              All buttons have some function. When you click on read button,
              only read message is displayed.
            </Typography>
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default Documents;
