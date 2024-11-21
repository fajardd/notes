import { div } from "framer-motion/client";
import moment from "moment";
import { useEffect, useState } from "react";
import { TbPlus, TbTrash } from "react-icons/tb";

const SNTOne = ({ onNext }) => {
  const [notes, setNotes] = useState([]);

  const handleDelete = (id) => {
    const existingNotes = JSON.parse(localStorage.getItem("Notes")) || [];
    const updatedNotes = existingNotes.filter((note) => note.id !== id);
    localStorage.setItem("Notes", JSON.stringify(updatedNotes));
    setNotes(updatedNotes);
  };

  useEffect(() => {
    const savedNotes = localStorage.getItem("Notes");
    if (savedNotes) {
      setNotes(JSON.parse(savedNotes));
    }
  }, []);
  return (
    <>
      {notes.length > 0 ? (
        notes.map((nt, idx) => (
          <div className="px-4  mt-6" key={idx}>
            <div className="border rounded-md px-4 py-2 space-y-2 cursor-auto">
              <div className="flex justify-between py-2">
                <h3 className="font-semibold">{nt.title}</h3>
                <div className="cursor-pointer">
                  <button onClick={() => handleDelete(nt.id)}>
                    <TbTrash className="w-6 h-6 text-red-600" />
                  </button>
                </div>
              </div>
              <hr />
              <p className="text-justify">{nt.description}</p>
              <p className="text-[14px] text-right">
                {nt.date ? `${moment(nt.date).format("DD MMM YYYY")}` : ""}
              </p>
            </div>
          </div>
        ))
      ) : (
        <div className="flex justify-center items-center mt-60 flex-col">
          <p>there are no notes</p>
          <p>to display</p>
        </div>
      )}

      <button
        onClick={onNext}
        className="z-50 absolute top-[610px] right-6 w-12 h-12 bg-blue-600 rounded-full flex justify-center items-center hover:shadow-lg"
      >
        <TbPlus className="w-6 h-6 text-white" />
      </button>
    </>
  );
};

export default SNTOne;
