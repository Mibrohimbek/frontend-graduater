import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

const Profile = () => {
  const { userId } = useParams();
  const [profile, setProfile] = useState([]);
  const [repos, setRepos] = useState([]);

  async function createProfile() {
    try {
      let { data } = await axios.get(`/profile/user/${userId}`);
      setProfile(data);
    } catch (error) {
      console.log(error);
    }
  }
  createProfile();

  async function getGithub() {
    try {
      let { data } = await axios.get(
        `/profile/github/${profile.githubusername}`
      );
      setRepos(data);
    } catch (error) {
      console.log(error);
    }
  }
  getGithub();

  return (
    <div className="container mb-5">
      {profile.length === 0 ? (
        <div className="d-flex">
          <div className="loader ms-auto me-auto"></div>
        </div>
      ) : (
        <>
          <Link
            to="/profiles"
            style={{ backgroundColor: "#f3f3f3" }}
            className="text-decoration-none text-dark d-inline-block my-4 px-3 py-2"
          >
            Back to Profiles
          </Link>
          <div className="text-center user-main-info pt-5">
            <img style={{ borderRadius: "50%" }} src={profile?.user?.avatar} />
            <h1 className="text-light display-5 mt-4 fw-bold">
              {profile?.user?.name}
            </h1>
            <h4
              style={{ fontSize: "30px" }}
              className="text-light fw-normal mt-4"
            >
              {profile.status} at {profile.company}
            </h4>
          </div>
          <div className="mt-4 text-center user-bio">
            <h4>{profile?.user?.name}s bio</h4>
            <p className="mb-4 mt-3">{profile.bio}</p>
            <hr />
            <h4 className="mt-4">Skill Set</h4>
            <div className="d-flex justify-content-center gap-5 mt-4">
              {profile?.skills?.map((skill, index) => (
                <p key={index}>&#x2713;{skill}</p>
              ))}
            </div>
          </div>

          <div className="edu-exp d-flex gap-4 mt-3">
            <div className="edu p-4 col">
              <h4>Experience</h4>
              {profile?.experience?.length === 0 ? (
                <h6 className="mt-4 mb-0">No experience credentials</h6>
              ) : (
                <>
                  <h5 className="mt-4 mb-3">
                    <strong>{profile?.experience[0]?.company}</strong>
                  </h5>
                  {profile?.experience[0]?.current === true ? (
                    <p> {profile?.experience[0]?.from} - Now</p>
                  ) : (
                    <p>
                      {profile?.experience[0]?.from} -
                      {profile?.experience[0]?.to}
                    </p>
                  )}
                  <p>
                    <strong>Postion: </strong>
                    {profile?.experience[0]?.title}
                  </p>
                  <p>
                    <strong>Location: </strong>
                    {profile?.experience[0]?.location}
                  </p>
                  <p>
                    <strong>Description: </strong>
                    {profile?.experience[0]?.description}
                  </p>
                </>
              )}
            </div>

            <div className="exp p-4 col">
              <h4>Education</h4>
              {profile?.education?.length === 0 ? (
                <h6 className="mt-4 mb-2">No education credentials</h6>
              ) : (
                <>
                  <h5 className="mt-4 mb-3">
                    <strong>{profile?.education[0]?.school}</strong>
                  </h5>
                  {profile?.education[0]?.current === true ? (
                    <p> {profile?.education[0]?.from} - Now</p>
                  ) : (
                    <p>
                      {profile?.education[0]?.from} -{profile?.education[0]?.to}
                    </p>
                  )}
                  <p>
                    <strong>Degree: </strong>
                    {profile?.education[0]?.degree}
                  </p>
                  <p>
                    <strong>Field Of Study: </strong>
                    {profile?.education[0]?.fieldofstudy}
                  </p>
                  <p>
                    <strong>Description: </strong>
                    {profile?.education[0]?.description}
                  </p>
                </>
              )}
            </div>
          </div>

          {repos.length === 0 ? (
            ""
          ) : (
            <div className="github col mt-5">
              <h4>Github Repos</h4>
              {repos?.map((repo, index) => (
                <div
                  key={index}
                  className="d-flex justify-content-between border px-4 py-3 mt-3 pb-0"
                >
                  <div>
                    <Link
                      target={"_blank"}
                      to={repo?.clone_url}
                      className="text-decoration-none repo-name"
                    >
                      {repo?.name}
                    </Link>
                  </div>
                  <div className="d-flex align-items-center flex-column">
                    <p className="repo-stars text-light px-2 py-1">
                      Stars: {repo?.stargazers_count}
                    </p>
                    <p className="bg-dark text-light px-2 py-1">
                      Watchers: {repo?.watchers}
                    </p>
                    <p className="repo-forks px-2 py-1 ">
                      Forks: {repo?.forks}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Profile;
