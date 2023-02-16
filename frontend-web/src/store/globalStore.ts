import { create } from "zustand";
import { UserStore } from "./user/userStore";
import { TodoStore } from "./todo/todoStore";

type GlobalStore = TodoStore & UserStore;
