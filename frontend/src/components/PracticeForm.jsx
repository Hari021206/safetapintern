import {
  useState,
  useEffect
} from "react";
import axios from "axios";
function PracticeForm() {
  const [title, setTitle] =
  useState("");
  const [category, setCategory] =
  useState("");
  const [
    description,
    setDescription
  ] = useState("");
  const [
    simulations,
    setSimulations
  ] = useState([]);
  useEffect(()=>{
    fetchSimulations();
  },[]);
  const fetchSimulations =
  async()=>{
    try{
      const response =
      await axios.get(
        "http://localhost:3200/api/simulations"
      );
      setSimulations(
        response.data
      );
    }catch(error){
      console.log(error);
    }
  };
  const submitHandler =
  async (e) => {
    e.preventDefault();
    if (
      !title ||
      !category ||
      !description
    ) {
      alert(
        "Fill all fields"
      );
      return;
    }
    try{
      await axios.post(
        "http://localhost:3200/api/simulations",
        {
          title,
          category,
          description
        }
      );
      alert("Simulation Added");
      setTitle("");
      setCategory("");
      setDescription("");
      fetchSimulations();
    }catch(error){
      console.log(error);
    }
  };
  return (
    <section
      className="practice-form"
      id="practice"
    >
      <h2>
        Create Simulation
      </h2>
      <form
        onSubmit={submitHandler}
      >
      <input
        type="text"
        placeholder="Simulation Title"
        value={title}
        onChange={(e)=>
        setTitle(e.target.value)}
      />
        <input
          type="text"
          placeholder="Category"
          value={category}
          onChange={(e)=>
          setCategory(e.target.value)}
        />
        <textarea
          placeholder="Description"
          value={description}
          onChange={(e)=>
          setDescription(e.target.value)}
        />
        <button type="submit">
          Add Simulation
        </button>
      </form>
      <div className="history-section">
        <h2>
          Simulation History
        </h2>
        <div className="history-grid">
          {simulations.map((item)=>(
            <div
              className="history-card"
              key={item._id}
            >
              <h3>
                {item.title}
              </h3>
              <p>
                Status :
                <strong>
                  {item.status}
                </strong>
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
export default PracticeForm;