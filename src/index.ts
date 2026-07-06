/**
 * @sketchie/icons — public API.
 *
 * Every icon is a self-contained SVG string with the Sketchie draw-on contract:
 *   <g class="fills"> flat color regions (per data-region) UNDER
 *   <g class="ink">   continuous stroke geometry
 * so the explainer pipeline can animate the outline on, then wash each color
 * region in. Recolor per-instance via CSS vars: --sk-ink, --sk-paper,
 * --sk-c1, --sk-c2 (accent slots).
 */
import { SKETCHY_ICONS } from '../icons.js';

export type IconName = keyof typeof SKETCHY_ICONS;

/** raw SVG string for an icon, or undefined if the name is unknown */
export function getIcon(name: string): string | undefined {
  return (SKETCHY_ICONS as Record<string, string>)[name];
}

/** every shipped icon name */
export function listIcons(): string[] {
  return Object.keys(SKETCHY_ICONS);
}

/** map of every name -> SVG string */
export { SKETCHY_ICONS };
