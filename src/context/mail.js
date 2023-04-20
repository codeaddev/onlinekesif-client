import base64 from "base-64";
export function sendMail(name, email, subject, message) {
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  myHeaders.set(
    "Authorization",
    "Basic " +
      base64.encode(
        "5a7e7ea76a98668cb3aea88d716298a7" +
          ":" +
          "12e4b7c1a5875266ac264d3e0181589e"
      )
  );

  const data = JSON.stringify({
    Messages: [
      {
        From: {
          Email: "onlinekesif.com@gmail.com",
          Name: "Online Keşif Destek Ekibi",
        },
        To: [{ Email: email, Name: name }],
        Subject: subject,
        TextPart: message,
      },
    ],
  });

  const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: data,
  };

  fetch("https://api.mailjet.com/v3.1/send", requestOptions)
    .then((response) => response.text())
    .then((result) => console.log(result))
    .catch((error) => console.log("error", error));
}
// import Mailjet from "node-mailjet"
// export const sendMail=()=>{
//     Mailjet.apiConnect(
//         "5a7e7ea76a98668cb3aea88d716298a7",
//         "12e4b7c1a5875266ac264d3e0181589e"
//       )
//       const request = Mailjet.Request("send",{
//         FromEmail: 'onlinekesif.com@gmail.com',
//         FromName: 'Mailjet Pilot',
//         Subject: 'Your email flight plan!',
//         'Text-part':
//           'Dear passenger, welcome to Mailjet! May the delivery force be with you!',
//         'Html-part':
//           '<h3>Dear passenger, welcome to <a href="https://www.mailjet.com/">Mailjet</a>!<br />May the delivery force be with you!',
//         Recipients: [{ Email: 'farukkeskinsoy88@gmail.com' }],
//       })
//       request
//         .then(result => {
//           console.log(result.body)
//         })
//         .catch(err => {
//           console.log(err.statusCode)
//         })
// }
