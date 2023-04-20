import React from "react";
import AnyIcon from "../svg/kesiflerim.svg";
import ServiceWidget from "./serviceWidget/ServiceWidget";

function Widgets({ myJobs }) {
  const mostFrequent = (arr) =>
    Object.entries(
      arr.reduce((a, v) => {
        a[v] = a[v] ? a[v] + 1 : 1;
        return a;
      }, {})
    ).reduce((a, v) => (v[1] >= a[1] ? v : a), [null, 0])[0];
  const List = [
    { id: "01", label: "Tüm Keşiflerim", data: myJobs?.length, svg: AnyIcon },
    {
      id: "02",
      label: "Teklif Gelen Toplam",
      data: myJobs?.map((i) => i.Offers.length).reduce((b, a) => a + b, 0),
      svg: AnyIcon,
    },
    {
      id: "03",
      label: "Favori Kategori",
      data: mostFrequent(myJobs.map((i) => i.mainWish)),
      svg: AnyIcon,
    },
    {
      id: "04",
      label: "Favori Firmam",
      data: mostFrequent(myJobs.map((i) => i.Offers?.map((j) => j.firmName))),
      svg: AnyIcon,
    },
  ];

  return (
    <div className="widgets-container">
      {List.map((i) => {
        return <ServiceWidget key={i.id} item={i} />;
      })}
    </div>
  );
}

export default Widgets;
