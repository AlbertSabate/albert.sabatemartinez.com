import type { ProfileData } from "@/types";
import type { Locale } from "../i18n/config";
import { profileDataEn } from "./en";
import { profileDataEs } from "./es";

export function getProfileData(locale: Locale): ProfileData {
  switch (locale) {
    case "en":
      return profileDataEn;
    case "es":
      return profileDataEs;
    default:
      return profileDataEn;
  }
}
