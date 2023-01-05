import React from "react";
// import { MDBCol, MDBContainer, MDBRow, MDBCard, MDBCardText, MDBCardBody, MDBCardImage, MDBBtn, MDBTypography } from 'mdb-react-ui-kit';
import tom from "../assets/SexyTom.png";

export default function Profile() {
  return (
    <div class="profile-wrapper">
      <div class="profile-header">
        <img src={tom} width="60" height="60" class="avatar" />
        <div class="profile-info">
          <h1 class="display-name">Thomas Hart</h1>
        </div>
        <div class="profile-stats">
          <div class="profile-stat">
            <strong id="followingCount">243</strong>
            <span>Following</span>
          </div>
          <div class="profile-stat">
            <strong id="followerCount">4</strong>
            <span>Followers</span>
          </div>
          <div class="profile-stat">
            <strong id="likeCount">3</strong>
            <span>Likes</span>
          </div>
        </div>
        <div class="profile-controls">
          <div class="stacked-button">
            <button class="follow" id="following">
              <span class="follow-text">Follow</span>
              <span class="following-text">Following</span>
              <span class="unfollow-text">
                <svg
                  viewBox="0 0 352 512"
                  width="12"
                  fill="white"
                  title="times"
                >
                  <path d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z" />
                </svg>
                Unfollow
              </span>
            </button>
            <button class="follow-ext">
              <svg
                viewBox="0 0 320 512"
                width="10"
                title="caret-down"
                fill="#424242"
              >
                <path d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z" />
              </svg>
            </button>
          </div>
          <div class="follow-ext-menu-wrapper">
            <div class="follow-ext-menu">
              <div class="follow-ext-menu-inner">
                <button class="follow-ext-menu-item">
                  <svg
                    viewBox="0 0 512 512"
                    fill="#424242"
                    width="16"
                    title="share"
                  >
                    <path d="M503.691 189.836L327.687 37.851C312.281 24.546 288 35.347 288 56.015v80.053C127.371 137.907 0 170.1 0 322.326c0 61.441 39.581 122.309 83.333 154.132 13.653 9.931 33.111-2.533 28.077-18.631C66.066 312.814 132.917 274.316 288 272.085V360c0 20.7 24.3 31.453 39.687 18.164l176.004-152c11.071-9.562 11.086-26.753 0-36.328z" />
                  </svg>
                  Share
                </button>
                <button class="follow-ext-menu-item">
                  <svg
                    viewBox="0 0 640 512"
                    fill="#424242"
                    width="16"
                    title="user-slash"
                  >
                    <path d="M633.8 458.1L362.3 248.3C412.1 230.7 448 183.8 448 128 448 57.3 390.7 0 320 0c-67.1 0-121.5 51.8-126.9 117.4L45.5 3.4C38.5-2 28.5-.8 23 6.2L3.4 31.4c-5.4 7-4.2 17 2.8 22.4l588.4 454.7c7 5.4 17 4.2 22.5-2.8l19.6-25.3c5.4-6.8 4.1-16.9-2.9-22.3zM96 422.4V464c0 26.5 21.5 48 48 48h350.2L207.4 290.3C144.2 301.3 96 356 96 422.4z" />
                  </svg>
                  Report
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="profile-body">
        <div className="first-photos">
          <img
            src="https://images.unsplash.com/photo-1638628281370-2d2b76686a4f?crop=entropy&cs=srgb&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY0MDM4NTAwMQ&ixlib=rb-1.2.1&q=85"
            width="110"
          />
          <img
            src="https://images.unsplash.com/photo-1635110060340-097353a501c6?crop=entropy&cs=srgb&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY0MDM4NTEwMQ&ixlib=rb-1.2.1&q=85"
            width="110"
          />
          <img
            src="https://images.unsplash.com/photo-1639891906817-a24d436359bb?crop=entropy&cs=srgb&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY0MDM4NTAwMQ&ixlib=rb-1.2.1&q=85"
            width="110"
          />
          <img
            src="https://images.unsplash.com/photo-1639433506654-51d94fd9899e?crop=entropy&cs=srgb&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY0MDM4NTE1Nw&ixlib=rb-1.2.1&q=85"
            width="110"
          />
          <img
            src="https://images.unsplash.com/photo-1637781127773-5ce8c6d7638b?crop=entropy&cs=srgb&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY0MDM4NTUzMg&ixlib=rb-1.2.1&q=85"
            width="110"
          />
          <img
            src="https://images.unsplash.com/photo-1639230464573-a1bae9ff0996?crop=entropy&cs=srgb&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY0MDM4NTYyNg&ixlib=rb-1.2.1&q=85"
            width="110"
          />
          <img
            src="https://images.unsplash.com/photo-1638628281370-2d2b76686a4f?crop=entropy&cs=srgb&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY0MDM4NTAwMQ&ixlib=rb-1.2.1&q=85"
            width="110"
          />
          <img
            src="https://images.unsplash.com/photo-1635110060340-097353a501c6?crop=entropy&cs=srgb&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY0MDM4NTEwMQ&ixlib=rb-1.2.1&q=85"
            width="110"
          />
          <img
            src="https://images.unsplash.com/photo-1639891906817-a24d436359bb?crop=entropy&cs=srgb&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY0MDM4NTAwMQ&ixlib=rb-1.2.1&q=85"
            width="110"
          />
          <img
            src="https://images.unsplash.com/photo-1639433506654-51d94fd9899e?crop=entropy&cs=srgb&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY0MDM4NTE1Nw&ixlib=rb-1.2.1&q=85"
            width="110"
          />
          <img
            src="https://images.unsplash.com/photo-1637781127773-5ce8c6d7638b?crop=entropy&cs=srgb&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY0MDM4NTUzMg&ixlib=rb-1.2.1&q=85"
            width="110"
          />
          <img
            src="https://images.unsplash.com/photo-1639230464573-a1bae9ff0996?crop=entropy&cs=srgb&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY0MDM4NTYyNg&ixlib=rb-1.2.1&q=85"
            width="110"
          />
        </div>
      </div>
    </div>
  );
}
