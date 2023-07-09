import React, { useEffect } from "react";
import "./styles.scss";
import { useDispatch, useSelector } from "react-redux";
import { dashboard } from "../../redux/action/dashboard";
import { dashboardTodos, newUserTodos } from "../../redux/selector/Selector";
import { Link } from "react-router-dom";
import { Button } from "antd";
import { newUserAction } from "../../redux/action/newUser";
import { all_User } from "../../routes/pagesRoutes";
const Dashboard = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(dashboard());
    dispatch(newUserAction());
  }, []);
  const data = useSelector(dashboardTodos);
  const dashboardData = data?.data?.data;
  const andarusers = data?.data?.andarusers;
  const baharusers = data?.data?.baharusers;
  const crossusers = data?.data?.crossusers;
  const jodiusers = data?.data?.jodiusers;
  const newUserData = useSelector(newUserTodos);
  const allUser = newUserData?.data?.AllUsers;
  const NewUsers = newUserData?.data?.NewUsers;
  return (
    <div>
      <div className="main">
        <h1
          style={{
            paddingInline: "30px",
            fontSize: "24px",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          DASHBOARD
          <span style={{ display: "flex", gap: "10px" }}>
            <Link to={all_User}>
              <Button
                className="button-17"
                style={{ width: "180px", fontWeight: "800" }}
              >
                Total User:
                <span style={{ paddingLeft: "10px" }}>{allUser}</span>
              </Button>
            </Link>
            <Link to={all_User}>
              <Button
                className="button-17"
                style={{ width: "180px", fontWeight: "800" }}
              >
                New User:
                <span style={{ paddingLeft: "10px" }}> {NewUsers}</span>
              </Button>
            </Link>
          </span>
        </h1>
        <div className="container">
          <div className="card-item">
            
            {dashboardData?.map((curElm, index) => {
              return (
                <Link to={`/market-analysis-details-c/${curElm?.id}`}>
                  <div
                    className="card_content"
                    style={{
                      background:
                        baharusers[index] > 0 ||
                        andarusers[index] > 0 ||
                        crossusers[index] > 0 ||
                        jodiusers[index] > 0
                          ? "#a8e6a8"
                          : "#fff",
                    }}
                  >
                    <p className="heading-card">{curElm.name}</p>
                    <p>
                      Andar Users: {andarusers[index]}{" "}
                      <span> Bahar Users: {baharusers[index]}</span>
                    </p>

                    <p>
                      Cross Users: {crossusers[index]}{" "}
                      <span>Jodi Users: {jodiusers[index]}</span>
                    </p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
