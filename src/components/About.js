import React, { Component } from 'react';
import {  MDBRow, MDBCol, MDBCard, MDBCardBody, MDBIcon } from 'mdbreact';
import '../styles.css'
import Figure from 'react-bootstrap/Figure'
import Charlie from "../photos_and_videos/charlie.jpg"
import Jinks from "../photos_and_videos/jinks.jpg"
import Lawson from "../photos_and_videos/lawson.jpg"
import Mango from "../photos_and_videos/mango.jpg"
import Packers from "../photos_and_videos/packers.jpg"
import Pete from "../photos_and_videos/pete.jpg"
import Richie from "../photos_and_videos/richie.jpg"
import Seabrook from "../photos_and_videos/seabrook.jpg"

class About extends Component {
    render() {
        return (
            <div>
            <MDBCard className="my-5 px-5 pb-5 text-center">
                <MDBCardBody>
                    <h2 className="h1-responsive font-weight-bold my-5">
                        Leadership
                    </h2>
                    <p className="grey-text w-responsive mx-auto mb-5">
                        Meet the team behind the action at the BLC
                    </p>
                    <MDBRow>
                        <MDBCol lg="3" md="6" className="mb-lg-0 mb-5">
                        <Figure className="container">
                            <Figure.Image
                                width={171}
                                height={180}
                                alt="171x180"
                                src={Charlie}
                                className="rounded-circle z-depth-1 img-fluid"
                            />
                            </Figure>
                        <h5 className="font-weight-bold mt-4 mb-3">Charlie Esam</h5>
                        <p className="text-uppercase blue-text">Chairman</p>
                        <ul className="list-unstyled mb-0">
                            <a href="https://www.linkedin.com/in/charlie-esam-a64b56a7/" className="p-2 fa-lg">
                            <MDBIcon fab icon="linkedin" className="blue-text" />
                            </a>
                            <a href="https://www.instagram.com/charlieesam1/" className="p-2 fa-lg">
                            <MDBIcon fab icon="instagram" className="blue-text" />
                            </a>
                         </ul>
                        </MDBCol>

                        <MDBCol lg="3" md="6" className="mb-lg-0 mb-5">
                        <Figure>
                            <Figure.Image
                                width={171}
                                height={180}
                                alt="171x180"
                                src={Jinks}
                                className="rounded-circle z-depth-1 img-fluid"
                            />
                            </Figure>
                        <h5 className="font-weight-bold mt-4 mb-3">Edward Jinks</h5>
                        <p className="text-uppercase blue-text">Tour sec</p>
                        <ul className="list-unstyled mb-0">
                            <a href="https://www.linkedin.com/in/ed-jinks-132b6a103/" className="p-2 fa-lg">
                            <MDBIcon fab icon="linkedin" className="blue-text" />
                            </a>
                            <a href="https://www.instagram.com/edjinks/" className="p-2 fa-lg">
                            <MDBIcon fab icon="instagram" className="blue-text" />
                            </a>
                         </ul>
                        </MDBCol>

                        <MDBCol lg="3" md="6" className="mb-lg-0 mb-5">
                        <Figure>
                            <Figure.Image
                                width={171}
                                height={180}
                                alt="171x180"
                                src={Lawson}
                                className="rounded-circle z-depth-1 img-fluid"
                            />
                            </Figure>
                        <h5 className="font-weight-bold mt-4 mb-3">George Lawson</h5>
                        <p className="text-uppercase blue-text">Socail Media Sec</p>
                        <ul className="list-unstyled mb-0">
                            <a href="https://www.linkedin.com/in/george-lawson-141124ab/" className="p-2 fa-lg">
                            <MDBIcon fab icon="linkedin" className="blue-text" />
                            </a>
                            <a href="#!" className="p-2 fa-lg">
                            <MDBIcon fab icon="instagram" className="blue-text" />
                            </a>
                         </ul>
                        </MDBCol>

                        <MDBCol lg="3" md="6" className="mb-lg-0 mb-5">
                        <Figure>
                            <Figure.Image
                                width={171}
                                height={180}
                                alt="171x180"
                                src={Mango}
                                className="rounded-circle z-depth-1 img-fluid"
                            />
                            </Figure>
                        <h5 className="font-weight-bold mt-4 mb-3">Claudio Mango</h5>
                        <p className="text-uppercase blue-text">Community Officer</p>
                        <ul className="list-unstyled mb-0">
                            <a href="https://www.linkedin.com/in/claudio-alfano-97916796/" className="p-2 fa-lg">
                            <MDBIcon fab icon="linkedin" className="blue-text" />
                            </a>
                            <a href="https://www.instagram.com/claudioalfano/" className="p-2 fa-lg">
                            <MDBIcon fab icon="instagram" className="blue-text" />
                            </a>
                         </ul>
                        </MDBCol>

                        <MDBCol lg="3" md="6" className="mb-lg-0 mb-5">
                        <Figure>
                            <Figure.Image
                                width={171}
                                height={180}
                                alt="171x180"
                                src={Packers}
                                className="rounded-circle z-depth-1 img-fluid"
                            />
                            </Figure>
                        <h5 className="font-weight-bold mt-4 mb-3">Sam Greenberg</h5>
                        <p className="text-uppercase blue-text">Spnsorshiop / Kit Sec</p>
                        <ul className="list-unstyled mb-0">
                            <a href="https://www.linkedin.com/in/sam-greenberg-a69944a5/" className="p-2 fa-lg">
                            <MDBIcon fab icon="linkedin" className="blue-text" />
                            </a>
                            <a href="https://www.instagram.com/greenberg_sam/" className="p-2 fa-lg">
                            <MDBIcon fab icon="instagram" className="blue-text" />
                            </a>
                         </ul>
                        </MDBCol>

                        <MDBCol lg="3" md="6" className="mb-lg-0 mb-5">
                        <Figure>
                            <Figure.Image
                                width={171}
                                height={180}
                                alt="171x180"
                                src={Pete}
                                className="rounded-circle z-depth-1 img-fluid"
                            />
                            </Figure>
                        <h5 className="font-weight-bold mt-4 mb-3">Peter Brumby</h5>
                        <p className="text-uppercase blue-text">Player Liaison</p>
                        <ul className="list-unstyled mb-0">
                            <a href="https://www.linkedin.com/in/peter-brumby-53793212a/" className="p-2 fa-lg">
                            <MDBIcon fab icon="linkedin" className="blue-text" />
                            </a>
                            <a href="https://www.instagram.com/petebrumby/" className="p-2 fa-lg">
                            <MDBIcon fab icon="instagram" className="blue-text" />
                            </a>
                         </ul>
                        </MDBCol>

                        <MDBCol lg="3" md="6" className="mb-lg-0 mb-5">
                        <Figure>
                            <Figure.Image
                                width={171}
                                height={180}
                                alt="171x180"
                                src={Richie}
                                className="rounded-circle z-depth-1 img-fluid"
                            />
                            </Figure>
                        <h5 className="font-weight-bold mt-4 mb-3">Richie Ganney</h5>
                        <p className="text-uppercase blue-text">Treasurer and CTO</p>
                        <ul className="list-unstyled mb-0">
                            <a href="https://www.linkedin.com/in/richie-ganney-26965063/" className="p-2 fa-lg">
                            <MDBIcon fab icon="linkedin" className="blue-text" />
                            </a>
                            <a href="https://www.instagram.com/richie_ganney/" className="p-2 fa-lg">
                            <MDBIcon fab icon="instagram" className="blue-text" />
                            </a>
                         </ul>
                        </MDBCol>

                        <MDBCol lg="3" md="6" className="mb-lg-0 mb-5">
                        <Figure>
                            <Figure.Image
                                width={171}
                                height={180}
                                alt="171x180"
                                src={Seabrook}
                                className="rounded-circle z-depth-1 img-fluid"
                            />
                            </Figure>
                        <h5 className="font-weight-bold mt-4 mb-3">George Seabrook</h5>
                        <p className="text-uppercase blue-text">Social Sec</p>
                        <ul className="list-unstyled mb-0">
                            <a href="https://www.linkedin.com/in/george-seabrook-900a47a5/" className="p-2 fa-lg">
                            <MDBIcon fab icon="linkedin" className="blue-text" />
                            </a>
                            <a href="https://www.instagram.com/gseabrook/" className="p-2 fa-lg">
                            <MDBIcon fab icon="instagram" className="blue-text" />
                            </a>
                         </ul>
                        </MDBCol>

                    </MDBRow>
                </MDBCardBody>
            </MDBCard>
            </div>
        );
    }
}

export default About;
