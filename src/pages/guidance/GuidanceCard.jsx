import React from "react";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

const GuidanceCard = ({ item, selected, setSelected }) => {
  return (
    <div className="guidanceCard">
      <div className="questionArea">
        <div
          onClick={() => setSelected((pre) => (pre === item.id ? "" : item.id))}
          className="question"
        >
          {item.q}
        </div>
        <div className="accoridon">
          {selected === item.id ? (
            <RemoveIcon
              onClick={() =>
                setSelected((pre) => (pre === item.id ? "" : item.id))
              }
            />
          ) : (
            <AddIcon
              onClick={() =>
                setSelected((pre) => (pre === item.id ? "" : item.id))
              }
            />
          )}
        </div>
      </div>
      <div className={`answerArea ${selected === item.id ? "open" : "hide"}`}>
        {selected === item.id && (
          <>
            {item.a.map((g) => {
              return (
                <>
                  {g.p && (
                    <div className="paragraph">
                      {g.p.map((i, index) => {
                        return <p key={index}>{i}</p>;
                      })}
                    </div>
                  )}
                  {g.li && (
                    <ul className="paragraph">
                      {g.li.map((i, index) => {
                        return <li key={index}>{i}</li>;
                      })}
                    </ul>
                  )}
                  {g.table && (
                    <table>
                      <thead>
                        {g.table.head.map((h) => {
                          return <th>{h}</th>;
                        })}
                      </thead>
                      <tbody>
                        {g.table.data.map((r) => {
                          return (
                            <tr>
                              {r.td.map((d) => {
                                return <td>{d}</td>;
                              })}
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  )}
                </>
              );
            })}
          </>
        )}
      </div>
    </div>
  );
};

export default GuidanceCard;
