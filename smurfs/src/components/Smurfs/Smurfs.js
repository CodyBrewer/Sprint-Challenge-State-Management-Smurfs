import React, { useLayoutEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchSmurfs, addSmurf, changeInput } from "../../store/actions";

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
  const { name, age, height } = useSelector(state => state.formData);

  const onChange = e => {
    dispatch(changeInput(e.target));
  };
  const submitSmurf = ({ name, age, height }) => {
    dispatch(addSmurf({ name, age, height }));
  };

  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        submitSmurf({ name, age, height });
      }}
    >
      <input
        type="text"
        name="name"
        id="name"
        placeholder="Name of Smurf"
        value={name}
        onChange={onChange}
      />
      <input
        type="number"
        name="age"
        id="age"
        placeholder="Age of Smurf in years"
        value={age}
        onChange={onChange}
      />
      <input
        type="number"
        name="height"
        id=""
        placeholder="Height of Smurf in cm
        "
        value={height}
        onChange={onChange}
      />
      <button type="submit">Add Smurf!</button>
    </form>
  );
};

export default Smurfs;
