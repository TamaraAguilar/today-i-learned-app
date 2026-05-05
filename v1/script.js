const CATEGORIES = [
  { name: 'technology', color: '#3b82f6' },
  { name: 'science', color: '#16a34a' },
  { name: 'finance', color: '#ef4444' },
  { name: 'society', color: '#eab308' },
  { name: 'entertainment', color: '#db2777' },
  { name: 'health', color: '#14b8a6' },
  { name: 'history', color: '#f97316' },
  { name: 'news', color: '#8b5cf6' },
];

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

// Function to find the color tag
const findColorTag = (category) =>
  CATEGORIES.find((cat) => cat.name == category).color;

// Function to map every fact list into HTML
const buildFactsHTML = (data) => {
  return data.map(
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
              <span style="background-color: ${findColorTag(fact.category)}" class="tag"
                >${fact.category.toUpperCase()}</span
              >
              <div class="vote-buttons">
                <button>👍 ${fact.votesInteresting}</button>
                <button>🤯 ${fact.votesMindblowing}</button>
                <button>⛔️ ${fact.votesFalse}</button>
              </div>
            </li>`,
  );
};

// Function to insert every fact in DOM
const insertFacts = (factsHTML) =>
  factsHTML.forEach((fact) => factsList.insertAdjacentHTML('beforeend', fact));

// Function to fetch data
const url = supabaseUrl + '/facts';
const loadFacts = async () => {
  // Load data from supabase
  const res = await fetch(url, {
    headers: {
      apikey: supabaseKey,
      authorization: `Bearer ${supabaseKey}`,
    },
  });

  const data = await res.json();

  const factsHTML = buildFactsHTML(data);
  console.log(factsHTML);
  insertFacts(factsHTML);
};

loadFacts();

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
