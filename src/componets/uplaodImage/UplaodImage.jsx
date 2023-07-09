import { Upload } from "antd";
import React from "react";

const UplaodImage = ({ fileList2, setFileList2 }) => {
  const onChange2 = ({ fileList: newFileList }) => {
    setFileList2(newFileList);
  };

  const onPreview2 = async (file) => {
    let src = file?.url;
    if (!src) {
      src = await new Promise((resolve) => {
        const reader = new FileReader();
        reader.readAsDataURL(file?.originFileObj);
        reader.onload = () => resolve(reader.result);
      });
    }
    const image = new Image();
    image.src = src;
    const imgWindow = window?.open(src);
    imgWindow?.document.write(image.outerHTML);
  };
  return (
    <div>
      <Upload
        listType="picture"
        fileList={fileList2}
        onChange={onChange2}
        onPreview={onPreview2}
        // className={error.image2 ? "image-upload" : ""}
        accept="image/png, image/jpeg,image/jpg ,image/webp,image/svg"
      >
        {fileList2?.length < 1 && "+ Upload Image"}
      </Upload>
    </div>
  );
};

export default UplaodImage;
