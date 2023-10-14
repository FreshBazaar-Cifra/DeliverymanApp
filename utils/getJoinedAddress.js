export default function getJoinedAddress(address) {
  if (!address) return "";
  return `${address.street}, дом ${address.home}`;
}
