// add event listeners to buttons 
document.getElementById('toggle-dark-mode').addEventListener('click', async () => {
  const isDarkMode = await window.darkMode.toggle()
  document.getElementById('theme-source').innerHTML = isDarkMode ? 'Dark' : 'Light'
  
  // update the button text based on the current theme
  document.getElementById('toggle-dark-mode').innerHTML = isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'
})

document.getElementById('reset-to-system').addEventListener('click', async () => {
  await window.darkMode.system()
  document.getElementById('theme-source').innerHTML = 'System'
})