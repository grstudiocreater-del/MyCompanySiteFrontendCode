export function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export function pad(n: number) {
  return String(n).padStart(2, "0");
}

/** True when `href` is the current page or one of its children. */
export function isActivePath(pathname: string, href: string) {
  return pathname === href || pathname.startsWith(`${href}/`);
}

/**
 * Makes a link cover its nearest positioned ancestor (a card), so the whole card
 * is clickable while only one focusable link exists. The focus ring is drawn on the card outline.
 */
export function stretchedLink(radiusClass = "after:rounded-3xl") {
  return `${radiusClass} after:absolute after:inset-0 after:content-[''] focus-visible:outline-none focus-visible:after:outline-2 focus-visible:after:outline-offset-2 focus-visible:after:outline-accent`;
}
