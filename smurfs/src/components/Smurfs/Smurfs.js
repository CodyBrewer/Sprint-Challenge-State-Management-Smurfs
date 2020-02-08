import React, { useLayoutEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchSmurfs } from "../../store/actions";

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
    </>
  );
};

const Smurf = props => {
  const { smurf } = props;

  return (
    <>
      <h2>{smurf.name}</h2>
      <p>Age: {smurf.age}</p>
      <p>Height: {smurf.height}</p>
    </>
  );
};

export default Smurfs;
