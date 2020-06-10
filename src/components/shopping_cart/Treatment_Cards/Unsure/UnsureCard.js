import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ACTION_UNSURE_NOT_IN_CART from "../../../../actions/InCart/Treatments/Unsure/ACTION_UNSURE_NOT_IN_CART";
import ACTION_DECREMENT_COUNTER from "../../../../actions/Counter/ACTION_DECREMENT_COUNTER";
import ACTION_AVAILABILITY_RESET from "../../../../actions/AvailabilityClicked/ACTION_AVAILABILITY_RESET";
import ACTION_SELECTED_DAY_RESET from "../../../../actions/SelectedDay/ACTION_SELECTED_DAY_RESET";
import ACTION_SELECT_TIME_NOT_ACTIVE from "../../../../actions/SelectTimeActive/ACTION_SELECT_TIME_NOT_ACTIVE";
import ACTION_REFORMATTED_DAY_RESET from "../../../../actions/SelectedDay/ReformattedDay/ACTION_REFORMATTED_DAY_RESET";
import ACTION_SELECTED_TIME_RESET from "../../../../actions/SelectedTime/ACTION_SELECTED_TIME_RESET";
import "../../CartCard.css";

const UnsureCard = (props) => {
  const dispatch = useDispatch();

  const reformattedDay = useSelector(
    (state) => state.reformattedDay.reformattedDay
  );
  const selectedTime = useSelector((state) => state.selectedTime.selectedTime);

  const handleRemove = () => {
    dispatch(ACTION_UNSURE_NOT_IN_CART());
    dispatch(ACTION_DECREMENT_COUNTER());
    dispatch(ACTION_AVAILABILITY_RESET());
    dispatch(ACTION_SELECTED_DAY_RESET());
    dispatch(ACTION_SELECT_TIME_NOT_ACTIVE());
    if (reformattedDay) {
      dispatch(ACTION_REFORMATTED_DAY_RESET());
    }
    if (selectedTime) {
      dispatch(ACTION_SELECTED_TIME_RESET());
    }
  };

  return (
    <div className="shopping_cart_card_wrapping">
      <div className="shopping_cart_card_image_circle">
        <svg width="100%" height="12rem" viewBox="0 0 50.006 50.006">
          <circle cx="25" cy="25" r="20" fill="rgb(241, 241, 241)" />
          <g strokeWidth=".265" transform="translate(9, 8)">
            <path
              className="not_sure_booked_emoji_icon_path"
              d="M23.816 49.23c-.333-.12-1.365-.49-2.293-.82l-1.686-.602-.248-3.115c-.137-1.712-.348-3.913-.47-4.89l-.223-1.775-1.792 2.05c-2.893 3.307-5.815 3.654-7.259.861-.566-1.096-.636-2.4-.48-9.019.1-4.255.313-8.12.472-8.586.236-.69.059-.944-.95-1.362-1.75-.725-3.986-3.345-4.304-5.045-.583-3.104.847-3.533 3.127-.937 1.337 1.521 1.513 1.614 1.528.809.024-1.255 1.533-1.232 2.013.03.197.518.837 1.256 1.424 1.64 1.395.915 2.12 2.46 1.503 3.203-.323.39-.341 1.239-.062 2.945.216 1.319.403 3.581.415 5.027l.023 2.63 1.562-3.054c1.06-2.073 1.912-3.214 2.653-3.552.874-.398 1.036-.676.812-1.396-2.528-8.153-2.35-11.08.859-14.092 2.42-2.273 3.936-2.88 7.188-2.882 4.306-.002 7.17 1.49 8.73 4.552.906 1.776 1.081 5.712.412 9.244-.441 2.324-.162 4.505.576 4.505.835 0 2.11 1.73 2.982 4.045l.838 2.225.021-1.948c.012-1.072.214-2.308.45-2.748.235-.44.434-1.748.443-2.906.023-2.93.198-3.366 1.588-3.941.67-.278 1.494-1.037 1.83-1.687.668-1.293 2.024-1.415 1.918-.173-.058.687-.014.685.809-.033 2.253-1.967 4.474-2.245 4.559-.57.066 1.308-1.992 3.534-4.394 4.751-1.526.774-1.93 1.17-1.729 1.694.827 2.15-.11 11.34-1.622 15.89-1.206 3.632-3.4 4.479-5.686 2.193l-.976-.977v6.706l-1.517.519c-1.534.525-11.924.997-13.044.592z"
              fill="#d0d0d0"
            />
            <path
              className="not_sure_booked_emoji_icon_path"
              d="M24.625 49.09l-1.415-.325 3.104-.106-.272-1.611c-.206-1.219-.004-2.4.827-4.845.963-2.835 1.036-3.385.592-4.456-.555-1.341-8.298-8.912-9.114-8.912-1.025 0-2.301 1.487-2.617 3.049-.178.882-.46 2.212-.626 2.956l-.302 1.353 1.626-.83c.894-.456 1.752-1.156 1.905-1.555.587-1.524 1.06.67 1.536 7.14l.477 6.479 1.432.595c.787.327 1.195.605.906.616-.29.011-1.042-.246-1.674-.573-1.136-.587-1.15-.644-1.44-5.462-.16-2.677-.43-4.868-.597-4.868s-.81.73-1.427 1.62c-2.209 3.188-5.283 4.135-7.108 2.19-.969-1.033-.98-1.138-.98-9.002 0-5.67.146-8.213.51-8.85.478-.835.364-.99-1.699-2.31-2.527-1.617-3.563-3.274-3.385-5.414.177-2.126 1.11-2.088 2.658.109 1.356 1.924 2.188 2.391 1.832 1.029-.24-.919 1.125-1.734 1.42-.848.095.284.973 1.418 1.95 2.519 1.48 1.666 1.708 2.133 1.36 2.785-.288.537-.29 1.58-.008 3.32.226 1.394.419 3.72.428 5.165l.017 2.63 1.44-2.832c1.725-3.392 2.053-3.818 3.31-4.296.722-.274.889-.546.657-1.07-.17-.386-.741-2.341-1.269-4.344-1.406-5.34-.99-7.222 2.258-10.219 2.07-1.91 3.7-2.52 6.721-2.52 3.043 0 4.95.69 6.916 2.503 2.444 2.253 2.803 3.762 2.238 9.427-.486 4.875-.339 6.126.763 6.476 1.1.349 1.592 1.12 2.634 4.128.741 2.14.957 2.479.975 1.533.014-.667.293-2.62.622-4.34.33-1.72.492-3.663.36-4.317-.21-1.051-.053-1.305 1.351-2.192.874-.551 1.903-1.482 2.287-2.068.766-1.17 1.471-1.055 1.471.24 0 .752.13.713 1.43-.43.786-.69 1.681-1.255 1.99-1.255.307 0 .847-.11 1.198-.245.493-.19.64.024.64.927 0 1.44-2.673 4.193-4.999 5.147-1.262.517-1.496.775-1.224 1.35.563 1.187.316 9.016-.386 12.217-.363 1.656-1.072 3.84-1.576 4.855-1.158 2.333-2.73 2.68-4.685 1.034l-1.253-1.054-.235 6.685-1.82.552c-2.145.65-9.7.985-11.73.52zM13.1 37.99c.608-1.282.812-4.404.657-10.065l-.052-1.922H9.66v5.246c0 4.083.151 5.562.682 6.675.87 1.826 1.911 1.852 2.758.067z"
              fill="#f2dba2"
            />
            <path
              className="not_sure_booked_emoji_icon_path"
              d="M24.625 49.09l-1.415-.325 3.104-.106-.272-1.611c-.206-1.219-.004-2.4.827-4.845.963-2.835 1.036-3.385.592-4.456-.555-1.341-8.298-8.912-9.114-8.912-1.025 0-2.301 1.487-2.617 3.049-.178.882-.46 2.212-.626 2.956l-.302 1.353 1.626-.83c.894-.456 1.752-1.156 1.905-1.555.587-1.524 1.06.67 1.536 7.14l.477 6.479 1.432.595c.787.327 1.195.605.906.616-.29.011-1.042-.246-1.674-.573-1.136-.587-1.15-.644-1.44-5.462-.16-2.677-.43-4.868-.597-4.868s-.81.73-1.427 1.62c-2.209 3.188-5.283 4.135-7.108 2.19-.969-1.033-.98-1.138-.98-9.002 0-5.67.146-8.213.51-8.85.478-.835.364-.99-1.699-2.31-2.527-1.617-3.563-3.274-3.385-5.414.177-2.126 1.11-2.088 2.658.109 1.356 1.924 2.188 2.391 1.832 1.029-.24-.919 1.125-1.734 1.42-.848.095.284.973 1.418 1.95 2.519 1.48 1.666 1.708 2.133 1.36 2.785-.288.537-.29 1.58-.008 3.32.226 1.394.419 3.72.428 5.165l.017 2.63 1.44-2.832c1.725-3.392 2.053-3.818 3.31-4.296.722-.274.889-.546.657-1.07-.17-.386-.741-2.341-1.269-4.344-1.406-5.34-.99-7.222 2.258-10.219 2.07-1.91 3.7-2.52 6.721-2.52 3.043 0 4.95.69 6.916 2.503 2.444 2.253 2.803 3.762 2.238 9.427-.486 4.875-.339 6.126.763 6.476 1.1.349 1.592 1.12 2.634 4.128.741 2.14.957 2.479.975 1.533.014-.667.293-2.62.622-4.34.33-1.72.492-3.663.36-4.317-.21-1.051-.053-1.305 1.351-2.192.874-.551 1.903-1.482 2.287-2.068.766-1.17 1.471-1.055 1.471.24 0 .752.13.713 1.43-.43.786-.69 1.681-1.255 1.99-1.255.307 0 .847-.11 1.198-.245.493-.19.64.024.64.927 0 1.44-2.673 4.193-4.999 5.147-1.262.517-1.496.775-1.224 1.35.563 1.187.316 9.016-.386 12.217-.363 1.656-1.072 3.84-1.576 4.855-1.158 2.333-2.73 2.68-4.685 1.034l-1.253-1.054-.235 6.685-1.82.552c-2.145.65-9.7.985-11.73.52zM13.1 37.99c.608-1.282.812-4.404.657-10.065l-.052-1.922H9.66v5.246c0 4.083.151 5.562.682 6.675.87 1.826 1.911 1.852 2.758.067zm12.525-16.177c.531-.389.655-.771.426-1.315-.295-.697-.348-.675-.59.245-.206.786-.528 1.012-1.443 1.012-.914 0-1.236-.226-1.442-1.012-.242-.92-.296-.942-.59-.245-.38.898.673 1.863 2.033 1.863.47 0 1.193-.246 1.606-.548zm5.37-.698c-.389-.227-.71-.722-.713-1.1-.006-.58-.066-.595-.382-.095-.455.72.194 1.638 1.145 1.62.577-.01.571-.063-.05-.425zm2.502-.27c.816-.663.83-.761.214-1.518-.556-.683-.623-.697-.432-.092.132.42-.105 1.048-.574 1.517-.989.99-.398 1.058.792.092zm-12.512-8.62c0-.753-.969-.86-1.477-.165-.946 1.294-.694 1.921.466 1.161.556-.364 1.01-.813 1.01-.997zm7.405-.408c3.537-.523 5.538-1.118 5.538-1.647 0-.217-1.023-.863-2.273-1.436-1.937-.887-2.66-1.01-4.902-.83-2.532.204-4.484 1.095-4.858 2.218-.244.734 1.426 2.125 2.551 2.125.57 0 2.344-.193 3.944-.43z"
              fill="#f6ce5b"
            />
            <path
              className="not_sure_booked_emoji_icon_path"
              d="M24.625 49.09l-1.415-.325 3.104-.106-.272-1.611c-.206-1.219-.004-2.4.827-4.845.963-2.835 1.036-3.385.592-4.456-.555-1.341-8.298-8.912-9.114-8.912-1.025 0-2.301 1.487-2.617 3.049-.178.882-.46 2.212-.626 2.956l-.302 1.353 1.626-.83c.894-.456 1.752-1.156 1.905-1.555.587-1.524 1.06.67 1.536 7.14l.477 6.479 1.432.595c.787.327 1.195.605.906.616-.29.011-1.042-.246-1.674-.573-1.136-.587-1.15-.644-1.44-5.462-.16-2.677-.43-4.868-.597-4.868s-.81.73-1.427 1.62c-2.209 3.188-5.283 4.135-7.108 2.19-.969-1.033-.98-1.138-.98-9.002 0-5.67.146-8.213.51-8.85.478-.835.364-.99-1.699-2.31-2.527-1.617-3.563-3.274-3.385-5.414.178-2.13 1.11-2.087 2.667.12 1.485 2.108 1.522 2.227.693 2.227-1.008 0-.682.994.568 1.733 1.67.986 3.68.932 3.68-.1 0-.578-.423-.907-1.558-1.212-1.343-.362-1.552-.572-1.517-1.528.026-.713.293-1.156.749-1.244.389-.075.707.053.707.285 0 .231.821 1.345 1.825 2.475 1.52 1.713 1.754 2.186 1.405 2.838-.287.537-.29 1.58-.007 3.32.226 1.394.419 3.719.428 5.165l.017 2.63 1.44-2.832c1.725-3.392 2.053-3.818 3.31-4.296.722-.274.889-.546.657-1.07-.17-.386-.743-2.341-1.272-4.344-.78-2.949-.891-3.987-.588-5.462.33-1.608.38-1.67.422-.53.065 1.746.65 1.989 1.865.773 1.142-1.142 1.28-2.152.452-3.285-.495-.677-.654-.702-1.315-.2-.413.313-.024-.125.866-.973 2.072-1.975 3.061-2.662 3.832-2.662.34 0-.02.32-.798.708-.998.499-1.452 1.022-1.54 1.773-.241 2.089 3.411 3.761 6.08 2.784.729-.267 2.564-.63 4.078-.808 1.514-.178 2.858-.428 2.987-.557.494-.494-1.228-2.384-2.84-3.116-.928-.422-1.45-.77-1.161-.775.985-.017 2.768 1.15 4.228 2.765 1.827 2.023 2.132 3.816 1.544 9.086-.488 4.38-.307 5.798.784 6.144 1.104.35 1.595 1.119 2.638 4.13.74 2.14.956 2.478.975 1.533.013-.667.293-2.62.622-4.34.329-1.72.495-3.642.37-4.271-.165-.822-.02-1.308.513-1.728.681-.536.697-.525.188.124-.507.646-.427.708.91.708 1.593 0 1.665-.084 1.06-1.217-.322-.6-.22-.89.494-1.389.495-.347.746-.63.558-.63-.188 0-.116-.272.158-.603.623-.751 1.218-.425 1.218.668 0 .752.129.714 1.43-.428.786-.691 1.68-1.256 1.989-1.256.307 0 .847-.11 1.199-.246.493-.189.64.024.64.928 0 1.44-2.674 4.193-5 5.146-1.262.518-1.496.776-1.223 1.35.562 1.188.315 9.017-.387 12.218-.363 1.655-1.072 3.84-1.575 4.854-1.159 2.334-2.73 2.68-4.685 1.035l-1.253-1.055-.236 6.686-1.82.552c-2.144.65-9.7.985-11.73.52zM13.1 37.99c.608-1.282.812-4.404.657-10.065l-.052-1.922H9.66v5.246c0 4.083.151 5.562.682 6.675.87 1.826 1.911 1.852 2.758.067zm15.57-15.055c0-.352-.217-.569-.48-.48-.75.25-.875 1.12-.16 1.12.351 0 .64-.288.64-.64zm-2.645-1.365c.59-.652.582-.787-.094-1.622l-.738-.911.02 1.105c.021 1.238-.944 2.076-1.949 1.69-.364-.14-.661-.624-.661-1.076 0-.452-.182-.822-.405-.822s-.404.077-.404.17c0 .093-.111.457-.246.81-.175.455.135.801 1.068 1.194 1.506.633 2.49.478 3.409-.538zm6.85-.072c1.299-.592 1.652-1.542.865-2.329-.559-.56-.621-.513-.621.456 0 .6-.31 1.251-.698 1.469-.936.524-2.134-.148-2.134-1.198 0-.45-.182-.706-.404-.568-.74.457-.424 1.838.506 2.212 1.219.49 1.322.488 2.486-.042zm-7.34-13.98a3.32 3.32 0 011.416 0c.389.102.07.185-.708.185-.779 0-1.097-.083-.708-.185zm3.243-.001c.394-.103.94-.096 1.214.015.274.11-.048.195-.716.186-.667-.008-.891-.099-.498-.201z"
              fill="#aeaeae"
            />
            <path
              className="not_sure_booked_emoji_icon_path"
              d="M28.094 49.253c.239-.115.354-.754.256-1.419-.254-1.736.62-4.823 1.807-6.382 1.694-2.225 1.195-3.328-3.757-8.312-2.353-2.368-4.46-4.305-4.681-4.305s-.88-.375-1.46-.832c-.699-.55-1.38-.751-2.007-.594-.85.213-.903.152-.511-.58.24-.45.887-.93 1.436-1.068 1.025-.257 1.33-1.289.6-2.02-.61-.61-1.269-4.06-1.423-7.448-.076-1.669-.046-2.58.067-2.023.114.556.36 1.17.546 1.365.43.448 2.423-1.512 2.423-2.385 0-1.208-.83-2.295-1.547-2.022-.376.143-.497.11-.273-.073.223-.181 1.042-.874 1.82-1.538.779-.664 1.188-.944.91-.624-1.992 2.3 2.215 5.328 5.653 4.07.728-.267 2.563-.631 4.078-.809 1.514-.177 2.866-.436 3.004-.574.139-.139-.16-.841-.662-1.562-.887-1.27-.872-1.265.51.175 2.03 2.117 2.44 4.022 1.908 8.905-.643 5.908-.611 6.268.568 6.564 1.129.284 2.031 1.783 3.066 5.095l.696 2.226.295-2.832c.163-1.558.43-3.014.595-3.237.5-.677.788-3.409.385-3.658-.208-.128-.378-.496-.378-.816 0-.41.479-.583 1.618-.583 1.745 0 1.822-.076 1.22-1.2-.295-.553-.242-.802.209-.975.333-.127.784-.703 1.003-1.278.446-1.174 1.394-.944 1.079.262-.239.912.24.997.931.165.653-.787 2.767-1.83 3.71-1.83.509 0 .746.296.746.93 0 1.15-2.407 3.527-4.774 4.711-1.254.628-1.686 1.063-1.546 1.56 1.264 4.484-.532 16.184-2.838 18.49-.967.967-2.518.722-3.847-.607-.667-.668-1.282-1.214-1.365-1.214-.083 0-.043 1.535.09 3.41l.24 3.411-2.182.612c-2.04.573-9.17 1.309-8.218.849zm16.921-14.16c.31-1.55.681-3.957.826-5.348.258-2.492.248-2.529-.74-2.529-.847 0-1.141.361-1.897 2.327-.911 2.37-1.537 8.312-1.017 9.667.24.627.372.596 1.266-.3.688-.687 1.174-1.874 1.562-3.817zM28.67 22.935c0-.353-.216-.569-.48-.48-.75.25-.875 1.12-.16 1.12.352 0 .64-.288.64-.64zm-2.645-1.365c.59-.652.582-.787-.094-1.622l-.738-.912.02 1.106c.021 1.238-.944 2.075-1.948 1.69-.364-.14-.662-.624-.662-1.076 0-.452-.182-.822-.404-.822s-.405.076-.405.17c0 .092-.11.457-.246.81-.174.455.136.801 1.069 1.193 1.506.634 2.489.479 3.408-.537zm6.85-.072c1.3-.592 1.652-1.543.866-2.33-.56-.559-.622-.513-.622.457 0 .6-.31 1.251-.697 1.468-.937.525-2.134-.147-2.134-1.197 0-.45-.182-.706-.405-.569-.74.457-.423 1.84.506 2.213 1.219.49 1.323.488 2.487-.042zm-22.222 20.1c-1.23-1.23-1.327-2.183-.108-1.046 1.093 1.018 1.706 1.038 2.638.086.398-.407 1.419-1.257 2.267-1.89.85-.632 1.9-1.846 2.334-2.699.435-.852.878-1.55.985-1.55.107 0 .194.623.194 1.385 0 2.47-4.01 6.707-6.348 6.707-.533 0-1.416-.447-1.962-.993zm3.456-7.503c0-.223.193-.405.429-.405s.316.182.178.405c-.137.222-.33.404-.428.404-.098 0-.179-.182-.179-.404zm.032-1.855c.02-.471.116-.567.245-.244.117.292.102.64-.032.775-.135.135-.23-.104-.213-.53zm-3.185-6.531c-1.374-.17-1.4-.278-.6-2.41.099-.265-.518-.927-1.37-1.472-2.574-1.646-3.742-3.156-4.021-5.195-.37-2.692.402-2.927 2.321-.706 1.695 1.961 1.867 2.39.959 2.39-.334 0-.607.234-.607.52 0 .764 2.158 1.908 3.601 1.908.988 0 1.252-.173 1.252-.82 0-.59-.346-.888-1.245-1.068-1.41-.282-2.368-1.958-1.56-2.73.337-.32.588-.227.926.341.255.43 1.182 1.46 2.06 2.292 1.534 1.453 1.578 1.565 1.15 2.96-.26.849-.294 1.545-.08 1.678.202.124.367.762.367 1.416 0 1.271-.033 1.281-3.153.896zM32.311 8.606c-.365-.236-.415-.395-.125-.398a.94.94 0 01.731.398c.31.502.17.502-.606 0zm-6.363-1.09c.393-.102.94-.095 1.213.015.274.111-.048.195-.715.187-.668-.008-.892-.099-.498-.202zm2.621.013a1.56 1.56 0 011.011 0c.278.112.05.204-.505.204-.556 0-.784-.092-.506-.204z"
              fill="#fbc72c"
            />
            <path
              className="not_sure_booked_emoji_icon_path"
              d="M28.094 49.253c.239-.115.354-.754.256-1.419-.254-1.736.62-4.823 1.807-6.382 1.694-2.225 1.195-3.328-3.757-8.312-2.353-2.368-4.46-4.305-4.681-4.305s-.88-.375-1.46-.832c-.699-.55-1.38-.751-2.007-.594-.85.213-.903.152-.511-.58.24-.45.887-.93 1.436-1.068 1.025-.257 1.33-1.289.6-2.02-.605-.605-1.271-4.064-1.396-7.246-.061-1.558-.037-2.078.054-1.156.137 1.39.292 1.643.909 1.482 1.227-.321 2.205-2.59 1.875-4.347-.24-1.287-.415-1.488-1.126-1.301-.463.12-.679.092-.48-.064a94.23 94.23 0 001.771-1.495c.775-.666 1.08-.816.676-.334-.902 1.077-.487 2.06 1.453 3.445 1.072.764 1.855.943 4.234.964 2.193.02 2.973-.12 3.143-.56.19-.498.338-.485.973.09.63.571.918.599 1.841.178.875-.398 1.261-.393 1.931.025.735.459.806.44.577-.157-.143-.374-.26-.84-.26-1.037s-.57-1.046-1.265-1.889l-1.265-1.53 1.443 1.484c2.05 2.11 2.46 4 1.926 8.905-.642 5.908-.611 6.268.569 6.564 1.128.284 2.03 1.783 3.066 5.095l.695 2.226.296-2.832c.162-1.558.432-3.014.6-3.237.542-.721.71-3.206.264-3.92-.613-.982-.035-1.368 1.121-.75 1.055.565 2.718.199 4.551-1.003 1.13-.74.87-2.018-.286-1.4-.408.219-1.12.397-1.58.397-.674 0-.765-.14-.461-.708.208-.389.481-1.038.607-1.441.3-.965 1.173-.414.914.577-.238.912.24.997.932.165.652-.787 2.766-1.83 3.709-1.83.51 0 .747.296.747.93 0 1.15-2.408 3.527-4.774 4.711-1.255.628-1.686 1.063-1.546 1.56 1.264 4.484-.532 16.184-2.839 18.49-.967.967-2.517.722-3.847-.607-.667-.668-1.281-1.214-1.364-1.214-.084 0-.044 1.535.089 3.41l.24 3.411-2.181.612c-2.04.573-9.17 1.309-8.22.849zm16.921-14.16c.31-1.55.681-3.957.826-5.348.258-2.492.248-2.529-.74-2.529-.847 0-1.141.361-1.897 2.327-.911 2.37-1.537 8.312-1.017 9.667.24.627.372.596 1.266-.3.688-.687 1.174-1.874 1.562-3.817zm-18.973-7.472c-.137-.223-.063-.405.166-.405s.32-.249.203-.553c-.24-.628.944-1.05 2.968-1.06 1.134-.004 1.315.134 1.315 1.007 0 1.301.411 1.276 1.689-.102 1.846-1.99 2.633-6.313 1.344-7.383-.513-.426-.607-.341-.607.543 0 1.33-1.214 2.067-2.207 1.34-.855-.625-.7-2.233.276-2.845.503-.315 1.039-.308 1.921.025.673.254 1.221.341 1.218.194-.017-.719-.76-1.088-2.408-1.196-.994-.065-1.905-.277-2.025-.471-.12-.195-1.52-.482-3.111-.639-2.384-.235-3.06-.165-3.84.397l-.946.682 1.296-.127c1.86-.184 1.813.457-.083 1.117-2.013.7-1.955.702-1.666-.052.152-.396.076-.526-.205-.352-.728.45-.012 4.999 1.113 7.067.55 1.013 1.491 2.145 2.092 2.518 1.24.769 1.866.892 1.497.295zm1.092-2.913c-.764-.765-.568-1.249.404-.995.489.128 1.11.05 1.38-.174.77-.64 1.073.277.335 1.015-.764.764-1.459.814-2.119.154zm-4.243-3.004c-.158-.157-.287-.62-.287-1.028 0-.842-.637-1-.945-.236-.118.292-.218.318-.236.063-.055-.767 1.48-1.853 2.421-1.714 1.238.183 1.924 1.335 1.346 2.258-.471.751-1.82 1.137-2.3.657zM10.654 41.596c-1.23-1.23-1.327-2.182-.107-1.045 1.092 1.018 1.705 1.038 2.638.086.398-.407 1.418-1.257 2.267-1.89.848-.632 1.899-1.847 2.333-2.7.435-.852.878-1.549.985-1.549.107 0 .194.623.194 1.385 0 2.47-4.01 6.706-6.347 6.706-.534 0-1.417-.446-1.963-.993zm3.457-7.503c0-.222.192-.404.428-.404s.316.182.178.404c-.137.223-.33.405-.428.405-.098 0-.178-.182-.178-.405zm.031-1.854c.02-.471.116-.567.245-.244.117.292.102.64-.032.775-.134.134-.23-.104-.213-.53zm-3.185-6.531c-1.373-.17-1.4-.278-.6-2.411.099-.264-.518-.926-1.37-1.471-2.801-1.792-3.83-3.2-3.907-5.344-.04-1.098.122-1.993.376-2.083.245-.086 1.096.637 1.89 1.607 1.168 1.424 1.303 1.754.701 1.71-.41-.03-1.078-.315-1.486-.632-.703-.546-.707-.534-.076.226.367.442.733 1.164.814 1.606.208 1.137 3.24 2.735 4.559 2.404 1.095-.275 1.422-1.569.638-2.523-.221-.268.085-.04.68.508.992.913 1.045 1.115.642 2.43-.258.84-.288 1.528-.074 1.66.202.125.367.762.367 1.417 0 1.27-.034 1.28-3.154.895zM9.52 17.412c-.295-1.127.352-1.88 1.031-1.2.378.377.375.485-.014.485-.374 0-.39.203-.067.809.339.632.308.809-.14.809-.316 0-.68-.407-.81-.903zM32.31 8.605c-.365-.235-.414-.394-.125-.398a.94.94 0 01.732.398c.31.503.17.503-.607 0zm-6.363-1.09c.394-.102.94-.095 1.214.016.274.11-.048.194-.716.186-.667-.008-.891-.099-.498-.201zm2.622.013a1.56 1.56 0 011.01 0c.279.112.051.204-.505.204s-.783-.092-.505-.204z"
              fill="#909090"
            />
            <path
              className="not_sure_booked_emoji_icon_path"
              d="M31.908 46.938c.467-2.878 1.252-5.293 2.115-6.506 1.008-1.416 1.423-4.473.721-5.318-.275-.332-1.254-.945-2.175-1.363-5.439-2.464-6.724-3.115-8.59-4.355-1.137-.754-2.247-1.371-2.468-1.371-.22 0-.73-.365-1.133-.81-.403-.445-1.022-.821-1.377-.836-.448-.02-.366-.162.265-.466.952-.46 1.193-1.49.509-2.173-.604-.605-1.27-4.064-1.395-7.246-.061-1.557-.037-2.078.054-1.156.137 1.39.292 1.643.909 1.482 1.226-.32 2.205-2.59 1.875-4.347-.241-1.287-.415-1.487-1.126-1.301-.463.12-.679.092-.48-.064a94.23 94.23 0 001.771-1.495c.775-.665 1.08-.816.676-.334-.902 1.078-.487 2.06 1.453 3.445 1.072.765 1.855.943 4.233.964 2.194.02 2.974-.12 3.143-.56.191-.498.339-.484.973.09.632.571.92.6 1.842.179.875-.4 1.261-.394 1.931.024.734.46.806.44.577-.156-.143-.374-.26-.841-.26-1.038s-.57-1.046-1.266-1.888l-1.264-1.532 1.442 1.485c2.052 2.111 2.46 4 1.927 8.905-.635 5.836-.597 6.359.491 6.773 1.28.486 1.737 1.136 2.396 3.409.42 1.45.476 2.61.211 4.45-.47 3.27.577 6.863 2.061 7.073.52.074 1.293-.182 1.72-.568 1.058-.958 1.042-.009-.03 1.75-1.042 1.71-2.03 1.674-4.048-.149l-1.619-1.463v7.339l-1.516.42c-.835.233-2.262.423-3.172.424l-1.655.003zM26.04 27.62c-.138-.223-.063-.405.165-.405.229 0 .32-.249.203-.553-.24-.628.944-1.051 2.968-1.06 1.134-.004 1.315.134 1.315 1.006 0 1.302.411 1.277 1.69-.1 1.845-1.991 2.632-6.314 1.343-7.384-.512-.426-.606-.342-.606.543 0 1.329-1.214 2.066-2.207 1.34-.856-.625-.7-2.233.275-2.845.503-.315 1.039-.308 1.921.025.673.254 1.221.341 1.218.194-.017-.719-.76-1.088-2.407-1.196-.994-.065-1.906-.277-2.026-.472-.12-.194-1.52-.481-3.11-.638-2.384-.235-3.06-.165-3.84.397l-.947.682 1.296-.128c1.86-.183 1.813.458-.083 1.118-2.012.7-1.955.702-1.666-.053.152-.395.076-.525-.205-.352-.728.45-.012 5 1.113 7.068.55 1.012 1.492 2.145 2.093 2.518 1.238.769 1.866.892 1.496.295zm1.092-2.913c-.765-.765-.569-1.249.403-.995.49.128 1.11.05 1.38-.175.77-.64 1.073.278.335 1.016-.763.764-1.458.814-2.118.154zm-4.244-3.004c-.157-.158-.286-.62-.286-1.028 0-.842-.637-1.001-.946-.236-.118.291-.217.318-.236.062-.055-.766 1.48-1.853 2.421-1.713 1.238.183 1.925 1.334 1.346 2.257-.47.752-1.82 1.138-2.299.658zm-7.728 18.782c1.013-.935 2.184-2.345 2.602-3.135.418-.79.767-1.145.777-.79.027.963-2.107 3.953-3.455 4.842-1.922 1.267-1.892.897.076-.917zm27.4-15.193c.124-.764.014-1.726-.246-2.141-.645-1.033-.097-1.44 1.085-.808 1.055.565 2.718.198 4.551-1.003 1.13-.74.87-2.018-.286-1.4-.408.219-1.12.397-1.58.397-.674 0-.765-.14-.461-.708.208-.39.481-1.038.607-1.441.3-.965 1.173-.414.914.577-.238.912.24.997.931.165.653-.787 2.767-1.83 3.71-1.83 2.256 0-.477 3.865-3.969 5.611-1.635.818-1.676.888-1.462 2.48l.22 1.638-4.239-.15zm-30.577.414c-1.36-.142-1.474-.24-1.098-.943.314-.586.288-.792-.1-.813-.286-.016-.156-.185.29-.376.444-.191.59-.36.323-.376-.713-.042-3.788-2.203-5.108-3.59-.893-.938-1.16-1.624-1.213-3.127-.04-1.097.122-1.992.376-2.082.245-.087 1.096.636 1.89 1.607 1.168 1.424 1.303 1.753.701 1.71-.41-.031-1.078-.315-1.486-.632-.703-.547-.707-.535-.076.226.367.44.733 1.164.814 1.606.208 1.137 3.24 2.735 4.559 2.403 1.149-.288 1.417-1.6.534-2.614-.278-.32.008-.13.637.423.96.842 1.097 1.198.855 2.219-.159.668-.256 1.989-.217 2.935.04.945.019 1.688-.046 1.651-.064-.037-.8-.14-1.635-.227zm-2.466-8.295c-.295-1.127.352-1.88 1.031-1.2.378.377.375.485-.014.485-.374 0-.39.203-.067.81.339.632.308.808-.14.808-.316 0-.68-.406-.81-.903zm22.791-8.806c-.364-.236-.414-.395-.125-.399a.94.94 0 01.732.399c.31.502.17.502-.607 0zm-6.362-1.09c.393-.102.94-.096 1.213.015.274.111-.048.195-.716.187-.667-.009-.891-.1-.497-.202zm2.62.013a1.56 1.56 0 011.012 0c.278.112.05.204-.506.204s-.783-.092-.505-.204z"
              fill="#e5aa1e"
            />
            <path
              className="not_sure_booked_emoji_icon_path"
              d="M31.908 46.938c.467-2.878 1.252-5.293 2.115-6.506 1.008-1.416 1.423-4.473.721-5.318-.275-.332-1.254-.945-2.175-1.363-5.439-2.464-6.724-3.115-8.59-4.355-1.137-.754-2.247-1.371-2.468-1.371-.22 0-.73-.365-1.133-.81-.403-.445-1.022-.823-1.377-.842-.407-.02-.267-.207.377-.505.645-.299.97-.734.88-1.181-.254-1.267.586-.747 1.308.809 1.847 3.98 7.516 5.65 10.43 3.07 1.164-1.03 3.145-4.196 3.145-5.028 0-.377.273-.791.607-.92.477-.182.606.114.606 1.384 0 1.311.175 1.681.927 1.967 1.28.487 1.737 1.137 2.396 3.41.42 1.45.476 2.609.211 4.45-.47 3.27.577 6.863 2.061 7.073.52.074 1.293-.182 1.72-.568 1.058-.959 1.042-.01-.03 1.75-1.042 1.71-2.03 1.674-4.048-.149l-1.619-1.463v7.338l-1.516.422c-.835.231-2.262.422-3.172.423l-1.655.003zM15.16 40.486c1.014-.935 2.184-2.346 2.602-3.136.418-.79.767-1.145.777-.789.027.963-2.106 3.952-3.455 4.841-1.922 1.268-1.891.898.076-.916zM26.946 26.95c-1.347-.378-.249-.948 1.829-.948 1.36 0 1.942.137 1.682.397-.494.494-2.559.818-3.511.551zm15.476-.98c0-1.145.448-1.99 1.055-1.99.31 0 .563-.183.563-.406 0-.222.372-.404.825-.404 2.151 0 6.686-3.122 7.22-4.97.342-1.184.38-1.208.413-.27.044 1.244-2.208 3.546-4.68 4.782-1.634.817-1.675.887-1.462 2.48l.22 1.638-2.077-.074c-1.684-.06-2.077-.208-2.077-.785zm-30.438-.296c-1.339-.11-1.47-.214-1.115-.878.288-.538.26-.801-.1-.926-.276-.096.107-.31.852-.478 1.583-.355 2.202.09 2.014 1.448-.117.843-.317.944-1.65.834zm15.27-1.29c-.142-.23.206-.405.81-.405s.95.174.808.405c-.137.222-.501.404-.809.404s-.671-.182-.809-.404zm14.903-1.434c-.132-.343-.15-.715-.039-.825.11-.11.298.17.417.624.252.964-.028 1.113-.378.201zm-32.144-.488c-.503-.642-.489-.656.153-.153.389.306.707.624.707.708 0 .333-.332.119-.86-.555zm12.799-1.012c-.596-1.768-.429-2.124.999-2.124 1.543 0 2.105.955 1.203 2.043-.598.72-1.97.77-2.202.081zM6.634 19.94c-.865-.885-1.494-1.67-1.397-1.744.097-.074.882.65 1.745 1.61 1.971 2.192 1.745 2.28-.348.135zm13.184.548c-.065-1.775 1.017-4.228 1.742-3.95.468.18.432.365-.192.989-.422.422-.856 1.182-.964 1.688l-.368 1.73c-.105.5-.189.326-.218-.457zm11.094.52c-.425-.311-.646-.903-.562-1.502.11-.784.412-1.015 1.454-1.115 1.222-.118 1.315-.04 1.315 1.098 0 1.505-1.147 2.294-2.207 1.519zm5.558-1.277c.003-1.113.082-1.52.175-.905.093.615.09 1.526-.006 2.023-.096.498-.172-.005-.169-1.118zm-1.126 0c-.675-2.475-1.256-2.953-3.31-2.721-1.394.157-1.791.087-1.566-.277.189-.306.777-.397 1.577-.245.854.163 1.075.122.67-.125-.334-.202-2.129-.49-3.989-.637-1.86-.148-4.02-.536-4.8-.862-1.417-.593-1.417-.593-1.221.434.11.578.022.968-.204.893-.22-.073-.461-.824-.537-1.67-.076-.844-.258-1.929-.404-2.41-.25-.818-.19-.805.894.19.638.587 1.72 1.349 2.403 1.693 1.609.811 6.755 1.528 7.1.99.156-.246.364-.216.546.079.161.261.539.38.84.266.672-.258 2.757 3.805 2.504 4.882-.128.548-.256.427-.503-.48zm-22.48-.506l-.98-1.112 1.112.98c.612.54 1.113 1.04 1.113 1.113 0 .317-.328.06-1.244-.98zm5.88.681c-.147-.237-.18-.518-.074-.624.106-.106.3.088.432.432.273.712.04.838-.359.192zm27.976-1.044c.206-.82.145-.996-.257-.747-.35.216-.428.166-.233-.149.435-.704 1.147-.083.916.8-.23.882.128.98.94.257.482-.43.486-.4.03.202-.854 1.13-1.714.905-1.396-.363zm-28.535-.783c.02-.471.116-.567.245-.244.117.292.102.64-.032.775-.135.134-.23-.104-.213-.531zm4.192-.35c.431-.345 1.16-.622 1.617-.615.665.01.71.081.226.355-.333.19-1.061.466-1.617.616-.972.261-.98.247-.226-.356zM7.99 17.202c-.503-.641-.489-.656.153-.152.39.305.708.624.708.708 0 .333-.332.118-.86-.556zm28.879-1.314c0-1.002.079-1.411.175-.91.097.5.097 1.32 0 1.82-.096.5-.175.09-.175-.91zm-27.615.849c0-.42.77-1.029.998-.789.074.078-.12.377-.432.664-.31.286-.566.343-.566.125zm-4.152-2.113c.274-.277.6-.401.725-.277.125.125-.1.351-.499.503-.576.22-.623.173-.226-.226zm29.406-4.502L33.32 8.808l1.315 1.188c1.225 1.107 1.5 1.441 1.187 1.441-.07 0-.66-.591-1.314-1.315zm-13.12-.505c.523-.557 1.041-1.012 1.152-1.012s-.225.455-.747 1.012c-.523.556-1.041 1.011-1.152 1.011s.225-.455.747-1.011zm4.558-2.101c.394-.103.94-.096 1.214.015.273.11-.049.194-.716.186-.667-.008-.891-.099-.498-.201zm2.621.012a1.56 1.56 0 011.012 0c.278.112.05.204-.506.204s-.784-.092-.506-.204z"
              fill="#b09865"
            />
            <path
              className="not_sure_booked_emoji_icon_path"
              d="M31.908 46.938c.467-2.878 1.252-5.293 2.115-6.506 1.008-1.416 1.423-4.473.721-5.318-.275-.332-1.254-.945-2.175-1.363-5.439-2.464-6.724-3.115-8.59-4.355-1.137-.754-2.247-1.371-2.468-1.371-.22 0-.73-.365-1.133-.81-.403-.445-1.022-.823-1.377-.842-.407-.02-.267-.207.377-.505.645-.299.97-.734.88-1.181-.262-1.31.597-.723 1.333.91.402.89.839 1.62.972 1.62.133.001.793.502 1.467 1.113s1.493 1.181 1.82 1.268c1.454.383 4.517.086 5.456-.53 1.351-.885 3.434-3.797 3.713-5.19.31-1.543.842-1.39 1.165.332.18.958.567 1.558 1.148 1.779 1.228.467 1.692 1.138 2.345 3.39.42 1.45.476 2.61.211 4.45-.47 3.27.577 6.863 2.061 7.073.52.074 1.293-.182 1.72-.568 1.058-.958 1.042-.009-.03 1.75-1.042 1.71-2.03 1.674-4.048-.149l-1.619-1.463v7.339l-1.516.421c-.835.232-2.262.422-3.172.424l-1.655.002zM15.16 40.486c1.014-.935 2.184-2.346 2.602-3.136.418-.79.767-1.145.777-.789.027.963-2.106 3.952-3.455 4.841-1.922 1.268-1.891.898.076-.916zM26.946 26.95c-1.347-.378-.249-.948 1.829-.948 1.36 0 1.942.137 1.682.397-.494.494-2.559.818-3.511.551zm15.556-1.316c.084-.723.397-1.087 1.01-1.174.538-.077.807-.336.683-.659-.134-.349.22-.594 1.024-.712 1.048-.154 1.155-.093.732.42-.392.476-.39.637.01.772.278.093.505.704.505 1.358 0 1.166-.036 1.186-2.043 1.115-1.944-.07-2.037-.123-1.921-1.12zm-30.518.073c-1.359-.142-1.474-.24-1.098-.943.314-.586.289-.791-.1-.81-.285-.015-.083-.2.45-.414 1.5-.6 2.469-.1 2.469 1.275 0 .653-.046 1.156-.102 1.119-.055-.037-.784-.14-1.619-.227zm15.27-1.323c-.142-.23.206-.405.81-.405s.95.174.808.405c-.137.222-.501.404-.809.404s-.671-.182-.809-.404zm19.65-1.748c.643-.493 3.202-1.829 3.202-1.672 0 .27-2.546 1.798-3 1.8-.204 0-.295-.057-.202-.128zm-23.878-1.264c-1.093-1.317.715-2.9 1.927-1.689.515.516.568.832.229 1.37-.591.939-1.527 1.077-2.156.319zm-3.208-.883c-.066-1.776 1.016-4.23 1.742-3.95.468.179.432.364-.192.988-.422.422-.856 1.182-.964 1.688l-.368 1.73c-.106.5-.189.326-.218-.457zm10.893.074c-1.093-1.317.715-2.9 1.927-1.689.515.515.568.832.228 1.37-.59.938-1.526 1.077-2.155.319zm4.633-.832c-.675-2.475-1.256-2.953-3.31-2.721-1.394.157-1.791.087-1.566-.277.189-.306.777-.397 1.577-.245.854.163 1.075.122.67-.125-.334-.202-2.129-.49-3.989-.637-1.86-.148-4.02-.536-4.8-.862-1.417-.592-1.417-.592-1.221.434.11.578.022.968-.204.893-.22-.073-.461-.824-.537-1.67-.076-.844-.258-1.929-.404-2.41-.25-.818-.19-.805.893.19.639.587 1.72 1.349 2.404 1.693 1.609.811 6.755 1.528 7.099.99.157-.246.365-.216.546.079.162.261.54.38.84.266.672-.258 2.758 3.805 2.505 4.882-.128.548-.256.427-.503-.48zM22.377 17.73c.431-.345 1.16-.622 1.617-.615.665.01.711.081.226.355-.333.19-1.061.466-1.617.616-.972.261-.98.247-.226-.356z"
              fill="#676666"
            />
            <path
              className="not_sure_booked_emoji_icon_path"
              d="M28.265 30.85c-.54-.353-.54-.442 0-.796.334-.22 1.016-.401 1.517-.405 1.356-.009 1.408-.041 2.856-1.775 1.533-1.835 2.503-3.572 2.503-4.482 0-.344.167-.627.372-.627.47 0 .988 2.267.645 2.823-.14.227-.033.414.24.414.48 0-.4 1.07-3.207 3.903-1.043 1.054-1.676 1.355-2.831 1.35-.819-.003-1.761-.185-2.095-.404zm-1.694-1.079c.292-.116.641-.102.776.032.134.135-.105.23-.531.213-.471-.02-.567-.115-.245-.245zm-3.142-1.523c-.268-.322-1.091-.786-1.83-1.03-1.176-.388-1.342-.616-1.342-1.84 0-1.736.466-1.794 1.15-.144.285.69 1.08 1.782 1.767 2.426.687.644 1.134 1.171.995 1.172-.14.001-.473-.262-.74-.584zm3.517-1.298c-1.348-.378-.249-.948 1.828-.948 1.36 0 1.942.137 1.683.397-.495.495-2.56.819-3.511.551zm.308-2.566c-.142-.23.206-.405.809-.405s.951.174.809.405c-.138.222-.502.404-.81.404s-.67-.182-.808-.404zm16.785-.763c0-.198.542-.439 1.204-.536.963-.141 1.115-.07.759.359-.498.6-1.963.732-1.963.177zm2.865-.985c.643-.493 3.202-1.829 3.202-1.672 0 .271-2.546 1.798-3 1.8-.204 0-.295-.057-.202-.128zm-23.816-1.165c-.724-.725-.61-1.672.167-1.374.476.183.585.077.406-.39-.332-.865.93-.618 1.504.294.801 1.272-1 2.547-2.077 1.47zm-3.27-.982c-.065-1.776 1.017-4.229 1.743-3.95.467.179.43.364-.193.988-.422.422-.855 1.182-.964 1.688l-.367 1.73c-.106.5-.19.326-.218-.456zm11.041.105c-.313-.816-.067-1.975.456-2.15.232-.077.778.125 1.214.449.635.471.703.734.344 1.32-.58.95-1.714 1.164-2.014.38zm4.485-.863c-.675-2.475-1.256-2.953-3.31-2.721-1.394.157-1.791.087-1.566-.277.189-.306.777-.397 1.577-.244.854.163 1.076.121.67-.126-.334-.202-2.129-.49-3.988-.637-1.86-.148-4.02-.536-4.8-.862-1.418-.592-1.418-.592-1.222.434.11.578.022.968-.203.893-.22-.073-.462-.824-.538-1.669-.076-.845-.258-1.93-.404-2.411-.249-.818-.19-.805.894.19.638.587 1.72 1.349 2.403 1.694 1.61.81 6.755 1.527 7.1.989.156-.246.364-.215.546.079.161.261.54.381.84.266.672-.258 2.757 3.806 2.505 4.882-.13.548-.256.427-.504-.48zM22.377 17.73c.432-.345 1.16-.622 1.618-.615.665.01.71.081.226.355-.334.19-1.062.466-1.618.616-.972.261-.98.248-.226-.356z"
              fill="#a26b15"
            />
            <path
              className="not_sure_booked_emoji_icon_path"
              d="M28.367 30.995c-.986-.399-.482-.843 1.213-1.07 1.337-.18 2.065-.603 3.283-1.91 1.009-1.081 2-1.733 2.787-1.833l1.22-.155-1.167 1.262c-3.375 3.648-3.818 3.974-5.342 3.941-.818-.017-1.715-.123-1.994-.236zm-.505-4.587c.556-.179 1.375-.34 1.82-.359.666-.028.702.035.202.359-.334.215-1.153.376-1.82.358-1.189-.034-1.193-.041-.202-.358zm-4.989-5.125c-.53-.53-.275-1.437.337-1.202.37.141.607 0 .607-.362 0-.779.768-.766 1.07.018.418 1.093-1.214 2.346-2.014 1.546zm7.82-1.373c0-.458.182-.72.405-.583.222.138.404-.04.404-.394 0-.521.157-.562.814-.21.657.352.733.589.39 1.228-.577 1.08-2.013 1.05-2.013-.04z"
              fill="#2d2924"
            />
          </g>
        </svg>
      </div>
      <div className="shopping_cart_card_description">
        <div className="cart_card_top_container">
          <h3>Not Sure Facial</h3>
          <p className="shopping_cart_duration">Duration: 50 minutes</p>
        </div>
        <div className="cart_card_bottom_container">
          <div className="shopping_cart_price_container">
            <p className="shopping_cart_price">$70</p>
          </div>
          <div className="shopping_cart_remove_button" onClick={handleRemove}>
            <p>Remove</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UnsureCard;
