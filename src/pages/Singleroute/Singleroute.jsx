import React from "react";
import { useGetDeteilProductQuery } from "../../context/productsApi";
import { useParams } from "react-router-dom";
import avatar from "../../assets/avatar.png";
import "./Singleroute.css";
function Singleroute() {
  let { id } = useParams();
  let { data } = useGetDeteilProductQuery(id);
  return (
    <div className="container">
      <div className="products">
        <div key={data?.id} className="p">
          <img className="p-image" src={data?.images[0]} alt="" />
          <div className="p1">
            <div className="d1" style={{ justifyContent: "center" }}>
              <div className="d4">
                <img src={avatar} alt="" />
                <p>Andrew Jonson</p>
              </div>
              <p>Posted on 27th January 2021</p>
            </div>
            <h1>{data?.title}</h1>
            <p>
              Writing UX copies can be a little frustrating and confusing, and
              sometimes we are unsure about how to get the right word. To crack
              the code for the UX copies, we at Zeta Design wanted to build a
              Figma plugin for the larger design community. The plugin is called
              the Ghost UXWriter and has a set of UX copies cataloged and
              categorized with a voice and tone variation ranging from plain,
              casual to playful. The intention to build this Figma plugin
              originated from our Medium blog post, ‘Designing voice and tone
              for error messages.
              <br />
              <br />
              Writing UX copies can be a little frustrating and confusing, and
              sometimes we are unsure about how to get the right word. To crack
              the code for the UX copies, we at Zeta Design wanted to build a
              Figma plugin for the larger design community. The plugin is called
              the Ghost UXWriter and has a set of UX copies cataloged.
              <br />
              <br />
              Writing UX copies can be a little frustrating and confusing, and
              sometimes we are unsure about how to get the right word. To crack
              the code for the UX copies, we at Zeta Design wanted to build a
              Figma plugin for the larger design community. The plugin is called
              the Ghost UXWriter and has a set of UX copies cataloged and
              categorized with a voice and tone variation ranging from plain,
              casual to playful. The intention to build this Figma plugin
              originated from our Medium blog post, ‘Designing voice.
            </p>
            <h1>{data?.description}</h1>
            <p>
              Writing UX copies can be a little frustrating and confusing, and
              sometimes we are unsure about how to get the right word. To crack
              the code for the UX copies, we at Zeta Design wanted to build a
              Figma plugin for the larger design community. The plugin is called
              the Ghost UXWriter and has a set of UX copies cataloged.
              <br />
              <br />
              Writing UX copies can be a little frustrating and confusing, and
              sometimes we are unsure about how to get the right word. To crack
              the code for the UX copies, we at Zeta Design wanted to build a
              Figma plugin for the larger design community. The plugin is called
              the Ghost UXWriter and has a set of UX copies cataloged and
              categorized with a voice and tone variation ranging from plain,
              casual to playful. The intention to build this Figma plugin
              originated from our Medium blog post, ‘Designing voice.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Singleroute;
