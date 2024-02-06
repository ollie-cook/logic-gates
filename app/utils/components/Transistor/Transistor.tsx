interface TransistorProps {
  collectorIn: boolean;
  baseIn: boolean;
}

export default function Transistor(props: TransistorProps) {
  return (
    <svg viewBox="0 0 100 100">
      <circle cx="50" cy="50" r="30" fill="transparent" stroke="black" strokeWidth="2" />

      {/*collector in*/}
      <line x1="59.7" y1="0" x2="59.7" y2="25.7" stroke={props.collectorIn == true ? "red" : "black"} strokeWidth="2" />
      <line x1="35" y1="45" x2="60" y2="25" stroke={props.collectorIn == true ? "red" : "black"} strokeWidth="2" />

      {/*base in */}
      <line x1="35" y1="35" x2="35" y2="65" stroke={props.baseIn == true ? "red" : "black"} strokeWidth="2" />
      <line x1="0" y1="50" x2="35" y2="50" stroke={props.baseIn == true ? "red" : "black"} strokeWidth="2" />
      
      {/*emitter out*/}
      <line x1="35" y1="55" x2="60" y2="75" stroke={props.collectorIn == true && props.baseIn == true ? "red" : "black"} strokeWidth="2" />
      <line x1="59.7" y1="74.3" x2="59.7" y2="100" stroke={props.collectorIn == true && props.baseIn == true ? "red" : "black"} strokeWidth="2" />
      <polygon points="40.3,64.6 46.3,57.9 51.7,68.3" fill={props.collectorIn == true && props.baseIn == true ? "red" : "black"}  />
    </svg>
  )
}