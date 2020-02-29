import React from "react";
import { Spring } from "react-spring/renderprops";
import { useSelector } from "react-redux";

const Mirror = props => {
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
          className="mirror"
          width="100%"
          style={{
            display: splashScreenComplete ? "inline" : `${props.display}`,
            opacity: splashScreenComplete ? "1" : `${props.opacity}`
          }}
          viewBox="0 0 50 50"
        >
          <g transform="translate(0 -1135) scale(4)">
            <g
              id="g826"
              transform="matrix(.18327 0 0 .18644 67.39 303.176)"
              strokeWidth=".265"
            >
              <path
                d="M-341.438-35.57c-.827-.826-.87-2.555-.125-4.944.897-2.873 3.58-5.725 6.355-6.755.655-.243 1.802-.634 1.984-.772.364-.277 1.041-5.155.697-5.678-.107-.162-1.286-.69-2.305-.863-8.215-1.394-15.454-5.746-19.636-12.675-2.554-4.23-3.56-8.1-3.777-12.61-.133-2.752-.481-2.373.224-3.028.67-.622 4.862 2.75 6.574-.129l.738-1.24.322-1.593c1.129-5.592 5.248-10.998 10.284-13.498 3.176-1.577 5.707-2.06 10.04-1.914 4.122.138 6.276.703 9.118 2.392 2.838 1.687 6.115 5.242 7.664 8.317.309.612.896 2.279 1.306 3.704l.744 2.591 3.646.133c3.645.132 2.614.67 3.288 1.455.647.754.764.531.61 2.88-.84 12.782-9.724 22.847-22.354 25.263-.873.167-2.403.324-2.73.387-.573.11-.5.856-.5 3.521 0 1.851.775 2.742.97 2.742.835 0 3.714 1.718 4.958 2.96 1.688 1.683 2.563 3.304 3.122 5.781.466 2.063.355 2.901-.488 3.687-.557.519-.897.536-10.328.536h-9.751zm16.732-23.221c4.687-.843 7.34-2.81 10.481-5.81 2.494-2.383 4.475-4.962 5.677-7.91.92-2.256 2.226-6.8 1.967-7.22-.082-.132-2.225-.598-3.09-.272l-1.682.633-.43 1.918c-.717 3.192-2.458 6.419-4.813 8.922-2.946 3.132-5.286 4.58-9.484 5.867-2.037.625-6.988.672-9.271.088-7.677-1.964-13.07-7.283-14.886-14.681l-.602-2.378-1.88-.441-2.068.44-.28.918c.008 1.383 1.388 5.4 2.42 7.527 1.893 3.905 5.123 8.014 8.752 10.208 1.922 1.162.417 2.146 7.896 3.796 2.237.494 8.031-.852 10.507-1.563zm-6.322-17.721c.403-.403.429-4.081.03-4.327-.158-.098-.694.216-1.19.698-1.18 1.143-1.266 2.564-.206 3.398.81.637.938.659 1.366.23zm-2.921-8.216c1.38-1.346 2.674-2.83 2.874-3.298.449-1.048.48-3.823.047-4.255-.174-.175-.491-.318-.704-.318-.485 0-6.825 6.226-7.34 7.208-.482.919-.245 1.904.622 2.586 1.222.961 1.792.718 4.5-1.923z"
                id="path840"
                fill="#d0eafc"
              />
              <path
                d="M-341.438-35.57c-.514-.513-.65-.92-.65-1.956 0-4.162 3.024-8.279 7.277-9.908l1.587-.607.075-2.66c.054-1.926-.019-2.733-.264-2.925-.187-.146-1.412-.474-2.721-.728-5.808-1.127-10.14-3.354-14.332-7.368-4.35-4.165-7.335-9.86-8.278-15.796-.305-1.923-.362-4.497-.113-5.145.312-.815 1.29-1.072 4.571-1.205 3.728-.15 3.474.022 4.113-2.778 1.163-5.088 5.34-10.361 10.07-12.71 3.176-1.576 5.707-2.058 10.04-1.913 4.122.138 6.276.703 9.118 2.392 2.838 1.687 6.115 5.242 7.664 8.317.309.612.896 2.279 1.305 3.704l.745 2.591 3.305.135c4.859.197 5.212.539 4.895 4.739-.724 9.59-7.016 18.648-15.924 22.923-2.451 1.177-6.75 2.496-8.135 2.498-1.61 0-1.768.286-1.768 3.193 0 2.281.063 2.667.463 2.805 3.07 1.064 5.885 3.329 7.11 5.72.795 1.555 1.538 4.718 1.316 5.605-.09.36-.423.896-.74 1.19-.557.52-.897.537-10.328.537h-9.751zm15.946-23.179c9.196-2.345 16.348-9.996 17.774-19.012.269-1.701.022-1.926-2.002-1.821l-1.543.08-.56 2.198c-1.513 5.945-5.946 11.295-11.214 13.535-3.033 1.29-4.493 1.593-7.684 1.595-6.804.005-12.564-2.853-16.263-8.068-1.84-2.594-2.646-4.457-3.58-8.268l-.275-1.124h-3.948v1.028c0 2.77 2.288 8.237 4.83 11.54 3.244 4.216 8.905 7.716 14.352 8.873 1.631.347 7.931 0 10.113-.556zm-5.542-12.746l.073-4.164.72-.378c.397-.209 2.299-1.976 4.227-3.928 3.005-3.043 3.506-3.669 3.506-4.383 0-.96-1.149-2.376-1.985-2.447-1.244-.104-1.638.129-3.821 2.266-1.264 1.237-2.38 2.249-2.48 2.249-.1 0-.18-1.074-.18-2.387v-2.388l1.07-1.162c1.419-1.539 1.615-2.657.664-3.787-.385-.457-.933-.905-1.217-.996-.42-.133-.518-.406-.518-1.447 0-2.376-.29-2.498-3.797-1.602-6.485 1.659-11.006 7.457-11.016 14.127-.006 3.997 1.481 7.622 4.299 10.474 2.473 2.504 6.427 4.299 9.191 4.172l1.19-.055z"
                id="path838"
                fill="#bae1fd"
              />
              <path
                d="M-341.438-35.57c-.514-.513-.65-.92-.65-1.956 0-4.162 3.024-8.279 7.277-9.908l1.587-.607.075-2.66c.054-1.926-.019-2.733-.264-2.925-.187-.146-1.412-.474-2.721-.728-5.808-1.127-10.14-3.354-14.332-7.368-4.35-4.165-7.335-9.86-8.278-15.796-.305-1.923-.362-4.497-.113-5.145.312-.815 1.29-1.072 4.571-1.205 3.728-.15 3.474.022 4.113-2.778 1.163-5.088 5.34-10.361 10.07-12.71 3.176-1.576 5.707-2.058 10.04-1.913 4.122.138 6.276.703 9.118 2.392 2.838 1.687 6.115 5.242 7.664 8.317.309.612.896 2.279 1.305 3.704l.745 2.591 3.305.135c4.859.197 5.212.539 4.895 4.739-.724 9.59-7.016 18.648-15.924 22.923-2.451 1.177-6.75 2.496-8.135 2.498-1.61 0-1.768.286-1.768 3.193 0 2.281.063 2.667.463 2.805 3.07 1.064 5.885 3.329 7.11 5.72.795 1.555 1.538 4.718 1.316 5.605-.09.36-.423.896-.74 1.19-.557.52-.897.537-10.328.537h-9.751zm15.946-23.179c9.196-2.345 16.348-9.996 17.774-19.012.269-1.701.022-1.926-2.002-1.821l-1.543.08-.56 2.198c-1.513 5.945-5.946 11.295-11.214 13.535-3.033 1.29-4.493 1.593-7.684 1.595-6.804.005-12.564-2.853-16.263-8.068-1.84-2.594-2.646-4.457-3.58-8.268l-.275-1.124h-3.948v1.028c0 2.77 2.288 8.237 4.83 11.54 3.244 4.216 8.905 7.716 14.352 8.873 1.631.347 7.931 0 10.113-.556zm-1.911-8.81c3.92-1.051 7.382-3.765 9.172-7.189 1.37-2.62 1.808-4.337 1.808-7.076 0-4.047-1.268-7.204-4.1-10.205-3.652-3.872-8.965-5.371-14.249-4.02-6.485 1.659-11.006 7.457-11.016 14.127-.01 6.719 4.457 12.576 10.919 14.316 1.773.478 5.764.502 7.466.046z"
                id="path836"
                fill="#c7d1d9"
              />
              <path
                d="M-341.438-35.57c-.511-.51-.65-.922-.65-1.936 0-4.948 3.982-9.46 9.23-10.456l1.607-.306.072-4.637.072-4.637 2.233-.202c7.076-.64 13.837-4.724 17.99-10.864 1.925-2.844 3.84-8.175 3.669-10.211l-.08-.948-1.992-.076-1.992-.076-.461 2.193c-.714 3.392-2.399 6.585-4.856 9.196-2.946 3.132-5.286 4.58-9.484 5.867-2.037.625-6.988.672-9.271.088-7.787-1.992-13.026-7.225-14.96-14.943-.46-1.837-.538-2.757-.43-5.027.16-3.322.646-5.237 2.049-8.07a19.446 19.446 0 0112.675-10.22c1.912-.478 2.77-.54 5.953-.434 3.16.106 4.018.231 5.7.831 2.614.933 4.485 2.071 6.556 3.99 3.162 2.93 4.902 5.901 6 10.248l.622 2.465 3.004.065c1.652.035 3.28.129 3.617.208 1.01.235 1.33 1.479 1.078 4.19-.918 9.908-7.442 18.965-16.433 22.813-2.385 1.021-5.447 1.886-7.56 2.135-.956.113-1.48.315-1.654.64-.14.26-.253 1.559-.253 2.885v2.412l.992.4c3.563 1.437 5.856 3.286 7.11 5.735.795 1.555 1.538 4.718 1.316 5.605-.09.36-.424.896-.74 1.19-.557.52-.897.537-10.328.537h-9.752zm14.261-31.784c5-1.289 9.266-5.586 10.628-10.705.516-1.937.498-5.75-.036-7.62-1.157-4.058-4.026-7.68-7.444-9.4-4.586-2.309-8.93-2.317-13.713-.026-1.935.927-2.72 1.49-4.039 2.9-5.708 6.102-5.636 15.062.168 20.894 1.947 1.957 4.943 3.62 7.33 4.069 2.102.395 5.34.344 7.106-.112z"
                id="path834"
                fill="#eaadcd"
              />
              <path
                d="M-341.17-35.771c-.64-.763-.701-1.005-.578-2.315.302-3.218 2.358-6.495 5.075-8.087 1.371-.804 3.96-1.711 4.88-1.711h.686v-9.658l2.233-.202c7.076-.64 13.837-4.724 17.99-10.864 1.925-2.844 3.84-8.175 3.669-10.211l-.08-.948-2.146-.076-2.146-.076-.325 1.664c-1.06 5.43-4.586 10.449-9.307 13.245-.927.55-2.817 1.365-4.2 1.813-2.388.773-2.678.808-5.82.692-2.841-.104-3.675-.244-5.91-.993-6.547-2.194-11.027-7.093-12.77-13.967-.77-3.035-.797-5.221-.103-8.363 1.3-5.878 5.267-10.971 10.448-13.415 3.575-1.686 9.402-2.59 11.888-1.843.447.134 1.527.444 2.4.689 3.35.94 6.853 3.296 9.324 6.271 1.527 1.839 3.374 5.668 3.926 8.142.244 1.091.577 2.071.74 2.178.164.107 1.704.197 3.423.199 1.72.002 3.344.12 3.61.263.788.421 1 1.537.77 4.073-.89 9.877-7.434 18.963-16.427 22.812-2.385 1.021-5.447 1.886-7.56 2.135-.997.117-1.478.311-1.671.672-.15.28-.234 1.627-.188 3.006.07 2.077.017 2.5-.313 2.512-.218.007.265.225 1.073.484 4.495 1.438 7.184 4.293 8.067 8.565.437 2.112.358 2.585-.616 3.702-.37.425-1.185.463-9.864.463h-9.46zm12.841-31.174c.978-.154 2.68-.727 3.945-1.329 5.563-2.645 8.892-8.57 8.36-14.881-.525-6.246-4.524-11.206-10.628-13.183-2.504-.81-6.677-.822-8.953-.023-6.89 2.416-11.064 8.464-10.632 15.404.331 5.332 3.486 10.235 8.073 12.544 3.236 1.63 6.097 2.057 9.835 1.468z"
                id="path832"
                fill="#b3c4cc"
              />
              <path
                d="M-341.17-35.771c-.64-.763-.701-1.005-.578-2.315.39-4.149 3.213-7.666 7.342-9.147 2.229-.799 3.953-.952 5.548-.494 4.562 1.312 7.448 4.301 8.346 8.642.437 2.112.358 2.585-.616 3.702-.37.425-1.185.463-9.864.463h-9.46zm6.359-27.057c-7.728-1.7-13.162-6.965-15.108-14.637-.77-3.035-.797-5.221-.102-8.363 1.299-5.878 5.266-10.971 10.447-13.415 3.575-1.686 9.402-2.59 11.888-1.843.447.134 1.527.444 2.4.689 3.35.94 6.853 3.296 9.324 6.271 2.395 2.884 4.566 8.71 4.566 12.253 0 1.728-.82 5.368-1.696 7.522-1.472 3.625-4.658 7.287-8.127 9.341-.927.55-2.789 1.353-4.137 1.786-2.094.673-2.843.784-5.159.767-1.49-.012-3.423-.179-4.296-.37zm6.482-4.117c.978-.154 2.68-.727 3.945-1.329 5.563-2.645 8.892-8.57 8.36-14.881-.525-6.246-4.524-11.206-10.628-13.183-2.504-.81-6.677-.822-8.953-.023-6.89 2.416-11.064 8.464-10.632 15.404.331 5.332 3.486 10.235 8.072 12.544 3.237 1.63 6.098 2.057 9.836 1.468z"
                id="path830"
                fill="#f18db5"
              />
              <path
                d="M-340.626-35.707c-.66-.69-.756-.984-.724-2.218.057-2.163.939-4.183 2.617-5.995 1.855-2.004 3.944-3.062 6.886-3.49 1.903-.275 2.35-.257 3.631.146 2.129.671 4.577 2.431 5.722 4.113 1.79 2.63 2.43 5.989 1.404 7.364l-.549.735-9.113.07-9.113.069zm6.796-27.282c-2.335-.357-5.664-1.628-7.647-2.92-.926-.604-2.494-1.965-3.485-3.027-2.7-2.89-4.27-6.23-5.079-10.802-.575-3.252.578-8.401 2.682-11.972 1.153-1.957 4.447-5.26 6.38-6.398 3.418-2.012 10.865-3.8 12.488-2.996.307.152 1.333.461 2.279.688.946.226 2.731.907 3.968 1.513 1.834.898 2.69 1.545 4.639 3.504 3.181 3.2 4.56 5.818 5.543 10.536.522 2.5.5 3.809-.113 6.577-1.551 7.016-5.803 12.018-12.318 14.493-2.033.773-2.767.916-5.027.982-1.455.042-3.394-.038-4.31-.178zm5.369-3.69c5.478-.779 10.483-5.24 12.23-10.904.67-2.17.598-6.755-.141-8.93-2.152-6.333-7.32-10.253-14.133-10.719-1.988-.136-2.834-.068-4.45.356-5.46 1.432-9.808 5.748-11.239 11.156-.509 1.923-.495 5.74.028 7.767 1.02 3.952 4.153 7.996 7.518 9.704 3.538 1.795 5.969 2.17 10.187 1.57z"
                id="path828"
                fill="#f65890"
              />
            </g>
            <path
              d="M5.86 286.568c.129-.125.388-.376.527-.505.14-.13.159-.138.18-.142a.181.181 0 01.07 0 .145.145 0 01.062.036c.02.018.04.043.052.083.013.04.018.096.02.175.003.08.003.183-.004.272-.007.089-.021.164-.03.204-.007.04-.01.046-.015.055-.005.01-.057.118-.121.197-.065.078-.163.173-.294.302-.132.13-.296.294-.405.392a.899.899 0 01-.206.15.25.25 0 01-.123.038.29.29 0 01-.135-.047.499.499 0 01-.23-.288.422.422 0 01.014-.184.28.28 0 01.037-.073c.017-.025.04-.053.118-.143l.285-.32c.068-.077.068-.077.197-.202z"
              id="path826"
              fill="#fff"
              stroke="none"
              strokeWidth=".013"
              strokeLinecap="butt"
              strokeLinejoin="miter"
              strokeMiterlimit="4"
              strokeDasharray="none"
              strokeOpacity="1"
              fillOpacity="1"
            />
            <path
              d="M6.372 288.424c.009-.015.025-.046.046-.077a.722.722 0 01.173-.184.459.459 0 01.079-.049.14.14 0 01.042-.015c.009 0 .017 0 .023.008a.531.531 0 01.034.124c.005.033.008.073.01.127a3.423 3.423 0 01-.009.374.672.672 0 01-.018.117.217.217 0 01-.023.053c-.005.009-.005.009-.032.031-.026.023-.008.008-.023.018-.014.01-.024.014-.037.013a.135.135 0 01-.042-.011.259.259 0 01-.046-.025.59.59 0 01-.186-.203.389.389 0 01-.028-.146c0-.017.001-.033.006-.055l.018-.07c.005-.014.005-.015.013-.03z"
              id="path831"
              fill="#fff"
              stroke="none"
              strokeWidth=".001"
              strokeLinecap="butt"
              strokeLinejoin="miter"
              strokeMiterlimit="4"
              strokeDasharray="none"
              strokeOpacity="1"
              fillOpacity="1"
            />
          </g>
        </svg>
      )}
    </Spring>
  );
};

export default Mirror;
