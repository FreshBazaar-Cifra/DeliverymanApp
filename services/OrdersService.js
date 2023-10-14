import { deliverymanURL } from "../api/api";

export default class OrdersService {
  static async getAllOrders(token) {
    return fetch(`${deliverymanURL}/orders/all`, {
      method: "GET",
      headers: {
        "Authorization": `Bearer ${token}`,
      }
    });
  }

  static async getOrdersByStatus(token, status) {
    return fetch(`${deliverymanURL}/orders/${status}`, {
      method: "GET",
      headers: {
        "Authorization": `Bearer ${token}`,
      }
    });
  }

  static async getOrderById(token, id) {
    return fetch(`${deliverymanURL}/orders/order/${id}`, {
      method: "GET",
      headers: {
        "Authorization": `Bearer ${token}`,
      }
    });
  }

  static async takeOrder(token, id) {
    return fetch(`${deliverymanURL}/orders/take-order`, {
      method: "POST",
      headers: {
        "accept": "*/*",
        'Content-Type': 'application/json',
        "Authorization": `Bearer ${token}`,
      },
      body: JSON.stringify({id: id}),
    });
  }

  static async completeOrder(token, id) {
    return fetch(`${deliverymanURL}/orders/complete/${id}`, {
      method: "POST",
      headers: {
        "accept": "*/*",
        "Authorization": `Bearer ${token}`,
      },
    });
  }
}
