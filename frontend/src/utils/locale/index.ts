import { Locale } from "antd/lib/locale";
import id_ID from "antd/locale/id_ID";
import en_US from "antd/locale/en_US";
import zh_CN from "antd/locale/zh_CN";

export const languages = {
  "id-ID": {
    name: "Bahasa",
    flag: "🇮🇩",
    unicode: "1f1ee-1f1e9",
    antd: id_ID,
  },
  "en-US": {
    name: "English",
    flag: "🇺🇸",
    unicode: "1f1fa-1f1f8",
    antd: en_US,
  },
  // 'zh-CN': {
  //   name: '简体中文',
  //   flag: '🇨🇳',
  //   unicode: '1f1e8-1f1f3',
  //   antd: zh_CN,
  // },
};

export const MatchLanguage = (locale: string) => {
  return Object.keys(languages).includes(locale);
};

export type ILanguage = {
  [K in keyof typeof languages]: {
    name: string;
    flag: string;
    unicode: string;
    antd: Locale;
  };
};

export const defaultLocale: keyof typeof languages = "en-US";
