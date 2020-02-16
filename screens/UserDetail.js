import React from "react";
import styled from "styled-components";
import { useQuery } from "react-apollo-hooks";
import { gql } from "apollo-boost";
import { USER_FRAGMENT } from "../fragments";
import Loader from "../components/Loader";
import { ScrollView } from "react-native-gesture-handler";
import UserProfile from "../components/UserProfile";

const GET_USER = gql`
  query seeUser($username: String!) {
    seeUser(username: $username) {
      ...UserParts
    }
  }
  ${USER_FRAGMENT}
`;

const View = styled.View``;
const Text = styled.Text``;

export default ({ navigation }) => {
  const { loading, data } = useQuery(GET_USER, {
    variables: {
      username: navigation.getParam("username")
    }
  });
  return (
    <ScrollView style={{ flex: 1 }}>
      {loading ? (
        <Loader />
      ) : (
        data && data.seeUser && <UserProfile {...data.seeUser} />
      )}
    </ScrollView>
  );
};
