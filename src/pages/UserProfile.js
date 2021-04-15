import React from "react";
import { useSelector } from "react-redux";
import { Nav, Heading } from "../components";
import styled from "styled-components";

const UserProfile = () => {
  const user = useSelector(({ userData }) => userData);

  // const logout = () => {
  //   window.localStorage.removeItem("loggedUser");
  //   window.location.href = "/login";
  // };

  return (
    <Main className="user-profile">
      <Nav />
      <Heading
        title="Pesonal info"
        subTitle="Basic info, like your name and photo"
      />
      <div className="card">
        <CardSectionHeader className="card-section">
          <div>
            <H3>Profile</H3>
            <span>Some info may be visible to other people</span>
          </div>
          <div>
            <Button>Edit</Button>
          </div>
        </CardSectionHeader>
        <CardSection className="card-section">
          <div>
            <H4>Photo</H4>
          </div>
          <div>
            <Avatar src={user.avatar} />
          </div>
        </CardSection>
        <CardSection className="card-section">
          <div>
            <H4>Name</H4>
          </div>
          <div>
            <span>{user.name}</span>
          </div>
        </CardSection>
        <CardSection className="card-section">
          <div>
            <H4>Bio</H4>
          </div>
          <div>
            <Value>{user.bio}</Value>
          </div>
        </CardSection>
        <CardSection className="card-section">
          <div>
            <H4>Phone</H4>
          </div>
          <div>
            <span>{user.phone}</span>
          </div>
        </CardSection>
        <CardSection className="card-section">
          <div>
            <H4>Email</H4>
          </div>
          <div>
            <span>{user.email}</span>
          </div>
        </CardSection>
        <CardSection className="card-section password-wrapper">
          <div>
            <H4>Password</H4>
          </div>
          <div>
            <span>***********</span>
          </div>
        </CardSection>
      </div>
    </Main>
  );
};

const Main = styled.main`
  display: flex;
  flex-flow: column;
  align-items: center;
  min-height: 100vh;
`;

const CardSectionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #d3d3d3;
  width: 100%;
  padding: 28.32px 49.3px 29.51px;
`;

const CardSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 4.579rem;
  max-height: 6.319rem;
  width: 100%;
  border-bottom: 1px solid #d3d3d3;
`;

const H3 = styled.h3`
  font-weight: 400;
  font-size: 24px;
  margin-bottom: 4px;
`;

const H4 = styled.h4`
  font-weight: 500;
  font-size: 0.813rem;
  text-transform: uppercase;
  color: #bdbdbd;
`;

const Button = styled.button`
  cursor: pointer;
  width: 95.34px;
  height: 38px;
  border: 1px solid #828282;
  border-radius: 12px;
  color: rgba(130, 130, 130, 1);
  font-weight: 500;
  font-size: 1rem;
`;

const Avatar = styled.img`
  width: 72px;
  height: 72px;
  border-radius: 8px;
`;

const Value = styled.span`
  display: inline-block;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  width: 201px;
`;
export default UserProfile;
