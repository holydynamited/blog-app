import React from "react";
import Edit from "../img/edit.png";
import deleteIcon from "../img/delete.png";
import Menu from "../components/Menu";
import { Link } from "react-router-dom";

const Single = () => {
  return (
    <div className="single">
      <div className="content">
        <img
          src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt=""
        />
        <div className="user">
          <img
            src="https://images.pexels.com/photos/33866528/pexels-photo-33866528.jpeg"
            alt=""
          />

          <div className="info">
            <span>John</span>
            <p>Posted 2 days ago</p>
          </div>
          <div className="edit">
            <Link to={`/write?edit=2`}>
              <img src={Edit} alt="" />
            </Link>
            <img src={deleteIcon} alt="" />
          </div>
        </div>
        <h1>Lorem ipsum dolor sit amet.</h1>
        <p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget
            consequat magna. Nullam tincidunt, nunc non suscipit vulputate,
            lorem velit pretium elit, sed sodales purus sem nec sapien. Morbi
            euismod, sem sed tincidunt feugiat, magna mauris faucibus risus,
            vitae hendrerit arcu lectus ac purus.
          </p>

          <p>
            Curabitur aliquet, lectus ac dapibus posuere, enim mauris luctus
            libero, in pulvinar ligula eros sed urna. Suspendisse potenti.
            Praesent vel turpis et elit tincidunt faucibus ac ut augue. Nulla
            facilisi. Phasellus cursus posuere nibh in porttitor. Cras ac luctus
            elit. Proin blandit, augue vitae vehicula elementum, nulla nunc
            vulputate mauris, vitae facilisis leo nisl nec ligula.
          </p>

          <p>
            Etiam semper ante at elit venenatis tincidunt. Vivamus sagittis,
            ligula non sodales congue, mauris nisi pretium libero, vel aliquam
            libero lorem ut quam. Aliquam erat volutpat. Nunc fermentum magna at
            ligula feugiat, non volutpat risus hendrerit. Mauris scelerisque,
            libero nec porta bibendum, neque nisl tincidunt mauris, in feugiat
            ligula magna a est.
          </p>

          <p>
            Integer mattis convallis velit at tincidunt. Aenean eget metus at
            odio blandit dictum. Vestibulum vulputate leo ut velit suscipit, et
            posuere nunc fringilla. Ut ullamcorper orci et metus cursus, at
            viverra sapien tempor.
          </p>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget
            consequat magna. Nullam tincidunt, nunc non suscipit vulputate,
            lorem velit pretium elit, sed sodales purus sem nec sapien. Morbi
            euismod, sem sed tincidunt feugiat, magna mauris faucibus risus,
            vitae hendrerit arcu lectus ac purus.
          </p>

          <p>
            Curabitur aliquet, lectus ac dapibus posuere, enim mauris luctus
            libero, in pulvinar ligula eros sed urna. Suspendisse potenti.
            Praesent vel turpis et elit tincidunt faucibus ac ut augue. Nulla
            facilisi. Phasellus cursus posuere nibh in porttitor. Cras ac luctus
            elit. Proin blandit, augue vitae vehicula elementum, nulla nunc
            vulputate mauris, vitae facilisis leo nisl nec ligula.
          </p>

          
        </p>
      </div>
      <Menu/>
    </div>
  );
};

export default Single;
