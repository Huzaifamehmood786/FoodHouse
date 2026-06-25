export function getOrders() {
  return JSON.parse(localStorage.getItem("orders")) || [];
}

export function saveOrder(order) {
  const oldOrders = getOrders();
  localStorage.setItem(
    "orders",
    JSON.stringify([order, ...oldOrders])
  );
}