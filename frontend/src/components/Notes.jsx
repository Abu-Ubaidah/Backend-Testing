
import { useState } from "react"
import { InputField } from "./InputField";

export const Notes =()=>{

  const emptyNote = { title: "", description: "", priority: "", category: "" };
  const [notes, setNotes] = useState([
    {title: "example Title",
    description:"this is a example description",
    priority:"🟢 Low",
    category:"💡 Ideas"
    }]);
  const [formData, setFormData] = useState({notes});
  const handleChange = (e) =>{

      const { name, value } = e.target;
      setFormData((prev) => ({ ...prev, [name]: value }));

  }

  const handleClick = () => {
      if (!formData.title || !formData.description || !formData.category || !formData.category ) {

        alert("Please fill all fields before adding a note.");
        return;
      }
      setNotes((prev) => [...prev, formData]);
      setFormData(emptyNote);
  };

    return (
        <div className="max-w-2xl w-full sm:p-8 p-4 mx-auto mt-10 bg-amber-100 rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold mb-4 items-center flex text-center justify-center gap-4">
            📓 Take Notes
          </h2>

          <InputField label="Title">
              <input
                name="title"
                value={formData.title}
                onChange={handleChange}
                type="text"
                className="bg-gray-200 p-3 text-lg rounded-lg grow focus:outline-none focus:ring-2 focus:ring-amber-400"
                placeholder="Add Title of the note"
              />
          </InputField>



          <InputField label="Priority">
              <select
                value={formData.priority}
                onChange={handleChange}
                name="priority"
                id=""
                className="bg-gray-200 p-3 text-lg rounded-lg grow focus:outline-none focus:ring-2 focus:ring-amber-400"
                >
                <option value="">Select Priority</option>
                <option value="🟢 Low">🟢 Low</option>
                <option value="🟠 Medium">🟠 Medium</option>
                <option value="🔴 High">🔴 High</option>
              </select>

          </InputField>
 

          <InputField label="Category">
              <select
                value={formData.category}
                onChange={handleChange}
                name="category"
                id=""
                className="bg-gray-200 p-3 text-lg rounded-lg grow focus:outline-none focus:ring-2 focus:ring-amber-400"
                >
                <option value="">Select Category</option>
                <option value="🧑 Personal">🧑 Personal</option>
                <option value="💼 Work">💼 Work</option>
                <option value="💡 Ideas">💡 Ideas</option>
              </select>
          </InputField>


       <InputField label="Description">
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                type="text"
                className="bg-gray-200 p-3 text-lg rounded-lg grow resize-none focus:ring-2 focus:ring-amber-400"
                placeholder="Describe the note"
                />
       </InputField>

          <button
            onClick={handleClick}
            className="bg-green-400 hover:bg-green-500 text-center flex items-center justify-center w-full mx-auto p-3 text-xl rounded-lg mt-4 cursor-pointer"
          >
            Add Note
          </button>
          <div className="mt-6 space-y-2">
            {notes.map((note, index) => {
              const borderColor =
                note.priority === "🔴 High"
                  ? "border-l-4 border-red-500"
                  : note.priority === "🟠 Medium"
                  ? "border-l-4 border-orange-400"
                  : "border-l-4 border-green-400";

              return (
                <div
                  key={index}
                  className={`p-6 bg-blue-200 rounded-lg shadow-md ${borderColor}`}
                >
                  <h3 className="font-bold text-xl">{note.title}</h3>
                  <p>
                    <strong>Priority:</strong> {note.priority}
                  </p>
                  <p>
                    <strong>Category:</strong> {note.category}
                  </p>
                  <p>
                    <strong>Description:</strong> {note.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
    );
}