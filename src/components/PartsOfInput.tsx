// import { FC } from 'react';

interface Props {
  ans: string;
  keyId: string;
}

const PartsOfInput = (props: Props): JSX.Element => {
  // const PartsOfInput = (): JSX.Element => {
  const { ans, keyId } = props;
  console.log(`ans: ${ans}`);
  console.log(`keyId: ${keyId}`);

  return (
    <>
      {/* {keyId} */}
      <input type="text" value={ans} id={keyId} maxLength={3} />
    </>
  );
};

export default PartsOfInput;
