const initialFacts = [
  {
    id: 1,
    text: 'React is being developed by Meta (formerly facebook)',
    source: 'https://opensource.fb.com/',
    category: 'technology',
    votesInteresting: 24,
    votesMindblowing: 9,
    votesFalse: 4,
    createdIn: 2021,
  },
  {
    id: 2,
    text: 'Millennial dads spend 3 times as much time with their kids than their fathers spent with them. In 1982, 43% of fathers had never changed a diaper. Today, that number is down to 3%',
    source:
      'https://www.mother.ly/parenting/millennial-dads-spend-more-time-with-their-kids',
    category: 'society',
    votesInteresting: 11,
    votesMindblowing: 2,
    votesFalse: 0,
    createdIn: 2019,
  },
  {
    id: 3,
    text: 'Lisbon is the capital of Portugal',
    source: 'https://en.wikipedia.org/wiki/Lisbon',
    category: 'society',
    votesInteresting: 8,
    votesMindblowing: 3,
    votesFalse: 1,
    createdIn: 2015,
  },
];

// Selecting DOM elements
const btn = document.querySelector('.btn-open');
const factForm = document.querySelector('.fact-form');
const factsList = document.querySelector('.facts-list');

// Create DOM elements: Render facts in list
factsList.innerHTML = '';

const htmlArr = initialFacts.map(
  (fact) => `<li class="fact">
              <p>
                ${fact.text}
                <a
                  class="source"
                  href="${fact.source}"
                  target="_blank"
                  >(Source)</a
                >
              </p>
              <span style="background-color: #cc5179" class="tag"
                >${fact.category.toUpperCase()}</span
              >
              <div class="vote-buttons">
                <button>👍 ${fact.votesInteresting}</button>
                <button>🤯 ${fact.votesMindblowing}</button>
                <button>⛔️ ${fact.votesFalse}</button>
              </div>
            </li>`,
);

htmlArr.forEach((el) => factsList.insertAdjacentHTML('afterbegin', el));

// Function to toggle form visibility
btn.addEventListener('click', function () {
  const attr = factForm.getAttribute('class');

  if (attr.includes('hidden')) {
    factForm.classList.remove('hidden');

    // Change text button to "Close" if form is open
    btn.textContent = 'Close';
  } else {
    factForm.classList.add('hidden');

    // Change text button to original if form is closed
    btn.textContent = 'Share a Fact';
  }
});
