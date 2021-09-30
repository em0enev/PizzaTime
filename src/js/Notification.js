import Card from "./Card";
import classNames from "classnames";

export default class Notification {
  static get types() {
    return {
      PEPPERONI: "pepperoni",
      MARGHERITA: "margherita",
      HAWAIIAN: "hawaiian",
    };
  }

  constructor() {
    this.container = document.createElement("div");
    this.container.classList.add("notification-container");
  }

  render(type, price) {
    const template = `
<div class="notification type-${type} ${classNames({
      "is-danger": type === Card.types.HAWAIIAN,
    })}">
  <button class="delete"></button>
  🍕 <span class="type">${type}</span> (<span class="price">${price}</span>) has been added to your order.
</div>
    `;

    this.container.innerHTML = template;
    const notificationDiv = document.querySelector(".notifications")
    notificationDiv.appendChild(this.container)

    const button = this.container.querySelector(".delete")
    button.addEventListener("click", () => this.empty(notificationDiv))
  }

  empty(notificationDiv) {
    notificationDiv.removeChild(this.container)
  }
}
