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

const removeUser = async (id: number): Promise<User | void> => {
  const userRepository = getManager().getRepository(User);
  try {
    const getUser = await userRepository.findOne(id);

    if (getUser) {
      const response = await userRepository.remove(getUser);
      return response;
    }
    console.log("There is no user to delete");
  } catch (err) {
    console.log(err);
  }
};

// const updateUser = async (id: any, args: User) => {
//   const userRepository = getManager().getRepository(User);
//   cons;t getUserToUpdate = await userRepository.findOne(id);
//   const updated =  await userRepository.update({id:getUserToUpdate?.id}, {...args}).then(console.log);
//   return updated;

//   //const userId = getUserToUpdate?.id;
//   //await getConnection().createQueryBuilder().update(User).set({...args}).where("id = :id", {userId});

// };

export { getAllUser, createUser, getOneUser, /* updateUser*/ removeUser };
