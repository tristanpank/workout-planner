export default function WorkoutList({data}) {
  // const dataKeys = Object.keys(data);
  // const dataJSX = dataKeys.map((key) => {
  //   console.log(data);
  //   console.log(data[key]);
  //   return <li>{data[key]}</li>
  // });

  // IMPORTANT
  // Need to add unique ID to each workout object for list
  // <div key={dataOBJ.uniqueID}>{objJSX}</div>
  // Using temp for now
  let temp = -1;
  const jsxData = data.map((dataObj) => {
    const dataKeys = Object.keys(dataObj);
    const objJSX = dataKeys.map((key) => <div key={key}>{dataObj[key]}</div>)
    temp++;
    return <div key={temp}>{objJSX}</div>
  });

  return (
    <div>
      {jsxData}
    </div>
  )
}