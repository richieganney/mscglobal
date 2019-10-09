import React, { Component } from 'react';
import {  MDBRow, MDBCol, MDBCard, MDBCardBody } from 'mdbreact';
import Figure from 'react-bootstrap/Figure'
import Brumbies from '../photos_and_videos/all_teams/brumbies.jpeg';
import FiveClive from '../photos_and_videos/all_teams/fiveclive.jpeg';
import Mangos from '../photos_and_videos/all_teams/mangos.jpeg';
import NedJinks from '../photos_and_videos/all_teams/nedjinks.jpeg';
import Packers from '../photos_and_videos/all_teams/packers.jpeg';
import Rovers from '../photos_and_videos/all_teams/rovers.jpeg';
import SeaOtters from '../photos_and_videos/all_teams/seaotters.jpeg';
import Esampdoria from '../photos_and_videos/all_teams/esampdoria.jpeg';

class AllTeams extends Component {
    render() {
        return (
            <div>
                <MDBCard className="my-5 px-5 pb-5 text-center">
                <MDBCardBody>
                    <h2 className="h1-responsive font-weight-bold my-5">
                        South West Division 3
                    </h2>
                    <MDBRow>
                        <MDBCol lg="3" md="6" className="mb-lg-0 mb-5">
                        <Figure className="container">
                            <Figure.Image
                                width={171}
                                height={180}
                                alt="171x180"
                                src={Esampdoria}
                                className="rounded-circle z-depth-1 img-fluid"
                            />
                            </Figure>
                        <h5 className="font-weight-bold mt-4 mb-3">Esampdoria</h5>
                        </MDBCol>

                        <MDBCol lg="3" md="6" className="mb-lg-0 mb-5">
                        <Figure>
                            <Figure.Image
                                width={171}
                                height={180}
                                alt="171x180"
                                src={NedJinks}
                                className="rounded-circle z-depth-1 img-fluid"
                            />
                            </Figure>
                        <h5 className="font-weight-bold mt-4 mb-3">Club Ned Jinks</h5>
                        </MDBCol>

                        <MDBCol lg="3" md="6" className="mb-lg-0 mb-5">
                        <Figure>
                            <Figure.Image
                                width={171}
                                height={180}
                                alt="171x180"
                                src={FiveClive}
                                className="rounded-circle z-depth-1 img-fluid"
                            />
                            </Figure>
                        <h5 className="font-weight-bold mt-4 mb-3">BBC Radio Five Clive</h5>
                        </MDBCol>

                        <MDBCol lg="3" md="6" className="mb-lg-0 mb-5">
                        <Figure>
                            <Figure.Image
                                width={171}
                                height={180}
                                alt="171x180"
                                src={Mangos}
                                className="rounded-circle z-depth-1 img-fluid"
                            />
                            </Figure>
                        <h5 className="font-weight-bold mt-4 mb-3">Alfonso Mango</h5>
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
                        <h5 className="font-weight-bold mt-4 mb-3">The Greenberg Packers</h5>
                        </MDBCol>

                        <MDBCol lg="3" md="6" className="mb-lg-0 mb-5">
                        <Figure>
                            <Figure.Image
                                width={171}
                                height={180}
                                alt="171x180"
                                src={Brumbies}
                                className="rounded-circle z-depth-1 img-fluid"
                            />
                            </Figure>
                        <h5 className="font-weight-bold mt-4 mb-3">Brumbies</h5>
                        </MDBCol>

                        <MDBCol lg="3" md="6" className="mb-lg-0 mb-5">
                        <Figure>
                            <Figure.Image
                                width={171}
                                height={180}
                                alt="171x180"
                                src={Rovers}
                                className="rounded-circle z-depth-1 img-fluid"
                            />
                            </Figure>
                        <h5 className="font-weight-bold mt-4 mb-3">Richie's Rovers</h5>
                        </MDBCol>

                        <MDBCol lg="3" md="6" className="mb-lg-0 mb-5">
                        <Figure>
                            <Figure.Image
                                width={171}
                                height={180}
                                alt="171x180"
                                src={SeaOtters}
                                className="rounded-circle z-depth-1 img-fluid"
                            />
                            </Figure>
                        <h5 className="font-weight-bold mt-4 mb-3">The Sea Otters</h5>
                        </MDBCol>

                    </MDBRow>
                </MDBCardBody>
            </MDBCard>
            </div>
        );
    }
}

export default AllTeams;