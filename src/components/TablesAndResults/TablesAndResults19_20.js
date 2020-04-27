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
                        <th>Richie's Rovers</th>
                        <td>8</td>
                        <td>6</td>
                        <td>1</td>
                        <td>1</td>
                        <td>198</td>
                        <td>83</td>
                        <td>115</td>
                        <td>19</td>
                    </tr>

                    <tr style={style}>
                        <td>2</td>
                        <th>Fortuna Müzzeldorf</th>
                        <td>7</td>
                        <td>4</td>
                        <td>2</td>
                        <td>1</td>
                        <td>175</td>
                        <td>123</td>
                        <td>52</td>
                        <td>14</td>
                    </tr>

                    <tr style={style}>
                        <td>3</td>
                        <th>AFC Bournemurf</th>
                        <td>4</td>
                        <td>4</td>
                        <td>0</td>
                        <td>0</td>
                        <td>120</td>
                        <td>63</td>
                        <td>57</td>
                        <td>12</td>
                    </tr>

                    <tr style={style}>
                        <td>4</td>
                        <th>The Greenberg Packers</th>
                        <td>7</td>
                        <td>3</td>
                        <td>1</td>
                        <td>3</td>
                        <td>164</td>
                        <td>149</td>
                        <td>15</td>
                        <td>9</td>
                    </tr>

                    <tr>
                        <td>5</td>
                        <th>Chadrington Stanley</th>
                        <td>6</td>
                        <td>3</td>
                        <td>0</td>
                        <td>3</td>
                        <td>111</td>
                        <td>119</td>
                        <td>-8</td>
                        <td>9</td>
                    </tr>

                        <tr>
                        <td>6</td>
                        <th>Brumbies</th>
                        <td>4</td>
                        <td>2</td>
                        <td>0</td>
                        <td>2</td>
                        <td>87</td>
                        <td>97</td>
                        <td>-10</td>
                        <td>6</td>
                        </tr>

                        <tr>
                        <td>7</td>
                        <th>The Jimboks</th>
                        <td>5</td>
                        <td>1</td>
                        <td>0</td>
                        <td>4</td>
                        <td>65</td>
                        <td>122</td>
                        <td>-57</td>
                        <td>3</td>
                        </tr>

                        <tr>
                        <td>8</td>
                        <th>Shorn Hub</th>
                        <td>3</td>
                        <td>0</td>
                        <td>1</td>
                        <td>2</td>
                        <td>36</td>
                        <td>80</td>
                        <td>-44</td>
                        <td>1</td>
                        </tr>

                        <tr>
                        <td>9</td>
                        <th>Alfonso Mango</th>
                        <td>8</td>
                        <td>0</td>
                        <td>1</td>
                        <td>7</td>
                        <td>96</td>
                        <td>215</td>
                        <td>-119</td>
                        <td>1</td>
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