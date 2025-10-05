export function authController(req) {
  const { name, age, city, hobbies, password } = req.body;

  if (!name || String(name).trim() === "") {
    throw new Error("Name is required");
  }

  if (age === undefined || age === null) {
    throw new Error("Age is required");
  }

  if (!city || String(city).trim() === "") {
    throw new Error("City is required");
  }

  if (!password || String(password).trim() === "") {
    throw new Error("Password is required");
  }

  if (!Array.isArray(hobbies)) {
    throw new Error("Hobbies must be an array");
  }
}
