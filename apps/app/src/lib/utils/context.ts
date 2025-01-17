import type { UserState } from "firebase-svelte";
import { getContext, setContext } from "svelte";

export const contextKeys = [
  "installPromptEvent",
  "displayMode",
  "online",
  "user",
  "userMeasures",
  "userProfile",
] as const;

export type ContextKey = (typeof contextKeys)[number];

export type DisplayMode = "browser" | "fullscreen" | "standalone";

export const getDisplayMode = (): DisplayMode => getContext("displayMode" satisfies ContextKey);

export const setDisplayMode = (mode: DisplayMode) => {
  setContext("displayMode" satisfies ContextKey, mode);
};

export const getPromptEvent = () =>
  getContext<Event | undefined>("installPromptEvent" satisfies ContextKey);

export const setPromptEvent = (event: Event) => {
  setContext<Event>("installPromptEvent" satisfies ContextKey, event);
};

export const getOnline = () => getContext<boolean>("online" satisfies ContextKey);

export const setOnline = (isOnline: boolean) => {
  setContext<boolean>("online" satisfies ContextKey, isOnline);
};

export const getUser = (): UserState => getContext<UserState>("user" satisfies ContextKey);

export const setUser = (user: UserState) => {
  setContext<UserState>("user" satisfies ContextKey, user);
};
