import apiClient from '@/app/utils/apiClient';
import { storeToken } from '@/app/utils/auth';
import { SIGNIN, REGISTER } from './endpoints';

export const signin = async (values: any) => {
  try {
    const response = await apiClient.post(SIGNIN, values);
    if (response.data.token) {
      storeToken(response.data.token);
    }
    return response.data;
  } catch (error) {
    console.error('Error logging in:', error);
    throw error;
  }
};

export const signup = async (values: any) => {
  try {
    const response = await apiClient.post(REGISTER, values);
    if (response.data.token) {
      storeToken(response.data.token);
    }
    return response.data;
  } catch (error) {
    console.error('Error signing up:', error);
    throw error;
  }
};
