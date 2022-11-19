import { DataAcademy } from "./dataAcademic.type";
import { DataPersonal } from "./dataPersonal.type";

export interface User extends DataPersonal, DataAcademy { }
