import React, { useState } from "react";
import TextAreaComponent from "../../componets/textAreaComponent/TextAreaComponent";
import "./styles.scss";
import { Button } from "antd";
import UplaodImage from "../../componets/uplaodImage/UplaodImage";
import { useDispatch } from "react-redux";
import { addContentAction } from "../../redux/action/addContentAction/AddContentAction";
const AddContent = () => {
  const [fileList2, setFileList2] = useState([]);
  const [textValue, setTextValue] = useState();
  const dispatch = useDispatch();
  // const updateResult = useSelector(updateResultTodos);

  let formData = new FormData();
  formData.append("back", fileList2[0]?.originFileObj);
  formData.append("cont", textValue);
  const handleClick = () => {
    dispatch(addContentAction(formData));
  };
  return (
    <div className="add-content-container">
      <div className="add-content-heading">
        <h3>Add Content</h3>
        <div className="right-submit-col">
          <Button>
            <UplaodImage setFileList2={setFileList2} fileList2={fileList2} />
          </Button>
          <Button onClick={handleClick}>Submit</Button>
        </div>
      </div>
      <TextAreaComponent setTextValue={setTextValue} textValue={textValue} />
    </div>
  );
};

export default AddContent;
