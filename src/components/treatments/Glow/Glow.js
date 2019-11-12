import React from "react";
import { Spring, animated } from "react-spring/renderprops";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSuitcase } from "@fortawesome/free-solid-svg-icons";
import { useInView } from "react-intersection-observer";
import "./Glow.css";

const Glow = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2
  });
  return (
    <div className="glow_wrapping" ref={ref}>
      {inView ? (
        <Spring
          from={{ position: "relative", opacity: 0 }}
          to={{ position: "relative", opacity: 1 }}
          config={{ duration: 1000 }}
        >
          {props => (
            <section className="glow_card" style={props}>
              <div className="glow_card_image">
                <Spring
                  from={{ x: 210, fill: "white" }}
                  to={{ x: 0, fill: "rgba(253, 253, 150, 0.7)" }}
                  config={{ delay: 300, duration: 2000 }}
                >
                  {props => (
                    <svg
                      className="glow_svg"
                      width="100%"
                      height="15rem"
                      viewBox="0 0 50.006 50.006"
                    >
                      <circle
                        cx="25"
                        cy="25"
                        r="23"
                        stroke="rgb(235, 178, 187)"
                        strokeWidth="0.5"
                        fill="white"
                      />
                      <g transform="translate(13, 12.5)">
                        <animated.path
                          className="glow_icon_path"
                          strokeDasharray="210"
                          strokeDashoffset={`${props.x}`}
                          stroke="#000"
                          strokeWidth="0.2"
                          d="M26.812 47.27c.988-.442 1.756-1.25 1.872-1.971l.044-.272h-7.293l.044.272c.143.89 1.202 1.824 2.49 2.195.6.174 2.243.044 2.843-.224zm3.64-3.893c.317-.107.589-.669.5-1.03-.044-.174-.222-.416-.396-.537-.306-.211-.493-.219-5.475-.219s-5.168.008-5.474.22c-.414.287-.529.762-.284 1.18.105.18.262.35.348.381.228.081 10.544.086 10.782.006zm-.02-3.354c.595-.255.704-1.147.192-1.557-.237-.189-.587-.204-5.4-.23-5.575-.03-5.615-.025-5.932.557-.296.545.038 1.127.728 1.267.576.117 10.133.083 10.412-.037zm.604-4.213c.153-1.693.91-3.277 2.963-6.194 2.303-3.274 2.938-4.747 3.039-7.059.139-3.18-.944-5.63-3.476-7.865-2.417-2.133-5.057-3.097-8.48-3.097-3.424 0-6.064.964-8.48 3.097-2.416 2.13-3.51 4.481-3.51 7.536 0 2.287.755 4.1 3.085 7.408 2.04 2.896 2.971 4.9 2.971 6.391 0 .34.038.652.084.693.046.04 2.702.061 5.902.045l5.819-.028zm-21.059.716c.184-.086 1.209-.932 2.278-1.881 2.175-1.93 2.352-2.198 1.784-2.7-.625-.55-.793-.463-3.199 1.66-2.395 2.113-2.503 2.273-1.894 2.81.348.307.563.33 1.031.111zm31.241-.111c.609-.537.501-.697-1.894-2.81-2.406-2.123-2.574-2.21-3.199-1.66-.57.504-.395.766 1.846 2.756 2.403 2.135 2.633 2.256 3.247 1.714zM9.204 22.67c.37-.327.384-.595.047-.972l-.256-.288H5.852c-2.978 0-3.156.012-3.39.219-.318.28-.314.658.01 1.021l.255.288h6.174zm38.488-.02c.324-.363.327-.741.01-1.021-.235-.207-.413-.219-3.39-.219h-3.144l-.256.288c-.337.377-.324.645.047.972l.303.267h6.174zm-33.58-10.31c.477-.498.346-.68-1.982-2.734-2.395-2.114-2.576-2.209-3.185-1.672-.593.524-.478.706 1.644 2.6 1.07.957 2.113 1.832 2.317 1.947.435.244.887.19 1.205-.14zm23.057.19c.184-.086 1.238-.96 2.343-1.945 2.188-1.948 2.301-2.124 1.705-2.65-.602-.532-.788-.436-3.124 1.613-1.18 1.035-2.178 1.996-2.218 2.135-.096.337.138.765.484.888.384.137.431.134.81-.042zM25.73 8.128c.196-.152.217-.436.217-2.933 0-2.619-.013-2.776-.248-2.982-.317-.28-.918-.28-1.236 0-.234.206-.247.363-.247 2.982 0 2.497.021 2.781.216 2.931.433.333.87.333 1.298.001z"
                          fill={`${props.fill}`}
                          stroke="#000"
                          stroke-width=".7"
                        />
                      </g>
                    </svg>
                  )}
                </Spring>
                <div className="glow_border_right" />
              </div>
              <div className="glow_description">
                <div className="glow_description_inner_wrapper">
                  <h2 style={{ fontWeight: 400 }}>GLOW</h2>
                  <p
                    className="glow_description_subheader"
                    style={{ opacity: 0.6 }}
                  >
                    Brightening
                  </p>
                  <p
                    className="glow_description_paragraph"
                    style={{ fontSize: "0.8rem", lineHeight: "20px" }}
                  >
                    Accelerate brightening and clarify skin with Glow.
                    Hyper-pigmentation and sun damage don’t stand a chance.
                  </p>
                  <div className="glow_card_bottom_wrapper">
                    <p>LEARN MORE</p>
                    <span className="glow_card_bottom_spacer" />
                    <FontAwesomeIcon
                      className="glow_suitcase_icon"
                      icon={faSuitcase}
                    />
                  </div>
                </div>
              </div>
            </section>
          )}
        </Spring>
      ) : null}
    </div>
  );
};

export default Glow;
