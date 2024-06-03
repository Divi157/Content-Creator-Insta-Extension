(function() {
    'use strict';

    const speeds = [0.5, 0.75, 0.90, 1, 1.25];

    const leftSideNavBarClass = 'xopu45v xu3j5b3 xm81vs4 x1vjfegm';

    const classNames = {
        homePage: {
            elementType: 'homePage',
            elementContainerClassName: 'x9f619 xjbqb8w x78zum5 x168nmei x13lgxp2 x5pf9jr xo71vjh x1uhb9sk x1plvlek xryxfnj x1c4vz4f x2lah0s xdt5ytf xqjyukv x6s0dn4 x1oa3qoh x1nhvcw1',
            elementClassName: 'xyzq4qe x5yr21d x10l6tqk xh8yej3',
            elementParentClassName: 'x78zum5 xdt5ytf x5yr21d xa1mljc xh8yej3 x1bs97v6 x1q0q8m5 xso031l x11aubdm xnc8uc2',
            actionElementClassName: 'x6s0dn4 xrvj5dj x1o61qjw x12nagc x1gslohp > x78zum5',
            actionButtonClassName: 'postActionButton',
            speedOptionsContainerClassName : 'postSpeedOptionsContainer popover',
            speedOptionClassName : 'postSpeedOptionButton',
            profilePageLinkUnderReelAboutClass : 'xpdipgo x972fbf xcfux6l x1qhh985 xm0m39n xk390pu x5yr21d xdj266r x11i5rnm xat24cr x1mh8g0r xl1xv1r xexx8yu x4uap5 x18d9i69 xkhd6sd x11njtxf xh8yej3',
            audioPageLinkUnderActionsClass : 'x1lcm9me x1yr5g0i xrt01vj x10y3i5r xxk0z11 x6ikm8r x10wlt62 xvy4d1p xj34u2y xr117oq x1tqkkhy xpjowex xz3qqb7 x13fuv20 xu3j5b3 x1q0q8m5 x26u7qi x178xt8z xm81vs4 xso031l xy80clv',
            audioPageLinkUnderReelAboutClass : 'x9f619 xjbqb8w x78zum5 x168nmei x13lgxp2 x5pf9jr xo71vjh x1emribx x1uhb9sk x6ikm8r x10wlt62 x1c4vz4f xs83m0k xdt5ytf xqjyukv x1qjc9v5 x1oa3qoh x1nhvcw1',
            threeDotsLinkClass : 'html-div xe8uvvx xdj266r x11i5rnm x1mh8g0r xexx8yu x4uap5 x18d9i69 xkhd6sd x6s0dn4 x78zum5 x1chd833',
            goToPostLinkUnderThreeDotsClass : 'x1lliihq x1plvlek xryxfnj x1n2onr6 x193iq5w xeuugli x1fj9vlw x13faqbe x1vvkbs x1s928wv xhkezso x1gmr53x x1cpjm7i x1fgarty x1943h6x xqfltyo xvs91rp xo1l8bm x5n08af x10wh9bi x1wdrske x8viiok x18hxmgj',
            storiesContainerClass : '_aac4 _aac5 _aac6 _aj3f _ajdu',
            storyLinkClass: '_acaz'
        },

        storiesPage: {
            elementType: 'storiesPage',
            storiesCloseButtonClass : 'xjbqb8w x1ypdohk xw7yly9 xktsk01 x1yztbdb x1d52u69 x10l6tqk x13vifvy xds687c'
        },

        profilePage: {
            elementType: 'profilePage',
            elementClassName : 'x1lliihq x1n2onr6 xh8yej3 x4gyw5p xfllauq xo2y696 x11i5rnm x2pgyrj',
            elementContainerClassName : 'x1iyjqo2 xdj266r xkrivgy x4n8cb0 x1gryazu x1fawyso x6tf39o xc73u3c x18d9i69 x5ib6vp x19sv2k2 x164vai7 x13ijfrp xhwgc15 xkvl2z1 x58vhm7'
        },

        profileReelsPage: {
            elementType: 'profileReelsPage',
            elementContainerClassName: 'x1iyjqo2 xdj266r xkrivgy x4n8cb0 x1gryazu x1fawyso x6tf39o xc73u3c x18d9i69 x5ib6vp x19sv2k2 x164vai7 x13ijfrp xhwgc15 xkvl2z1 x58vhm7',
            elementClassName: 'x1qjc9v5 x972fbf xcfux6l x1qhh985 xm0m39n x9f619 x78zum5 xdt5ytf x2lah0s xln7xf2 xk390pu xdj266r xat24cr x1mh8g0r xexx8yu x4uap5 x18d9i69 xkhd6sd x1n2onr6 x11njtxf xpzaatj xw3qccf'
        },

        audioPage: {
            elementType: 'audioPage',
            elementClassName : '_abq3 _al5p',
            elementContainerClassName: 'xvbhtw8 x78zum5 xdt5ytf x1iyjqo2 x182iqb8'
        },

        messagePage : {
            elementType: 'messagePage',
            chatsContainerClassName: 'x1qjc9v5 x9f619 xdl72j9 x2lwn1j xeuugli x1n2onr6 x1ja2u2z x78zum5 xdt5ytf x1iyjqo2 xs83m0k x6ikm8r x10wlt62',
            singleChatMessagesContainerClassName: 'x1uipg7g xu3j5b3 xol2nv xlauuyb x26u7qi x19p7ews x78zum5 xdt5ytf x1iyjqo2 x6ikm8r x10wlt62',
            reelInChatMessagesClassName: 'x6ikm8r x10wlt62 x1n2onr6 x1tlxs6b x1g8br2z x1gn5b1j x230xth xtqaf1t'
        },

        postPopup : {
            elementType: 'postPopup',
            elementClassName : 'xb88tzc xw2csxc x1odjw0f x5fp0pe x1qjc9v5 xjbqb8w x1lcm9me x1yr5g0i xrt01vj x10y3i5r xr1yuqi xkrivgy x4ii5y1 x1gryazu x15h9jz8 x47corl xh8yej3 xir0mxb x1juhsu6',
            actionElementClassName : 'x78zum5 x1q0g3np xwib8y2 x1yrsyyn x1xp8e9x x13fuv20 x178xt8z xdj266r x11i5rnm xat24cr x1mh8g0r xo1ph6p x1pi30zi x1swvt13',
            actionButtonClassName : 'postActionButton',
            speedOptionsContainerClassName : 'postSpeedOptionsContainer popover',
            speedOptionClassName : 'postSpeedOptionButton',
        },

        postPage : {
            elementType: 'postPage',
            elementClassName : 'x6s0dn4 x78zum5 xdt5ytf xdj266r xkrivgy xat24cr x1gryazu x1n2onr6 xh8yej3',
            actionElementClassName : 'x1xp8e9x x13fuv20 x178xt8z x9f619 x1yrsyyn x1pi30zi x10b6aqq x1swvt13 xh8yej3 > x6s0dn4 xrvj5dj x1o61qjw > x78zum5',
            actionButtonClassName : 'postActionButton',
            speedOptionsContainerClassName : 'postSpeedOptionsContainer popover',
            speedOptionClassName : 'postSpeedOptionButton',
            additonalElementClassName : 'x1lliihq x1n2onr6 xh8yej3 x4gyw5p xfllauq xo2y696 x11i5rnm x2pgyrj'
        },

        reelPage : {
            elementType: 'reelPage',
            elementClassName : 'x6s0dn4 x78zum5 xdt5ytf xdj266r xkrivgy xat24cr x1gryazu x1n2onr6 xh8yej3',
            actionElementClassName : 'x1xp8e9x x13fuv20 x178xt8z x9f619 x1yrsyyn x1pi30zi x10b6aqq x1swvt13 xh8yej3 > x6s0dn4 xrvj5dj x1o61qjw > x78zum5',
            actionButtonClassName : 'postActionButton',
            speedOptionsContainerClassName : 'postSpeedOptionsContainer popover',
            speedOptionClassName : 'postSpeedOptionButton',
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
            speedOptionClassName : 'reelSpeedOptionButton',
            profilePageLinkUnderReelAboutClass : 'xpdipgo x972fbf xcfux6l x1qhh985 xm0m39n xk390pu x5yr21d xdj266r x11i5rnm xat24cr x1mh8g0r xl1xv1r xexx8yu x4uap5 x18d9i69 xkhd6sd x11njtxf xh8yej3',
            audioPageLinkUnderActionsClass : 'x1lcm9me x1yr5g0i xrt01vj x10y3i5r xxk0z11 x6ikm8r x10wlt62 xvy4d1p xj34u2y xr117oq x1tqkkhy xpjowex xz3qqb7 x13fuv20 xu3j5b3 x1q0q8m5 x26u7qi x178xt8z xm81vs4 xso031l xy80clv',
            audioPageLinkUnderReelAboutClass : 'x9f619 xjbqb8w x78zum5 x168nmei x13lgxp2 x5pf9jr xo71vjh x1emribx x1uhb9sk x6ikm8r x10wlt62 x1c4vz4f xs83m0k xdt5ytf xqjyukv x1qjc9v5 x1oa3qoh x1nhvcw1',
            threeDotsLinkClass : 'html-div xe8uvvx xdj266r x11i5rnm x1mh8g0r xexx8yu x4uap5 x18d9i69 xkhd6sd x6s0dn4 x78zum5 x1chd833',
            goToPostLinkUnderThreeDotsClass : 'x1lliihq x1plvlek xryxfnj x1n2onr6 x193iq5w xeuugli x1fj9vlw x13faqbe x1vvkbs x1s928wv xhkezso x1gmr53x x1cpjm7i x1fgarty x1943h6x xqfltyo xvs91rp xo1l8bm x5n08af x10wh9bi x1wdrske x8viiok x18hxmgj'
        },

    };

    instaLinkHandler();
    registerLinkClickEvents([leftSideNavBarClass]);

    // This function checks for insta link that's active and runs corresponding script functions.
    function instaLinkHandler() {
        let href = window.location.href;
        let timeout = 2000;
        if (href.indexOf('/reels/audio') !== -1) {
            timeout = 1500;
        } else if (href.indexOf('com/reels/') !== -1) {
            timeout = 3000;
        } else if (href.indexOf('/reels/') !== -1) {
            timeout = 3000;
        } else if (href.indexOf('/stories/') !== -1) {
            timeout = 3500;
        }

        setTimeout(function() {
            href = window.location.href;

            registerLinkClickEvents([leftSideNavBarClass]);

            //home page
            if (href === 'https://www.instagram.com/') { 
                runHomePageScriptFunctions();
            }
            // stories page
            else if (href.indexOf('/stories/') !== -1) { 
                registerLinkClickEvents([
                    classNames.storiesPage.storiesCloseButtonClass
                ]);
            }
            // chats page
            else if (href.indexOf('/direct/inbox') !== -1) { 
                registerLinkClickEvents([
                    classNames.messagePage.chatsContainerClassName
                ]);
            } 
            else if (href.indexOf('/direct/t') !== -1) {
               registerLinkClickEvents([
                    classNames.messagePage.chatsContainerClassName,
                    classNames.messagePage.singleChatMessagesContainerClassName
                ]); 
            }
            // reel audio page
            else if (href.indexOf('/reels/audio/') !== -1) {
                runAudioPageScriptFunctions();
            }
            // reels page
            else if (href.indexOf('com/reels/') !== -1) {
                runReelsPageScriptFunctions();
            }
            // profile reels page
            else if (href.indexOf('/reels/') !== -1) { 
                runProfileReelsPageScriptFunctions();
            }
            // single post page
            else if (href.indexOf('/p/') !== -1) { 
                runPostPageScriptFunctions();
            }
            // single reel page
            else if (href.indexOf('/reel/') !== -1) {
                runPostPageScriptFunctions();
            }
            // other pages like profile page
            else {
                runProfilePageScriptFunctions();
            }
        }, timeout);
    }

    function runAudioPageScriptFunctions() {
        var reelsContainerElementAudioPage = document.getElementsByClassName(classNames.audioPage.elementContainerClassName)[0];

        registerLinkClickEvents([
            classNames.postPage.additonalElementClassName,
            classNames.audioPage.elementClassName
        ]);

        const mutationConfig = { childList: true, subtree: true };
        var mutationCallback = function(mutationsList, observer) {
            registerLinkClickEvents([
                leftSideNavBarClass,
                classNames.postPage.additonalElementClassName,
                classNames.profilePage.elementClassName
            ]);
        };
        var mutationObserver = new MutationObserver(mutationCallback);
        mutationObserver.observe(reelsContainerElementAudioPage, mutationConfig);
    }

    function runProfilePageScriptFunctions() {
        var reelsContainerElementProfilePage = document.getElementsByClassName(classNames.profilePage.elementContainerClassName)[0];

        registerLinkClickEvents([
            classNames.profilePage.elementClassName
        ]);

        const mutationConfig = { childList: true, subtree: true };
        var mutationCallback = function(mutationsList, observer) {
            registerLinkClickEvents([
                leftSideNavBarClass,
                classNames.postPage.additonalElementClassName,
                classNames.profilePage.elementClassName
            ]);
        };
        var mutationObserver = new MutationObserver(mutationCallback);
        mutationObserver.observe(reelsContainerElementProfilePage, mutationConfig);
    }

    function runProfileReelsPageScriptFunctions() {
        var reelsContainerElementProfileReelsPage = document.getElementsByClassName(classNames.profileReelsPage.elementContainerClassName)[0];

        registerLinkClickEvents([
            classNames.profileReelsPage.elementClassName
        ]);

        const mutationConfig = { childList: true, subtree: true };
        var mutationCallback = function(mutationsList, observer) {
            registerLinkClickEvents([
                leftSideNavBarClass,
                classNames.postPage.additonalElementClassName,
                classNames.profileReelsPage.elementClassName
            ]);
        };
        var mutationObserver = new MutationObserver(mutationCallback);
        mutationObserver.observe(reelsContainerElementProfileReelsPage, mutationConfig);
    }

    // This function attaches click event handlers on given classes. Required as insta is one page application.
    function registerLinkClickEvents(containerClassNamesMonitored, rootElement = document) {
        for (var i=0; i<containerClassNamesMonitored.length; i++) {
            const containerElementsMonitored = rootElement.getElementsByClassName(containerClassNamesMonitored[i]);

            for (var j=0; j<containerElementsMonitored.length; j++) {
                const containerElementMonitored = containerElementsMonitored[j];
                containerElementMonitored.addEventListener("click", instaLinkHandler, { capture: true, once: true});
            }
        }
    }

    function runHomePageScriptFunctions() {
        var reelsContainerElement = document.getElementsByClassName(classNames.homePage.elementContainerClassName)[0];
        var reelsElements = reelsContainerElement.getElementsByClassName(classNames.homePage.elementClassName);


        // Add content creator helper elements to all the reel elements
        addContentCreatorHelperElements(reelsElements, classNames.homePage.elementType);

        registerLinkClickEvents([
            classNames.homePage.profilePageLinkUnderReelAboutClass,
            classNames.homePage.audioPageLinkUnderActionsClass,
            classNames.homePage.audioPageLinkUnderReelAboutClass,
            classNames.homePage.threeDotsLinkClass,
            classNames.homePage.goToPostLinkUnderThreeDotsClass,
        ], reelsContainerElement);

        registerLinkClickEvents([
            classNames.homePage.storyLinkClass
        ], document.getElementsByClassName(classNames.homePage.storiesContainerClass)[0]);

        const mutationConfig = { attributes: true, characterData: true, subtree: true  };
        var mutationCallback = function(mutationsList, observer) {
            mutationsList.forEach((mutation) => {
                setTimeout(function() {
                    if (window.location.href.indexOf('/stories/') !== -1) {
                        return;
                    }

                    if (window.location.href !== 'https://www.instagram.com/') {
                        instaLinkHandler();
                    }

                    var reelsElements = reelsContainerElement.getElementsByClassName(classNames.homePage.elementClassName);
                    addContentCreatorHelperElements(reelsElements, classNames.homePage.elementType);
                }, 1000);
            });

            registerLinkClickEvents([
                leftSideNavBarClass,
                classNames.homePage.profilePageLinkUnderReelAboutClass,
                classNames.homePage.audioPageLinkUnderActionsClass,
                classNames.homePage.audioPageLinkUnderReelAboutClass,
                classNames.homePage.threeDotsLinkClass,
                classNames.homePage.goToPostLinkUnderThreeDotsClass
            ]);
        };
        var mutationObserver = new MutationObserver(mutationCallback);
        mutationObserver.observe(reelsContainerElement, mutationConfig);
    }

    // This function adds content creator helper action button on post page
    function runPostPageScriptFunctions() {
        const isPostPopup = (document.getElementsByClassName(classNames.postPopup.elementClassName).length !== 0);

        const classNamesForElementType = isPostPopup ? classNames.postPopup : classNames.postPage;

        if (isPostPopup) {
            registerLinkClickEvents([
                classNames.messagePage.chatsContainerClassName,
                classNames.messagePage.singleChatMessagesContainerClassName,
                classNames.postPage.additonalElementClassName,
                classNames.profilePage.elementClassName,
                classNames.audioPage.elementClassName
            ]);
        } else {
            registerLinkClickEvents([
                classNames.postPage.additonalElementClassName,
                classNames.profilePage.elementClassName,
                classNames.audioPage.elementClassName
            ]);
        }

        const postElement = document.getElementsByClassName(classNamesForElementType.elementClassName)[0];

        addContentCreatorHelperElementsToGivenReelOrPost(postElement, classNamesForElementType.elementType);
    }

    // This function adds content creator helper action buttons on reels page
    function runReelsPageScriptFunctions() {

        var reelsContainerElement = document.getElementsByClassName(classNames.reelsPage.elementContainerClassName)[0];
        var reelsElements = reelsContainerElement.getElementsByClassName(classNames.reelsPage.elementClassName);

        // Add content creator helper elements to all the reel elements
        addContentCreatorHelperElements(reelsElements, classNames.reelsPage.elementType);

        registerLinkClickEvents([
            classNames.reelsPage.profilePageLinkUnderReelAboutClass,
            classNames.reelsPage.audioPageLinkUnderActionsClass,
            classNames.reelsPage.audioPageLinkUnderReelAboutClass,
            classNames.reelsPage.threeDotsLinkClass,
            classNames.reelsPage.goToPostLinkUnderThreeDotsClass
        ]);

        // Mutation config to detect when new reels elements are added in child list of the mutation target element
        const mutationConfig = { childList: true };
        // We want to observe mutations in all reels containers element, basically to trigger event when new reels get added to the dom
        // Callback function to execute when mutations are observed
        var mutationCallback = function(mutationsList, observer) {
            mutationsList.forEach((mutation) => {
                addContentCreatorHelperElements(mutation.addedNodes, classNames.reelsPage.elementType);
            });

            registerLinkClickEvents([
                leftSideNavBarClass,
                classNames.reelsPage.profilePageLinkUnderReelAboutClass,
                classNames.reelsPage.audioPageLinkUnderActionsClass,
                classNames.reelsPage.audioPageLinkUnderReelAboutClass,
                classNames.reelsPage.threeDotsLinkClass,
                classNames.reelsPage.goToPostLinkUnderThreeDotsClass
            ]);
        };
        var mutationObserver = new MutationObserver(mutationCallback);
        mutationObserver.observe(reelsContainerElement, mutationConfig);
    }

    // HELPER FUNCTIONS
    function addContentCreatorHelperElements(reelsOrPostsElements, elementType) {
        for (var i=0; i<reelsOrPostsElements.length; i++) {
            let reelOrPostElement = reelsOrPostsElements[i];
            if (reelOrPostElement.className !== classNames[elementType].elementClassName) {
                return;
            }

            if (elementType === classNames.homePage.elementType) {
                reelOrPostElement = reelOrPostElement.closest('.' + classNames[elementType].elementParentClassName.split(' ').join('.'));
            }

            addContentCreatorHelperElementsToGivenReelOrPost(reelOrPostElement, elementType);
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

        const flipIconImage = createImageElement('flipIcon', isDarkMode() ? 'flipIcon darkMode' : 'flipIcon', 'Flip'); 

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
        const className = isDarkMode() ? 'speedIcon darkMode' : 'speedIcon';
        const speedIconImage = createImageElement('speedIcon', className, 'Speed'); 
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
        speedOptionsContainerElement.className += isDarkMode() ? ' darkMode' : '';
        speedOptionsContainerElement.style.display = 'none';

        speedButtonElement.appendChild(speedOptionsContainerElement);
        return speedOptionsContainerElement;
    }

    function createSpeedOptionButtonElement(reelOrPostElement, speedButtonElement, speedOptionsContainerElement, speed, elementType) {
        const speedOptionbutton = document.createElement('div');
        speedOptionbutton.className = classNames[elementType].speedOptionClassName;
        speedOptionbutton.className += isDarkMode() ? ' darkMode' : '';
        speedOptionbutton.textContent = speed === 1 ? 'Normal' : speed + 'x';

        // event handler for when a speed option is clicked
        speedOptionbutton.onclick = function() {
            toggleElement(speedOptionsContainerElement);
            const speedButtonInnerTextElement = speedButtonElement.getElementsByTagName('span')[0];
            toggleElement(speedButtonInnerTextElement);
            changeSpeed(reelOrPostElement.getElementsByTagName('video')[0], speed);

            if (speed !== 1) {
                speedButtonInnerTextElement.removeChild(speedButtonInnerTextElement.getElementsByTagName('img')[0]); 
                speedButtonInnerTextElement.appendChild(createImageElement('speedIconClicked', 'speedIconClicked', 'Speed'));
            } else {
                const className = isDarkMode() ? 'speedIcon darkMode' : 'speedIcon';
                speedButtonInnerTextElement.removeChild(speedButtonInnerTextElement.getElementsByTagName('img')[0]); 
                speedButtonInnerTextElement.appendChild(createImageElement('speedIcon', className, 'Speed'));
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
            const className = isDarkMode() ? 'flipIcon darkMode' : 'flipIcon';
            mirrorButtonElement.appendChild(createImageElement('flipIcon', className, 'Flip')); 
        } else {
            mirrorButtonElement.appendChild(createImageElement('flipIconClicked', 'flipIconClicked', 'UnFlip'));
        }

        const newTransform = isFlipped ? 'scaleX(1)' : 'scaleX(-1)';
        videoElement.style.transform = newTransform;
    }

    // Function to handle dark mode changes
    function handleColorSchemeChange(event) {
        const isDarkMode = event.matches;
        const flipIconElements = document.getElementsByClassName('flipIcon');
        for (var i=0; i<flipIconElements.length; i++) {
            toggleElementForColorScheme(flipIconElements[i], isDarkMode);
        }

        const speedIconElements = document.getElementsByClassName('speedIcon');
        for (var i=0; i<speedIconElements.length; i++) {
            toggleElementForColorScheme(speedIconElements[i], isDarkMode);
        }

        const speedOptionElements = document.querySelectorAll('[class*="SpeedOptionButton"]');
        for (var i=0; i<speedOptionElements.length; i++) {
            toggleElementForColorScheme(speedOptionElements[i], isDarkMode);
        }

        const speedOptionContainerElements = document.querySelectorAll('[class*="SpeedOptionsContainer"]');
        for (var i=0; i<speedOptionContainerElements.length; i++) {
            toggleElementForColorScheme(speedOptionContainerElements[i], isDarkMode);
        }
    }

    // Add event listener for changes in color scheme
    window.matchMedia('(prefers-color-scheme: dark)').addListener(handleColorSchemeChange);

    function toggleElementForColorScheme(element, isDarkMode) {
        if (isDarkMode) {
            element.classList.add('darkMode');
        } else {
            element.classList.remove('darkMode');
        }
    }

    function isDarkMode() {
        return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    }

    // Function to toggle display of element
    function toggleElement(element) {
        element.style.display = (element.style.display === 'none') ? 'block' : 'none';
    }

    function changeSpeed(videoElement, speed) {
        videoElement.playbackRate = speed;
    }

    function createImageElement(imageName, className, altText) {
        const image = document.createElement('img');
        image.className = className;
        image.src = chrome.runtime.getURL(imageName + '.png');
        image.alt = altText;
        image.width = 25;
        image.height = 25;
        return image;
    }
})();
