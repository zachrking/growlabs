import React from "react";
import { useDispatch } from "react-redux";
import ACTION_QUENCH_NOT_IN_CART from "../../../../actions/InCart/Treatments/Quench/ACTION_QUENCH_NOT_IN_CART";
import ACTION_DECREMENT_COUNTER from "../../../../actions/Counter/ACTION_DECREMENT_COUNTER";
import ACTION_SELECTED_DAY_RESET from "../../../../actions/SelectedDay/ACTION_SELECTED_DAY_RESET";
import ACTION_SELECT_TIME_NOT_ACTIVE from "../../../../actions/SelectTimeActive/ACTION_SELECT_TIME_NOT_ACTIVE";
import "../../CartCard.css";

const QuenchCard = (props) => {
  const dispatch = useDispatch();

  const handleRemove = () => {
    dispatch(ACTION_QUENCH_NOT_IN_CART());
    dispatch(ACTION_DECREMENT_COUNTER());
    dispatch(ACTION_SELECTED_DAY_RESET());
    dispatch(ACTION_SELECT_TIME_NOT_ACTIVE());

    props.resetAllCartStates();
  };

  return (
    <div className="shopping_cart_card_wrapping">
      <div className="shopping_cart_card_image_circle">
        <svg width="100%" height="12rem" viewBox="0 0 50.006 50.006">
          <circle cx="25" cy="25" r="20" fill="rgb(241, 241, 241)" />
          <g transform="translate(0, -245)">
            <path
              className="quench_icon_path"
              stroke="#000"
              d="M28.78 277.17c.798-.07 1.353-.218 2.032-.54.844-.4 1.753-1.143 1.86-1.521.125-.447.018-.868-.298-1.173-.218-.21-.408-.278-.766-.276-.349.002-.474.062-.954.459-1.482 1.225-3.484 1.151-4.909-.181-.957-.896-2.021-1.422-3.244-1.605-.381-.058-1.26-.06-1.625-.003a5.847 5.847 0 00-2.524.991c-.505.351-.898.733-1.007.978-.165.37-.099.837.162 1.14.238.276.44.363.845.363.405 0 .5-.042.954-.43.54-.459 1.079-.715 1.747-.829a3.168 3.168 0 011.246-.002c.791.137 1.35.447 2.14 1.186.53.495 1.32.945 2.079 1.183.51.16.769.213 1.273.257.221.02.418.038.438.041.019.003.267-.014.551-.039zm.41-4.439a5.546 5.546 0 001.676-.528c.709-.344 1.426-.883 1.677-1.257a1.088 1.088 0 00-.911-1.69c-.335 0-.51.085-.957.457-.42.35-1.044.673-1.527.79-.428.105-1.218.105-1.653.001-.645-.154-1.119-.414-1.712-.939a12.565 12.565 0 00-.53-.449 9.098 9.098 0 01-.22-.17c-.098-.08-.546-.343-.804-.471-1.618-.805-3.727-.767-5.304.095-.773.423-1.522 1.075-1.616 1.406-.174.61.136 1.24.687 1.403.467.138.792.048 1.231-.339.719-.632 1.532-.945 2.449-.942.813.003 1.565.25 2.148.706.136.107.546.46.76.654.227.206.857.607 1.235.785.45.212 1.224.448 1.638.5.487.06 1.29.055 1.733-.012zm-.245-4.364a5.492 5.492 0 002.513-.89l.436-.292c.178-.119.65-.594.715-.718.117-.224.15-.53.084-.78-.08-.306-.213-.492-.468-.656-.183-.117-.256-.138-.54-.15-.4-.019-.57.05-.971.398-.722.625-1.486.913-2.414.91-.98-.002-1.738-.311-2.546-1.04-.471-.425-.772-.651-1.176-.884a5.823 5.823 0 00-6.943.853c-.27.257-.38.502-.378.833.006.702.642 1.222 1.305 1.068.29-.068.378-.119.718-.414.778-.675 1.779-1 2.731-.887.931.11 1.482.367 2.225 1.038.494.446.761.644 1.2.89a5.766 5.766 0 003.509.72z"
              fill="rgba(173, 216, 230, 0.8)"
              strokeWidth=".4"
              strokeOpacity="1"
            />
          </g>
        </svg>
      </div>
      <div className="shopping_cart_card_description">
        <div className="cart_card_top_container">
          <h3>Quench</h3>
          <p className="shopping_cart_duration">Duration: 50 minutes</p>
        </div>
        <div className="cart_card_bottom_container">
          <div className="shopping_cart_price_container">
            <p className="shopping_cart_price">$105</p>
          </div>
          <div className="shopping_cart_remove_button" onClick={handleRemove}>
            <p>Remove</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuenchCard;
