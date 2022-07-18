import { useState } from "react";
import { css } from "@emotion/react";
import { PropagateLoader } from "react-spinners";
import '../assets/css/spinLoader.css'

// Can be a string as well. Need to ensure each key-value pair ends with ;
const override = css`
  display: block;
  margin: auto;
  border-color: red;
`;

export const SpinLoader=({color,title})=> {
  // eslint-disable-next-line no-unused-vars
  let [loading, setLoading] = useState(true);

  return (
    <div className="sweet-loading" style={{width:'100%'}}>
      <h4>{title}</h4>
      <PropagateLoader color={color} loading={loading} css={override} size={20} />
    </div>
  );
}
