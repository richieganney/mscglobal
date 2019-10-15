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
                        <th>Esampdoria</th>
                        <td>1</td>
                        <td>1</td>
                        <td>0</td>
                        <td>0</td>
                        <td>27</td>
                        <td>8</td>
                        <td>19</td>
                        <td>3</td>
                        </tr>

                        <tr style={style}>
                        <td>2</td>
                        <th>AFC Bournemurf</th>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                        </tr>

                        <tr style={style}>
                        <td>3</td>
                        <th>Alfonso Mango</th>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                        </tr>

                        <tr style={style}>
                        <td>4</td>
                        <th>Brumbies</th>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                        </tr>

                        <tr>
                        <td>5</td>
                        <th>Chadrington Stanley</th>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                        </tr>

                        <tr>
                        <td>6</td>
                        <th>Cowracens</th>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                        </tr>

                        <tr>
                        <td>7</td>
                        <th>Fortuna Müzzeldorf</th>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                        </tr>

                        <tr>
                        <td>8</td>
                        <th>Richie's Rovers</th>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                        </tr>

                        <tr>
                        <td>9</td>
                        <th>The Greenberg Packers</th>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                        </tr>

                        <tr>
                        <td>10</td>
                        <th>The Jimboks</th>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                        </tr>

                        <tr>
                        <td>11</td>
                        <th>The Sea Otters</th>
                        <td>1</td>
                        <td>0</td>
                        <td>0</td>
                        <td>1</td>
                        <td>8</td>
                        <td>27</td>
                        <td>-19</td>
                        <td>0</td>
                        </tr>
                    </tbody>
                </Table>
            </div>
        );
    }
}

const style = {
    backgroundColor: '#7B67C9'
}

export default TablesAndResults19_20;