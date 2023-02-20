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
    return <div key={temp} className="border border-custom-orange-light border-2 w-24 h-32 flex justify-center 
    items-center flex-col ">{objJSX}</div>
  });

  return (
    <div className="border border-black flex gap-3 flex-wrap">
      {jsxData}
    </div>
  )
}