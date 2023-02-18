export default function WorkoutList({data}) {
  // const dataKeys = Object.keys(data);
  // const dataJSX = dataKeys.map((key) => {
  //   console.log(data);
  //   console.log(data[key]);
  //   return <li>{data[key]}</li>
  // });

  const jsxData = data.map((dataObj) => {
    const dataKeys = Object.keys(dataObj);
    const objJSX = dataKeys.map((key) => <li key={key}>{dataObj[key]}</li>)
    return <ul>{objJSX}</ul>
  });

  return (
    <li>
      {jsxData}
    </li>
  )
}