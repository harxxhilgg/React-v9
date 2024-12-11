export default async function getPastOrder(order) {
  await new Promise(resolve => setTimeout(resolve, 500)); // 0.5 sec delay
  const res = await fetch(`/api/past-order/${order}`);
  const data = await res.json();
  return data;
}