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

export const GET_ITEM_BY_RESTAURANTID = gql`
  query ItemsByRestaurantId($id: ID!) {
    itemsByRestaurantId(_id: $id) {
      _id
      restaurantId
      name
      price
      categoryItem
      imageUrl
      description
    }
  }
`;

export const GET_ORDER_BY_RESTAURANTID = gql`
  query Query($id: ID!) {
    getOrdersByRestaurantId(_id: $id) {
      _id
      customerName
      customerPhoneNumber
      tableNumber
      totalPrice
      restaurantId
      status
    }
  }
`;

export const GET_BOOK_BY_RESTAURANTID = gql`
  query Query($id: ID!) {
    getBookedByRestaurantId(_id: $id) {
      _id
      customerName
      customerPhoneNumber
      bookingDate
      numberOfPeople
      restaurantId
      status
    }
  }
`;

export const UPDATE_AVAILABILITY = gql`
  mutation Mutation($id: ID!, $available: Boolean) {
    updateAvailability(_id: $id, available: $available) {
      message
    }
  }
`;
