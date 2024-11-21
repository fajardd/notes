import { useState } from "react";
import { OutlineInput } from "../ui";

const SNTTwo = ({ onBack, setStep }) => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    date: "",
  });
  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const existingNotes = JSON.parse(localStorage.getItem("Notes")) || [];
    const lastId = JSON.parse(localStorage.getItem("LastId")) || 0;

    const newId = lastId + 1;
    const newNote = {
      id: newId,
      ...formData,
    };

    const updateNotes = [...existingNotes, newNote];
    localStorage.setItem("Notes", JSON.stringify(updateNotes));
    localStorage.setItem("LastId", JSON.stringify(newId));
    setFormData({ title: "", description: "", date: "" });
    setStep(0);
  };
  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
          <div className="p-4 space-y-4">
            <OutlineInput
              id="title"
              label="Title"
              name="title"
              value={formData.title}
              onChange={handleInputChange}
              required
            />
            <OutlineInput
              id="description"
              label="Description"
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              required
            />
            <OutlineInput
              id="date"
              label="Date"
              type="date"
              name="date"
              value={formData.date}
              onChange={handleInputChange}
              required
            />
            <button
              type="submit"
              className="w-full border p-3 bg-green-500 text-white font-medium rounded-md"
            >
              Submit
            </button>
            <button
              type="button"
              onClick={onBack}
              className="w-full border p-3 bg-red-500 text-white font-medium rounded-md"
            >
              Back
            </button>
          </div>
        </form>
      </div>
    </>
  );
};
export default SNTTwo;
