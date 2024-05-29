export const openProfileTab = (gh, li, lc, cc, hr, onObject) => {
  if (onObject.object.uuid === gh.current.uuid)
    window.open("https://github.com/azizox99", "new");
  if (onObject.object.uuid === li.current.uuid)
    window.open("https://www.linkedin.com/feed/", "new");
  if (onObject.object.uuid === lc.current.uuid)
    window.open("https://azizox99.github.io/mon-site-web/", "new");
  if (onObject.object.uuid === cc.current.uuid)
    window.open("https://github.com/azizox99/pdf-cv/blob/main/blue%20professional%20modern%20CV%20resume.pdf", "new");
  if (onObject.object.uuid === hr.current.uuid)
    window.open("https://www.instagram.com/aziz_boukabous_/?hl=fr", "new");
};

export const openProjectTab = (sf, iic, chat, museum, ttt, onObject) => {
  if (onObject.object.uuid === sf.current.uuid)
    window.open("https://www.hmconsult.net/", "new");
  if (onObject.object.uuid === iic.current.uuid)
    window.open("https://iicdcrustm.com/home/", "new");
  if (onObject.object.uuid === chat.current.uuid)
    window.open("https://whats-clone-1c76b.web.app/", "new");
  if (onObject.object.uuid === museum.current.uuid)
    window.open("https://museum-counsel.herokuapp.com/", "new");
  if (onObject.object.uuid === ttt.current.uuid)
    window.open("https://tic-tac-toe-7fcb8.web.app/", "new");
};

export const openProjectGithub = (sf, iic, chat, museum, ttt, onObject) => {
  if (onObject.object.uuid === sf.current.uuid)
    window.open("https://github.com/azizox99", "new");
  if (onObject.object.uuid === iic.current.uuid)
    window.open("https://github.com/azizox99", "new");
  if (onObject.object.uuid === chat.current.uuid)
    window.open("https://github.com/azizox99", "new");
  if (onObject.object.uuid === museum.current.uuid)
    window.open("https://github.com/azizox99", "new");
  if (onObject.object.uuid === ttt.current.uuid)
    window.open(
      "https://github.com/azizox99",
      "new"
    );
};
