import { Request, Response } from "express";
import { Todo } from "../models/Todo";

export const all = async (req: Request, res: Response) => {
  let list = await Todo.findAll();

  if (list) {
    res.status(200).json({
      list,
    });
  } else {
    res.status(404).json({ error: "Não há tarefas!" });
  }
};

export const add = async (req: Request, res: Response) => {
  let { title, done } = req.body;

  if (!done || "false") {
    done = false;
  } else {
    done = true;
  }

  let result = await Todo.create({
    title,
    done,
  });

  if (result) {
    res.status(201).json({ result });
  } else {
    res.status(400).json({ error: "Não foi possível gravar essa tarefa!" });
  }
};

export const update = async (req: Request, res: Response) => {
    let  id : string = req.params.id;

    let item = await Todo.findByPk(id);
    if(item){
        if(req.body.title){
            item.title = req.body.title
        }
        if(req.body.done){
            switch(req.body.done.toLowerCase()){
                case 'true':
                case '1':
                    item.done = true;
                    break;
                case 'false':
                case '0':
                    item.done = false;
                    break;
            }
        }

        item.save();
        res.status(200).json({ item });
    } else {
        res.json({ error : "Frase não encontrada!"});
    }
};

export const remove = async (req: Request, res: Response) => {
  let id : string = req.params.id;

  let todo = await Todo.findByPk(id);

  if (todo) {
    await todo.destroy();
  }

  res.json({});
};
