const IconSelector = (props: { descIcona: string }) => {
  const { descIcona } = props;

  switch (descIcona) {
    case "1":
      return <></>;

    default:
      return (
        <>
          <p>{descIcona}</p>
        </>
      );
  }
};  

export default IconSelector;
