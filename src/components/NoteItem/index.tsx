import React from 'react';
import { Note } from '../../types/Note';

export interface NoteItemProps {
  note: Note;
  onDelete: (id: number) => void;
  onEdit: (note: Note) => void;
}

const NoteItem: React.FC<NoteItemProps> = ({ note, onDelete, onEdit }) => {
  return (
    <tr key={0}>
      <td>Note Title</td>
      <td>Note Content</td>
      <td><button className="outlined" onClick={() => {}}>Edit</button></td>
      <td><button className="danger" onClick={() => {}}>Delete</button></td>
    </tr>
  );
};

export default NoteItem;
