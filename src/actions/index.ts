import { IItem } from "../types/index";
import Api from "../api/index";
import * as types from "./action-types";

export const setVisibilityFilter = (text: string) => ({
  type: "SET_VISIBILITY_FILTER",
  text: text,
});

export const loadItemsSuccess = (items: IItem[]) => ({type: types.LOAD_ITEMS_SUCCESS, items});

export const loadItems = () => (
  async (dispatch: any) => {
    const items = await Api.getAllItems();
    dispatch(loadItemsSuccess(items));
  }
);

export const deleteItemSuccess = (item: IItem) => ({type: types.DELETE_ITEM_SUCCESS, item});

export const deleteItem = (item: IItem) => (
  async (dispatch: any) => {
    const itemResponse = await Api.deleteOneItem(item);
    dispatch(deleteItemSuccess(item));    
  }
);

export const createItemSuccess = (item:IItem) => ({type: types.CREATE_ITEM_SUCCESS, item})

export const createItem = (itemProperties: any) => (
  async (dispatch: any) => {
    const itemResponse = await Api.createOneItem(itemProperties);
    dispatch(createItemSuccess(itemResponse));    
  }
);

export const updateItemProperties = (itemProperties: any) => (
  {
    type: types.UPDATE_ITEM_PROPERTIES,
    itemProperties: itemProperties
  }
);