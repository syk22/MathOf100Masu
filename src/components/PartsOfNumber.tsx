interface Props {
  displayNum: string;
}

const PartsOfNumber = (props: Props) => {
  return (
    <>
      <span>{props.displayNum}</span>
    </>
  );
};

export default PartsOfNumber;
