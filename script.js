const themeContent = {
    default: {
        name: 'Default Style',
        overview: `The default style of this website is my own.
            I like simplicity, a cohesive color palette, and softer edges (including font).
            I prefer when content is organized and flows well, so a reader isn't jumping around trying to figure out what to look at next.
            I like starting with a color palette and building off it.
            I'm a huge fan of the book A Dictionary of Color Combinations by Sanzo Wada and use it for inspiration constantly.
            I'm a Frontend Developer and like to dabble in web design via projects like this.
            It's not only great practice, it's a great creative outlet.
            Most of my day is spent implementing someone else's design, so building something where every decision is mine feels like a different kind of work.`,
        features: [
            {
                title: 'Function over form',
                description: `Each element should have a purpose.
                    HTML, CSS, and JS are tidy and organized.
                    Interactivity when it makes sense.
                    Modularity is king.`,
            },
            {
                title: 'Cohesive color palette',
                description: `My designs lean heavily on a specific color palette.
                    If I don't have one in mind, I draw inspiration from books on design, pictures I take, or other websites I love.`
            },
            {
                title: 'Limited visual clutter',
                description: `Sans serif fonts, mild to heavily rounded edges, content that flows from top to bottom.
                    Basically I want to minimize how much my eyes are jumping around while reading a page.`
            },
        ],
        resources: [
            { label: '→ A Dictionary of Color Combinations by Sanzo Wada 和田三造『配色事典』', url: 'https://en.seigensha.com/books/978-4-86152-247-5/' },
            { label: '→ My personal website', url: 'https://bill-ott.com/' },
        ],
    },
    'frutiger-aero': {
        name: 'Frutiger Aero',
        overview: `Frutiger Aero is the optimistic tech aesthetic of roughly 2004 to 2013.
            Think glossy buttons, water droplets, and a lot of sky blue and lime green.
            It's what Windows Vista desktop images and Nintendo DS and Wii marketing might fall under.
            It runs on the idea that technology was going to be clean and friendly and integrated with nature somehow.
            Named for Adrian Frutiger, whose typefaces show up all over the era.
            Has enjoyed a bit of a nostalgic revival lately.`,
        features: [
            {
                title: 'Bright color palettes',
                description: `Imagery featuring lime green, sky blue, and crisp whites.
                    Amped up saturation.
                    Sandy white beaches, grassy hills overlooking a cluster of skyscrapers.
                    There are a lot of giant bubbles floating by for some reason.`
            },
            {
                title: 'Glassy textures',
                description: `Heavy use of water and glass-like elements.
                    Not misty, think clear and reflective.
                    A "dewy" vibe.
                    Rounded edges invoke water droplets and bubbles.`
            },
            {
                title: 'Open and airy',
                description: `Minimal composition with little crowding of various elements.`
            },
        ],
        resources: [
            { label: '→ Frutiger Aero Wikipedia entry', url: 'https://en.wikipedia.org/wiki/Frutiger_Aero' },
            { label: '→ The Frutiger Aero Archive', url: 'https://frutigeraeroarchive.org/' },
            { label: '→ Frutiger Aero design aesthetic directory', url: 'https://frutiger-aero.neocities.org/' },
        ],
    },
    // skeuomorphism: { /* same shape */ },
    // brutalism: { /* same shape */ },
    // 'early-web': { /* same shape */ },
    // '8bit': { /* same shape */ },
};

function renderContent(theme) {
    const content = themeContent[theme];
    if (!content) return;

    document.querySelector('.overview-heading').textContent = content.name;
    document.querySelector('.overview').textContent = content.overview;

    const featuresList = document.querySelector('.features-list');
    featuresList.innerHTML = '';
    content.features.forEach(feature => {
        const li = document.createElement('li');
        li.className = 'features-item';

        const title = document.createElement('h4');
        title.className = 'features-item-title';
        title.textContent = feature.title;

        const description = document.createElement('p');
        description.className = 'features-item-description';
        description.textContent = feature.description;

        li.append(title, description);
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