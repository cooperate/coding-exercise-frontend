import { IItem } from "../types/index";
class Api {
    public static async getAllItems() {
        const items: IItem[] = await (await fetch('http://localhost:3001/item')).json();
        return items;
    }
    public static async createOneItem(item: IItem) {
        const response = await(await fetch('http://localhost:3001/item', {method: "post", headers: {'Content-Type': 'application/json'}, body: JSON.stringify(item)})).json();
        return response;
    }
    public static async deleteOneItem(item: IItem) {
        const response = await(await fetch('http://localhost:3001/item', {method: "delete", headers: {'Content-Type': 'application/json'}, body: JSON.stringify(item)})).json();
        return response;
    }
}
  
export default Api;