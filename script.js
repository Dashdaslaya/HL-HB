const tabs = document.querySelectorAll('.nav-tabs li a');
const tabContent = document.getElementById('tab-content');

// Function to handle tab switching
function switchTab(event) {
  event.preventDefault(); // Prevent default link behavior

  tabs.forEach(tab => tab.classList.remove('active'));
  this.classList.add('active');

  const targetId = this.getAttribute('href');
  const targetContent = document.querySelector(targetId);

  // Clear existing content and display the target content
  tabContent.innerHTML = '';
  tabContent.appendChild(targetContent);
}

// Add event listeners to each tab
tabs.forEach(tab => tab.addEventListener('click', switchTab));

// Initially load the active tab's content
switchTab(new Event('click')); // Simulate a click on the first tab
