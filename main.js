// {
//       "id": 1,
//       "title": "Fix navigation menu on mobile devices",
//       "description": "The navigation menu doesn't collapse properly
//       "status": "open",
//       "labels": [
//         "bug",
//         "help wanted"
//       ],
//       "priority": "high",
//       "author": "john_doe",
//       "assignee": "jane_smith",
//       "createdAt": "2024-01-15T10:30:00Z",
//       "updatedAt": "2024-01-15T10:30:00Z"
//     },

const API_URL = 'https://phi-lab-server.vercel.app/api/v1/lab/issues';

let issues = [];
let currentFilter = 'all';
let searchQuery = '';

// fetch issues from api
async function fetchIssues() {
  try {
    const res = await fetch(API_URL);
    const json = await res.json();
    issues = json.data; // array of issues
    renderIssues();
  } catch {
    console.error('Error fetching issues:', err);
  }
}

// render issues
function renderIssues() {
  const container = document.getElementById('issues-container');
  container.innerHTML = '';

  let filtered = issues.filter((issue) => {
    // Filter by status
    if (currentFilter !== 'all' && issue.status !== currentFilter) {
      return false;
    }
    // Filter by search query
    if (
      searchQuery &&
      !issue.title.toLowerCase().includes(searchQuery.toLowerCase())
    ) {
      return false;
    }
    return true;
  });

  if (filtered.length === 0) {
    container.innerHTML = '<p>No issues found.</p>';
    return;
  }

  filtered.forEach((issue) => {
    const card = document.createElement('div');
    card.className = 'card max-w-[24%]';
    if (issue.status === 'open') {
      card.classList.add('open-issue');
    } else {
      card.classList.add('closed-issue');
    }
    card.innerHTML = `
          <div class="p-5">
            <div class="flex justify-between mb-2">
              ${issue.status === 'open' ? `<img src="./assets/Open-Status.png" alt="" />` : `<img src="./assets/Closed- Status .png" alt="" />`}
              <span
                class="rounded-3xl bg-[#feecec] text-red-500 px-4 py-1 text-[12px]"
                >HIGH</span
              >
            </div>
            <h3 class="font-semibold text-[16px]">
              ${issue.title}
            </h3>
            <p class="text-gray-500 text-[14px]">
              ${issue.description.slice(0, 60) + '...'}
            </p>
            <div class="flex flex-wrap gap-1.5 my-2 justify-start items-center">
              <span
                class="${!issue.labels.includes('bug') ? 'hidden' : ''} rounded-3xl bg-[#feecec] text-red-500 px-4 py-1 text-[12px] border border-[#fecaca]"
              >
                <i class="fa-solid fa-bug"></i>
                BUG</span
              >
              <span
                class="${!issue.labels.includes('help wanted') ? 'hidden' : ''} rounded-3xl bg-[#fff8db] text-[#d97706] px-4 py-1 text-[12px] border border-[#fde68a]"
                ><i class="fa-solid fa-life-ring"></i> HELP WANTED</span
              >
              <span
                class="${!issue.labels.includes('enhancement') ? 'hidden' : ''} rounded-3xl bg-[#defce8] text-[#00a96e] px-4 py-1 text-[12px] border border-[#bbf7d0]"
                ><i class="fa-regular fa-star"></i> ENHANCEMENT</span>
                <span
                class="${!issue.labels.includes('documentation') ? 'hidden' : ''} rounded-3xl  text-gray-400 px-4 py-1 text-[12px] border border-gray-600"
                ><i class="fa-solid fa-file"></i> DOCUMENTATION</span>
            </div>
          </div>
          <hr class="border-t border-gray-100" />
          <div class="p-5">
            <p class="text-gray-500 text-[14px]">
              #1 by ${issue.author} <br />

              ${issue.createdAt}
            </p>
          </div>
       
        `;
    container.appendChild(card);
  });
}

fetchIssues();
