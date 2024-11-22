let bubblesData = JSON.parse(localStorage.getItem('bubblesData')) || [
    { name: "Google", link: "https://www.google.com" },
    { name: "OpenAI", link: "https://www.openai.com" },
    { name: "GitHub", link: "https://www.github.com" },
    { name: "Twitter", link: "https://www.twitter.com" },
    { name: "YouTube", link: "https://www.youtube.com" }
  ];
  let bubbleEffect = false;
  let darkMode = false;
  
  function createBubble(data) {
    const bubble = document.createElement('div');
    bubble.className = 'bubble bubble-glow';
  
    const bubbleText = document.createElement('span');
    bubbleText.className = 'bubble-text';
    bubbleText.innerText = data.name;
    bubble.appendChild(bubbleText);
  
    bubble.onclick = () => {
      window.open(data.link, '_blank');
    };
  
    bubble.style.left = `${Math.random() * 80}vw`;
    const bubbleWidth = Math.max(80, Math.min(200, data.name.length * 12));
    bubble.style.width = `${bubbleWidth}px`;
  
    document.body.appendChild(bubble);
  
    bubble.addEventListener('animationend', () => bubble.remove());
  }
  
  function toggleBubbles() {
    bubbleEffect = !bubbleEffect;
    if (bubbleEffect) {
      setInterval(() => {
        if (bubbleEffect) {
          const randomBubble = bubblesData[Math.floor(Math.random() * bubblesData.length)];
          createBubble(randomBubble);
        }
      }, 1000);
    }
  }
  
  function toggleSettingsMenu() {
    const settingsMenu = document.getElementById('settingsMenu');
    settingsMenu.style.display = settingsMenu.style.display === 'block' ? 'none' : 'block';
  }
  
  function toggleDarkMode() {
    darkMode = !darkMode;
    document.body.style.backgroundColor = darkMode ? '#121212' : '#ffffff';
    document.body.style.color = darkMode ? '#ffffff' : '#000000';
  }
  
  window.onclick = function(event) {
    const settingsMenu = document.getElementById('settingsMenu');
    if (!event.target.matches('.settings-icon') && settingsMenu.style.display === 'block') {
      settingsMenu.style.display = 'none';
    }
  };
  