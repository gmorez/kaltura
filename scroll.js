document.addEventListener('DOMContentLoaded', function() {

  // --- CONFIGURATION for Method 2 ---
  // The class that is ADDED on scroll.
  const STICKY_CLASS_TO_REMOVE = 'is-scrolled';
  // --- END CONFIGURATION ---

  const headerElement = document.querySelector('.kms-ds-header-menu-navbar');

  if (!headerElement) {
    console.log('Kaltura header element not found. Stopping override script.');
    return;
  }

  const handleClassChange = (mutationsList, observer) => {
    if (headerElement.classList.contains(STICKY_CLASS_TO_REMOVE)) {
      headerElement.classList.remove(STICKY_CLASS_TO_REMOVE);
    }
  };

  const observer = new MutationObserver(handleClassChange);

  // Configure the observer to only watch for changes to the 'class' attribute.
  const config = {
    attributes: true,
    attributeFilter: ['class']
  };

  observer.observe(headerElement, config);

  console.log('Kaltura header override (MutationObserver method) is active.');
});