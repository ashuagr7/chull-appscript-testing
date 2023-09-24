 async function handleAction(action, username, password, filename, content) {
    const webAppUrl = "https://script.google.com/macros/s/AKfycbxgxDDCehqyty7GOCoGhbV_-4e-5Y0PKV44bIHWp9QHYwa8Ey3hmPQWPf4vwMbLigQecg/exec";
    const encodedContent = encodeURIComponent(content);
  
    const response = await fetch(`${webAppUrl}?action=${action}&username=${username}&password=${password}&filename=${filename}&content=${encodedContent}`);
    const text = await response.text();
    console.log(text); // Handle the response as needed
    return text;
  }
  
  async function fetchAllFiles(username, password) {
    const result = await handleAction('getallfiles', username, password);
    const files = JSON.parse(result);
    console.log("Fetched files:", files);
    return files;
  }
  
  // Usage
//   fetchAllFiles('ashu', 'pass123');


//   // For sign-up
//   handleAction('signup', 'ram', 'password123');
  
//   // For sign-in
//   handleAction('signin', 'ram', 'password123');
  
//   // For saving a file
//   handleAction('savefile', 'ashu', 'pass123', 'testing1', '["This is the content of the file"]');
  
//   // For updating a file
//   handleAction('updatefile', 'john', 'password123', 'myfile.txt', 'This is the updated content');
  
//   // For retrieving a file
//   handleAction('getfile', 'ashu', 'pass123', 'testing1');
  