/* eslint quotes: ["error", "double"] */
/* strings files need to be double quotes */
define({
  "builder": {
    "dialog": {
      "apply": "लागू करें",
      "close": "बंद करें"
    },
    "header": {
      "sharingNotAvailable": "जब तक आप कहानी साझा नहीं करते हैं तब तक यह उपलब्ध नहीं होता है",
      "edit": "संपादित करें"
    },
    "headerConfig": {
      "toggles": {
        "bookmarks": "बुकमार्क्स",
        "logoSharing": "लोगो और शेयरिंग",
        "theme": "दिखावट"
      },
      "bookmarks": {
        "title": "अनुभाग",
        "bookmark": "बुकमार्क",
        "intro": "बुकमार्क्स कहानी अनुभागों के लिंक हैं जो हेडर में दिखाए जाते हैं। अपनी कहानी के मुख्य अनुभागों के लिए संक्षिप्त बुकमार्क बनाने से पाठकों को उस ओर उन्मुख होने में सहायता मिलती है।",
        "sequentialDefault": "आवरण अनुभाग (कोई पाठ नहीं मिला)",
        "immersiveDefault": "इमर्सिव अनुभाग (कोई पाठ नहीं मिला)",
        "titleDefault": "शीर्षक अनुभाग (कोई पाठ नहीं मिला)",
        "coverDefault": "आवरण अनुभाग (कोई पाठ नहीं मिला)",
        "coverAppendage": "(आवरण)"
      },
      "logoSharing": {
        "logo": "लोगो",
        "logoButton": "${ESRI} लोगो का उपयोग करें",
        "useOrgLogo": "मेरे संगठन के लोगो का उपयोग करें",
        "useOrgLogoHelp": "आपके व्यवस्थापक द्वारा प्रदत्त लोगो का उपयोग",
        "logoLink": "लोगो लिंक",
        "logoUploadProgress": "लोगो अपलोड प्रगति पर है",
        "logoUploadSuccess": "लोगो सफलतापूर्वक अपलोड हुआ",
        "logoUploadError": "लोगो अपलोड होने में विफल रहा, ${ESRI} लोगो पर वापस स्विच कर रहा है",
        "customHeaderText": "टैगलाइन",
        "taglineLinkDisabledTooltip": "लिंक को सक्षम करने के लिए एक टैगलाइन प्रविष्ट करें",
        "link": "टैगलाइन लिंक",
        "enableSocialSharing": "शेयरिंग बटन प्रदर्शित करें"
      },
      "appearance": {
        "themeLabel": "थीम",
        "fontLabel": "फोंट्स",
        "previewLabel": "पूर्वावलोकन करें",
        "fontsTitleLabel": "शीर्षक",
        "fontsBodyLabel": "मुख्य भाग",
        "loremTitle": "Lorem Ipsum",
        "loremBody": "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor. Mauris consequat orci nec magna facilisis bibendum at eget libero."
      }
    },
    "share": {
      "btnPrivate": "निजी",
      "btnOrg": "संगठन",
      "btnPublic": "सार्वजनिक",
      "btnEveryone": "हर कोई"
    },
    "builderPanel": {
      "builderNamePrefix": "",
      "builderNameSuffix": "बिल्डर",
      "buttonSaving": "सहेजा जा रहा है",
      "buttonSaved": "सहेजा गया",
      "buttonError": "सहेजना विफल रहा",
      "buttonShare": "साझा करें",
      "buttonSettings": "सेटिंग्स",
      "settingsLogoError": "आपके लोगो में एक समस्या है। और जानने के लिए क्लिक करें।",
      "buttonHelp": "सहायता प्राप्त करें या GeoNet पर फ़ीडबैक सबमिट करें",
      "buttonPreview": "कहानी देखें",
      "buttonHealth": "स्वास्थ रिपोर्ट",
      "manageStories": "मेरी कहानियों का प्रबंधन करें",
      "closeWithPendingChange": "क्या आप इस कार्रवाई की सचमुच पुष्टि करना चाहते हैं? आपके परिवर्तन व्यर्थ जाएंगे।",
      "coverLabel": "आवरण",
      "creditsLabel": "क्रेडिट्स",
      "betaFeedback": "प्रतिपुष्टि",
      "betaNote": "कृपया ${APP_NAME} के बारे में आप क्या सोचते हैं या यदि कोई चीज आपके अपेक्षानुसार कार्य नहीं कर रही है तो उस बारे में, हमें बताएँ।",
      "notSharedNote": "आपकी कहानी साझा नहीं है, आप केवल इसे देख सकते हैं।",
      "organizationWarning": "यह सुनिश्चित करने के लिए कि अन्य लोग इस कहानी को देख सकें आपको इसके दृश्यों, दृश्य लेयरों, अंतःस्थापित ऐप्स को भी अपने संगठन के साथ अवश्य साझा करना चाहिए। मानचित्र और मानचित्र लेयरें स्वचालित रूप से साझा की जाती हैं।",
      "publicWarning": "यह सुनिश्चित करने के लिए कि इस कहानी को अन्य लोगों द्वारा देखा जा सकता है, आपको इसके दृश्य, दृश्य लेयर और एम्बेड किए गए ऐप्लिकेशन भी हर किसी से साझा करने चाहिए. मैप और मैप लेयर अपने आप साझा हो जाती हैंI",
      "addTitleNote": "सहेजने के लिए आवरण पर एक शीर्षक जोड़ें",
      "saveError": "आपकी कहानी को सहेजने में कोई त्रुटि थी।",
      "duplicate": "प्रतिलिपि",
      "organize": "व्यवस्थित करें",
      "done": "संपन्न",
      "invite": "जैसे ही आप अपनी कहानी बनाते हैं, तो अनुभाग यहाँ दिखाई देगा...",
      "mystoriestooltip": "कैस्केड बिल्डर आपकी कहानी में विवादों के लिए आपको सचेत करता है और उसे ठीक करने में आपकी सहायता करता है। दृश्य और अंतःस्थापित ऐप्स की जाँच नहीं की जाती है, इसलिए इसनी हाथ से जाँच करें।"
    },
    "immersiveViewPanel": {
      "transition": "संक्रमण",
      "chooseTransition": "संक्रमण चुनें",
      "fade": "फीका करें",
      "fadeSlow": "धीरे-धीरे फीका करें",
      "swipeVertical": "लंबवत स्वाइप करें",
      "swipeHorizontal": "क्षैतिज स्वाइप करें",
      "none": "कोई नहीं",
      "disabledConsecutiveSameMedia": "जब क्रमानुगत दृश्य एक ही मिडिया का उपयोग करते हैं तो उपलब्ध नहीं होता है",
      "disabledTooltipMap": "इस संक्रमण का उपयोग करने के लिए दोनों दृश्यों में दिखाई देने वाली लेयरें भिन्न-भिन्न अवश्य होनी चाहिए और अन्य मानचित्र गुण एक से अवश्य होने चाहिए",
      "disabledConsecutiveSameMap": "जब क्रमानुगत दृश्य एक ही मानचित्र का उपयोग करते हैं तो उपलब्ध नहीं होता है",
      "disabledNotInBeta": "जब क्रमानुगत दृश्य एक ही मानचित्र का उपयोग करते हैं तो उपलब्ध नहीं होता है",
      "disabledNonConsecutive": "उपलब्ध नहीं है क्योंकि इस मीडिया की एक अन्य घटना है जो कि गैर-क्रमानुगत है",
      "addMedia": "मीडिया जोड़ें",
      "invite": "जैसे ही आप अपने इमर्सिव अनुभाग का निर्माण करते हैं, तो दृश्य यहाँ दिखाई देंगे..."
    },
    "mediaConfig": {
      "tabs": {
        "appearance": "दिखावट",
        "manage": "प्रबंधित करें",
        "size": "आकार",
        "background": "पृष्ठभूमि",
        "mobile": "मोबाइल",
        "issues": "विवाद",
        "fixIssues": "विवादों को ठीक करें"
      },
      "manage": {
        "changeMedia": "मीडिया बदलें",
        "edit": "संपादित करें",
        "editAside": "एक नये ब्राउज़र टैब में खुलता है। अपने संपादनों को सहेजने के बाद, अपने परिवर्तनों को देखने के लिए इस कहानी को सहेजें और फिर से लोड करें।",
        "remove": "हटाएँ",
        "altTextPlaceholder": "दृष्टि बाधित पाठकों के लिए इस मीडिया का विवरण जोड़ें...",
        "altTextHelptip": "वैकल्पिक टेक्स्ट, स्क्रीन रीडर सॉफ़्टवेयर जैसे सहायक तकनीकों द्वारा प्रयुक्त विज़ुअल मीडिया का विवरण है। यह वैकल्पिक है, लेकिन WCAG और अनुभाग 508 वेब जैसे एक्सेसिबिलिटी दिशानिर्देशों की पूर्ति करने के लिए इसकी अनुशंसा की जाती है।"
      },
      "appearance": {
        "homeView": "प्रारंभिक दृश्य",
        "audio": "ऑडियो",
        "on": "चालू",
        "muted": "मूक किया गया",
        "volumeAside": "जब कोई पाठक इस दृश्य पर आएगा तो वीडियो स्वतः चलेगा। यदि आप ध्वनि को मूक कर देते हैं, तो पाठक इसे सक्षम नहीं कर पाएगा।",
        "view": "दृश्य",
        "resetLocation": "स्थान को पुनः सेट करें",
        "resetLayers": "लेयरों को पुनः सेट करें",
        "clearPopup": "पॉप-अप को हटाएँ",
        "interaction": "अंतःक्रिया",
        "interactionDisabled": "अंतःक्रिया अक्षम की गई",
        "buttonToEnable": "सक्षम करने के लिए बटन",
        "interactionEnabled": "अंतःक्रिया सक्षम की गई",
        "interactionAside": "*टच उपकरण एक अंतःक्रिया बटन दिखाएँगे।",
        "slide": "स्लाइड",
        "noSlides": "कोई स्लाइड उपलब्ध है।",
        "mapExtentPrompt": "अपनी कहानी को बताने के लिए मानचित्र को अद्यतन करें, परिवर्तनों सहेजने के लिए सही के निशान पर क्लिक करें"
      },
      "sectionAppearance": {
        "layout": "रूपरेखा",
        "theme": "थीम"
      },
      "size": {
        "small": "छोटा",
        "medium": "मध्यम",
        "large": "बड़ा",
        "noCrop": "लंबी इमेज को क्रॉप न करें",
        "noCropTallTooltip": "लंबी इमेज क्रॉप न करने से पाठकों के लिए नाटकीय प्रभाव उत्पन्न होता है, जिसके लिए पूरी इमेज को देखने के लिए स्क्रॉलिंग की ज़रूरत होती है।"
      },
      "background": {
        "noCrop": "क्रॉप न करें",
        "mostImportantPart": "सबसे महत्वपूर्ण बिंदु को चुनें",
        "cropExplanationImmersive": "इस बात का चुनाव करने के लिए कि आपकी इमेज भिन्न-भिन्न स्क्रीन आकारों पर कैसे क्रॉप की जाएगी छवि पर किसी बिंदु का चयन करें। आपके द्वारा चयनित बिंदु हमेशा दिखाई देगा। अगर आपकी इमेज को पूरी तरह से दिखाया जाना हो, तो 'क्रॉप न करें' पर सही का निशान लगाएँ।",
        "cropExplanation": "इस बात का चुनाव करने के लिए कि आपकी इमेज भिन्न-भिन्न स्क्रीन आकारों पर कैसे क्रॉप की जाएगी छवि पर किसी बिंदु का चयन करें। आपके द्वारा चयनित बिंदु हमेशा दिखाई देगा।",
        "color": "रंग",
        "previews": "पूर्वालोकन"
      },
      "altMedia": {
        "alternativeMedia": "मोबाइल के लिए वैकल्पिक इमेज",
        "explanation": "कुछ मीडिया समर्थित नहीं हैं या संभवत: मोबाइल डिवाइसों पर ठीक से काम न करें। ऐसी इमेज निर्दिष्ट करने के लिए इस पैनल का उपयोग करें जिसे किसी फ़ोन या टैबलेट पर आपकी कहानी देखे जाते समय इस मीडियो के स्थान पर दर्शाया जाएगा।",
        "changeAltImage": "इमेज बदलें",
        "uploadAltImage": "दूसरी इमेज जोड़ें"
      }
    },
    "mediaPicker": {
      "browseToggle": {
        "urls": "कन्टेन्ट के लिए लिंक",
        "urls_short": "लिंक",
        "contentType": {
          "error": "कोई अधिकृत मीडिया नहीं है।",
          "imageOnly": "कहानी के इस भाग में, आप एक छवि जोड़ सकते हैं।",
          "imageAndVideo": "कहानी के इस भाग में, आप एक छवि या एक वीडियो जोड़ सकते हैं।",
          "imageVideoWebpage": "स्टोरी के इस भाग में, आप ऑडियो, एक छवि, एक वीडियो और एक वेबपेज जोड़ सकते हैं।"
        }
      },
      "browsePanel": {
        "providers": {
          "searchingFor": "\"${searchterm}\" के लिए खोज रहें हैं...",
          "searchedFor": "\"${searchterm}\" के लिए परिणाम",
          "albumsOf": "${username} की एलबम",
          "noPhotosFound": "कोई भी तस्वीर आपकी खोज से नहीं मिली। कृपया पुन: प्रयास करें।",
          "noItemsFound": "कोई भी आइटम आपकी खोज से नहीं मिला। कृपया पुन: प्रयास करें।",
          "noItemsInThisStory": "अभी तक इस कहानी में ArcGIS से कोई भी सामग्री नहीं जोड़ी गयी है।",
          "limitReached": "100 आइटम दिखा रहे हैं। यदि आप वह नहीं पाते है जो आपको चहिए, तो कीवर्ड से खोज का प्रयास करें।",
          "galleryItems": {
            "uploadError": "क्षमा करें, यह आइटम अपलोड होने में विफल रहा।"
          },
          "agol": {
            "remove1": "अपने ArcGIS खाते से इस अप्रयुक्त छवि को हटा दें।",
            "remove2": "(यदि आप इसका उपयोग बाद में करने का निर्णय करते हैं तो आपको इसे पुनः अपलोड करना होगा।)",
            "removeFailed": "पहुँच के बहार छवि को इस सूची से निकाल दें।",
            "modified": "संशोधित ${date}",
            "uploaded": "अपलोड की गई ${date}",
            "contentByAuthor": "${author} से ${contentType}"
          },
          "googlePhotos": {
            "searchAndBrowse": "${Picasa} या ${Google+} पर फ़ोटो ब्राउज़ करें"
          },
          "flickr": {
            "photostream": "फोटोस्ट्रीम",
            "searchAndBrowse": "${Flickr} पर फ़ोटो खोजें और ब्राउज़ करें",
            "captionStarter": "फ़ोटो ${USERNAME} द्वारा ${Flickr} पर"
          },
          "unsplash": {
            "searchAndBrowse": "${Unsplash} पर तस्वीरें खोजें",
            "photoBy": "${username} से फोटो",
            "userLink": "${username} के ${Unsplash} पेज पर जाएँ",
            "captionStarter": "फ़ोटो ${USERNAME} द्वारा ${Unsplash} पर"
          },
          "urlContent": {
            "uploadHeaders": {
              "generic": "वेब पर कन्टेन्ट के लिए लिंक",
              "imageOnly": "वेब पर एक छवि के लिए लिंक",
              "imageAndVideo": "एक छवि या वेब पर वीडियो के लिए लिंक"
            },
            "linkText": {
              "imageOnly": "ऊपर वाले बॉक्स में, आप किसी फ़ोटो पर सीधे लिंक कर सकते हैं।",
              "imageAndVideo1": "ऊपर वाले बॉक्स में, आप ${YouTube} या ${Vimeo} के किसी लिंक या iframe कोड को चिपका सकते हैं।",
              "imageAndVideo2": "आप किसी फ़ोटो पर सीधे क्लिक भी कर सकते हैं।",
              "imageVideoWebpage1": "ऊपर वाले बॉक्स में, आप ${YouTube} या ${Vimeo} पर किसी गतिशील चार्ट या वीडियो जैसी वेब सामग्री का लिंक या iframe कोड चिपका सकते हैं।",
              "imageVideoWebpage2": "आप किसी फ़ोटो, वीडियो, ऑडियो फ़ाइल, वेब पृष्ठ या वेब ऐप पर सीधे क्लिक भी कर सकते हैं।",
              "ender": "हमेशा सुरक्षित (https) लिंक का उपयोग करें। यदि आपकी सामग्री https का समर्थन नहीं करती है तो अपनी कहानी के लेख में उसका एक लिंक जोड़ें ताकि पाठक उसे किसी नए ब्राउज़र टैब में देख सकें।",
              "httpsError": "लिंक HTTPS से शुरू होना चाहिए"
            },
            "embedProtocol": {
              "embedProtocolLabel": "किसी सुरक्षित कनेक्शन (https) पर पेज लोड करें",
              "embedProtocolWarning1": "यदि यह पेज आपकी कहानी में लोड नहीं होता है, तो इसे वेब सुरक्षा कारणों से एम्बेडेड नहीं किया जा सकता।",
              "embedProtocolWarning2": "यदि यह पेज आपकी कहानी में लोड नहीं होता है, तो इस विकल्प को अचयनित करें और पुनः कोशिश करें। यदि पेज अभी भी लोड नहीं होता है, तो इसे वेब सुरक्षा कारणों से एम्बेडेड नहीं किया जा सकता।",
              "embedProtocolWarning3": "एक विकल्प के रूप में, किसी नया ब्राउज़र टैब में पेज खोलने के लिए अपनी कहानी में एक लिंक जोड़ें। ${linkText}",
              "linkText": "और अधिक जानें।"
            },
            "placeholder": "${https://}... या ${<iframe>}",
            "uploadErrors": {
              "generic": "दर्ज किये गए पते के साथ कुछ गलत हो गया। कृपया पुन: प्रयास करें।",
              "imageOnly1": "आपको कहानी के इस भाग में एक छवि का उपयोग करना आवश्यक है।",
              "imageOnly2": "कृपया एक छवि (.jpg, .png, .gif) के लिए एक लिंक प्रदान करें या ${ArcGIS}, ${Flickr}, ${Google+}, या ${Unsplash} से एक छवि चुनें।",
              "imageAndVideo1": "आपको कहानी के इस भाग में किसी छवि या वीडियो का उपयोग करना आवश्यक है।",
              "imageAndVideo2": "कृपया एक छवि (.jpg, .png, .gif) या ${YouTube} या ${Vimeo} पर एक वीडियो के लिए एक लिंक प्रदान करें, ${ArcGIS}, ${Flickr}, ${Google+}, या ${Unsplash} से एक छवि चुनें।",
              "badFormat": "फ़ाइल के लिए जो लिंक आप जोड़ने की कोशिश कर रहे हैं उसका प्रारूप गलत है।",
              "inaccessible": "आप जिस फ़ाइल को जोड़ने की कोशिश कर रहे हैं, वह अनुपस्थित है या पहुँच योग्य नहीं है।",
              "tryAgain": "कृपया पते की जांच करें और पुनः प्रयास करें।",
              "mediaTypes": {
                "VIDEO": "वीडियो",
                "IMAGE": "छवि",
                "generic": "मीडिया"
              }
            }
          }
        },
        "sidePanel": {
          "thirdPartyTerms": "किसी तृतीय-पक्ष सेवा का उपयोग करके, आप इसकी सेवा की शर्तों से सहमत होते हैं: ",
          "googlePhotos": {
            "placeholder": "ईमेल या ${Picasa}/${Google+} आईडी",
            "helpText": "आप अपनी कहानी के लिए ${Picasa} या ${Google+} पर अपलोड की गए तस्वीरों को जोड़ सकते हैं। अपनी कहानियों में अपने ${Google} खाते में संग्रहीत छवियों का उपयोग करने के बारे में ${helpLinkText}।",
            "helpLinkText": "और अधिक जानें",
            "cannotFindUser": "प्रयोक्ता ${username} नहीं मिला। कृपया पुन: प्रयास करें।"
          },
          "unsplash": {
            "placeholder": "तस्वीरों के लिए खोजें",
            "aboutText": "${Unsplash} उच्च गुणवत्ता फोटो वाली एक मुफ्त क्यूरेट संग्रह है।",
            "copyrightText": "सभी फ़ोटो ${Unsplash} लाइसेंस के तहत लाइसेंसीकृत हैं। और जानकारी यहां पाएं ${moreInfoLink}।",
            "moreInfoLink": "यहाँ"
          },
          "flickr": {
            "searchType": {
              "account": "${Flickr} खाता",
              "text": "सभी ${Flickr}"
            },
            "placeholders": {
              "user": "खाता खोजें",
              "userText": "इस खाते को तस्वीरों के लिए खोजें",
              "text": "तस्वीरों के लिए खोजें"
            },
            "errors": {
              "cannotFindUser": "उपयोगकर्ता ${username} नहीं मिला।",
              "noUserPhotos": "${username} की कोई सार्वजनिक तस्वीरें नहीं हैं।",
              "didYouMean": "क्या आपका मतलब ${username} था?",
              "generalUserError": "उपयोगकर्ता ${username} की खोज करते समय कुछ गलत हो गया।"
            },
            "licenses": {
              "licenseLabel": "लाइसेंस: ",
              "public": "सार्वजनिक डोमेन",
              "commercial": "वाणिज्यिक उपयोग के लिए ठीक",
              "nonCommercial": "गैर-वाणिज्यिक उपयोग के लिए ठीक",
              "reserved": "सर्वाधिकार सुरक्षित",
              "any": "कोई भी लाइसेंस"
            }
          },
          "agol": {
            "searchLocation": {
              "thisStory": "यह कहानी",
              "agol": "ArcGIS Online",
              "portalArcGIS": "ArcGIS का पोर्टल",
              "portal": "पोर्टल",
              "myOrg": "${orgname} संगठन",
              "myContent": "मेरी सामग्री"
            },
            "createContent": {
              "createNewMap": "एक नया मैप बनाएं",
              "or": "या",
              "dragAndDropImage": "छवियां छोड़ें",
              "dragAndDropImageAudio": "छवियां या ऑडियो छोड़ें",
              "uploadButton": "ब्राउज करें",
              "agolInfo": "अपलोड की गई छवियां और ऑडियो केवल इस स्टोरी में पहुँच योग्य होंगे।",
              "saveBeforeUpload": "एक बार जब आप स्टोरी सहेज लें, तो आप छवियों और ऑडियो को यहाँ ArcGIS में अपलोड कर सकते हैं।",
              "fileExtsImage": "समर्थित प्रकारः png, jpg, gif, bmp.",
              "fileExtsImageAudio": "समर्थित प्रकारः png, jpg, gif, bmp, mp3.",
              "maxSize": "अधिकतम 10 MB प्रति फ़ाइल।"
            },
            "filterAndSort": {
              "webmap": "वेब मैप",
              "webscene": "वेब सीन",
              "image": "छवि",
              "audio": "ऑडियो",
              "date": "दिनांक",
              "sortByDate": "तिथि के अनुसार छांटें",
              "title": "शीर्षक",
              "sortByTitle": "शीर्षक के अनुसार छांटें",
              "views": "दृश्य",
              "search": "कीवर्ड या आईडी के आधार पर खोजें"
            }
          }
        }
      }
    },
    "mapEditor": {
      "dialogTitle": "मानचित्र संपादित करें",
      "unauthorizedDomain": "आप मैप संपादक का उपयोग करने के लिए किसी प्रमाणीकृत डोमेन पर नहीं हैं",
      "loading": "कृपया मानचित्र संपादक लोड होने तक प्रतीक्षा करें",
      "saving": "मानचित्र सहेजा जा रहा है",
      "success": "मानचित्र सहेज लिया गया है",
      "cancelTitle": "सहेजे नहीं गए परिवर्तनों को छोड़ें?",
      "errorSave": "मानचित्र सहेजने में अक्षम। कृपया पुन: प्रयास करें।",
      "loadFail": "क्षमा करें, मैप संपादक लोड नहीं किया जा सकता है",
      "close": "बंद करें",
      "save": "सहेजें",
      "confirm": "हां, मैप बंद करें",
      "deny": "नहीं, कार्य करना जारी रखें"
    },
    "textEditor": {
      "placeholder": {
        "continueStory": "अपनी कहानी यहाँ पर जारी रखें..."
      },
      "blockAdd": {
        "text": "पाठ",
        "media": "मीडिया",
        "title": "शीर्षक",
        "immersive": "इमर्सिव"
      },
      "link": {
        "invite": "कोई लिंक पेस्ट या टाइप करें..."
      },
      "color": {
        "choose": "चुनें",
        "cancel": "रद्द करे",
        "clear": "स्पष्ट रंग"
      }
    },
    "imageGallery": {
      "addImage": "दूसरी इमेज जोड़ें",
      "moveBackward": "पीछे जाएँ",
      "moveForward": "आगे जाएँ"
    },
    "cover": {
      "titlePrompt": "अपनी कहानी का शीर्षक दर्ज करें...",
      "subtitlePrompt": "आरंभ करने या कोई वैकल्पिक उपशीर्षक दर्ज करने के लिए नीचे स्क्रॉल करें",
      "mediaPlaceholder": "अपनी छवि या वीडियो जोड़ें",
      "saveError": "सहेजना विफल रहा है, आपका पहले से ही इस शीर्षक वाला कोई आइटम है"
    },
    "credits": {
      "sectionInvite": "एक क्रेडिट्स अनुभाग जोड़ें",
      "warning": "दोनों फील्ड्स को अवश्य भरा जाना चाहिए",
      "content": "सामग्री...",
      "source": "स्रोत...",
      "linkPrompt": "वैकल्पिक लिंग...",
      "introductionPlaceholder": "अपने क्रेडिट्स अनुभाग में कोई वैकल्पिक परिचय दर्ज करें ..."
    },
    "immersive": {
      "titleConfig": {
        "theme": "थीम"
      },
      "panelConfig": {
        "position": "स्थिति",
        "theme": "थीम",
        "size": "आकार",
        "background": "पृष्ठभूमि",
        "layout": "स्क्रॉल कर रहा है (सभी पैनलों के लिए)"
      }
    },
    "title": {
      "placeholder": "टाइटल दर्ज करें..."
    },
    "media": {
      "mediaUpload": "मीडिया अपलोड प्रगति पर है...",
      "mediaUploadSuccess": "मीडिया सफलतापूर्वक अपलोड हुआ",
      "mediaUploadFail": "मीडिया अपलोड विफल रहा"
    },
    "controller": {
      "sectionOrganize": "आपने अनुभागों को व्यवस्थित किया",
      "immersiveOrganize": "आपने दृश्यों को व्यवस्थित किया",
      "sectionDelete": "आपने एक अनुभाग को हटा दिया",
      "viewDelete": "आपने एक दृश्य को हटा दिया"
    },
    "notification": {
      "cancel": "रद्द करें",
      "close": "बंद करें",
      "undo": "पूर्ववत करें"
    },
    "sections": {
      "sequence": "वर्णन",
      "immersive": "इमर्सिव",
      "title": "शीर्षक"
    },
    "mediaErrors": {
      "mediaTypes": {
        "image": "छवि",
        "audio": "ऑडियो",
        "webmap": "मानचित्र",
        "webscene": "दृश्य",
        "video": "वीडियो",
        "content": "सामग्री",
        "webpage": "वेब पृष्ठ"
      },
      "placeholders": {
        "generic": "यह सामग्री सुलभ नहीं है।",
        "deleted": "यह वस्तु हटा दी गई है।",
        "inaccessible": "यह सामग्री सुलभ नहीं है।",
        "unauthorized": "आप इस सामग्री को देखने हेतु अधिकृत नहीं हैं",
        "unshared": "यह वस्तु आपकी कहानी की तरह ही साझा नहीं की जाती है।",
        "othersUnshared": "यह वस्तु आपकी कहानी की तरह ही साझा नहीं की जाती है।",
        "subscriptionContent": "इस मैप में उपभोक्त लेयर शामिल है।",
        "premiumContent": "इस मैप में प्रीमियम लेयर शामिल है।",
        "secureService": "इस मैप में सुरक्षआ लेयर शामिल है।"
      },
      "contentIssues": {
        "noAltImage": "संभवत: मोबाइल पर मीडिया काम न करे",
        "noAltImageUnsupported": "मोबाइल पर मीडिया समर्थित नहीं है",
        "noAltImageWarning": "संभवत: मोबाइल पर मीडिया काम न करे",
        "altImageBroken": "इस मीडिया वस्तु के लिए निर्धारित वैकल्पिक इमेज पहुँच योग्य नहीं है",
        "httpMedia": "असुरक्षित मीडिया",
        "httpContent": "असुरक्षित सामग्री"
      },
      "contentWarnings": {
        "noAltImage": "अपनी कहानी साझा करने से पहले मोबाइल डिवाइसों पर उसका परीक्षण करना सुनिश्चित करें। यदि यह मीडिया अपेक्षित रूप से काम नहीं करता, तो नीचे दिए गए बटन का उपयोग करके ऐसी वैकल्पिक छवि जोड़ें जिसे किसी फ़ोन या टैबलेट पर आपकी कहानी देखे जाते समय दर्शाया जाएगा।",
        "noAltImageUnsupported": "यह मीडिया मोबाइल डिवाइसों पर काम नहीं करेगा। नीचे दिए गए बटन का उपयोग करके ऐसी वैकल्पिक इमेज भेजें जिसे किसी फ़ोन या टैबलेट पर आपकी कहानी देखे जाते समय दर्शाया जाएगा।",
        "noAltImageWarning": "अपनी कहानी साझा करने से पहले मोबाइल डिवाइसों पर उसका परीक्षण करना सुनिश्चित करें। यदि यह मीडिया अपेक्षित रूप से काम नहीं करता, तो नीचे दिए गए बटन का उपयोग करके ऐसी वैकल्पिक छवि जोड़ें जिसे किसी फ़ोन या टैबलेट पर आपकी कहानी देखे जाते समय दर्शाया जाएगा।",
        "noAltImageAlt": "इस प्रकार का मीडिया समर्थित नहीं है या संभवत: वह मोबाइल डिवाइसों पर काम नहीं करेगा। मोबाइल टैब पर, ऐसी वैकल्पिक इमेज प्रदान करें जिसे किसी फ़ोन या टैबलेट पर आपकी कहानी देखे जाते समय दर्शाया जाएगा।"
      },
      "descriptions": {
        "httpAudioUnfixable": "यह ऑडियो HTTPS का समर्थन नहीं करता है। इसे स्टोरी से निकालें या किसी लिंक से बदल दें।",
        "httpAudioUncheckable": "इस ऑडियो में असुरक्षित (HTTP) URL है। इस ऑडियो के लिए HTTPS URL का उपयोग करने के लिए नीचे बटन पर क्लिक करें। यदि यह काम नहीं करता है, अपनी कहानी से ऑडियो को हटा दें या इसे हाइपरलिंक से प्रतिस्थापित करें।",
        "httpAudioFixable": "इस ऑडियो में असुरक्षित (HTTP) URL है। इस ऑडियो के लिए सुरक्षित HTTPS URL का उपयोग करने के लिए नीचे बटन पर क्लिक करें।",
        "httpWebpageUnfixable": "यह वेब पृष्ठ HTTPS का समर्थन नहीं करता है। इसे स्टोरी से निकालें या किसी स्क्रीनशॉट या लिंक से बदल दें।",
        "httpWebpageUncheckable": "इस वेब पृष्ठ में असुरक्षित (HTTP) URL है। इस वेब पृष्ठ के लिए HTTPS URL का उपयोग करने के लिए नीचे बटन पर क्लिक करें। यदि यह काम नहीं करता है, अपनी कहानी से वेब पृष्ठ को हटा दें या इसे स्क्रीनशॉट हाइपरलिंक से प्रतिस्थापित करें।",
        "httpWebpageFixable": "इस वेब पृष्ठ में असुरक्षित (HTTP) URL है। इस वेब पृष्ठ के लिए सुरक्षित HTTPS URL का उपयोग करने के लिए नीचे बटन पर क्लिक करें।",
        "httpVideoUnfixable": "यह वीडियो HTTPS का समर्थन नहीं करता है। इसे स्टोरी से निकालें या किसी स्क्रीनशॉट या लिंक से बदल दें।",
        "httpVideoUncheckable": "इस वीडियो में असुरक्षित (HTTP) URL है। इस वीडियो के लिए HTTPS URL का उपयोग करने के लिए नीचे बटन पर क्लिक करें। यदि यह काम नहीं करता है, तो अपनी कहानी से वीडियो को हटा दें या स्क्रीनशॉट या हाइपरलिंक से प्रतिस्थापित करें।",
        "httpVideoFixable": "इस वीडियो में असुरक्षित (HTTP) URL है। इस वीडियो के लिए सुरक्षित HTTPS URL का उपयोग करने के लिए नीचे बटन पर क्लिक करें।",
        "httpImageUnfixable": "यह चित्र HTTPS का समर्थन नहीं करता है। इसे स्टोरी से निकालें या किसी लिंक से बदल दें।",
        "httpImageUncheckable": "इस चित्र में असुरक्षित (HTTP) URL है। इस छवि के लिए सुरक्षित HTTPS URL का उपयोग करने के लिए नीचे बटन पर क्लिक करें। यदि यह काम नहीं करता है, तो अपनी कहानी से छवि को हटा दें या हाइपरलिंक से प्रतिस्थापित करें।",
        "httpImageFixable": "इस चित्र में असुरक्षित (HTTP) URL है। इस छवि के लिए सुरक्षित HTTPS URL का उपयोग करने के लिए नीचे बटन पर क्लिक करें।",
        "httpLayer": "इस लेयर में असुरक्षित (HTTP) URL है।",
        "inaccessibleLogo": "इस लोगो पर पहुंचा नहीं जा सकता है। इसे किसी दूसरी छवि से बदल दें।",
        "httpLogoUnfixable": "यह लोगो HTTPS का समर्थन नहीं करता है। इसे किसी दूसरी छवि से बदल दें।",
        "httpLogoFixable": "इस लोगो में असुरक्षित (HTTP) URL है। इस लोगो के लिए किसी HTTPS URL का उपयोग करें।",
        "httpLogoUncheckable": "इस लोगो में असुरक्षित (HTTP) URL है। लोगो के लिए HTTPS URL का उपयोग करें या इसे किसी दूसरी छवि से बदल दें।"
      },
      "tooltips": {
        "httpAudioFixable": "इस ऑडियो के लिए सुरक्षित HTTPS URL का उपयोग करने के लिए बटन पर क्लिक करें।",
        "httpAudioUncheckable": "इस ऑडियो के लिए किसी HTTPS URL का उपयोग करें। यदि यह काम नहीं करता है, तो अपनी कहानी से ऑडियो को हटा दें या इसे लिंक से प्रतिस्थापित करें।",
        "httpWebpageFixable": "इस वेब पृष्ठ के लिए सुरक्षित HTTPS URL का उपयोग करने के लिए बटन पर क्लिक करें।",
        "httpWebpageUncheckable": "इस वेब पृष्ठ के लिए किसी HTTPS URL का उपयोग करें। यदि यह काम नहीं करता है तो अपनी कहानी से वेब पृष्ठ को हटा दें या इसे स्क्रीनशॉट या लिंक से प्रतिस्थापित करें।",
        "httpVideoFixable": "इस वीडियो के लिए सुरक्षित HTTPS URL का उपयोग करने के लिए बटन पर क्लिक करें।",
        "httpVideoUncheckable": "इस वीडियो के लिए किसी HTTPS URL का उपयोग करें। यदि यह काम नहीं करता है, तो अपनी कहानी से वीडियो को हटा दें या स्क्रीनशॉट या लिंक से प्रतिस्थापित करें।",
        "httpImageFixable": "इस छवि के लिए सुरक्षित HTTPS URL का उपयोग करने के लिए बटन पर क्लिक करें।",
        "httpImageUncheckable": "इस छवि के लिए किसी HTTPS URL का उपयोग करें। यदि यह काम नहीं करता है, तो अपनी कहानी से छवि को हटा दें या इसे लिंक से प्रतिस्थापित करें।",
        "httpLayerMyMap": "HTTPS का उपयोग करने हेतु इस लेयर को अपडेट करने के लिए मैप के आइटम पृष्ठ पर जाएं । अगर लेयर अपडेट नहीं की जा सकती है, तो उसे मैप से निकाल दें।",
        "httpLayerNotMyMap": "HTTPS का उपयोग करने हेतु इस लेयर को अपडेट करने के लिए मैप की एक कॉपी बनाएं। अगर लेयर अपडेट नहीं की जा सकती है, तो उसे मैप से निकाल दें।",
        "clickLearnMore": "और जानने के लिए क्लिक करें।"
      },
      "fixButtons": {
        "agolItemPage": "आइटम पृष्ठ",
        "openTheMap": "मानचित्र खोलें",
        "updateAudio": "ऑडियो URL को फिक्स करें",
        "updateWebpages": "वेब पृष्ठ URL को फिक्स करें",
        "updateVideos": "वीडियो URL को फिक्स करें",
        "updateImages": "छवि URL को फिक्स करें"
      },
      "mapIssues": {
        "fixButton": "विवादों को ठीक करें",
        "nofixButton": "विवाद",
        "mapLabel": "मानचित्र:",
        "summaries": {
          "unshared": "अविभाजित सामग्री",
          "othersUnshared": "किसी अन्य की अविभाजित सामग्री",
          "subscriptionContent": "उपभोक्ता सामग्री",
          "premiumContent": "प्रीमियम सामग्री",
          "secureContent": "सुरक्षित सामग्री",
          "deleted": "हटाई गई सामग्री",
          "inaccessible": "अगम्य सामग्री",
          "unauthorized": "अनाधिकृत सामग्री"
        },
        "descriptions": {
          "unshared": "यह सामग्री आपकी कहानी की तरह ही साझा नहीं की जाती है।",
          "othersUnshared": "यह सामग्री किसी अन्य के स्वामित्व में है और आपकी कहानी की तरह ही साझा नहीं की जाती है।",
          "othersUnsharedAuthorized": "यह सामग्री किसी अन्य के स्वामित्व में है, लेकिन आप इसे साझा करने हेतु अधिकृत हैं।",
          "inaccessible": "यह सामग्री सुलभ नहीं है।",
          "deleted": "यह सामग्री हटा दी गई है।",
          "unauthorized": "आप इस सामग्री को देखने हेतु अधिकृत नहीं हैं",
          "popupFeatureLayer": "एक शीर्षक की गई लेयर का पॉप-अप ऐसी सुविधा लेयर से आता है जिसे आपकी कहानी की तरह ही साझा नहीं किया जाता है।",
          "subscriptionContent": "आपको उपभोक्ता सामग्री सार्वजनिक उपयोग के लिए अधिकृत अवश्य करनी चाहिए।",
          "premiumContent": "आपको प्रीमियम सामग्री सार्वजनिक उपयोग के लिए अधिकृत अवश्य करनी चाहिए।",
          "secureService": "सुरक्षित सामग्री आपके पाठकों के लिए सुलभ नहीं है।",
          "missingItemWarning": "इस लेयर के साथ जुड़ा आइटम हटा दिया गया है।"
        },
        "tooltips": {
          "unshared": "साझा करने के बारे में और अधिक जानने के लिए क्लिक करें",
          "othersUnshared": "आपको दूसरों के स्वामित्व वाली सामग्री को साझा करने की अनुमति नहीं है। इसे साझा करने के लिए मालिक से पूछें, अपनी कहानी से मानचित्र को हटाएँ, या उन लेयरों को हटाने के लिए जो आपकी नहीं हैं मानचित्र को संपादित करें। मानचित्रों को संपादित करने के बारे में अधिक जानने के लिए क्लिक करें।",
          "inaccessible": "अपनी कहानी में से इस मानचित्र को हटाएँ या अगम्य लेयरों को हटाने के लिए इसे संपादित करें। मानचित्रों को संपादित करने के बारे में अधिक जानने के लिए क्लिक करें।",
          "deleted": "अपनी कहानी में से इस मानचित्र को हटाएँ या लापता लेयरों को हटाने के लिए इसे संपादित करें। मानचित्रों को संपादित करने के बारे में अधिक जानने के लिए क्लिक करें।",
          "unauthorized": "अपनी कहानी में से इस मानचित्र को हटाएँ या अनाधिकृत लेयरों को हटाने के लिए इसे संपादित करें। मानचित्रों को संपादित करने के बारे में अधिक जानने के लिए क्लिक करें।",
          "popupFeatureLayer": "एक शीर्षक की गई लेयर का पॉप-अप ऐसी सुविधा लेयर से आता है जिसे आपकी कहानी की तरह ही साझा नहीं किया जाता है।",
          "subscriptionContent": "उपभोक्ता सामग्री क्रेडिट्स का उपभोग नहीं करती है। अधिक जानने के लिए क्लिक करें।",
          "premiumContent": "हर बार जब भी कोई आपकी कहानी में किसी प्रीमियम लेयर को देखेगा तो क्रेडिट्स आपके संगठन पर प्रभारित किए जाएँगे। अधिक जानने के लिए क्लिक करें।",
          "secureService": "अपनी कहानी में से सुरक्षित सामग्री को हटाएँ, या सुरक्षित सामग्री को दूसरों के द्वारा उपयोग हेतु कैसे अधिकृत करें यह जानने के लिए क्लिक करें।",
          "missingItemWarning": "यह लेयर अभी भी काम करती है, लेकिन इसके चिन्ह, पॉप-अप, या नाम परिवर्तित हो सकते हैं। पुष्टि करें कि लेयर अपेक्षानुसार दिखाई देती है, या इसे अपनी कहानी में से हटा दें।"
        },
        "fixButtons": {
          "share": "साझा करें",
          "hide": "छिपाएँ",
          "authorize": "अधिकृत करें",
          "remove": "हटाएँ",
          "help": "सहायता प्राप्त करें",
          "ignore": "नज़रअंदाज़ करें",
          "confirm": "पुष्टि करें",
          "edit": "मानचित्र संपादित करें"
        },
        "shareNotifications": {
          "alsoSharedMapsAndLayers": "कुछ मानचित्रों और लेयर्स को भी साझा किया गया था।",
          "alsoSharedMaps": "कुछ मानचित्रों को भी साझा किया गया था।",
          "alsoSharedLayers": "कुछ लेयरों को भी साझा किया गया था।",
          "sharedOthersContent": "आपने किसी और की सामग्री को साझा करने के अपने प्रशासनिक विशेषाधिकारों का उपयोग कर लिया है।"
        }
      },
      "storyHealth": {
        "healthy": "कोई समस्या नहीं",
        "notHealthy": "विवादों को ठीक करें",
        "warnings": "चेतावनियों को देखें"
      }
    },
    "saveErrorSocial": {
      "title": "सोशल मिडिया शेयरिंग",
      "panel1": "हो सकता है आपकी कहानी सोशल मीडिया पर ठीक से न दिखे क्योंकि आपकी ArcGIS वेब ऐप्लिकेशन आइटम का शीर्षक आपके कहानी के शीर्षक के समान नहीं है।",
      "panel1tooltip": "एक शीर्षक, सारांश और थंबनेल तस्वीर को परिभाषित करके, आपकी कहानी इस तरह दिखेगी:",
      "panel2": "सोशल मीडिया पर आप कौनसा शीर्षक उपयोग करना चाहते हैं:",
      "panel2q1": "कहानी का शीर्षक (अनुशंसित)",
      "panel2q1tooltip": "यह विकल्प चुनने से, आपकी आइटम के शीर्षक में आपकी कहानी के शीर्षक से मेल करने के लिए संशोधन किया जाएगा और आगे के परिवर्तन बिल्डर में समकालीन किए जाएंगे।",
      "panel2q2": "आइटम का शीर्षक",
      "panel3": "आपकी कहानी सोशल मीडिया पर कैसी दिखेगी, इसमें आगे सुधार करने के लिए सारांश एवं थंबनेल तस्वीर जोड़ने के लिए ${MYSTORIES} का उपयोग करें।",
      "panel4": "मुझे इस कहानी के लिए फिर से चेतावनी न दें",
      "save": "सहेजें",
      "mystories": "मेरी कहानियां"
    },
    "httpsTransitionMessage": {
      "bannerMsg": "वेब सुरक्षा और स्टोरी मैप के बारे में महत्वपूर्ण संदेश",
      "s1h1": "Esri, स्टोरी मैप की सुरक्षा को बेहतर बना रहा है",
      "s1p1": "आपके स्टोरी मानचित्र वेब पर रहते हैं और वेब समुदाय हमेशा बेहतर सुरक्षा स्थापित करने और लागू करने के लिए कार्य करता है। HTTPS, जो कि इंटरनेट पर ट्रांसमिट की जाने वाली सामग्री के लिए सुरक्षित कनेक्शन प्रदान करता है, वेब सामग्री को एक्सेस करने के अपेक्षित तरीके के रूप में उभर रहा है। जब HTTPS के बजाय HTTP का उपयोग किया जाता है, तो अधिकांश आधुनिक ब्राउज़र एक चेतावनी संदेश दिखाते हैं। उभरते हुए मानक के कारण, हम कड़ी अनुशंसा करते हैं कि आप स्टोरी मानचित्र लिखने और उन्हें साझा करने के लिए HTTPS लिंक का उपयोग करें और स्टोरी मानचित्र के अंतर्गत वेब सामग्री एम्बेड करने या चित्रों से लिंक करने के लिए केवल HTTPS URL का ही उपयोग करें।",
      "s1p2": "व्यावहारिक रूप से, इसका तात्पर्य यह है कि स्टोरी मानचित्र और इसकी सभी सामग्री (छवियों, लेयर, एम्बेड किए गए एप्लिकेशन और वेबसाइटों) के लिए ऐसे लिंक का उपयोग करके एक्सेस करना चाहिए जो HTTP के बजाय HTTPS का उपयोग करते हैं। यह आपके पाठकों के लिए सर्वोत्तम अनुभव सुनिश्चित करेगा क्योंकि अधिकांश वेब ब्राउज़र यह इंगित करेंगे कि आपकी स्टोरी सुरक्षित है।",
      "s2h1": "मुझे क्या करना चाहिए?",
      "s2p1": "Esri इसे स्टोरी मानचित्र लेखकों और पाठकों के लिए एक आसान ट्रांज़िशन बनाने के लिए कार्य कर रहा है। अब स्टोरी मानचित्र बिल्डर और माय स्टोरीज़ में ऐसे टूल उपलब्ध हैं, जिनसे आपको अपनी स्टोरी में असुरक्षित सामग्री (HTTP) का पता लगाने में मदद मिलेगी और वे आपको इसका निराकरण करने के लिए अनुशंसाएं प्रदान करेंगे। कृपया असुरक्षित सामग्री के लिए अपनी स्टोरी की जांच करें और HTTPS में जितनी जल्दी हो सके अपडेट करें।",
      "action1": "बंद करें",
      "action2": "मेरी स्टोरी की अभी जांच करें",
      "action3": "और अधिक जानें",
      "floatingNotification": "इस स्टोरी में असुरक्षित (HTTP) सामग्री शामिल है। कृपया उन समस्याओं की समीक्षा करें और उनका निराकरण करें।"
    }
  }
});