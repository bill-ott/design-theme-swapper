const themeContent = {
    default: {
        overview: `Placeholder overview text for the default style. A few sentences about where this aesthetic comes from and what defines it.`,
        features: [
            { title: 'Feature one', description: 'Placeholder description.' },
            { title: 'Feature two', description: 'Placeholder description.' },
            { title: 'Feature three', description: 'Placeholder description.' },
        ],
        resources: [
            { label: 'Placeholder link', url: '' },
        ],
    },
    // skeuomorphism: { /* same shape */ },
    // 'frutiger-aero': { /* same shape */ },
    // brutalism: { /* same shape */ },
    // 'early-web': { /* same shape */ },
    // '8bit': { /* same shape */ },
};

function renderContent(theme) {
    const content = themeContent[theme];
    if (!content) return;

    document.querySelector('.style-heading').textContent = theme;
    document.querySelector('.overview').textContent = content.overview;

    const featuresList = document.querySelector('.features-list');
    featuresList.innerHTML = '';
    content.features.forEach(feature => {
        const li = document.createElement('li');
        li.className = 'features-item';
        li.textContent = `${feature.title}: ${feature.description}`;
        featuresList.appendChild(li);
    });

    const resourcesList = document.querySelector('.resources-list');
    resourcesList.innerHTML = '';
    content.resources.forEach(resource => {
        const li = document.createElement('li');
        li.className = 'resources-item';
        const a = document.createElement('a');
        a.className = 'resources-link';
        a.href = resource.url;
        a.textContent = resource.label;
        li.appendChild(a);
        resourcesList.appendChild(li);
    });
}

const buttons = document.querySelectorAll('.swapper-button');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const theme = button.dataset.themeTarget;
        document.documentElement.setAttribute('data-theme', theme);
        renderContent(theme);
    });
});

renderContent(document.documentElement.dataset.theme);