const themeContent = {
    default: {
        overview: `The default style is my own. I like simplicity, a cohesive color palette, and softer edges (including font). I prefer when content is organized and flows well.
        I'm a Front-End Developer and like to dabble in web design via projects like this. It's not only great practice, it's a great outlet.`,
        features: [
            { title: 'Function over form', description: 'Each element should have a purpose. HTML, CSS, and JS are tidy and organized.' },
            { title: 'Cohesive color palette', description: `My designs lean heavily on a specific color palette. If I don't have one in mind, I draw inspiration from books on design, pictures I take, or other websites I love.` },
            { title: 'Limit visual clutter', description: `Sans serif fonts, 
                mild to heavily rounded edges, content that flows from top to bottom.
                Basically I want to minimize how much my eyes are jumping around while reading a page.` },
        ],
        resources: [
            { label: 'A Dictionary of Color Combinations by Sanzo Wada (配色事典)', url: 'https://en.seigensha.com/books/978-4-86152-247-5/' },
            { label: 'My personal website', url: '#' }, // might not include
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