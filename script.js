function browseFile() {
    const fileInput = document.getElementById('fileInput');
    const selectedFile = document.getElementById('selectedFile');
  
    fileInput.click();
  
    fileInput.addEventListener('change', function() {
      const file = this.files[0];
      if (file) {
        selectedFile.textContent = `Selected File: ${file.name}`;
      } else {
        selectedFile.textContent = 'No file selected';
      }
    });
  }
  