interface Props {
  displayNum: string;
}

const PartsOfNumber = (props: Props) => {
  return (
    <>
      <span className="td-header-text">{props.displayNum}</span>
    </>
  );
};

export default PartsOfNumber;
