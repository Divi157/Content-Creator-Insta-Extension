(function() {
    'use strict';

    const speeds = [0.5, 0.75, 0.90, 1, 1.25];

    const classNames = {
        postPopup : {
            elementType: 'postPopup',
            elementClassName : 'xb88tzc xw2csxc x1odjw0f x5fp0pe x1qjc9v5 xjbqb8w x1lcm9me x1yr5g0i xrt01vj x10y3i5r xr1yuqi xkrivgy x4ii5y1 x1gryazu x15h9jz8 x47corl xh8yej3 xir0mxb x1juhsu6',
            actionElementClassName : 'x78zum5 x1q0g3np xwib8y2 x1yrsyyn x1xp8e9x x13fuv20 x178xt8z xdj266r x11i5rnm xat24cr x1mh8g0r xo1ph6p x1pi30zi x1swvt13',
            actionButtonClassName : 'postActionButton',
            speedOptionsContainerClassName : 'postSpeedOptionsContainer popover',
            speedOptionClassName : 'postSpeedOption',
        },

        postPage : {
            elementType: 'postPage',
            elementClassName : 'x6s0dn4 x78zum5 xdt5ytf xdj266r xkrivgy xat24cr x1gryazu x1n2onr6 xh8yej3',
            actionElementClassName : 'x1xp8e9x x13fuv20 x178xt8z x9f619 x1yrsyyn x1pi30zi x10b6aqq x1swvt13 xh8yej3 > x6s0dn4 xrvj5dj x1o61qjw > x78zum5',
            actionButtonClassName : 'postActionButton',
            speedOptionsContainerClassName : 'postSpeedOptionsContainer popover',
            speedOptionClassName : 'postSpeedOption',
        },

        reelPage : {
            elementType: 'reelPage',
            elementClassName : 'x6s0dn4 x78zum5 xdt5ytf xdj266r xkrivgy xat24cr x1gryazu x1n2onr6 xh8yej3',
            actionElementClassName : 'x1xp8e9x x13fuv20 x178xt8z x9f619 x1yrsyyn x1pi30zi x10b6aqq x1swvt13 xh8yej3 > x6s0dn4 xrvj5dj x1o61qjw > x78zum5',
            actionButtonClassName : 'postActionButton',
            speedOptionsContainerClassName : 'postSpeedOptionsContainer popover',
            speedOptionClassName : 'postSpeedOption',
        },

        reelsPage : {
            elementType: 'reelsPage',
            // container element class for all the reels on reels page
            elementContainerClassName: 'x1pq812k xvbhtw8 x9f619 x1dr59a3 x1odjw0f x1miatn0 x1rohswg x1p6e16i x168l2et xfk6m8 x1yqm8si xjx87ck',
            // element class for one reel (including video and action tab) which is common for all reels
            elementClassName : 'x1qjc9v5 x9f619 x78zum5 xg7h5cd xl56j7k x1xfsgkm xqmdsaz x1bhewko xgv127d xh8yej3',
            // element class for action tab inside the reel element
            actionElementClassName : 'x9f619 xjbqb8w x78zum5 x168nmei x13lgxp2 x5pf9jr xo71vjh x12nagc x1uhb9sk x1plvlek xryxfnj x1c4vz4f x2lah0s xdt5ytf xqjyukv x6s0dn4 x1oa3qoh x13a6bvl x16n37ib x1247r65',
            actionButtonClassName : 'html-div xe8uvvx xdj266r x11i5rnm x1mh8g0r xexx8yu x4uap5 x18d9i69 xkhd6sd x6s0dn4 x78zum5 x1chd833',
            speedOptionsContainerClassName : 'reelSpeedOptionsContainer popover',
            speedOptionClassName : 'reelSpeedOption',
        },

    }

    instaLinkHandler();
    registerLinkClickEvents();

    // This function checks for insta link that's active and runs corresponding script functions.
    function instaLinkHandler(href) {
        setTimeout(function() {
            const href = window.location.href;

            if (href.indexOf('/reels/') !== -1) {
                runReelsPageScriptFunctions();
            }

            if (href.indexOf('/p/') !== -1) {
                runPostPageScriptFunctions();
            }

            if (href.indexOf('/reel/') !== -1) {
                runPostPageScriptFunctions();
            }
        }, 1000);
    }

    // This function attaches click event handlers on document. Required as insta is one page application.
    function registerLinkClickEvents() {
        document.addEventListener("click", function(event) {
            var clickedElement = event.target;
            const classesToNotMonitor = ['mirrorButton', 'speedButton', 'postSpeedOption', 'reelSpeedOption', 'speedIconClicked', 'speedIcon', 'flipIcon', 'flipIconClicked', 'popover'];
            if (!classesToNotMonitor.includes(clickedElement.classList[clickedElement.classList.length - 1])) {
                instaLinkHandler();
            }
        }, true);
    }

    // This function adds content creator helper action button on post page
    function runPostPageScriptFunctions() {
        const isPostPopup = (document.getElementsByClassName(classNames.postPopup.elementClassName).length !== 0);

        const classNamesForElementType = isPostPopup ? classNames.postPopup : classNames.postPage;

        const postElement = document.getElementsByClassName(classNamesForElementType.elementClassName)[0];

        addContentCreatorHelperElementsToGivenReelOrPost(postElement, classNamesForElementType.elementType);
    }

    // This function adds content creator helper action buttons on reels page
    function runReelsPageScriptFunctions() {

        // Mutation config to detect when new reels elements are added in child list of the mutation target element
        const mutationConfig = { childList: true };

        var reelsContainerElement = document.getElementsByClassName(classNames.reelsPage.elementContainerClassName)[0];
        var reelsElements = reelsContainerElement.getElementsByClassName(classNames.reelsPage.elementClassName);

        // Add content creator helper elements to all the reel elements
        addContentCreatorHelperElements(reelsElements, classNames.reelsPage.elementType);

        // We want to observe mutations in all reels containers element, basically to trigger event when new reels get added to the dom
        // Callback function to execute when mutations are observed
        var mutationCallback = function(mutationsList, observer) {
            mutationsList.forEach((mutation) => {
                addContentCreatorHelperElements(mutation.addedNodes, classNames.reelsPage.elementType);
            });
        };
        var mutationObserver = new MutationObserver(mutationCallback);
        mutationObserver.observe(reelsContainerElement, mutationConfig);
    }

    // HELPER FUNCTIONS
    function addContentCreatorHelperElements(reelsOrPostsElements, elementType) {
        for (var i=0; i<reelsOrPostsElements.length; i++) {
            if (reelsOrPostsElements[i].className !== classNames[elementType].elementClassName) {
                return;
            }

            addContentCreatorHelperElementsToGivenReelOrPost(reelsOrPostsElements[i], elementType);
        }
    }

    function addContentCreatorHelperElementsToGivenReelOrPost(reelOrPostElement, elementType) {
        createSpeedButtonForGivenReelOrPost(reelOrPostElement, elementType);
        createMirroButtonForGivenReelOrPost(reelOrPostElement, elementType);
    }

    // Create and append a button element with a Material Icons mirror icon
    function createMirroButtonForGivenReelOrPost(reelOrPostElement, elementType) {
        // mirror button already exists
        if (reelOrPostElement.getElementsByClassName('mirrorButton').length > 0) {
            return reelOrPostElement.getElementsByClassName('mirrorButton')[0];
        }

        const mirrorButtonElement = document.createElement('div');
        mirrorButtonElement.className = classNames[elementType].actionButtonClassName;
        mirrorButtonElement.classList.add('mirrorButton');

        const flipIconImage = createImageElement('flipIcon', 'Flip'); 

        mirrorButtonElement.appendChild(flipIconImage);
        mirrorButtonElement.onclick = function() {
            mirrorVideo(mirrorButtonElement, reelOrPostElement.getElementsByTagName('video')[0]);
        };

        const reelOrPostActionElement = getElementsByClassHierarchy(reelOrPostElement, classNames[elementType].actionElementClassName)[0];
        reelOrPostActionElement.insertBefore(mirrorButtonElement, reelOrPostActionElement.firstChild);
        return mirrorButtonElement;
    }

    // Create and append a button element with a Material Icons mirror icon
    function createSpeedButtonForGivenReelOrPost(reelOrPostElement, elementType) {
        // speed button already exists
        if (reelOrPostElement.getElementsByClassName('speedButton').length > 0) {
            return reelOrPostElement.getElementsByClassName('speedButton')[0];
        }

        const speedButtonElement = document.createElement('div');
        speedButtonElement.className = classNames[elementType].actionButtonClassName;
        speedButtonElement.classList.add('speedButton');

        const speedOptionsContainerElement = createSpeedOptionsElements(reelOrPostElement, speedButtonElement, elementType);
        const speedButtonInnerTextElement = createSpeedButtonInnerTextElement(speedButtonElement, speedOptionsContainerElement);

        const reelOrPostActionElement = getElementsByClassHierarchy(reelOrPostElement, classNames[elementType].actionElementClassName)[0];
        reelOrPostActionElement.insertBefore(speedButtonElement, reelOrPostActionElement.firstChild);
        return speedButtonElement;
    }

    function getElementsByClassHierarchy(rootElement, classNamesHierarchy) {
        const classNamesHierarchySplit =  classNamesHierarchy.split('>');
        var currentElement = rootElement;
        if (classNamesHierarchySplit.length === 1) {
            return currentElement.getElementsByClassName(classNamesHierarchySplit[0]);
        }

        for (var i = 0; i < classNamesHierarchySplit.length; i++) {
            const currentHierarchyClassName = classNamesHierarchySplit[i].trim();
            const elementsWithCurrentHierarchyClassName = currentElement.getElementsByClassName(currentHierarchyClassName);

            if (elementsWithCurrentHierarchyClassName.length === 0) {
                return elementsWithCurrentHierarchyClassName;
            }

            currentElement = elementsWithCurrentHierarchyClassName[0];
        }

        return [currentElement];
    }

    function createSpeedButtonInnerTextElement(speedButtonElement, speedOptionsContainerElement) {
        const speedButtonInnerTextElement = document.createElement('span');
        const speedIconImage = createImageElement('speedIcon', 'Speed'); 
        speedButtonInnerTextElement.appendChild(speedIconImage);
        speedButtonInnerTextElement.onclick = function() {
            toggleElement(speedOptionsContainerElement);
            toggleElement(speedButtonInnerTextElement);
        };

        speedButtonElement.appendChild(speedButtonInnerTextElement);

        return speedButtonInnerTextElement;
    }

    function createSpeedOptionsElements(reelOrPostElement, speedButtonElement, elementType) {
        const speedOptionsContainerElement = createSpeedOptionsContainerElement(speedButtonElement, elementType);

        speeds.forEach(speed => {
            createSpeedOptionButtonElement(reelOrPostElement, speedButtonElement, speedOptionsContainerElement, speed, elementType);
        });

        return speedOptionsContainerElement;
    }

    function createSpeedOptionsContainerElement(speedButtonElement, elementType) {
        const speedOptionsContainerElement = document.createElement('div');
        speedOptionsContainerElement.className = classNames[elementType].speedOptionsContainerClassName;
        speedOptionsContainerElement.style.display = 'none';

        speedButtonElement.appendChild(speedOptionsContainerElement);
        return speedOptionsContainerElement;
    }

    function createSpeedOptionButtonElement(reelOrPostElement, speedButtonElement, speedOptionsContainerElement, speed, elementType) {
        const speedOptionbutton = document.createElement('div');
        speedOptionbutton.className = classNames[elementType].speedOptionClassName;
        speedOptionbutton.textContent = speed === 1 ? 'Normal' : speed + 'x';

        // event handler for when a speed option is clicked
        speedOptionbutton.onclick = function() {
            toggleElement(speedOptionsContainerElement);
            const speedButtonInnerTextElement = speedButtonElement.getElementsByTagName('span')[0];
            toggleElement(speedButtonInnerTextElement);
            changeSpeed(reelOrPostElement.getElementsByTagName('video')[0], speed);

            if (speed !== 1) {
                speedButtonInnerTextElement.removeChild(speedButtonInnerTextElement.getElementsByTagName('img')[0]); 
                speedButtonInnerTextElement.appendChild(createImageElement('speedIconClicked', 'Speed'));
            } else {
                speedButtonInnerTextElement.removeChild(speedButtonInnerTextElement.getElementsByTagName('img')[0]); 
                speedButtonInnerTextElement.appendChild(createImageElement('speedIcon', 'Speed'));
            }
        };

        speedOptionsContainerElement.appendChild(speedOptionbutton);
        return speedOptionbutton;
    }

    // Function to mirror the video horizontally
    function mirrorVideo(mirrorButtonElement, videoElement) {
        const computedStyle = window.getComputedStyle(videoElement);
        const currentTransform = computedStyle.getPropertyValue('transform');
        const isFlipped = currentTransform.includes('matrix(-1, 0, 0, 1, 0, 0)'); // checking for scaleX(-1)

        mirrorButtonElement.removeChild(mirrorButtonElement.getElementsByTagName('img')[0]); 
        if (isFlipped) {
            mirrorButtonElement.appendChild(createImageElement('flipIcon', 'Flip')); 
        } else {
            mirrorButtonElement.appendChild(createImageElement('flipIconClicked', 'UnFlip'));
        }

        const newTransform = isFlipped ? 'scaleX(1)' : 'scaleX(-1)';
        videoElement.style.transform = newTransform;
    }

    // Function to toggle display of element
    function toggleElement(element) {
        element.style.display = (element.style.display === 'none') ? 'block' : 'none';
    }

    function changeSpeed(videoElement, speed) {
        videoElement.playbackRate = speed;
    }

    function createImageElement(imageName, altText) {
        const image = document.createElement('img');
        image.className = imageName;
        image.src = chrome.runtime.getURL(imageName + '.png');
        image.alt = altText;
        image.width = 25;
        image.height = 25;
        return image;
    }
})();
