import { ThreeCircles } from 'react-loader-spinner'; 

export const Loader = () => {
    return (
      <ThreeCircles
  height="80"
  width="80"
  color="#4fa94d"
  wrapperStyle={{ 
  display: 'block',
  marginTop: 20,
  marginLeft: 'auto',
  marginRight: 'auto',
}}
  wrapperClass=""
  visible={true}
  ariaLabel="three-circles-rotating"
  outerCircleColor=""
  innerCircleColor=""
  middleCircleColor=""
    />
    );
}