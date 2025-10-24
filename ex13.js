const settings = { theme: null };
console.log("Theme setting:", settings.theme ?? "light");

const user2 = { profile: { email: "x@y.com" } };
console.log("User email:", user2.profile?.email);
console.log("User city:", user2.address?.city);