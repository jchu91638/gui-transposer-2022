import A_Chords from "../../src/db/guitar/chords/F";

const A_major = A_Chords.filter((chord) => {
    return chord.suffix === "major";
  });

export default A_major;