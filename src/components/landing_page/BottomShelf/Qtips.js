import React from "react";
import { Spring } from "react-spring/renderprops";
import { useSelector } from "react-redux";

const Qtips = props => {
  const splashScreenComplete = useSelector(
    state => state.splashScreenComplete.splashScreenComplete
  );
  return (
    <Spring
      from={{ display: "none", opacity: "0" }}
      to={{ display: "inline", opacity: "1" }}
      config={{
        delay:
          props.initialScreenSize >= 600
            ? props.currentScreenSize >= 600 || !props.currentScreenSize
              ? 5000
              : 4000
            : 4000,
        duration: 550
      }}
    >
      {props => (
        <svg
          className="q_tips"
          width="100%"
          style={{
            display: splashScreenComplete ? "inline" : `${props.display}`,
            opacity: splashScreenComplete ? "1" : `${props.opacity}`
          }}
          viewBox="0 0 50 50"
        >
          <g id="layer1" transform="translate(0 -275) scale(1)">
            <g
              id="g826"
              transform="matrix(.15631 0 0 .19135 86.487 301.664)"
              strokeWidth=".265"
            >
              <path
                d="M-528.524-31.45c-4.139-.326-9.162-.976-10-1.295l-.716-.272v-15.188c0-16.186.017-15.976-1.237-15.735-1.097.212-1.136.756-1.14 15.763-.004 14.292-.006 14.353-.546 14.353-.765 0-2.038-.705-2.36-1.308-.18-.334-.273-6.33-.273-17.43v-16.92l-.791-.626-.792-.625-.002-5.526-.002-5.526.653-.605c.71-.658.683-.647 3.58-1.412 8.676-2.29 31.286-2.722 44.45-.848 2.422.344 6.217 1.288 7.225 1.797 1.77.894 1.771.896 1.771 6.52v5.116l-1.058.95-1.058.95v17.044c0 15.902-.031 17.072-.463 17.45-1.438 1.26-4.752 2.148-10.782 2.885-3.608.442-6.381.567-14.023.634-5.239.045-10.835-.02-12.435-.146zm47.867-3.279c-2.7-1.175-3.166-4.66-1.145-8.564l1.035-2V-71.183l-1.061-2.157c-1.403-2.849-1.627-4.817-.744-6.507.852-1.629 1.746-2.21 3.588-2.33 1.863-.12 3.046.44 4.095 1.946 1.219 1.746.87 4.507-.964 7.636l-.68 1.161v26.27l.68 1.161c1.052 1.796 1.702 3.822 1.692 5.28-.01 1.608-.982 3.202-2.38 3.906-1.085.546-2.97.586-4.116.087z"
                id="path840"
                fill="rgb(255,255,255)"
              />
              <path
                d="M-480.362-45.936c-.077-.202-.14-5.826-.14-12.5 0-9.398.074-12.18.33-12.337.456-.283 2.64-.28 3.043.004.257.18.33 2.97.327 12.438-.002 6.712-.092 12.323-.199 12.469-.31.423-3.194.36-3.36-.074zm-48.635-21.236c-8.313-.524-14.575-1.728-16.328-3.138l-.926-.745-.072-5.23c-.078-5.689-.062-5.762 1.429-6.385 1.2-.502 4.437-1.325 6.616-1.682 6.055-.992 18.44-1.494 27.15-1.101 10.127.457 13.282.802 17.661 1.929 2.866.737 2.84.727 3.706 1.456l.792.666v4.889c0 2.689-.116 5.105-.258 5.37-1.017 1.901-7.354 3.314-17.866 3.983-4.524.288-17.254.28-21.904-.012z"
                id="path838"
                fill="rgb(168,172,176)"
              />
              <path
                d="M-480.111-46.311c-.073-.19-.101-5.703-.063-12.251l.069-11.906h2.91v24.341l-1.392.08c-.96.056-1.433-.027-1.524-.264zm-48.136-21.134c-5.057-.303-8.647-.74-11.957-1.453-3.382-.73-4.127-.98-5.318-1.784l-.858-.58-.002-5.075-.002-5.076.728-.51c1.457-1.021 5.529-2.01 11.046-2.683 8.787-1.072 25.522-1.075 33.602-.007 5.48.724 9.855 1.755 10.966 2.584l.676.505.072 5.049c.07 4.913.056 5.064-.513 5.593-2.419 2.254-14.249 3.766-28.796 3.68-3.42-.021-7.76-.13-9.644-.243z"
                id="path836"
                fill="rgb(168,172,176)"
              />
              <path
                d="M-479.973-58.298v-12.038h2.646V-46.26h-2.646zm-49.742-9.405a297.19 297.19 0 00-4.895-.528c-4.134-.413-8.972-1.544-10.542-2.464l-1.231-.722v-9.948l1.256-.674c5.734-3.075 28.68-4.25 44.781-2.293 3.063.372 8.41 1.52 9.387 2.014 1.754.887 1.726.796 1.722 5.607-.004 4.984-.123 5.408-1.756 6.31-1.384.762-5.938 1.75-10.014 2.17-1.747.18-4.125.434-5.285.566-2.54.288-20.995.258-23.423-.038z"
                id="path834"
                fill="rgb(163,167,171)"
              />
              <path
                d="M-479.645-58.231l.069-11.708.992-.082.992-.083v23.58h-2.122zM-529.98-68a662.93 662.93 0 00-4.63-.516c-5.03-.543-9.086-1.526-10.886-2.638l-.888-.55v-9.395l1.389-.696c7.274-3.65 35.503-4.4 50.063-1.333 3.313.698 4.99 1.362 5.268 2.086.265.69.19 8.489-.089 9.222-.14.367-.71.9-1.266 1.184-1.296.661-6.541 1.769-10.122 2.138-1.528.157-3.737.403-4.908.546-2.573.315-21.143.278-23.931-.048z"
                id="path832"
                fill="rgb(158,162,166)"
              />
              <path
                d="M-522.042-75.496c-.817-.869-2.837-.944-3.572-.132-.648.717-1.758.671-2.484-.101-.339-.36-1.046-.703-1.654-.8-.893-.143-1.188-.064-1.855.498-1.047.88-1.388.845-2.491-.258-.76-.76-1.122-.926-2.02-.926-.64 0-1.293.179-1.57.43-.772.698-1.82.537-2.59-.399-.51-.62-1.13-.951-2.464-1.32-.98-.27-2.2-.775-2.71-1.122-.924-.63-1.262-1.558-.567-1.558.2 0 .512-.178.692-.395.602-.725 5.313-1.858 10.32-2.482 5.063-.63 9.285-.833 17.29-.83 10.789.004 16.162.424 22.514 1.762 4.892 1.031 6.13 1.714 5.442 3-.358.67-1.29 1.145-3.384 1.73-1.22.341-1.805.665-2.2 1.22-.407.572-.753.757-1.415.757-.481 0-1.024-.178-1.205-.396-.19-.23-.768-.397-1.375-.397-.805 0-1.226.179-1.824.777-1.107 1.107-1.583 1.18-2.635.403-.758-.56-1.092-.646-1.97-.505-.603.097-1.32.444-1.665.806-.758.794-1.813.817-2.624.055-.859-.807-2.618-.707-3.462.196-.779.834-1.754.83-2.486-.013-.452-.52-.826-.661-1.754-.661-.917 0-1.314.147-1.791.661-.338.364-.896.662-1.241.662-.346 0-.908-.298-1.25-.662z"
                id="path830"
                fill="rgb(153,157,161)"
              />
              <path
                d="M-521.499-75.989c-.267-.702-.945-.953-2.595-.958-.874-.003-1.255.144-1.701.658-.72.827-1.194.833-2.053.027-.442-.415-1.145-.697-2.03-.814-1.218-.161-1.427-.111-2.09.502-.404.375-.814.682-.912.682-.097 0-.546-.417-.997-.926-.651-.736-1.028-.933-1.834-.958-1.412-.043-1.748.025-2.227.452-.652.583-1.546.461-1.815-.247-.246-.647-.93-1-2.925-1.512a12.911 12.911 0 01-2.207-.824c-.999-.509-1.01-.53-.536-1.052.265-.293.842-.683 1.281-.865 1.012-.42 6.973-1.607 9.927-1.977 8.917-1.117 25.37-1.01 34.66.224 3.604.479 8.488 1.765 9.112 2.4l.546.554-.627.515c-.345.284-1.476.764-2.514 1.068-1.31.383-2.094.786-2.567 1.32-.77.87-1.435.972-2.144.33-.886-.802-3.734-.305-4.055.708-.261.822-.969.87-1.67.113-.6-.647-.758-.686-2.134-.525-1.121.131-1.62.333-2.026.82-.688.824-1.356.82-2.13-.015-.973-1.05-3.92-.846-4.356.302-.307.806-.99.8-1.3-.012-.465-1.225-3.83-1.224-4.633.001-.529.808-1.143.812-1.448.01z"
                id="path828"
                fill="rgb(158,152,156)"
              />
            </g>
          </g>
        </svg>
      )}
    </Spring>
  );
};

export default Qtips;
