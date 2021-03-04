import { Post } from "./models/post-entity";
import { User } from "./models/user-entity";
import { createPost, getAllPost, getOnePost } from "./services/post-service";
import { createUser, getAllUser, getOneUser } from "./services/user-service";

export const resolvers = {
  Query: {
    allUsers: async (): Promise<User[]> => {
      const people = await getAllUser();
      return people;
    },
    findUser: async (_, id: number): Promise<User | undefined> => {
      const person = await getOneUser(id);
      return person;
    },
    allPosts: async (): Promise<Post[]> => {
      const posts = await getAllPost();
      return posts;
    },
    findPost: async (_, id: number): Promise<Post | undefined> => {
      const post = await getOnePost(id);
      return post;
    },
  },
  Mutation: {
    createUser: async (_root, args: User): Promise<User> => {
      const newPerson = await createUser(args);
      return newPerson;
    },
    createPost: async (_root, args: Post): Promise<Post> => {
      const newPost = await createPost(args);
      return newPost;
    },
  },
};
