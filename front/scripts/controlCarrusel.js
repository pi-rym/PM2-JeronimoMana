
const controlCarrusel = (containerId, btn_leftID, btn_rightID) => {
    const container = document.getElementById(containerId);
    const btn_left = document.getElementById(btn_leftID);
    const btn_right = document.getElementById(btn_rightID);
    const rootStyles = document.documentElement.style;

    let cardElements = container.querySelectorAll('.cards');
    let isInTransition = false;
    let cardCounter = 0;

    const DIRECTION = {
        Left: "LEFT",
        Right: "RIGHT"
    };

    const getTransformValue = () => Number(container.style.getPropertyValue('--card-transform').replace("px", ""));

    const reorderCard = () => {
        const transformValue = getTransformValue();
        rootStyles.setProperty("--transition", "none");

        if (cardCounter === cardElements.length - 5) {
            container.appendChild(container.firstElementChild);
            container.style.setProperty('--card-transform', `${transformValue + cardElements[cardCounter].scrollWidth}px`);
            cardCounter--;
        } else if (cardCounter === 0) {
            container.prepend(container.lastElementChild);
            container.style.setProperty('--card-transform', `${transformValue - cardElements[cardCounter].scrollWidth}px`);
            cardCounter++;
        }

        isInTransition = false;
    };

    const moveCarrusel = (direction) => {
        if (isInTransition) return;

        const transformValue = getTransformValue();
        rootStyles.setProperty('--transition', 'transform 0.5s');
        isInTransition = true;

        if (direction === DIRECTION.Right) {
            cardCounter++;
        } else if (direction === DIRECTION.Left) {
            cardCounter--;
        }

        container.style.setProperty('--card-transform', `${transformValue + (direction === DIRECTION.Left ? 1 : -1) * cardElements[0].scrollWidth}px`);
    };

    btn_left.addEventListener("click", () => moveCarrusel(DIRECTION.Left));
    btn_right.addEventListener("click", () => moveCarrusel(DIRECTION.Right));
    container.addEventListener("transitionend", reorderCard);
    reorderCard();
    isInTransition = false;
};

module.exports = {
    controlCarrusel
};
