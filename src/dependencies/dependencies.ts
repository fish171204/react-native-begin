import { Container } from "inversify";
import UserService from "../services/user_service";

const container = new Container();

container.bind<UserService>('UserService').toConstantValue(new UserService());

export default container;