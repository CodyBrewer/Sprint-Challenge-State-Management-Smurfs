import React, { useLayoutEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchSmurfs, addSmurf } from "../../store/actions";

const Smurfs = () => {
  const dispatch = useDispatch();
  const { smurfs } = useSelector(state => state.smurfs);

  useLayoutEffect(() => {
    dispatch(fetchSmurfs());
  }, []);

  return (
    <>
      {smurfs.length ? (
        smurfs.map(item => <Smurf key={item.id} smurf={item} />)
      ) : (
        <p>no smurfs here</p>
      )}
      <SmurfForm />
    </>
  );
};

const Smurf = props => {
  const { smurf } = props;

  return (
    <>
      <h2>{smurf.name}</h2>
      <p>Age: {smurf.age} years</p>
      <p>Height: {smurf.height}</p>
    </>
  );
};

const SmurfForm = () => {
  const dispatch = useDispatch();
  const [smurfInfo, setSmurfInfo] = useState({ name: "", age: 0, height: 0 });
  const submitSmurf = e => data => {
    e.preventDefault();

    dispatch(addSmurf(data));
  };

  const onChange = e => {
    setSmurfInfo({ ...smurfInfo, [e.target.name]: e.target.value });
  };

  return (
    <form
      onSubmit={() => {
        submitSmurf(smurfInfo);
      }}
    >
      <input
        type="text"
        name="name"
        id="name"
        placeholder="Name of Smurf"
        value={smurfInfo.name}
        onChange={onChange}
      />
      <input
        type="number"
        name="age"
        id="age"
        placeholder="Age of Smurf in years"
        value={smurfInfo.age}
        onChange={onChange}
      />
      <input
        type="number"
        name="height"
        id=""
        placeholder="Height of Smurf in cm
        "
        value={smurfInfo.height}
        onChange={onChange}
      />
      <button type="submit">Add Smurf!</button>
    </form>
  );
};

export default Smurfs;
