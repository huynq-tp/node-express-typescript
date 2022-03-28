/**
 * Data Model Interfaces
 */

import { Item } from './item.interface';
import { Items } from './items.interface';


/**
 * In-Memory Store
 */

 const items: Items = {
    1: {
      id: 1,
      name: "Burger",
      price: 5.99,
      description: "Tasty",
      image: "https://cdn.auth0.com/blog/whatabyte/burger-sm.png"
    },
    2: {
      id: 2,
      name: "Pizza",
      price: 2.99,
      description: "Cheesy",
      image: "https://cdn.auth0.com/blog/whatabyte/pizza-sm.png"
    },
    3: {
      id: 3,
      name: "Tea",
      price: 1.99,
      description: "Informative",
      image: "https://cdn.auth0.com/blog/whatabyte/tea-sm.png"
    }
  };

/**
 * Service Methods
 */

export const findAll = async (): Promise<Items> => {
    return items;
}

export const find = async (id: number): Promise<Item> => {
    const record: Item = items[id];

    if (!record) {
        throw new Error(`No record found for id ${id}`);
    }

    return record;
}

export const create = async (item: Item): Promise<Item> => {
    const id = Object.keys(items).length + 1;
    const newItem: Item = { ...item, id };

    items[id] = newItem;

    return newItem;
}

export const update = async (id: number, item: Item): Promise<Item> => {
    const record: Item = items[id];

    if (!record) {
        throw new Error(`No record found for id ${id}`);
    }

    const updatedItem: Item = { ...record, ...item };

    items[id] = updatedItem;

    return updatedItem;
}

export const remove = async (id: number): Promise<Item> => {
    const record: Item = items[id];

    if (!record) {
        throw new Error(`No record found for id ${id}`);
    }

    delete items[id];

    return record;
}

