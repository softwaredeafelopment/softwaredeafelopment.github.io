const NAVIGATION_JS_T = {
    collapse: 'Collapse',
    expand: 'Expand',
    nothingFoundForXxx: query => 'Nothing found for \'{query}\''.replace('{query}', query),
    showingXxxResultsForXxx: (count, query) => 'Showing {count} results for \'{query}\''.replace('{count}', count).replace('{query}', query),
    xxxVideos: count => '{count} videos'.replace('{count}', count)
};
const siteContent = {containers:[{containers:[],sitePath:'grundlagen-einfuhrung/',title:'Grundlagen / Einführung',videos:[{duration:'2 min',lqip:[[27,54,68],[28,53,69],[19,44,53],[21,43,55]],image:'poster_160x90.jpg',sitePath:'grundlagen-einfuhrung/was-ist-programmieren/',title:'Was ist Programmieren?'}, {duration:'1 min',lqip:[[25,57,64],[27,57,64],[23,48,56],[24,49,57]],image:'poster_160x90.jpg',sitePath:'grundlagen-einfuhrung/was-ist-ein-programmiercode/',title:'Was ist ein Programmiercode?'}]}, {containers:[],sitePath:'python-basics/',title:'Python Basics',videos:[{duration:'58 sec',lqip:[[28,55,70],[29,53,71],[23,47,57],[25,45,58]],image:'poster_160x90.jpg',sitePath:'python-basics/was-ist-python/',title:'Was ist Python?'}, {duration:'47 sec',lqip:[[27,55,70],[28,54,71],[20,45,56],[23,43,57]],image:'poster_160x90.jpg',sitePath:'python-basics/vorteile-von-python/',title:'Vorteile von Python'}, {duration:'44 sec',lqip:[[27,55,70],[28,54,71],[20,45,55],[22,44,57]],image:'poster_160x90.jpg',sitePath:'python-basics/nachteile-von-python/',title:'Nachteile von Python'}, {duration:'1 min',lqip:[[14,53,62],[24,57,64],[16,48,56],[24,50,57]],image:'poster_160x90.jpg',sitePath:'python-basics/beispiel-katzentur/',title:'Beispiel Katzentür'}]}, {containers:[],sitePath:'erste-schritte/',title:'Erste Schritte',videos:[{duration:'1 min',lqip:[[42,69,80],[121,141,148],[26,49,58],[48,66,75]],image:'poster_160x90.jpg',sitePath:'erste-schritte/erste-bausteine/',title:'Erste Bausteine'}, {duration:'1 min',lqip:[[42,69,82],[138,150,155],[28,51,59],[52,70,77]],image:'poster_160x90.jpg',sitePath:'erste-schritte/erste-schritte-in-python/',title:'Erste Schritte in Python'}]}, {containers:[],sitePath:'kommentare/',title:'Kommentare',videos:[{duration:'2 min',lqip:[[29,55,69],[30,54,70],[23,46,55],[25,44,57]],image:'poster_160x90.jpg',sitePath:'kommentare/kommentare-schreiben/',title:'Kommentare schreiben'}]}, {containers:[],sitePath:'datentypen-variablen/',title:'Datentypen & Variablen',videos:[{duration:'24 sec',lqip:[[29,55,69],[32,55,70],[30,53,62],[36,51,60]],image:'poster_160x90.jpg',sitePath:'datentypen-variablen/datentypen/',title:'Datentypen'}, {duration:'56 sec',lqip:[[30,56,70],[31,55,70],[31,51,59],[32,49,59]],image:'poster_160x90.jpg',sitePath:'datentypen-variablen/zahlen/',title:'Zahlen'}, {duration:'23 sec',lqip:[[31,57,70],[33,55,71],[31,51,60],[33,49,61]],image:'poster_160x90.jpg',sitePath:'datentypen-variablen/string/',title:'String'}, {duration:'32 sec',lqip:[[32,57,70],[33,56,72],[32,52,60],[34,50,62]],image:'poster_160x90.jpg',sitePath:'datentypen-variablen/boolean/',title:'Boolean'}, {duration:'36 sec',lqip:[[34,57,68],[34,55,69],[25,47,55],[27,47,59]],image:'poster_160x90.jpg',sitePath:'datentypen-variablen/variablen/',title:'Variablen'}]}, {containers:[],sitePath:'input/',title:'Input',videos:[{duration:'38 sec',lqip:[[32,57,68],[30,54,69],[26,49,57],[26,47,59]],image:'poster_160x90.jpg',sitePath:'input/input/',title:'Input'}]}, {containers:[],sitePath:'schleifen/',title:'Schleifen',videos:[{duration:'32 sec',lqip:[[28,54,68],[28,53,69],[22,45,55],[24,44,57]],image:'poster_160x90.jpg',sitePath:'schleifen/was-sind-schleifen/',title:'Was sind Schleifen?'}]}, {containers:[{containers:[{containers:[],sitePath:'docs/datentypen-variablen/datentypen/',title:'datentypen',videos:[]}, {containers:[],sitePath:'docs/datentypen-variablen/zahlen/',title:'zahlen',videos:[]}, {containers:[],sitePath:'docs/datentypen-variablen/boolean/',title:'boolean',videos:[]}, {containers:[],sitePath:'docs/datentypen-variablen/variablen/',title:'variablen',videos:[]}, {containers:[],sitePath:'docs/datentypen-variablen/string/',title:'string',videos:[]}],sitePath:'docs/datentypen-variablen/',title:'datentypen-variablen',videos:[]}, {containers:[{containers:[],sitePath:'docs/grundlagen-einfuhrung/was-ist-programmieren/',title:'was-ist-programmieren',videos:[]}, {containers:[],sitePath:'docs/grundlagen-einfuhrung/was-ist-ein-programmiercode/',title:'was-ist-ein-programmiercode',videos:[]}],sitePath:'docs/grundlagen-einfuhrung/',title:'grundlagen-einfuhrung',videos:[]}, {containers:[{containers:[],sitePath:'docs/kommentare/kommentare-schreiben/',title:'kommentare-schreiben',videos:[]}],sitePath:'docs/kommentare/',title:'kommentare',videos:[]}, {containers:[{containers:[],sitePath:'docs/input/input/',title:'input',videos:[]}],sitePath:'docs/input/',title:'input',videos:[]}, {containers:[{containers:[{containers:[],sitePath:'docs/docs/datentypen-variablen/datentypen/',title:'datentypen',videos:[]}, {containers:[],sitePath:'docs/docs/datentypen-variablen/zahlen/',title:'zahlen',videos:[]}, {containers:[],sitePath:'docs/docs/datentypen-variablen/boolean/',title:'boolean',videos:[]}, {containers:[],sitePath:'docs/docs/datentypen-variablen/variablen/',title:'variablen',videos:[]}, {containers:[],sitePath:'docs/docs/datentypen-variablen/string/',title:'string',videos:[]}],sitePath:'docs/docs/datentypen-variablen/',title:'datentypen-variablen',videos:[]}, {containers:[{containers:[],sitePath:'docs/docs/grundlagen-einfuhrung/was-ist-programmieren/',title:'was-ist-programmieren',videos:[]}, {containers:[],sitePath:'docs/docs/grundlagen-einfuhrung/was-ist-ein-programmiercode/',title:'was-ist-ein-programmiercode',videos:[]}],sitePath:'docs/docs/grundlagen-einfuhrung/',title:'grundlagen-einfuhrung',videos:[]}, {containers:[{containers:[],sitePath:'docs/docs/kommentare/kommentare-schreiben/',title:'kommentare-schreiben',videos:[]}],sitePath:'docs/docs/kommentare/',title:'kommentare',videos:[]}, {containers:[{containers:[],sitePath:'docs/docs/input/input/',title:'input',videos:[]}],sitePath:'docs/docs/input/',title:'input',videos:[]}, {containers:[{containers:[],sitePath:'docs/docs/erste-schritte/erste-schritte-in-python/',title:'erste-schritte-in-python',videos:[]}, {containers:[],sitePath:'docs/docs/erste-schritte/erste-bausteine/',title:'erste-bausteine',videos:[]}],sitePath:'docs/docs/erste-schritte/',title:'erste-schritte',videos:[]}, {containers:[{containers:[],sitePath:'docs/docs/python-basics/beispiel-katzentur/',title:'beispiel-katzentur',videos:[]}, {containers:[],sitePath:'docs/docs/python-basics/vorteile-von-python/',title:'vorteile-von-python',videos:[]}, {containers:[],sitePath:'docs/docs/python-basics/was-ist-python/',title:'was-ist-python',videos:[]}, {containers:[],sitePath:'docs/docs/python-basics/nachteile-von-python/',title:'nachteile-von-python',videos:[]}],sitePath:'docs/docs/python-basics/',title:'python-basics',videos:[]}, {containers:[{containers:[],sitePath:'docs/docs/schleifen/was-sind-schleifen/',title:'was-sind-schleifen',videos:[]}],sitePath:'docs/docs/schleifen/',title:'schleifen',videos:[]}],sitePath:'docs/docs/',title:'docs',videos:[]}, {containers:[{containers:[],sitePath:'docs/erste-schritte/erste-schritte-in-python/',title:'erste-schritte-in-python',videos:[]}, {containers:[],sitePath:'docs/erste-schritte/erste-bausteine/',title:'erste-bausteine',videos:[]}],sitePath:'docs/erste-schritte/',title:'erste-schritte',videos:[]}, {containers:[{containers:[],sitePath:'docs/python-basics/beispiel-katzentur/',title:'beispiel-katzentur',videos:[]}, {containers:[],sitePath:'docs/python-basics/vorteile-von-python/',title:'vorteile-von-python',videos:[]}, {containers:[],sitePath:'docs/python-basics/was-ist-python/',title:'was-ist-python',videos:[]}, {containers:[],sitePath:'docs/python-basics/nachteile-von-python/',title:'nachteile-von-python',videos:[]}],sitePath:'docs/python-basics/',title:'python-basics',videos:[]}, {containers:[{containers:[],sitePath:'docs/schleifen/was-sind-schleifen/',title:'was-sind-schleifen',videos:[]}],sitePath:'docs/schleifen/',title:'schleifen',videos:[]}],sitePath:'docs/',title:'docs',videos:[]}],sitePath:'',title:'Software Deafelopment',videos:[]};
const chevronRightIcon = document.querySelector('#chevron_right_icon').content;

const browseButton = document.querySelector('button.browse');

const shortcutsButton = document.querySelector('button.shortcuts');
const shortcutsPanel = document.querySelector('dialog.shortcuts');

const navigation = document.querySelector('header .navigation');

const searchContainer = document.querySelector('.search');
const clearSearchButton = searchContainer.querySelector('button');
const searchInput = searchContainer.querySelector('input');

const siteTree = document.querySelector('.site_tree');
const siteTreeElements = siteTree.querySelector('.elements');
const siteTreeStatus = siteTree.querySelector('[role="status"]');

const indexSuffix = window.location.pathname.endsWith('index.html') ? 'index.html' : '';

// We only render the site tree elements (which are displayed during
// browsing/searching) into the DOM when, or shortly before, we need them,
// for instance when the browse button or search input first gains focus.
// (null = uninitialized, false = initializing, true = initialized)
let siteTreeInitialized = null;

// If browsing/searching is initiated before the site tree has been
// initialized, we use this as the interval handle for repeatedly retrying
// the operation until the site tree has finished initializing.
let accessSiteTreeCallback = null;
let accessSiteTreeInterval = null;

function accessSiteTree(callback) {
    if (siteTreeInitialized === true) {
        callback();
    } else if (accessSiteTreeInterval === null) {
        if (siteTreeInitialized === null) {
            siteTreeInitialized = false;
            initializeSiteTree();
        }

        accessSiteTreeCallback = callback;
        accessSiteTreeInterval = setInterval(
            () => {
                if (siteTreeInitialized) {
                    clearInterval(accessSiteTreeInterval);
                    accessSiteTreeInterval = null;
                    accessSiteTreeCallback();
                }
            },
            20
        );
    } else {
        accessSiteTreeCallback = callback;
    }
}

function clearSearch() {
    searchContainer.classList.remove('query_present');
    searchInput.value = '';
    siteTree.classList.remove('open');
    siteTreeStatus.removeAttribute('aria-label');
    siteTreeStatus.textContent = '';
    searchInput.focus();
}

function initializeSiteTree() {
    browseButton.removeEventListener('focus', initializeSiteTree);
    searchInput.removeEventListener('focus', initializeSiteTree);

    // Create the search result element for the video inside the DOM, store a
    // reference to it in the siteContent tree
    function initializeVideo(video) {
        let image;
        if (video.image) {
            image = document.createElement('img');
            image.src = window.hyper8.rootPrefix + video.sitePath + video.image;

            if (video.lqip) {
                image.style.background = lqipToRadialGradient(video.lqip);
            }
        } else {
            image = document.createElement('span');
            image.classList.add('placeholder');
        }

        const divTitleDetails = document.createElement('div');

        const spanTitle = document.createElement('span');
        spanTitle.textContent = video.title;
        divTitleDetails.appendChild(spanTitle);

        const spanDetails = document.createElement('span');
        if (video.date) {
            if (video.duration) {
                spanDetails.textContent = `${video.date}, ${video.duration}`;
            } else {
                spanDetails.textContent = video.date;
            }
        } else if (video.duration) {
            spanDetails.textContent = video.duration;
        }
        divTitleDetails.appendChild(spanDetails);

        video.element = document.createElement('a');
        video.element.classList.add('video');
        video.element.href = window.hyper8.rootPrefix + video.sitePath + indexSuffix;
        video.element.appendChild(image);
        video.element.appendChild(divTitleDetails);

        if (video.sitePath === window.hyper8.sitePath) {
            video.element.classList.add('current');
        }

        siteTreeElements.appendChild(video.element);
    }

    // Create the search result element for this container (collection or
    // playlist) inside the DOM and store a reference to it in the siteContent
    // tree
    function initializeContainer(container, ancestors = undefined) {
        const traversal = ancestors ? [...ancestors, container] : [];

        container.expandToggle = document.createElement('span');

        const spanTitle = document.createElement('span');
        if (ancestors) {
            for (const [index, ancestor] of traversal.entries()) {
                if (index > 0) {
                    const separator = document.createElement('span');
                    separator.appendChild(chevronRightIcon.cloneNode(true));
                    // TODO: Clarify what label works best for screen reader
                    // users to succinctly express "separator indicating
                    // going down the hierarchy" (respectively use a semantic
                    // construct around the "breadcrumbs" in which the
                    // separators are hidden from screenreaders instead).
                    separator.setAttribute('aria-label', '>');

                    spanTitle.appendChild(separator);
                }

                spanTitle.append(ancestor.title);
            }
        } else {
            spanTitle.textContent = container.title;
        }

        container.element = document.createElement('a');
        container.element.classList.add('container');
        container.element.href = window.hyper8.rootPrefix + container.sitePath + indexSuffix;
        container.element.appendChild(container.expandToggle);
        container.element.appendChild(spanTitle);

        // If there are one or more videos, or if there is absolutely nothing at all
        // in the collection or playlist, we display the number of videos
        if (container.videos.length || !container.containers?.length) {
            const spanInfo = document.createElement('span');
            spanInfo.textContent = NAVIGATION_JS_T.xxxVideos(container.videos.length);
            container.element.appendChild(spanInfo);
        }

        if (container.videos.length) {
            container.expandToggle.appendChild(chevronRightIcon.cloneNode(true));
            container.expandToggle.setAttribute('aria-label', NAVIGATION_JS_T.expand);
            container.expandToggle.setAttribute('title', NAVIGATION_JS_T.expand);
            container.expandToggle.addEventListener('click', event => {
                collapseExpand(container.element);
                event.preventDefault();
            });
        }

        if (container.sitePath === window.hyper8.sitePath) {
            container.element.classList.add('current');
        }

        siteTreeElements.appendChild(container.element);

        for (const video of container.videos) {
            initializeVideo(video);
        }

        if (container.containers) {
            for (const subcontainer of container.containers) {
                initializeContainer(subcontainer, traversal);
            }
        }
    }

    initializeContainer(siteContent);

    siteTreeInitialized = true;
}

function lqipToRadialGradient(lqip) {
    const [ne, nw, se, sw] = lqip;
    return `radial-gradient(ellipse at top right, rgb(${ne[0]},${ne[1]},${ne[2]}), transparent),` +
        `radial-gradient(ellipse at top left, rgb(${nw[0]},${nw[1]},${nw[2]}), transparent),` +
        `radial-gradient(ellipse at bottom right, rgb(${se[0]},${se[1]},${se[2]}), transparent),` +
        `radial-gradient(ellipse at bottom left, rgb(${sw[0]},${sw[1]},${sw[2]}), transparent)`;
}

function toggleBrowse() {
    function updateContainer(container) {
        for (const video of container.videos) {
            updateVideo(video);
        }

        if (container.containers) {
            for (const subcontainer of container.containers) {
                updateContainer(subcontainer);
            }
        }

        container.element.classList.add('visible');
        container.element.classList.remove('expanded');
        container.expandToggle.setAttribute('aria-label', NAVIGATION_JS_T.expand);
        container.expandToggle.setAttribute('title', NAVIGATION_JS_T.expand);
    }

    function updateVideo(video) {
        const isCurrent = video.element.classList.contains('current');
        video.element.classList.toggle('visible', isCurrent);
    }

    siteTreeStatus.textContent = '';

    if (siteTreeElements.dataset.mode === 'browse') {
        siteTree.classList.remove('open');
        delete siteTreeElements.dataset.mode;
    } else {
        updateContainer(siteContent);

        siteTreeElements.style.setProperty('display', null);
        siteTree.classList.add('open');
        siteTreeElements.dataset.mode = 'browse';

        // TODO: Do we need to announce the browser opening with a custom status/text?
        // siteTreeStatus.setAttribute('aria-label', NAVIGATION_JS_T.showingXxxResultsForXxx(shown, query));
    }
}

function updateSearch() {
    const query = searchInput.value.trim();

    if (query.length) {
        const regexp = new RegExp(query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'i');

        // If the query is four digits we additionally try to match it against
        // video dates.
        const yearQuery = /^\d{4}$/.test(query);

        let shown = 0;

        function updateContainer(container) {
            let display = regexp.test(container.title);
            if (display) { shown += 1; }

            for (const video of container.videos) {
                display = updateVideo(video) || display;
            }

            if (container.containers) {
                for (const subcontainer of container.containers) {
                    updateContainer(subcontainer);
                }
            }

            container.element.classList.remove('expanded');
            container.expandToggle.setAttribute('aria-label', NAVIGATION_JS_T.collapse);
            container.expandToggle.setAttribute('title', NAVIGATION_JS_T.collapse);
            container.element.classList.toggle('visible', display);
        }

        function updateVideo(video) {
            const display = regexp.test(video.title) ||
                !!(yearQuery && video.date && video.date.includes(query));
            video.element.classList.toggle('visible', display);
            if (display) { shown += 1; }
            return display;
        }

        updateContainer(siteContent);

        if (shown === 0) {
            siteTreeElements.style.setProperty('display', 'none');
            siteTreeStatus.removeAttribute('aria-label');
            siteTreeStatus.textContent = NAVIGATION_JS_T.nothingFoundForXxx(query);
        } else {
            siteTreeElements.style.setProperty('display', null);
            siteTreeStatus.setAttribute('aria-label', NAVIGATION_JS_T.showingXxxResultsForXxx(shown, query));
            siteTreeStatus.textContent = '';
        }

        siteTree.classList.add('open');
    } else {
        siteTree.classList.remove('open');
        siteTreeStatus.removeAttribute('aria-label');
        siteTreeStatus.textContent = '';
    }

    delete siteTreeElements.dataset.mode;
}

clearSearchButton.addEventListener('click', clearSearch);

browseButton.addEventListener('focus', initializeSiteTree);
searchInput.addEventListener('focus', initializeSiteTree);

browseButton.addEventListener('click', () => accessSiteTree(toggleBrowse));

searchInput.addEventListener('input', () => {
    searchContainer.classList.toggle('query_present', searchInput.value.length);
    accessSiteTree(updateSearch);
});

function handleNavigationKeyInput() {
    if (event.key === 'ArrowUp') {
        if (siteTree.classList.contains('open')) {
            const visibleResults = [...siteTreeElements.querySelectorAll('a.visible')];

            if (visibleResults.length) {
                const targetRowIndex = visibleResults.indexOf(event.target);

                if (targetRowIndex === -1) {
                    visibleResults[visibleResults.length - 1].focus();
                } else if (targetRowIndex > 0) {
                    visibleResults[targetRowIndex - 1].focus();
                } else if (searchContainer.classList.contains('query_present')) {
                    searchInput.focus();
                } else {
                    visibleResults[visibleResults.length - 1].focus();
                }
            }

            event.preventDefault();
        }
    } else if (event.key === 'ArrowDown') {
        if (siteTree.classList.contains('open')) {
            const visibleResults = [...siteTreeElements.querySelectorAll('a.visible')];

            if (visibleResults.length) {
                const targetRowIndex = visibleResults.indexOf(event.target);

                if (targetRowIndex === -1) {
                    visibleResults[0].focus();
                } else if (targetRowIndex + 1 < visibleResults.length) {
                    visibleResults[targetRowIndex + 1].focus();
                } else if (searchContainer.classList.contains('query_present')) {
                    searchInput.focus();
                } else {
                    visibleResults[0].focus();
                }
            }

            event.preventDefault();
        }
    } else if (event.key === 'Escape') {
        if (searchContainer.classList.contains('query_present')) {
            clearSearch();
            event.preventDefault();
        } else if (siteTreeElements.dataset.mode === 'browse') {
            siteTree.classList.remove('open');
            delete siteTreeElements.dataset.mode;
            browseButton.focus();
        }
    } else if (event.key === ' ') {
        if (event.target.classList.contains('container')) {
            collapseExpand(event.target);
            event.preventDefault();
        } else if (event.target.classList.contains('video')) {
            event.preventDefault();
        }
    } else if (event.key === 'ArrowLeft') {
        if (event.target.classList.contains('container') ||
            event.target.classList.contains('video')) {
            collapseExpand(event.target, false);
            event.preventDefault();
        }
    } else if (event.key === 'ArrowRight') {
        if (event.target.classList.contains('container')) {
            collapseExpand(event.target, true);
            event.preventDefault();
        }
    }
}

navigation.addEventListener('keydown', handleNavigationKeyInput);
siteTree.addEventListener('keydown', handleNavigationKeyInput);

// siteTreeElement is usually a collection or playlist that is to be collapsed
// or expanded, but can also be a video if the intent is to collapse its
// parent collection or playlist. The expand parameter dictates whether to
// expand (true), collapse (false) or toggle (undefined) the element (or its
// parent).
function collapseExpand(siteTreeElement, expand = undefined) {
    function visitContainer(container) {
        if (container.element === siteTreeElement) {
            if (expand === undefined) {
                expand = !container.element.classList.contains('expanded');
            }

            for (const video of container.videos) {
                video.element.classList.toggle('visible', expand);
            }

            container.element.classList.toggle('expanded', expand);
            const expandOrCollapse = NAVIGATION_JS_T[expand ? 'collapse' : 'expand'];
            container.expandToggle.setAttribute('aria-label', expandOrCollapse);
            container.expandToggle.setAttribute('title', expandOrCollapse);

            return true;
        } else if (!expand && container.videos.some(video => video.element === siteTreeElement)) {
            for (const video of container.videos) {
                video.element.classList.remove('visible');
            }
            container.element.classList.remove('expanded');
            container.expandToggle.setAttribute('aria-label', NAVIGATION_JS_T.expand);
            container.expandToggle.setAttribute('title', NAVIGATION_JS_T.expand);
            container.element.focus();

            return true;
        } else if (container.containers) {
            for (const subcontainer of container.containers) {
                if (visitContainer(subcontainer)) {
                    return true;
                }
            }
        }

        return false;
    }

    visitContainer(siteContent);
}

shortcutsButton.addEventListener('click', () => {
    if (shortcutsPanel.open) {
        shortcutsPanel.close();
    } else {
        shortcutsPanel.show();
    }
});

window.addEventListener('keydown', event => {
    if (event.target === searchInput) return;

    if (event.key === 'b' || event.key === 'B') {
        browseButton.focus();
        accessSiteTree(toggleBrowse);
        event.preventDefault();
    } else if (event.key === 's' || event.key === 'S') {
        searchInput.focus();
        event.preventDefault();
    }
});
