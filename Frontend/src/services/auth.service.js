import api from '../api/axios'
export const signup = (data) => {
  return api.post("/auth/signup", data); // ✅ data pass kiya
};

export const login = (data) => {
  return api.post("/auth/login", data); // ✅ data pass kiya
};
