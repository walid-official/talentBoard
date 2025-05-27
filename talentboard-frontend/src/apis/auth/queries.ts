import { useMutation, useQuery } from '@tanstack/react-query';
import { GET_ROLE_KEY, GET_USER_KEY, IS_LOGGEDIN_KEY } from './keys';
import { getRoles, getUser, isLoggedIn, updateUserAccount } from './apis';
interface IUser {
  id: string;
  email: string;
  name: string;
  role: string;
}

export const useIsLoggedInQuery = () => {
  return useQuery({
    queryKey: [IS_LOGGEDIN_KEY],
    queryFn: async () => await isLoggedIn(),
    staleTime: Infinity,
  });
};

export const useGetRolesQuery = () => {
  return useQuery({
    queryKey: [GET_ROLE_KEY],
    queryFn: async () => await getRoles(),
    staleTime: Infinity,
  });
};
export const useUpdateUserAccount = () => {
  return useMutation({
    mutationFn: async (data: any) => {
      return await updateUserAccount(data);
    },
  });
};

export const useGetUser = () => {
  return useQuery<{ status: string; user: IUser }>({
    queryKey: [GET_USER_KEY],
    queryFn: async () => await getUser(),
    staleTime: Infinity,
  });
};
