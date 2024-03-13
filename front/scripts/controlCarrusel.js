const controlCarrusel = (id, containerId) => {
    const container = document.getElementById(containerId);
    const btn_left = document.getElementById(`btn_left${id}`);
    const btn_right = document.getElementById(`btn_right${id}`);
    const rootStyles = document.documentElement.style;

    let cardElements = document.querySelectorAll(`#${containerId} .cards`);
    let isInTransition = false;
    let cardCounter = 0;
    let initialized = true;

    const DIRECTION = {
        Left: "LEFT",
        Right: "RIGHT"
    };

    const SECTION = [
        { containerId: containerId, cardCounter: 0 }
    ]

    const getTransformValue = () => Number(rootStyles.getPropertyValue('--card-transform').replace("px", ""));

    const reorderCard = () => {
        const transformValue = getTransformValue();
        rootStyles.setProperty("--transition", "none");

        if (cardCounter < 0) {
            cardCounter = 0;
        }

        if (initialized) {
            initialized = false;
            cardCounter = 1;
            isInTransition = false;
            return;
        }

        if (cardCounter === 1) {
            cardCounter--;
            isInTransition = false;
            return;
        }

        if (cardCounter === cardElements.length - 4) {
            container.appendChild(container.firstElementChild);
            rootStyles.setProperty('--card-transform', `${transformValue + cardElements[cardCounter].scrollWidth}px`);
            cardCounter--;
        } else if (cardCounter === 0) {
            container.prepend(container.lastElementChild);
            rootStyles.setProperty('--card-transform', `${transformValue - cardElements[cardCounter].scrollWidth}px`);
            cardCounter++;
        }

        isInTransition = false;
    };

    const moveCarrusel = (direction) => {
        if (isInTransition) return;

        const transformValue = getTransformValue();
        rootStyles.setProperty('--transition', 'transform 0.1s');
        isInTransition = true;

        if (direction === DIRECTION.Right) {
            cardCounter++;
        } else if (direction === DIRECTION.Left) {
            cardCounter--;
        }

        rootStyles.setProperty('--card-transform', `${transformValue + (direction === DIRECTION.Left ? 1 : -1) * cardElements[0].scrollWidth}px`);
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