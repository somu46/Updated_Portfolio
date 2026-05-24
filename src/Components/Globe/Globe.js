import Globe3D from "./Globe3D";
import Somu from '../../Assets/SoumyajitRay.jpg'

function Globe() {
  const markers = [
    {
      lat: 22.5726,
      lng: 88.3639,
      src: Somu,
      label: "Kolkata"
    },
    {
      lat: 8.6698,
      lng: 7.0360,
      src: "https://i.pravatar.cc/150?img=1",
      label: "Abuja,Nigeria"
    }
  ];

  return (
    <div className="">
      <Globe3D markers={markers}/>
    </div>
  );
}

export default Globe;