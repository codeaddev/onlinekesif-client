import React, { useRef, useEffect, useContext } from "react";
import { auth } from "../../firebase/firebase.config";
import InComeBox from "../data/boxes/InComeBox";
import SentBox from "../data/boxes/SentBox";
import Moment from "react-moment";
import { AuthenticationContext } from "../../context/authentication";

function Message({ message }) {
  const { user } = useContext(AuthenticationContext);
  const isMe = (item) => {
    return user ? item.from === auth.currentUser.uid : item.from === "Anonim";
  };
  const scrollRef = useRef();

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [message]);
  return (
    <div className={isMe(message) ? "isent" : "incoming"} ref={scrollRef}>
      {message.active ? (
        <>
          {isMe(message) ? (
            <SentBox>
              {message.media ? (
                <img
                  className={`image ${isMe(message) ? "fromme" : "fromadmin"}`}
                  src={message.media}
                  alt=""
                />
              ) : null}
              <p>{message.text}</p>
              <br />
              <small>
                <Moment fromNow>{message.createdAt.toDate()}</Moment>
              </small>
            </SentBox>
          ) : (
            <InComeBox>
              {message.media ? (
                <a href={message.media} target="_blank">
                  <img
                    className={`image ${
                      isMe(message) ? "fromme" : "fromadmin"
                    }`}
                    src={message.media}
                    alt=""
                  />
                </a>
              ) : null}
              <p>{message.text}</p>
              <br />
              <small>
                <Moment fromNow>{message.createdAt.toDate()}</Moment>
              </small>
            </InComeBox>
          )}
        </>
      ) : (
        <div className="end-of-conv">
          görüşme sona erdi
          <small>
            {new Date(message.createdAt.seconds * 1000).toLocaleString()}
          </small>
        </div>
      )}
    </div>
  );
}

export default Message;
