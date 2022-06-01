const errorHelper = require("../helpers/error.helper");
const UserService = require("../services/user.service");

class AuthService {
  async register(user) {
    const { email } = user;
    const userExist = await UserService.getUserByEmail(email);
    if (userExist) errorHelper("User already exist", 401);

    return await UserService.create(user);
  }

  async login(user) {
    const {email, password} = user;
    const userExist = await UserService.getUserByEmail(email);
    if(!userExist) errorHelper('User does not exit', 404);
  }
}

module.exports = new AuthService();
