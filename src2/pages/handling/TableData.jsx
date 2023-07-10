import { Button } from "antd";
import React, { useState } from "react";
import ModalComponent from "../../componets/modal/ModalComponent";
import AreYourSure from "../../componets/areSureComponent";
import { useDispatch } from "react-redux";
import { deleteHandlingAction } from "../../redux/action/deteleHandling";
export let handlingCancelModal;
const TableData = ({ data, curElm }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [typeId, setTypeId] = useState({});
  const showModal = (id) => {
    setTypeId(id);
    setIsModalOpen(true);
  };
  const dispatch = useDispatch();
  const deleteList = () => {
    dispatch(deleteHandlingAction(typeId));
  };
  const handling = {
    commission: 3,
    Handling: 1,
    Month_Subscription: 2,
    Year_Subscription: 2,
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  handlingCancelModal = handleCancel;
  return (
    <>
      <ModalComponent
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        compo={<AreYourSure fun={deleteList} name="Delete Handling" />}
      />
      <table className="handling-table">
        <tr>
          <th>Title</th>
          <th>value</th>
          <th>Action</th>
        </tr>
        {data?.map((curElmValue) => {
          return (
            <tr>
              <td>{curElm}</td>
              <td>{curElmValue?.Value}</td>
              <td>
                <Button
                  style={{
                    background: "#5ea6f7",
                    border: "none",
                    color: "white",
                  }}
                  onClick={() =>
                    showModal({
                      typeid: handling[curElm],
                      id: curElmValue.id,
                    })
                  }
                >
                  Delete
                </Button>
              </td>
            </tr>
          );
        })}
      </table>
    </>
  );
};

export default TableData;
