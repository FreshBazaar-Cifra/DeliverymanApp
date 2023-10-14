import { authURL, deliverymanURL } from "../api/api";

export default class UserService {
  static async login(login, password) {
    return fetch(`${authURL}/login`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'accept': 'application/json',
      },
      body: JSON.stringify({login: login, password: password})
    });
  }

  static async getBalance(token) {
    return fetch(`${deliverymanURL}/balance/`, {
      method: "GET",
      headers: {
        "accept": "application/json",
        "Authorization": `Bearer ${token}`,
      }
    });
  }

  static async getTransactions(token) {
    return fetch(`${deliverymanURL}/balance/history`, {
      method: "GET",
      headers: {
        "Authorization": `Bearer ${token}`,
      }
    });
  }

  static async withdraw(token, sum) {
    return fetch(`${deliverymanURL}/balance/withdraw`, {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${token}`,
        "accept": "*/*",
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({sum: sum}),
    })
  }

  static async getUserData(token) {
    return fetch(`${deliverymanURL}/deliveryman/`, {
      method: "GET",
      headers: {
        "Authorization": `Bearer ${token}`,
      }
    });
  }
}
