import * as React from "react";

import AppBar from "@mui/material/AppBar";
import Typography from "@mui/material/Typography";
import Toolbar from "@mui/material/Toolbar";

interface HelloProps {
    compiler: string;
    framework: string;
}

export class Title extends React.Component<HelloProps, {}> {
    render() {
        return (
            <React.Fragment>
                <AppBar>
                    <Typography>Hello from {this.props.compiler} and {this.props.framework}!</Typography>
                </AppBar>
                <Toolbar />
            </React.Fragment>
        );
    }
}
