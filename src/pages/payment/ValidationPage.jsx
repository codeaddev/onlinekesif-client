import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
const ValidationPage = () => {
  const { id } = useParams();

  const [returnMessage, setReturnMessage] = useState("");
  useEffect(() => {
    if (id) {
      var data = JSON.stringify({
        MERCHANT: "onlinekesif.com",
        MERCHANT_KEY:
          "S7i1ax6Rg2GPZTpcR6Nv2XXQJIHoQYyXNGnpXWH7n013xo2VM2LDYg==",
        ORDER_REF_NUMBER: id,
      });

      var config = {
        method: "post",
        maxBodyLength: Infinity,
        //url: 'https://posservice.esnekpos.com/api/services/ProcessQuery',
        headers: {
          "Content-Type": "application/json",
        },
        data: data,
      };

      axios("/ProcessQuery", config)
        .then(function (response) {
          setReturnMessage(JSON.stringify(response.data.RETURN_MESSAGE));
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  }, []);
  return (
    <div style={{ height: 200 }}>
      ValidationPage for {id}
      <p>{returnMessage.split("<")[0].replace('"', "")}</p>
    </div>
  );
};

export default ValidationPage;
