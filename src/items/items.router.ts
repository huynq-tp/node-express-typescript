/**
 * Required External Modules and Interfaces
 */

import express, { Express, Request, Response } from 'express';
import * as ItemService from './items.service';
import { Item } from './item.interface';
import { Items } from './items.interface';

/**
 * Router Definition
 */

export const itemsRouter = express.Router();

/**
 * Controller Definitions
 */

// GET items/

itemsRouter.get('/', async (req: Request, res: Response) => {
    try {
        const items: Items = await ItemService.findAll();
        res.status(200).json(items);   
    } catch (e) {
        res.status(404).send(e);
    }       
});

// GET items/:id

itemsRouter.get('/:id', async (req: Request, res: Response) => {
    try {
        const id: number = parseInt(req.params.id, 10);
        const item: Item = await ItemService.find(id);
        res.status(200).json(item);
    } catch (e) {
        res.status(404).send(e);
    }
});

// POST items/

itemsRouter.post('/', async (req: Request, res: Response) => {
    try {
        const item: Item = await ItemService.create(req.body);
        res.status(201).json(item);
    } catch (e) {
        res.status(400).send(e);
    }
});

// PUT items/

itemsRouter.put('/', async (req: Request, res: Response) => {
    try {
        const item: Item = req.body;
        await ItemService.update(item.id, item);
        res.status(200).json(item);
    } catch (error) {
        res.status(404).send(error);
    }
});

// DELETE items/:id

itemsRouter.delete('/:id', async (req: Request, res: Response) => {
    try {
        const id: number = parseInt(req.params.id, 10);
        await ItemService.remove(id);
        res.status(200).send(`Item ${id} deleted`);
    } catch (error) {
        res.status(500).send(error);
    }
});
