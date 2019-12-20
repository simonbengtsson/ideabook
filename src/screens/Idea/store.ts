import {Idea, ideasModel} from "../../mockData";

export async function storeIdea(id: string, idea: Idea) {

}

export async function getIdea(id: string): Promise<Idea> {
  return ideasModel[id]
}

export async function listIdeas(): Promise<Idea[]> {
  return Object.values(ideasModel)
}