import React from "react";
import "./linkTree.css";
import "../../../public/styles.css";
import Link from "../../../components/Link/Link";
import { Link as Link1 } from "react-router-dom";
import { FcShare } from "react-icons/fc";
import Socialmedia from "../../../components/Socialmedia/Sociamedia";

export const LinkTree = (data) => {
  const avatar = data.data.userData?.avatar;
  const name = data.data.userData?.name;
  const link = data.data.userData?.link;
  const socialLinks = data.data.userData?.social;
  const bio = data.data.userData?.bio;
  function hamdleShare() {
    navigator.clipboard.writeText(window.location.href);
    alert("Link Copied!");
  }
  return (
    <>
      <div className="linktreeContainer">
        <Link1 to={"/register"} className="getYourOwnLinkTree">
          Get Your Own LinkTree
        </Link1>

        <div className="linktreeContainerInner">
          <div className="avatarContainer">
            <img src={avatar} alt="user avatar" className="avatar" />
          </div>

          <p className="userhandle">
            {name}
            <FcShare onClick={hamdleShare} className="shareBtn" />
          </p>
          <p className="userhandle">{bio}</p>
          <div className="socialmediaContainerMain">
            <Socialmedia socialData={socialLinks ? socialLinks[0] : ""} />
          </div>

          <div className="linkContainer">
            {link?.map((item, i) => {
              if ((item.url && item.title) != "") {
                return <Link key={i} linkData={item} />;
              }
            })}
          </div>
        </div>
      </div>
    </>
  );
};
