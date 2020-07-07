export default function capitalize(string) {
  string = string.replace("-", " ");
  return string.charAt(0).toUpperCase() + string.slice(1);
}
