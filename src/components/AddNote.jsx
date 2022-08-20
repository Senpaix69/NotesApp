import React, { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';
import Notes from './Notes';


const AddNote = (props) => {
    const date = new Date();
    const toggle = props.darkMode ? "Dark" : "Light";
    const [notesArr, setNotesArr] = useState(() => {
        const localData = JSON.parse(localStorage.getItem("notepad"));
        return localData?.length ? localData :
            [
                {
                    key: nanoid(),
                    title: "Welcome",
                    text: "Hi, My name is Huraira Younas. This is one of my react project. I hope you will like it. \nVisit my github for more projects.",
                    date: "Fri Aug 05 2022"
                }
            ]
    });

    useEffect(() => {
        localStorage.setItem("notepad", JSON.stringify(notesArr))
    }, [notesArr])

    const [formData, setFormData] = useState({ title: "", text: "" });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData(preFormData => {
            return {
                ...preFormData,
                [name]: value
            }
        })
    }

    const handleNote = (e) => {
        e.preventDefault();
        if (formData.title.trim().length > 0 && formData.text.trim().length > 0) {
            const newNote = {
                key: nanoid(),
                title: formData.title,
                text: formData.text,
                date: date.toDateString()
            }
            const newNotes = [...notesArr, newNote]
            setNotesArr(newNotes)
            formData.key = null;
            formData.text = "";
            formData.title = "";
            formData.key = "";
        } else {
            alert("Can not add empty notes");
        }
    }

    const deleteNote = (key) => {
        if (key !== notesArr[0].key) {
            if (window.confirm("You want to delete this note?")) {
                const newNotes = notesArr.filter((note) => note.key !== key);
                setNotesArr(newNotes)
            }
        } else {
            alert("You can't delete welcome note")
        }
    }

    const searchNote = () => {
        if (props.search) {
            console.log(props.search);
            return notesArr.filter((note) => note.text.toLowerCase().includes(props.search));
        } else {
            return notesArr;
        }
    }

    return (
        <>
            <div className='Note'>
                <div className={`Note--Card ${`${toggle}-Card`}`}>
                    <input
                        type='text'
                        className='Add--Title'
                        placeholder='Enter Title'
                        onChange={handleChange}
                        name='title'
                        value={formData.title}
                    >
                    </input>
                    <div className="para">
                        <textarea key={formData.key}
                            placeholder='type your note here'
                            name='text'
                            onChange={handleChange}
                            value={formData.text}
                        >
                        </textarea>
                    </div>
                    <span>Date: {date.toDateString()}</span>
                    <img className='Card-logo' src={require('./images/senpai1.png')} alt='logo' />
                    <button onClick={handleNote} className="Add">add note</button>
                </div>
            </div>
            {searchNote().map((note) =>
                <Notes
                    key={note.key} id={note.key} title={note.title} text={note.text} date={note.date}
                    handleDelete={deleteNote}
                    darkMode={toggle}
                />
            )}
        </>
    )
}

export default AddNote;
