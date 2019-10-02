import React, { Component } from 'react';
import { Table } from 'react-bootstrap';

class TablesAndResults19_20 extends Component {
    render() {
        return (
            <div>
                                <h2>2019/2020</h2>
                <Table responsive>
                    <thead>
                        <tr>
                        <th></th>
                        <th>Team</th>
                        <th>Played</th>
                        <th>Win</th>
                        <th>Draw</th>
                        <th>Loss</th>
                        <th>Points For</th>
                        <th>Points Against</th>
                        <th>Points Difference</th>
                        <th>Points</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr style={style}>
                        <td>1</td>
                        <th>Alfonso Mango</th>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        </tr>

                        <tr style={style}>
                        <td>2</td>
                        <th>Brumbies</th>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        </tr>

                        <tr style={style}>
                        <td>3</td>
                        <th>Esampdoria</th>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        </tr>

                        <tr style={style}>
                        <td>4</td>
                        <th>Richie's Rovers</th>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        </tr>

                        <tr>
                        <td>5</td>
                        <th>The Greenberg Packers</th>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        </tr>

                        <tr>
                        <td>6</td>
                        <th>The Sea Otters</th>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        </tr>
                    </tbody>
                </Table>
            </div>
        );
    }
}

const style = {
    backgroundColor: '#65BFCA'
}

export default TablesAndResults19_20;