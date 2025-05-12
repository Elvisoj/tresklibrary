import React from "react";
import { Link } from "react-router-dom";
import { supabase } from "../../config/supabaseClient";

function ListItem({ listData }) {
  return (
    <ul className="list-menu">
      {listData.map((item) => (
        <li key={item.context} onClick={item.clickFxns}>
          <Link className={item.classlist} to={item.path}>
            {item.context}
          </Link>
        </li>
      ))}
      <button onClick={() => supabase.auth.signOut()} className="btn sign-out">
        SignOut
      </button>
    </ul>
  );
}

export default ListItem;
