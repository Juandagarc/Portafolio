import React, { useState, useEffect } from "react";
import "./github-card.css";

interface UserInfo {
  login: string;
  name: string;
  bio: string;
  avatar_url: string;
  followers: number;
  following: number;
  public_repos: number;
  repos?: Repo[];
}

interface Repo {
  id: number;
  name: string;
  html_url: string;
}

const API_URL = "https://api.github.com/users/";
const USERNAME = "Juandagarc"; // Change this to the desired username

const GitHubCard: React.FC = () => {
  const [userInfo, setUserInfo] = useState<UserInfo | null>(null);
  const [error, setError] = useState<string | null>(null);

  const getUser = async (username: string) => {
    try {
      const response = await fetch(API_URL + username);
      const data = await response.json();
      setUserInfo(data);
      getRepos(username);
    } catch (error) {
      setError("No profile with this Username");
    }
  };

  const getRepos = async (username: string) => {
    try {
      const response = await fetch(API_URL + username + "/repos");
      const data: Repo[] = await response.json(); // Specify the type as Repo[]
      setUserInfo((prevUserInfo) => ({
        ...prevUserInfo,
        repos: data,
        login: prevUserInfo?.login ?? "",
        name: prevUserInfo?.name ?? "",
        bio: prevUserInfo?.bio ?? "",
        avatar_url: prevUserInfo?.avatar_url ?? "",
        followers: prevUserInfo?.followers ?? 0,
        following: prevUserInfo?.following ?? 0,
        public_repos: prevUserInfo?.public_repos ?? 0,
      }));
    } catch (error) {
      setError("No profile with this Username");
    }
  };

  useEffect(() => {
    getUser(USERNAME);
  }, []);

  const createErrorCard = (msg: string) => {
    return (
      <div className="card">
        <h1>{msg}</h1>
      </div>
    );
  };

  return (
    <div>
      {error && createErrorCard(error)}
      {userInfo && (
        <div className="card">
          <div>
            <img src={userInfo.avatar_url} alt="image" className="avatar" />
            <h2 >{userInfo.login}</h2>
          </div>
          <div className="user-info">
            <h2 className="user-name">{userInfo.name}</h2>
            <p>{userInfo.bio}</p>
            <ul className="info">
              <li>
                {userInfo.followers}
                <strong>Followers</strong>
              </li>
              <li>
                {userInfo.following}
                <strong>Following</strong>
              </li>
              <li>
                {userInfo.public_repos}
                <strong>Repos</strong>
              </li>
            </ul>
            <div id="repo">
              {userInfo.repos &&
                userInfo.repos.map((item) => (
                  <a
                    key={item.id}
                    className="repo"
                    href={item.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {item.name}
                  </a>
                ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GitHubCard;
