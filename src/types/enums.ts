import { ProfileModal } from "../components/modals/ProfileModal";

export enum ThemeMode {
  LIGHT = "light",
  DARK = "dark",
}
export enum Locations {
  PROJECTS = "projects",
  CREATE_PROJECT = "createProject",
  PROJECT_DETAIL = "projectDetail"
}

export enum ModalTypes {
  PROFILE = "profile",
}

export const modals = {
  [ModalTypes.PROFILE]: ProfileModal,
};


export enum Severity {
  ERROR = 'error',
  INFO = 'info',
  SUCCESS = 'success',
  WARNING = 'warning',
}
