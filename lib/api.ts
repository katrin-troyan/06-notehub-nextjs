import axios from "axios";
import { Note } from "@/types/note";

export type NoteListResponse = {
  notes: Note[];
  total: number;
};

axios.defaults.baseURL = process.env.NEXT_PUBLIC_API_URL;

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const getNotes = async () => {
  await delay(2000);
  const res = await axios.get<NoteListResponse>("/notes");
  return res.data;
};

export const getSingleNote = async (id: string) => {
  const res = await axios.get<Note>(`/notes/${id}`);
  return res.data;
};
