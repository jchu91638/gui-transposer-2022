import Ab_Chords from "../../../data/guitar_chords/Ab_Chords";

const Ab_major = Ab_Chords.filter((chord) => {
    return chord.suffix === "major";
  });

export default Ab_major;
