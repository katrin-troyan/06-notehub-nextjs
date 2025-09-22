"use client";

import { useQuery } from "@tanstack/react-query";
import { getNotes } from "@/lib/api";
import NoteList from "@/components/NoteList/NoteList";

export default function NotesClient() {
  const { data } = useQuery({
    queryKey: ["notes"],
    queryFn: getNotes,
  });

  return (
    <section>
      <h1>Notes List</h1>
      {data?.notes?.length ? (
        <NoteList notes={data.notes} />
      ) : (
        <p>No notes yet</p>
      )}
    </section>
  );
}
