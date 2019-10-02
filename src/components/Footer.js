import React, { Component } from 'react';
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

class Footer extends Component {
    render() {
        return (
            <div>
                <MDBFooter style={style} className="font-small pt-4 mt-4">
                &copy; {new Date().getFullYear()} Copyright: MSC SWD3 Enterprises
                </MDBFooter>
            </div>
        );
    }
}

const style = {
    textAlign: "center",
    backgroundColor: "grey"
}

export default Footer;