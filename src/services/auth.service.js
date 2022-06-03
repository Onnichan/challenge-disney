const errorHelper = require("../helpers/error.helper");
const UserService = require("../services/user.service");
const JwtHelper = require("../helpers/jwt.helper");

class AuthService {
  async register(user) {
    const { email } = user;
    const userExist = await UserService.getUserByEmail(email);
    if (userExist) errorHelper("User already exist", 401);

    return await UserService.create(user);
  }

  async login(user) {
    const { email, password } = user;
    const userExist = await UserService.getUserByEmail(email);
    if (!userExist) errorHelper("User does not exist", 404);

    const validPassword = userExist.comparePassword(password);
    if (!validPassword) errorHelper("Invalid Password", 400);

    const userToEncode = {
      username: userExist.username,
      id: userExist.id,
    };

    const token = JwtHelper.generateToken(userToEncode);
    return { token, user: userExist };
  }
}

module.exports = new AuthService();
