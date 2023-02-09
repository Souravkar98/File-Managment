import { useState } from "react";

const Folder = ({ data }) => {
  const [show, setShow] = useState(false);

  if (data.isFolder) {
    return (
      <div>
        <div onClick={() => setShow(!show)}>
          <span>🗂️{data.name}</span>
        </div>
        <div style={{ display: show ? "block" : "none" }}>
          {data.items.map((e) => {
            return <Folder data={e} />;
          })}
        </div>
      </div>
    );
  } else {
    return <span>📁{data.name}</span>;
  }
};
export default Folder;
