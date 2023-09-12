import React, { useState, useEffect } from 'react';
import "./index.css";
import { Note } from '../../types/Note';

export interface NoteFormProps {
  onSubmit: (note: Note) => void;
  noteToEdit?: Note;
}

const NoteForm: React.FC<NoteFormProps> = ({ onSubmit, noteToEdit }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  useEffect(() => {});
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <div className="layout-column align-items-center justify-content-start" data-testid="note-manager">
      <div className="card w-200 pt-30 pb-8 mt-15 mb-15">
        <form onSubmit={handleSubmit} data-testid="note-form">
          <section className="layout-row align-items-center justify-content-center mt-20 mr-20 ml-20">
            <label className="form-title-label">Title:</label>
            <input
              type="number"
              placeholder="Title"
              value={title}
              data-testid="form-input"
              className="form-input"
              onChange={() => { }}
            />
          </section>
          <section className="layout-row align-items-center justify-content-center mt-20 mr-20 ml-20">
            <label className="form-content-label">Content:</label>
            <textarea
              placeholder="Content"
              value={content}
              data-testid="form-textarea"
              className="form-textarea"
              onChange={() => { }}
            />
          </section>
          <section className="layout-row align-items-center justify-content-center mt-20 mr-20 ml-20">
            <button data-testid="form-submit-button" type="submit" disabled={false}>{noteToEdit ? 'Update' : 'Add'}</button>
          </section>
        </form>
      </div>
    </div>
  );
};

export default NoteForm;
