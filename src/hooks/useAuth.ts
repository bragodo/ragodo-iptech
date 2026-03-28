import { useState } from 'react';

interface LoginData {
  email: string;
  password: string;
}

interface RegisterData {
  username: string;
  email: string;
  password: string;
}

export const useAuth = () => {
  const [loginData, setLoginData] = useState<LoginData>({ email: '', password: '' });
  const [registerData, setRegisterData] = useState<RegisterData>({ username: '', email: '', password: '' });

  const handleLoginChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const handleRegisterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRegisterData({ ...registerData, [e.target.name]: e.target.value });
  };

  return {
    loginData,
    registerData,
    handleLoginChange,
    handleRegisterChange,
  };
};