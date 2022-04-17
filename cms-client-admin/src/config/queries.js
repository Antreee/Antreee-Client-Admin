import { gql } from "@apollo/client";

export const GET_RESTAURANT_ADMIN = gql`
  query GetRestaurantByAdmin {
    getRestaurantByAdmin {
      _id
      name
      logoUrl
      cuisine
      address
      contactNumber
      location {
        type
        coordinates
      }
      available
      capacity
      mainImagesUrl
      adminId
      restaurantDistance
    }
  }
`;

export const LOGIN = gql`
  mutation Login($email: String, $password: String) {
    login(email: $email, password: $password) {
      status
      access_token
    }
  }
`;
