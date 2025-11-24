import { ICommon } from "./common";

export declare namespace Data {
  type Theme = {
    id: ICommon.ITheme;// là một giá trị từ namespace ICommon.ITheme
    name: string;
  };
  type Language = {
    id: ICommon.ILanguage; // là một giá trị từ namespace ICommon.ILanguage
    name: string;
    image: string;
  };
}
