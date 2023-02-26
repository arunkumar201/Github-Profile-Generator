import React from "react";
import "./githubSingleUser.css";
const GitProfileRender = ({ UsersData }) => {
  return (
    <>
      <div className="user-card">
        <div className="avatar">
          <img src={UsersData.avatar_url} alt="avatar" className="avatar-img" />
        </div>
        <p className="username">{UsersData.login}</p>
        <div className="info">
          <p>
            <a href={UsersData.html_url} target="_blank">
              MY Profile
            </a>
          </p>
          <p>Work For-{UsersData.company}</p>
          <p>
            <a href={UsersData.blog} target="_blank">
              See My Blog
            </a>
          </p>
          <p>{UsersData.email}</p>
          <p
            style={{
              width: "22rem",
              textOverflow: "hidden",
              whiteSpace: "pre-line",
              overflow: 'hidden',
              textOverflow:'clip'
            }}
          >
            {UsersData.bio}
          </p>
          <p>
            <a
              href={`https://twitter.com/${UsersData.twitter_username}`}
              target="_blank"
            >
              @MyTwitter{UsersData.twitter_username}
            </a>
          </p>
        </div>
           {/* <span>Address {UsersData.location}</span> */}
        <div className="stats">
          <p>Repos: {UsersData.public_repos}</p>
          <p>Following: {UsersData.following}</p>
          <p>Followers: {UsersData.followers}</p>
        </div>
        <p className="create-update">Created at:{UsersData.created_at}</p>
        <p className="create-update">Updated at: {UsersData.updated_at}</p>
      </div>
    </>
  );
};

export default GitProfileRender;
