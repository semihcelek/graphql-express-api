import { getManager } from "typeorm";
import { User } from "../models/user-entity";

const getAllUser = async (): Promise<User[]> => {
  const userRepository = getManager().getRepository(User);
  const people = await userRepository.find();
  console.log(people);
  return people;
};

const createUser = async (args: User): Promise<User> => {
  // we dont return a user,
  const userRepository = getManager().getRepository(User);
  const newUser = userRepository.create(args);
  await userRepository.save(newUser);
  return newUser;
};

const getOneUser = async (id: any): Promise<User | undefined> => {
  const userRepository = getManager().getRepository(User);
  const getUser = await userRepository.findOne(id);
  return getUser;
};

export { getAllUser, createUser, getOneUser };
