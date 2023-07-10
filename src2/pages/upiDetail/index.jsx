import { Button, Checkbox, Table } from "antd";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { upiListAction } from "../../redux/action/upiDetail";
import { upiListTodos } from "../../redux/selector/Selector";
import { updateUpiStatusAction } from "../../redux/action/updateUpiStatus";

const UpiDetail = () => {
  const data = useSelector(upiListTodos);
  const upiList = data?.data?.data;

  const user = localStorage.getItem("email");
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(upiListAction({ user }));
  }, []);
  const handleChange = (id) => {
    dispatch(
      updateUpiStatusAction({
        user: localStorage.getItem("email"),
        id: id.id,
        upd: id.upd,
      })
    );
  };
  const dataSource = upiList?.map((curElm) => {
    return {
      key: curElm.VPA + curElm.Name + curElm.User + curElm.Marchant_ID,
      name: curElm.Name,
      VPA: curElm.VPA,
      Action: (
        <div style={{ display: "flex", alignItems: "center", gap: "80px" }}>
          <Checkbox
            checked={curElm.status == 1 ? true : false}
            onClick={() => handleChange({ id: curElm.id, upd: 0 })}
          />
          <Button
            onClick={() => handleChange({ id: curElm.id, upd: 1 })}
            style={{ background: "red", color: "white", border: "none" }}
          >
            Delete
          </Button>
        </div>
      ),
    };
  });

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "VPA",
      dataIndex: "VPA",
      key: "VPA",
    },
    {
      title: "Action",
      dataIndex: "Action",
      key: "Action",
    },
  ];

  return (
    <div className="update-result-container">
      <h1 style={{ paddingLeft: "10px", fontSize: "22px", marginTop: "0px" }}>
        All UPI
      </h1>
      <Table dataSource={dataSource} columns={columns} />
    </div>
  );
};

export default UpiDetail;
