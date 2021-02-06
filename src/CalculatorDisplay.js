import React from 'react';


export default function CalculatorDisplay(props) {
    
    return (
      
        <React.Fragment>
          <table border="7">
            <tbody>
              <tr>
                <td colSpan="4" className="td">
                  {" "}
                  My Calculator{" "}
                </td>
              </tr>

              <tr>
                <td colSpan="3">
                  <input className="Answer" type="text" />
                </td>
                <td>
                  <input
                    type="button"
                    className="width"
                    value="="
                    onClick={(e) => {
                     props.onEqualPressed()
                    }}
                  />
                </td>
              </tr>

              <tr>
                <td>
                  <input
                    type="button"
                    className="width"
                    value="1"
                    onClick={(e) => {
                      props.onNumberPressed(e.target.value);
                    }}
                  />
                </td>
                <td>
                  <input
                    type="button"
                    className="width"
                    value="2"
                    onClick={(e) => {
                      props.onNumberPressed(e.target.value);
                    }}
                  />
                </td>
                <td>
                  <input
                    type="button"
                    className="width"
                    value="3"
                    onClick={(e) => {
                      props.onNumberPressed(e.target.value);
                    }}
                  />
                </td>
                <td>
                  <input
                    type="button"
                    className="width"
                    value="+"
                    onClick={(e) => {
                      props.onOperatorPressed(e.target.value);
                    }}
                  />
                </td>
              </tr>

              <tr>
                <td>
                  <input
                    type="button"
                    className="width"
                    value="4"
                    onClick={(e) => {
                      props.onNumberPressed(e.target.value);
                    }}
                  />
                </td>
                <td>
                  <input
                    type="button"
                    className="width"
                    value="5"
                    onClick={(e) => {
                      props.onNumberPressed(e.target.value);
                    }}
                  />
                </td>
                <td>
                  <input
                    type="button"
                    className="width"
                    value="6"
                    onClick={(e) => {
                      props.onNumberPressed(e.target.value);
                    }}
                  />
                </td>
                <td>
                  <input
                    type="button"
                    className="width"
                    value="-"
                    onClick={(e) => {
                      props.onOperatorPressed(e.target.value);
                    }}
                  />
                </td>
              </tr>

              <tr>
                <td>
                  <input
                    type="button"
                    className="width"
                    value="7"
                    onClick={(e) => {
                      props.onNumberPressed(e.target.value);
                    }}
                  />
                </td>
                <td>
                  <input
                    type="button"
                    className="width"
                    value="8"
                    onClick={(e) => {
                      props.onNumberPressed(e.target.value);
                    }}
                  />
                </td>
                <td>
                  <input
                    type="button"
                    className="width"
                    value="9"
                    onClick={(e) => {
                      props.onNumberPressed(e.target.value);
                    }}
                  />
                </td>
                <td>
                  <input
                    type="button"
                    className="width"
                    value="*"
                    onClick={(e) => {
                      props.onOperatorPressed(e.target.value);
                    }}
                  />
                </td>
              </tr>

              <td>
                <input
                  type="button"
                  className="width"
                  value="C"
                  onClick={(e) => {
                    props.onClearPressed();
                  }}
                />
              </td>
              <td>
                <input
                  type="button"
                  className="width"
                  value="0"
                  onClick={(e) => {
                    props.onNumberPressed(e.target.value);
                  }}
                />
              </td>
              <td>
                <input
                  type="button"
                  className="width"
                  value="."
                  onClick={(e) => {
                    props.onNumberPressed(e.target.value);
                  }}
                />
              </td>
              <td>
                <input
                  type="button"
                  className="width"
                  value="/"
                  onClick={(e) => {
                    props.onOperatorPressed(e.target.value);
                  }}
                />
              </td>

              <tr></tr>
            </tbody>
          </table>
        </React.Fragment>
     
    );
}