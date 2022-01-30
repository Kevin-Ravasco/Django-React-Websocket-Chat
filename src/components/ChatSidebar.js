import React, { useEffect, useState } from "react";
import { axiosInstance } from "../utils/axios";

export default function ChatSidebar() {
  const [people, setPeople] = useState([]);
  const getPeople = () => {
    axiosInstance
      .get("accounts/people")
      .then((response) => {
        setPeople(response.data);
      })
      .catch((error) => {
        console.log("error fetching people");
      });
  };

  useEffect(() => {
    getPeople();
  }, []);

  return (
    <div id="plist" className="people-list">
      <div className="input-group">
        <div className="input-group-prepend">
          <span className="input-group-text">
            <i className="fa fa-search"></i>
          </span>
        </div>
        <input type="text" className="form-control" placeholder="Search..." />
      </div>
      <ul className="list-unstyled chat-list scroll-container mt-2 mb-0">
        {people.map((person) => {
          const { name, image, status } = person;
          return (
            <li className="clearfix">
              <img
                src={
                  image
                    ? image
                    : '"https://bootdey.com/img/Content/avatar/avatar1.png"'
                }
                alt="avatar"
              />

              <div className="about">
                <div className="name mt-1">{name}</div>
                <div className="status">{status}</div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
