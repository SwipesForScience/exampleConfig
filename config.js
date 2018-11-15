export default {

  // if set to true, the user will be routed to /tutorial instead of /play if
  // they haven't taken a tutorial
  needsTutorial: false,

  // each time the app is run, it will check this manifest and update the firebase database
  // if new entries are there, they will be added, and entries that aren't in the manifest
  // but are in the firebase database will be *removed*
  manifestUrl: 'https://cdn.rawgit.com/SwipesForScience/testConfig/master/whaledrManifest.json',
  // 'https://cdn.rawgit.com/SwipesForScience/testConfig/master/bsHbnManifest.json',
  // 'https://cdn.rawgit.com/SwipesForScience/testConfig/master/textWidgetManifest.json',

  // set the type of widget and its properties here.
  // widgetType: 'ImageSplat',
  // widgetProperties: {
  //   baseUrlTemplate: 'https://s3-us-west-2.amazonaws.com/akeshavan-mindcontrol/hbnSplat/{0}/tiles/base_{1}.png',
  //   maskUrlTemplate: 'https://s3-us-west-2.amazonaws.com/akeshavan-mindcontrol/hbnSplat/{0}/tiles/mask_{1}.png',
  //   contourUrlTemplate: 'https://s3-us-west-2.amazonaws.com/akeshavan-mindcontrol/hbnSplat/{0}/tiles/contour_{1}.png',
  //   delimiter: '__',
  // },

  widgetType: 'ImageSwipe',
  widgetProperties: {
    baseUrlTemplate: 'https://s3-us-west-2.amazonaws.com/akeshavan-mindcontrol/hbnSplat/{0}/tiles/base_{1}.png',
    delimiter: '__',
    leftSwipeLabel: 'Fail',
    rightSwipeLabel: 'Pass',
  },


  // this shows a 'beta' ribbon in the bottom right corner
  betaMode: false,

  // this comes from your firebase console
  firebaseKeys: {
    apiKey: 'AIzaSyBLr1HyCf7tXGwnppkfjlIb6I0XSkJgybY',
    authDomain: 'swipesforsciencedev1.firebaseapp.com',
    databaseURL: 'https://swipesforsciencedev1.firebaseio.com',
    projectId: 'swipesforsciencedev1',
    storageBucket: 'swipesforsciencedev1.appspot.com',
    messagingSenderId: '380364880642'
  },

  app: {
    navbarVariant: 'secondary',
  },
  
  iconAttribute: {
    name: 'openmoji',
    url: 'http://openmoji.org',
  },

  levels: {
    0: {
      level: 0,
      min: 0,
      max: 100,
      character: null,
      img: null,
      img_grey: null,
    },
    1: {
      level: 1,
      min: 101,
      max: 350,
      character: 'fish',
      img: 'https://raw.githubusercontent.com/hfg-gmuend/openmoji/master/color/svg/1F41F.svg?sanitize=true',
      img_grey: 'https://raw.githubusercontent.com/hfg-gmuend/openmoji/master/black/svg/1F41F.svg?sanitize=true',
    },
    2: {
      level: 2,
      min: 351,
      max: 750,
      character: 'frog',
      img: 'https://raw.githubusercontent.com/hfg-gmuend/openmoji/master/color/svg/1F438.svg?sanitize=true',
      img_grey: 'https://raw.githubusercontent.com/hfg-gmuend/openmoji/master/black/svg/1F438.svg?sanitize=true',
    },
    3: {
      level: 3,
      min: 751,
      max: 1000,
      character: 'duck',
      img: 'https://raw.githubusercontent.com/hfg-gmuend/openmoji/master/color/svg/1F986.svg?sanitize=true',
      img_grey: 'https://raw.githubusercontent.com/hfg-gmuend/openmoji/master/black/svg/1F986.svg?sanitize=true',
    },
    4: {
      level: 4,
      min: 1001,
      max: 1500,
      character: 'koala',
      img: 'https://raw.githubusercontent.com/hfg-gmuend/openmoji/master/color/svg/1F428.svg?sanitize=true',
      img_grey: 'https://raw.githubusercontent.com/hfg-gmuend/openmoji/master/black/svg/1F428.svg?sanitize=true',
    },
    5: {
      level: 5,
      min: 1501,
      max: 2000,
      character: 'cat',
      img: 'https://raw.githubusercontent.com/hfg-gmuend/openmoji/master/color/svg/1F408.svg?sanitize=true',
      img_grey: 'https://raw.githubusercontent.com/hfg-gmuend/openmoji/master/black/svg/1F408.svg?sanitize=true',
    },
    6: {
      level: 6,
      min: 2001,
      max: 2500,
      character: 'lion',
      img: 'https://raw.githubusercontent.com/hfg-gmuend/openmoji/master/color/svg/1F981.svg?sanitize=true',
      img_grey: 'https://raw.githubusercontent.com/hfg-gmuend/openmoji/master/black/svg/1F981.svg?sanitize=true',
    },
  },

  // Homepage configuration

  // your app's title and tagline
  home: {
    title: 'Swipes for Science',
    tagline: 'A template for a citizen science game',
    // background image on Homepage
    backgroundUrl: 'https://raw.githubusercontent.com/SwipesForScience/testConfig/master/images/SwipesForScience.svg?sanitize=true',
  },

  // Play configuration
  play: {
    blankImage: 'https://cdn.rawgit.com/SwipesForScience/testConfig/master/images/undraw_blank_canvas.svg',

  },

  // Chats configuration
  chats: {
    blankImage: 'https://cdn.rawgit.com/SwipesForScience/testConfig/master/images/undraw_no_data.svg',
  },

  // Profile configuration
  profile: {
    blankImage: 'https://cdn.rawgit.com/SwipesForScience/testConfig/master/images/undraw_chatting.svg',
  },

  // your app's tutorial page
  // describe your problem and the way you want people to annotate
  tutorial: {
    // there is only 1 available custom animiation right now, and its 'Bubbles'
    customBackgroundAnimation: 'Bubbles',
    // steps have 2 parts, the intro and examples. In the intro you provide
    // text and images. In the examples, you provide text, data pointers, and tutorial steps
    // that the widget will display
    steps: {
      intro: [
        {
          // keep the text really short
          text: 'we want to learn about whales',
          image: 'https://upload.wikimedia.org/wikipedia/commons/8/8b/Humpback_whales_in_singing_position.jpg',
        },
        {
          // use \n to linebreak the text
          text: 'there is a sound recorder in the ocean, \n its called a hydrophone \n and its always on',
          image: 'https://upload.wikimedia.org/wikipedia/commons/d/dd/Hydrophone_being_lowered_into_the_Atlantic.jpg',
        },
        {
          text: 'we can make a picture from the sound waves \n the vertical lines are from the hydrophone \n using ecolocation to hear ocean sounds',
          image: 'http://himatdata.s3.amazonaws.com/whaledr_renamed/OO_HYVM1__YDH_2017_10_06T05_16_45.jpg',
        },
        {
          text: 'most of the time you do not hear anything.',
          image: 'http://himatdata.s3.amazonaws.com/whaledr_renamed/OO_HYVM1__YDH_2017_10_06T21_55_05.jpg',
        },
        {
          text: 'but sometimes you hear a whale',
          image: 'http://himatdata.s3.amazonaws.com/whaledr_renamed/OO_HYVM1__YDH_2017_10_06T19_04_25.jpg',
        },
        {
          text: 'or dolphins',
          image: 'http://himatdata.s3.amazonaws.com/whaledr_renamed/OO_HYVM1__YDH_2017_10_06T01_50_25.jpg',
        },
        {
          text: 'we want to train a machine to recognize the whales and dolphins. \n For that we need your help.',
          image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Gnome-computer.svg/600px-Gnome-computer.svg.png',
        },
      ],
      examples: [
        {
          // fill these with examples with respect to the widget you're using
          text: 'swipe right when you hear/see a whale \n you can tap the image to hear it.',
          pointer: 'OO_HYVM1__YDH_2017_10_06T06_48_00',
          answer: 1,
          tutorialStep: 0,
        },
        {
          text: 'when it is not a whale \n swipe left',
          pointer: 'OO_HYVM1__YDH_2017_10_06T06_48_00',
          answer: 0,
          tutorialStep: 1,
        },
        {
          text: `if you're not sure, click 'help' \n to discuss with scientists ${''}`,
          pointer: 'OO4_HYVM1__YDH_2017_10_06T06_48_00',
          answer: 0,
          tutorialStep: 2,
        },
        {
          text: 'Are you ready to play?',
          tutorialCompleted: true,
        },
      ],
    },
  },

};
