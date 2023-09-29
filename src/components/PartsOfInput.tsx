interface Props {
  ans: string;
  keyId: string;
}

const PartsOfInput = (props: Props): JSX.Element => {
  return (
    <>
      <input type="text" id={props.keyId} maxLength={3} />
    </>
  );
};

export default PartsOfInput;
