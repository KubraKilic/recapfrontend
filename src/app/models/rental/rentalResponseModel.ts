import { ResponseModel } from "../responseModel";
import { Rental } from "./rental";

export interface RentalResponsemodel extends ResponseModel{
    data:Rental[]
}