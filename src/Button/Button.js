import React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";

class ButtonComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      recentClicked: "All",
    };
  }

  UpdateButtonStatus = (data) => {
    this.props.buttonReadref(data);
    this.setState({ ...this.state, recentClicked: data });
  };

  render() {
    return (
      <>
        <div>
          <Grid container style={{ marginLeft: 65, marginBottom: 40 }}>
            <Stack spacing={2} direction="row">
              <Button
                onClick={() => this.UpdateButtonStatus("All")}
                variant={
                  this.state.recentClicked === "All" ? "contained" : "outlined"
                }
              >
                All
              </Button>
              <Button
                variant="outlined"
                onClick={() => this.UpdateButtonStatus("Read")}
                variant={
                  this.state.recentClicked === "Read" ? "contained" : "outlined"
                }
              >
                Read
              </Button>

              <Button
                variant="outlined"
                onClick={() => this.UpdateButtonStatus("Unread")}
                variant={
                  this.state.recentClicked === "Unread"
                    ? "contained"
                    : "outlined"
                }
              >
                Unread
              </Button>
            </Stack>
          </Grid>
        </div>
      </>
    );
  }
}

export default ButtonComponent;
