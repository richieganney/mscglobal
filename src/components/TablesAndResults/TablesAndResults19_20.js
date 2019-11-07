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
                        <td>2</td>
                        <td>2</td>
                        <td>0</td>
                        <td>0</td>
                        <td>54</td>
                        <td>13</td>
                        <td>41</td>
                        <td>6</td>
                    </tr>

                    <tr style={style}>
                        <td>2</td>
                        <th>The Greenberg Packers</th>
                        <td>3</td>
                        <td>2</td>
                        <td>0</td>
                        <td>1</td>
                        <td>62</td>
                        <td>59</td>
                        <td>3</td>
                        <td>6</td>
                        </tr>

                    <tr style={style}>
                        <td>3</td>
                        <th>AFC Bournemurf</th>
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
                        <td>4</td>
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

                        <tr>
                        <td>5</td>
                        <th>Fortuna Müzzeldorf</th>
                        <td>1</td>
                        <td>1</td>
                        <td>0</td>
                        <td>0</td>
                        <td>27</td>
                        <td>9</td>
                        <td>18</td>
                        <td>3</td>
                        </tr>

                        <tr>
                        <td>6</td>
                        <th>Diamondo</th>
                        <td>1</td>
                        <td>1</td>
                        <td>0</td>
                        <td>0</td>
                        <td>27</td>
                        <td>10</td>
                        <td>17</td>
                        <td>3</td>
                        </tr>

                        <tr>
                        <td>7</td>
                        <th>Brumbies</th>
                        <td>1</td>
                        <td>1</td>
                        <td>0</td>
                        <td>0</td>
                        <td>27</td>
                        <td>12</td>
                        <td>15</td>
                        <td>3</td>
                        </tr>

                        <tr>
                        <td>8</td>
                        <th>Shorn Hub</th>
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
                        <td>10</td>
                        <th>Cowracens</th>
                        <td>1</td>
                        <td>0</td>
                        <td>0</td>
                        <td>1</td>
                        <td>9</td>
                        <td>27</td>
                        <td>-18</td>
                        <td>0</td>
                        </tr>

                        <tr>
                        <td>11</td>
                        <th>The Sea Otters</th>
                        <td>2</td>
                        <td>0</td>
                        <td>0</td>
                        <td>2</td>
                        <td>31</td>
                        <td>54</td>
                        <td>-23</td>
                        <td>0</td>
                        </tr>

                        <tr>
                        <td>12</td>
                        <th>Chadrington Stanley</th>
                        <td>2</td>
                        <td>0</td>
                        <td>0</td>
                        <td>2</td>
                        <td>14</td>
                        <td>54</td>
                        <td>-40</td>
                        <td>0</td>
                        </tr>

                        <tr>
                        <td>13</td>
                        <th>Alfonso Mango</th>
                        <td>3</td>
                        <td>0</td>
                        <td>0</td>
                        <td>3</td>
                        <td>30</td>
                        <td>81</td>
                        <td>-51</td>
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