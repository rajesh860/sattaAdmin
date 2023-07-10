import { Empty } from "antd";
import React from "react";

const MonthResultRow = ({ data }) => {
  if (data) {
    return (
      <>
        {Object?.keys(data)?.map((objkey, index) => {
          return (
            <React.Fragment key={objkey + index}>
              <div className="row-conatiner">
                <div className="left-col-row">{objkey}</div>
                <div className="right-col-row">
                  <table className="table-component">
                    <tr>
                      {data[objkey]?.map(function (item) {
                        return (
                          <React.Fragment key={item.rupees + item.number}>
                            <td>
                              <p>{item.rupees}</p>
                              <p>{item.number}</p>
                            </td>
                          </React.Fragment>
                        );
                      })}
                    </tr>
                  </table>
                </div>
              </div>
              <hr />
            </React.Fragment>
          );
        })}
      </>
    );
  } else {
    return (
      <>
        <Empty />
      </>
    );
  }
};

export default MonthResultRow;
