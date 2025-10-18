document.addEventListener('DOMContentLoaded', function() {
    // Language selector functionality
    const languageSelect = document.getElementById('languageSelect');
    
    languageSelect.addEventListener('change', function() {
      // In a real implementation, this would handle language switching
      console.log('Language changed to:', this.value);
    });
  
    // Copy code functionality
    const copyButtons = document.querySelectorAll('.copy-btn');
    
    copyButtons.forEach(button => {
      button.addEventListener('click', async function() {
        const codeId = this.getAttribute('data-code');
        const codeElement = document.getElementById(codeId);
        
        if (codeElement) {
          try {
            await navigator.clipboard.writeText(codeElement.textContent);
            
            // Visual feedback
            this.classList.add('copied');
            setTimeout(() => {
              this.classList.remove('copied');
            }, 2000);
            
          } catch (err) {
            console.error('Failed to copy code:', err);
            
            // Fallback for older browsers
            const textArea = document.createElement('textarea');
            textArea.value = codeElement.textContent;
            document.body.appendChild(textArea);
            textArea.select();
            document.execCommand('copy');
            document.body.removeChild(textArea);
            
            this.classList.add('copied');
            setTimeout(() => {
              this.classList.remove('copied');
            }, 2000);
          }
        }
      });
    });
  
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      });
    });
  
    // Add scroll-based animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };
  
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }
      });
    }, observerOptions);
  
    // Observe feature sections for animation
    document.querySelectorAll('.feature').forEach(feature => {
      feature.style.opacity = '0';
      feature.style.transform = 'translateY(30px)';
      feature.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
      observer.observe(feature);
    });
  });
  