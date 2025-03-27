import { useState } from "react";
import data from "./data";

function Accordian() {
  const [selected, setSelectes] = useState(null);
  const [enableMulti, setEnableMulti] = useState(false);
  const [multi, setMulti] = useState([]);

  function handleSingle(currentId) {
    setSelectes(currentId === selected ? null : currentId);
  }
  function handleMulti(currentId) {
    let cpyMulti = [...multi];
    const indexOfCurrentId = cpyMulti.indexOf(currentId);
    if (indexOfCurrentId === -1) cpyMulti.push(currentId);
    else cpyMulti.splice(indexOfCurrentId, 1);
    setMulti(cpyMulti);
  }
  return (
    <div className="wrapper">
      <button onClick={() => setEnableMulti(!enableMulti)}>Enable Multi</button>
      <div className="accordian">
        {data && data.length > 0 ? (
          data.map((dataItem) => (
            <div>
              <div
                onClick={() =>
                  enableMulti
                    ? handleMulti(dataItem.id)
                    : handleSingle(dataItem.id)
                }
              >
                {dataItem.question}
              </div>
              <span>+</span>
              <div>
                {enableMulti ? (
                  multi.indexOf(dataItem.id) !== -1 && (
                    <div>{dataItem.answer}</div>
                  )
                ) : selected === dataItem.id ? (
                  <div>{dataItem.answer}</div>
                ) : null}
              </div>
            </div>
          ))
        ) : (
          <div>Data not Found</div>
        )}
      </div>
    </div>
  );
}

export default Accordian;
