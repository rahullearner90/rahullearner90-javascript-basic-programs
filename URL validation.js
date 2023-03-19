const input = "my.email@example.com";

if (/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(input)) {
  console.log(`Input "${input}" matches the conditions.`);
} else {
  console.log(`Input "${input}" does not match the conditions.`);
}
