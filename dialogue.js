const DIALOGUE_SELECTOR = '.dialogue';
const SCRIPTED_CLASS = 'dialogue-scripted';
const PLAYING_CLASS = 'is-playing';
const VISIBLE_SHARE_TO_PLAY = 0.4;
const REDUCED_MOTION_QUERY = '(prefers-reduced-motion: reduce)';

function playWhenVisible(dialogue) {
  const observer = new IntersectionObserver((entries) => {
    if (!entries.some((entry) => entry.isIntersecting)) return;
    dialogue.classList.add(PLAYING_CLASS);
    observer.disconnect();
  }, { threshold: VISIBLE_SHARE_TO_PLAY });
  observer.observe(dialogue);
}

function startDialogues() {
  if (window.matchMedia(REDUCED_MOTION_QUERY).matches) return;
  document.querySelectorAll(DIALOGUE_SELECTOR).forEach((dialogue) => {
    dialogue.classList.add(SCRIPTED_CLASS);
    playWhenVisible(dialogue);
  });
}

startDialogues();
