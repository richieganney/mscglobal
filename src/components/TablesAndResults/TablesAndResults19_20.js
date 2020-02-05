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
                        <td>7</td>
                        <td>5</td>
                        <td>1</td>
                        <td>1</td>
                        <td>171</td>
                        <td>76</td>
                        <td>95</td>
                        <td>16</td>
                    </tr>

                    <tr style={style}>
                        <td>2</td>
                        <th>The Greenberg Packers</th>
                        <td>5</td>
                        <td>4</td>
                        <td>0</td>
                        <td>1</td>
                        <td>119</td>
                        <td>90</td>
                        <td>29</td>
                        <td>12</td>
                        </tr>

                    <tr style={style}>
                        <td>3</td>
                        <th>Fortuna Müzzeldorf</th>
                        <td>5</td>
                        <td>3</td>
                        <td>1</td>
                        <td>1</td>
                        <td>129</td>
                        <td>89</td>
                        <td>40</td>
                        <td>10</td>
                    </tr>

                    <tr style={style}>
                        <td>4</td>
                        <th>Esampdoria</th>
                        <td>4</td>
                        <td>3</td>
                        <td>1</td>
                        <td>0</td>
                        <td>116</td>
                        <td>84</td>
                        <td>32</td>
                        <td>10</td>
                        </tr>

                    <tr>
                        <td>5</td>
                        <th>AFC Bournemurf</th>
                        <td>3</td>
                        <td>3</td>
                        <td>0</td>
                        <td>0</td>
                        <td>92</td>
                        <td>41</td>
                        <td>51</td>
                        <td>9</td>
                    </tr>

                    <tr>
                        <td>6</td>
                        <th>Chadrington Stanley</th>
                        <td>6</td>
                        <td>2</td>
                        <td>0</td>
                        <td>4</td>
                        <td>111</td>
                        <td>136</td>
                        <td>-25</td>
                        <td>6</td>
                    </tr>

                        <tr>
                        <td>7</td>
                        <th>Brumbies</th>
                        <td>4</td>
                        <td>1</td>
                        <td>1</td>
                        <td>2</td>
                        <td>84</td>
                        <td>98</td>
                        <td>-14</td>
                        <td>4</td>
                        </tr>

                        <tr>
                        <td>8</td>
                        <th>Cowracens</th>
                        <td>2</td>
                        <td>1</td>
                        <td>0</td>
                        <td>1</td>
                        <td>36</td>
                        <td>38</td>
                        <td>-2</td>
                        <td>3</td>
                        </tr>

                        <tr>
                        <td>9</td>
                        <th>The Jimboks</th>
                        <td>5</td>
                        <td>1</td>
                        <td>0</td>
                        <td>4</td>
                        <td>79</td>
                        <td>123</td>
                        <td>-44</td>
                        <td>3</td>
                        </tr>

                        <tr>
                        <td>10</td>
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
                        <td>11</td>
                        <th>Shorn Hub</th>
                        <td>2</td>
                        <td>0</td>
                        <td>0</td>
                        <td>2</td>
                        <td>10</td>
                        <td>54</td>
                        <td>-44</td>
                        <td>0</td>
                        </tr>

                        <tr>
                        <td>12</td>
                        <th>Alfonso Mango</th>
                        <td>5</td>
                        <td>0</td>
                        <td>0</td>
                        <td>5</td>
                        <td>40</td>
                        <td>135</td>
                        <td>-95</td>
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