import { getManager } from "typeorm";
import { Post } from "../models/post-entity";
// import { User } from "../models/user-entity";

const getAllPost = async (): Promise<Post[]> => {
  const postRepository = getManager().getRepository(Post);
  const posts = await postRepository.find();
  console.log(posts);
  return posts;
};

const createPost = async (args: Post): Promise<Post> => {
  // we dont return a user,
  const postRepository = getManager().getRepository(Post);
  const newPost = postRepository.create(args);
  await postRepository.save(newPost);
  return newPost;
};

const getOnePost = async (id: number): Promise<Post | undefined> => {
  const postRepository = getManager().getRepository(Post);
  const getPost = await postRepository.findOne(id);
  return getPost;
};
const removePost = async (id: number): Promise<Post | void> => {
  const postRepository = getManager().getRepository(Post);
  try {
    const getPost = await postRepository.findOne(id);

    if (getPost) {
      const response = await postRepository.remove(getPost);
      return response;
    }
    console.log("There is no post to delete");
  } catch (err) {
    console.log(err);
  }
};

export { getAllPost, createPost, getOnePost, removePost };
