// The complete portfolio and navigation also work without JavaScript.
document.documentElement.classList.add("js");
const menuButton = document.querySelector(".menu-toggle");
const navigation = document.querySelector("#navigation");
if (menuButton && navigation) {
  menuButton.hidden = false;
  const closeMenu = () => {
    navigation.classList.remove("is-open");
    menuButton.setAttribute("aria-expanded", "false");
    menuButton.textContent = "Menu +";
  };
  menuButton.addEventListener("click", () => {
    const open = menuButton.getAttribute("aria-expanded") !== "true";
    navigation.classList.toggle("is-open", open);
    menuButton.setAttribute("aria-expanded", String(open));
    menuButton.textContent = open ? "Close −" : "Menu +";
  });
  navigation.addEventListener("click", (event) => {
    if (event.target.closest("a")) closeMenu();
  });
  document.addEventListener("keydown", (event) => {
    if (
      event.key === "Escape" &&
      menuButton.getAttribute("aria-expanded") === "true"
    ) {
      closeMenu();
      menuButton.focus();
    }
  });
  matchMedia("(min-width: 961px)").addEventListener("change", closeMenu);
}
// Native details keeps the collaborator list usable without JavaScript.
const otherCollaborators = document.querySelector(".other-collaborators");
if (otherCollaborators) {
  const summary = otherCollaborators.querySelector("summary");
  let hoverOpened = false;
  otherCollaborators.addEventListener("pointerenter", (event) => {
    if (event.pointerType !== "mouse" || otherCollaborators.open) return;
    hoverOpened = true;
    otherCollaborators.open = true;
  });
  otherCollaborators.addEventListener("pointerleave", () => {
    if (hoverOpened && !otherCollaborators.contains(document.activeElement))
      otherCollaborators.open = false;
    hoverOpened = false;
  });
  summary.addEventListener("click", (event) => {
    // A click pins a hover-opened list instead of immediately closing it.
    if (hoverOpened) {
      event.preventDefault();
      hoverOpened = false;
    }
  });
  otherCollaborators.addEventListener("focusout", () => {
    requestAnimationFrame(() => {
      if (
        !otherCollaborators.contains(document.activeElement) &&
        !otherCollaborators.matches(":hover")
      )
        otherCollaborators.open = false;
    });
  });
  document.addEventListener("pointerdown", (event) => {
    if (!otherCollaborators.contains(event.target))
      otherCollaborators.open = false;
  });
  otherCollaborators.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && otherCollaborators.open) {
      otherCollaborators.open = false;
      hoverOpened = false;
      summary.focus();
      event.preventDefault();
    }
  });
}

const filters = document.querySelector(".filters");
const projects = [...document.querySelectorAll(".project")];
const count = document.querySelector("#work-count");
if (filters && projects.length && count) {
  filters.hidden = false;
  filters.addEventListener("click", (event) => {
    const button = event.target.closest("button[data-filter]");
    if (!button) return;
    const language = button.dataset.filter;
    for (const filter of filters.querySelectorAll("button"))
      filter.setAttribute("aria-pressed", String(filter === button));
    for (const project of projects)
      project.hidden =
        language !== "all" && project.dataset.language !== language;
    const visible = projects.filter((project) => !project.hidden).length;
    count.textContent = `${String(visible).padStart(2, "0")} selected engagements${language === "all" ? "" : " · " + button.textContent.trim()}`;
  });
}

// A useful fallback for visitors without a configured email application.
for (const button of document.querySelectorAll("[data-copy-email]")) {
  button.hidden = false;
  button.addEventListener("click", async () => {
    const address = button.dataset.copyEmail;
    const status = button.parentElement.querySelector(".copy-status");
    try {
      await navigator.clipboard.writeText(address);
      status.textContent = "Email address copied.";
    } catch {
      // Keep the address selectable if clipboard access is unavailable or denied.
      const emailAddress = button.parentElement.querySelector(".email-address");
      const range = document.createRange();
      range.selectNodeContents(emailAddress);
      const selection = window.getSelection();
      selection.removeAllRanges();
      selection.addRange(range);
      status.textContent =
        "Copy the selected address, or use the email link above.";
    }
  });
}

const sectionLinks = [...document.querySelectorAll('.navigation a[href^="/#"]')]
  .map((link) => ({
    link,
    section: document.getElementById(link.hash.slice(1)),
  }))
  .filter(({ section }) => section);

if (sectionLinks.length) {
  const header = document.querySelector(".site-header");
  let framePending = false;
  const updateCurrentSection = () => {
    framePending = false;
    const readingLine = Math.min(
      (header?.getBoundingClientRect().bottom ?? 0) + innerHeight * 0.2,
      innerHeight - 1,
    );
    // Recompute from the whole page: observer entry order can leave stale links
    // highlighted after scrolling upward, following an anchor, or filtering work.
    let current;
    for (const item of sectionLinks) {
      if (item.section.getBoundingClientRect().top <= readingLine)
        current = item;
    }
    if (scrollY + innerHeight >= document.documentElement.scrollHeight - 1)
      current = sectionLinks.at(-1);
    for (const item of sectionLinks) {
      if (item === current) item.link.setAttribute("aria-current", "location");
      else item.link.removeAttribute("aria-current");
    }
  };
  const scheduleUpdate = () => {
    if (framePending) return;
    framePending = true;
    requestAnimationFrame(updateCurrentSection);
  };
  addEventListener("scroll", scheduleUpdate, { passive: true });
  addEventListener("resize", scheduleUpdate);
  addEventListener("load", scheduleUpdate);
  if ("ResizeObserver" in window) {
    const observer = new ResizeObserver(scheduleUpdate);
    observer.observe(document.querySelector("main"));
    if (header) observer.observe(header);
  }
  scheduleUpdate();
}
