import { useParams } from "react-router-dom";

const City = () => {
  const param = useParams();
  console.log(param);
  return (
    <div className="bg-purple-800 h-full flex items-center justify-center">
      City Name : {param.id}
    </div>
  );
};

export default City;
