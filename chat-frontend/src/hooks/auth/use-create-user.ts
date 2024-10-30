import { CREATE_USER } from "@/graphql/user/mutations";
import { useMutation } from "@apollo/client";

interface CreateUserInput {
  email: string;
  password: string;
}

interface CreateUserResponse {
  id: string;
  email: string;
  createdAt: string;
}

export const useCreateUser = () => {
  const [createUserMutation, { data, loading, error }] =
    useMutation(CREATE_USER);

  const createUser = async (userData: CreateUserInput) => {
    try {
      const response = await createUserMutation({
        variables: {
          createUserInput: userData,
        },
      });
      return response.data?.createUser;
    } catch (e) {
      console.error(e);
      throw e;
    }
  };

  return { createUser, data, loading, error };
};
