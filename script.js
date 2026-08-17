const buttons = document.querySelectorAll('.swapper-button');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const theme = button.dataset.themeTarget;
        document.documentElement.setAttribute('data-theme', theme);
    });
});

const themeContent = {
    default: {
        about: {},
        features: [],
    },
    skeuomorphism: {
        about: {},
        features: [],
    },
};