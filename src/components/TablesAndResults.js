import React, { Component } from 'react';
import { Table } from 'react-bootstrap';

class TablesAndResults extends Component {
    render() {
        return (
            <div>
                <h1>South West Division 3 Tables</h1><br></br>
                <h2>2018/2019</h2>
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
                        <th>Richie's Rovers</th>
                        <td>5</td>
                        <td>5</td>
                        <td>0</td>
                        <td>0</td>
                        <td>144</td>
                        <td>76</td>
                        <td>68</td>
                        <td>15</td>
                        </tr>

                        <tr style={style}>
                        <td>2</td>
                        <th>The Green Berg Packers</th>
                        <td>5</td>
                        <td>3</td>
                        <td>1</td>
                        <td>1</td>
                        <td>135</td>
                        <td>95</td>
                        <td>40</td>
                        <td>10</td>
                        </tr>

                        <tr style={style}>
                        <td>3</td>
                        <th>Esampdoria</th>
                        <td>5</td>
                        <td>2</td>
                        <td>1</td>
                        <td>2</td>
                        <td>117</td>
                        <td>129</td>
                        <td>-12</td>
                        <td>7</td>
                        </tr>

                        <tr style={style}>
                        <td>4</td>
                        <th>Brumbies</th>
                        <td>5</td>
                        <td>1</td>
                        <td>3</td>
                        <td>1</td>
                        <td>140</td>
                        <td>140</td>
                        <td>0</td>
                        <td>6</td>
                        </tr>

                        <tr>
                        <td>5</td>
                        <th>The Sea Otters</th>
                        <td>5</td>
                        <td>0</td>
                        <td>2</td>
                        <td>3</td>
                        <td>102</td>
                        <td>142</td>
                        <td>-40</td>
                        <td>2</td>
                        </tr>

                        <tr>
                        <td>6</td>
                        <th>Alfonso Mango</th>
                        <td>5</td>
                        <td>0</td>
                        <td>1</td>
                        <td>4</td>
                        <td>90</td>
                        <td>146</td>
                        <td>-56</td>
                        <td>1</td>
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

export default TablesAndResults;