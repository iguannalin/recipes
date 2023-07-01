window.addEventListener("load", () => {
  const foodEmojis = {
    "grapes":"🍇","melon":"🍈","watermelon":"🍉","tangerine":"🍊","orange":"🍊","lemon":"🍋","banana":"🍌","pineapple":"🍍","mango":"🥭","red apple":"🍎","green apple":"🍏","pear":"🍐","peach":"🍑","cherries":"🍒","strawberry":"🍓","blueberries":"🫐","kiwi fruit":"🥝","tomato":"🍅","olive":"🫒","coconut":"🥥","avocado":"🥑","eggplant":"🍆","potato":"🥔","carrot":"🥕","ear of corn":"🌽","hot pepper":"🌶️","bell pepper":"🫑","cucumber":"🥒","leafy green":"🥬","broccoli":"🥦","pea pod":"🫛","garlic":"🧄","onion":"🧅","ginger":"🫚","mushroom":"🍄","peanuts":"🥜","beans":"🫘","chestnut":"🌰","bread":"🍞","croissant":"🥐","baguette bread":"🥖","flatbread":"🫓","pretzel":"🥨","bagel":"🥯","pancakes":"🥞","waffle":"🧇","cheese wedge":"🧀","meat on bone":"🍖","poultry leg":"🍗","cut of meat":"🥩","bacon":"🥓","hamburger":"🍔","french fries":"🍟","pizza":"🍕","hot dog":"🌭","sandwich":"🥪","taco":"🌮","burrito":"🌯","tamale":"🫔","stuffed flatbread":"🥙","falafel":"🧆","egg":"🥚","cooking":"🍳","shallow pan of food":"🥘","pot of food":"🍲","fondue":"🫕","bowl with spoon":"🥣","green salad":"🥗","popcorn":"🍿","butter":"🧈","salt":"🧂","canned food":"🥫","bento box":"🍱","rice cracker":"🍘","rice ball":"🍙","cooked rice":"🍚","curry rice":"🍛","ramen":"🍜","steaming bowl":"🍜","spaghetti":"🍝","roasted sweet potato":"🍠","oden":"🍢","sushi":"🍣","fried shrimp":"🍤","fish cake with swirl":"🍥","moon cake":"🥮","dango":"🍡","dumpling":"🥟","fortune cookie":"🥠","takeout box":"🥡","oyster":"🦪","soft ice cream":"🍦","shaved ice":"🍧","ice cream":"🍨","doughnut":"🍩","cookie":"🍪","birthday cake":"🎂","shortcake":"🍰","cupcake":"🧁","pie":"🥧","chocolate bar":"🍫","candy":"🍬","lollipop":"🍭","custard":"🍮","honey pot":"🍯","baby bottle":"🍼","glass of milk":"🥛","hot beverage":"☕","teapot":"🫖","teacup without handle":"🍵","sake":"🍶","bottle with popping cork":"🍾","wine glass":"🍷","cocktail glass":"🍸","tropical drink":"🍹","beer mug":"🍺","clinking beer mugs":"🍻","clinking glasses":"🥂","tumbler glass":"🥃","pouring liquid":"🫗","cup with straw":"🥤","bubble tea":"🧋","beverage box":"🧃","mate":"🧉","ice":"🧊"
  };
  const emojis = ["💌","🕳️","💣","🛀","🛌","🔪","🏺","🗺️","🧭","🧱","💈","🦽","🦼","🛢️","🛎️","🧳","⌛","⏳","⌚","⏰","⏱️","⏲️","🕰️","🌡️","⛱️","🧨","🎈","🎉","🎊","🎎","🎏","🎐","🧧","🎀","🎁","🤿","🪀","🪁","🔮","🪄","🧿","🪬","🕹️","🧸","🪅","🪆","🖼️","🧵","🪡","🧶","🪢","🪭","🛍️","📿","🪮","💎","📯","🎙️","🎚️","🎛️","📻","🪕","📱","📲","☎️","📞","📟","📠","🔋","🔌","💻","🖥️","🖨️","⌨️","🖱️","🖲️","💽","💾","💿",
    "📀","🧮","🎥","🎞️","📽️","📺","📷","📸","📹","📼","🔍","🔎","🕯️","💡","🔦","🏮","🪔","📔","📕","📖","📗","📘","📙","📚","📓","📒","📃","📜","📄","📰","🗞️","📑","🔖","🏷️","💰","🪙","💴","💵","💶","💷","💸","💳","🧾","✉️","📧","📨","📩","📤","📥","📦","📫","📪","📬","📭","📮","🗳️","✏️","✒️","🖋️","🖊️","🖌️","🖍️","📝","📁","📂","🗂️","📅","📆","🗒️","🗓️","📇","📈","📉","📊","📋","📌","📍","📎","🖇️","📏",
    "📐","🗃️","🗄️","🗑️","🔒","🔓","🔏","🔐","🔑","🗝️","🔨","🪓","⛏️","⚒️","🛠️","🗡️","⚔️","🔫","🪃","🛡️","🪚","🔧","🪛","🔩","⚙️","🗜️","⚖️","🦯","🔗","⛓️","🪝","🧰","🧲","🪜","⚗️","🧪","🧫","🧬","🔬","🔭","📡","💉","🩸","💊","🩹","🩼","🩺","🚪","🪞","🪟","🛏️","🛋️","🪑","🚽","🪠","🚿","🛁","🪤","🪒","🧴","🧷","🧹","🧺","🧻","🪣","🧼","🪥","🧽","🧯","🛒","🚬","⚰️","🪦","⚱️","🗿","🪧","🪪","🚰","💀","💩","🤡","👹","👺","👻","👽","👾","🤖","😺","😸","😹","😻","😼","😽","🙀","😿",
    "😾","💋","👋","🤚","🖐️","✋","🖖","🫱","🫲","🫳","🫴","👌","🤌","🤏","✌️","🤞","🫰","🤟","🤘","🤙","👈","👉","👆","🖕","👇","☝️","🫵","👍","👎","✊","👊","🤛","🤜","👏","🙌","🫶",
    "👐","🤲","🤝","🙏","💅","🤳","💪","🦾","🦿","🦵","🦶","👂","🦻","👃","🧠","🫀","🫁","🦷","🦴","👀","👁️","👅","👄","🫦","👶","🧒","👦","👧","🧑","👱","👨","🧔","👨‍🦰","👨‍🦱","👨‍🦳","👨‍🦲","👩","👩‍🦰","🧑‍🦰","👩‍🦱","🧑‍🦱","👩‍🦳","🧑‍🦳","👩‍🦲","🧑‍🦲","👱‍♀️","👱‍♂️","🧓","👴",
    "👵","🙍","🙍‍♂️","🙍‍♀️","🙎","🙎‍♂️","🙎‍♀️","🙅","🙅‍♂️","🙅‍♀️","🙆","🙆‍♂️","🙆‍♀️","💁","💁‍♂️","💁‍♀️","🙋","🙋‍♂️","🙋‍♀️","🧏","🧏‍♂️","🧏‍♀️","🙇","🙇‍♂️","🙇‍♀️","🤦","🤦‍♂️","🤦‍♀️","🤷","🤷‍♂️","🤷‍♀️","🧑‍⚕️","👨‍⚕️","👩‍⚕️","🧑‍🎓","👨‍🎓","👩‍🎓","🧑‍🏫","👨‍🏫","👩‍🏫","🧑‍⚖️",
    "👨‍⚖️","👩‍⚖️","🧑‍🌾","👨‍🌾","👩‍🌾","🧑‍🍳","👨‍🍳","👩‍🍳","🧑‍🔧","👨‍🔧","👩‍🔧","🧑‍🏭","👨‍🏭","👩‍🏭","🧑‍💼","👨‍💼","👩‍💼","🧑‍🔬","👨‍🔬","👩‍🔬","🧑‍💻","👨‍💻","👩‍💻","🧑‍🎤","👨‍🎤","👩‍🎤","🧑‍🎨","👨‍🎨","👩‍🎨","🧑‍✈️","👨‍✈️","👩‍✈️","🧑‍🚀","👨‍🚀","👩‍🚀","🧑‍🚒","👨‍🚒","👩‍🚒","👮","👮‍♂️","👮‍♀️","🕵️","🕵️‍♂️","🕵️‍♀️","💂","💂‍♂️",
    "💂‍♀️","🥷","👷","👷‍♂️","👷‍♀️","🫅","🤴","👸","👳","👳‍♂️","👳‍♀️","👲","🧕","🤵","🤵‍♂️","🤵‍♀️","👰","👰‍♂️","👰‍♀️","🤰","🫃","🫄","🤱","👩‍🍼","👨‍🍼","🧑‍🍼","👼","🎅","🤶","🧑‍🎄","🦸","🦸‍♂️","🦸‍♀️","🦹","🦹‍♂️","🦹‍♀️","🧙","🧙‍♂️","🧙‍♀️","🧚","🧚‍♂️","🧚‍♀️",
    "🧛","🧛‍♂️","🧛‍♀️","🧜","🧜‍♂️","🧜‍♀️","🧝","🧝‍♂️","🧝‍♀️","🧞","🧞‍♂️","🧞‍♀️","🧟","🧟‍♂️","🧟‍♀️","🧌","💆","💆‍♂️","💆‍♀️","💇","💇‍♂️","💇‍♀️","🚶","🚶‍♂️","🚶‍♀️","🧍","🧍‍♂️","🧍‍♀️","🧎","🧎‍♂️","🧎‍♀️","🧑‍🦯","👨‍🦯","👩‍🦯","🧑‍🦼","👨‍🦼","👩‍🦼","🧑‍🦽","👨‍🦽","👩‍🦽",
    "🏃","🏃‍♂️","🏃‍♀️","💃","🕺","🕴️","👯","👯‍♂️","👯‍♀️","🧖","🧖‍♂️","🧖‍♀️","🧘","🧑‍🤝‍🧑","👭","👫","👬","💏","👩‍❤️‍💋‍👨","🥢","🍽️","🍴","🥄","🫙","🙈","🙉","🙊","💥","💫","💦","💨","🐵","🐒","🦍","🦧","🐶","🐕","🦮","🐕‍🦺","🐩","🐺","🦊","🦝","🐱",
    "🐈","🐈‍⬛","🦁","🐯","🐅","🐆","🐴","🐎","🦄","🦓","🫏","🦌","🫎","🦬","🐮","🐂","🐃","🐄","🐷","🐖","🐗","🐽","🐏","🐑","🐐","🐪","🐫","🦙","🦒","🐘","🦣","🦏","🦛","🐭","🐁","🐀","🐹","🐰","🐇","🐿️","🦫","🦔","🦇","🐻","🐻‍❄️","🐨","🐼","🦥","🦦","🦨","🦘","🦡","🐾","🦃","🐔","🐓","🐣","🐤","🐥","🐦","🐦‍⬛","🐧","🕊️",
    "🦅","🦆","🦢","🪿","🦉","🦤","🪽","🪶","🦩","🦚","🦜","🐸","🐊","🐢","🦎","🐍","🐲","🐉","🦕","🦖","🐳","🐋","🐬","🦭","🐟","🐠","🐡","🦈","🐙","🪼","🐚","🪸","🐌","🦋","🐛","🐜","🐝","🪲","🐞","🦗","🪳","🕷️","🕸️","🦂","🦟","🪰","🪱","🦠","💐","🌸","💮","🪷","🏵️","🌹","🥀","🌺","🪻","🌻","🌼","🌷","🌱","🪴","🌲",
    "🌳","🌴","🌵","🌾","🌿","☘️","🍀","🍁","🍂","🍃","🪹","🪺","🍄","🌰","🦀","🦞","🦐","🦑","🌍","🌎","🌏","🌐","🪨","🌑","🌒","🌓","🌔","🌕","🌖","🌗","🌘","🌙","🌚","🌛","🌜","🌝","🌞","⭐","🌟","🌠","☁️","⛅","⛈️","🌤️",
    "🌥️","🌦️","🌧️","🌨️","🌩️","🌪️","🌫️","🌬️","🌈","⛄","☄️","🔥","💧","🌊","🎄","✨","🎋","🎍"
  ];

  const prompt = document.getElementById('prompt');
  const box = document.getElementById('result');
  const list = document.getElementById('instructions');
  let searchResults = {};

  const getRandomEmoji = () => emojis[getRandomInt(0, emojis.length)];
  const getOrdinal = (i) => i == 0 ? "first" : i == 1 ? "second" : i == 2 ? "third" : i == 3 ? "fourth" : i == 4 ? "fifth" : i == 5 ? "sixth" : '';

  function fakeType(parent) {
    const max = getRandomInt(2,10);
    const speed = 100;
    for (let i = 0; i < max; i++) {
      switch (Math.floor(Math.random() * 10) % 5) {
        case 2:
          if (i != 0) {
            setTimeout(() => {
              parent.innerHTML += '&nbsp;';
            }, i*speed);
          }
          break;
        case 3:
          if (i != 0) {
            setTimeout(() => {
              parent.innerHTML += ',&nbsp;';
            }, i*speed);
          }
        default:
          setTimeout(() => {
            parent.innerHTML += getRandomEmoji();
          }, i*speed);
          break;
      }
    }
    setTimeout(() => {
      parent.innerHTML += '.';
    }, max*speed);
  }

  let input;
  let starter = document.getElementById('starter');

  function setText(limit) {
    box.innerText = "";
    starter.innerHTML = "";
    if (!searchResults[0]) return;
    for (let i = 0; i < limit; i++) {
      if (!searchResults[i]) return;
      box.innerText += searchResults[i];
    }
    list.innerHTML = "";
    if (limit < 1) return;
    starter.innerHTML = `to make ${box.innerText} —  `;
    let max = getRandomInt(1,3);
    for (let j = 0; j < max; j++) {
      setTimeout(() => {
        const item = document.createElement('li');
        const small = document.createElement('span');
        fakeType(item);
        small.innerHTML += `${getOrdinal(j)}, `;
        item.appendChild(small);
        list.appendChild(item);
      }, (j+1)*100);
    }
  }

  let timeout;

  let debounce = function(func, delay) {
    clearTimeout(timeout);
    timeout = setTimeout(func, delay);
  };

  function onType(e) {
    input = e.target.value;
    const keywords = input.split(" ");
    keywords.forEach((word, index) => {
      if (!word) return;
      word = word.toLowerCase();
      const found = Object.keys(foodEmojis).filter(key => {return key.startsWith(word) || key.includes(word)});
      if (found.length > 0) {
        searchResults[index] = foodEmojis[found[found.length-1]];
      }
    });
    if (input.length < 1) setText(0);
    else setText(keywords.length);
  }
  
  prompt.oninput = (e) => {
    debounce(onType(e), 1000);
  }
});

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
}