import { getUserEmail } from "./src/services/services.js";
import { getAllRecipes } from "./src/services/services.js";

export const resolvers = {
    Query: {
        userEmail: (parent, { email }) => getUserEmail(email),
        recipes: () => getAllRecipes()
    }
};
