import React, { useEffect } from "react";
import { Navigate, useLocation } from "react-router-dom";
import ChatBubble from "../components/ChatBubble";
import ChatSidebar from "../components/ChatSidebar";
import { axiosInstance } from "../utils/axios";

export default function ChatPage() {
  const logoutUser = () => {
    const refreshToken = localStorage.getItem("refresh_token");
    axiosInstance
      .post("accounts/logout/", { refresh_token: refreshToken })
      .then(() => {
        localStorage.removeItem("access_token");
        localStorage.removeItem("refresh_token");
        window.location.href = "/login";
      });
  };

  const access_token = localStorage.getItem("access_token");

  useEffect(() => {
    if (!access_token) {
      window.location.href = "/login";
    }
  }, [access_token]);

  return (
    <div className="container mt-2">
      <div className="row clearfix">
        <div className="col-lg-12">
          <div className="card chat-app">
            <ChatSidebar />
            <div className="chat">
              <div className="chat-header clearfix">
                <div className="row">
                  <div className="col-lg-6">
                    <a
                      href="javascript:void(0);"
                      data-toggle="modal"
                      data-target="#view_info"
                    >
                      <img
                        src="https://bootdey.com/img/Content/avatar/avatar2.png"
                        alt="avatar"
                      />
                    </a>
                    <div className="chat-about">
                      <h6 className="m-b-0 contact-name">Aiden Chavez</h6>
                      <small>Last seen: 2 hours ago</small>
                    </div>
                  </div>
                  <div className="col-lg-6 hidden-sm text-right">
                    <button
                      className="btn btn-outline-secondary"
                      onClick={logoutUser}
                    >
                      Log out <i className="fa fa-sign-out"></i>
                    </button>
                  </div>
                </div>
              </div>
              <div className="chat-history scroll-container">
                <ul className="m-b-0">
                  <ChatBubble
                    time="10:00 am Today"
                    message="Hi Aiden..."
                    sender="other"
                  />
                  <ChatBubble
                    time="10:00 am Today"
                    message="Hi too"
                    sender="me"
                  />
                </ul>
              </div>
              <div className="chat-message clearfix">
                <div className="input-group chat-input mb-0">
                  <div className="input-group-prepend">
                    <span className="input-group-text">
                      <i className="fa fa-send"></i>
                    </span>
                  </div>
                  <textarea
                    type="text"
                    className="form-control"
                    placeholder="Enter text here..."
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
