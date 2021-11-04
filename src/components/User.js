import React from "react";

export default function User({ userdata }) {


  return (
    <div className="user">
      <div className="image">
        <img src={userdata.avatar_url} alt="" width="230" />
      </div>

      <div>
        <table>
          <tbody>
            <tr>
              <td>Name: {userdata.name} </td>
              <td>Location: {userdata.location ? userdata.location : "No location"} </td>
            </tr>
            <tr>
              <td>Email: {userdata.email ? userdata.email:"No email found"}</td>
              <td>Folowers: {userdata.followers ? userdata.followers: "No followers found" }</td>
            </tr>
            <tr>
              <td>Repositories: {userdata.followers} </td>
              <td>Repo URL: {userdata.public_repos} </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
