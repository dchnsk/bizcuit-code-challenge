import { IUser } from "@interfaces/user";
import { create } from "zustand";

export interface UserStore {
  userData?: IUser;
  isLoading: boolean;
  errors: string[];
}
const mockUserData = {
  id: "c5909159-d7d2-407d-a17d-1c8177a14655",
  name: "",
  email: "",
  password: "",
};

export const useUserStore = create<UserStore>((set) => ({
  // TODO: Remove hardcode when auth will be added
  userData: mockUserData,
  isLoading: false,
  errors: [],
}));
