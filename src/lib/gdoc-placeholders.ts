/**
 * The functions exported by this module define how placeholders like {{ KEY }}
 * in the Google doc are replaced with values, usually by taking into account
 * the app's state.
 *
 * For example, the function DATE below is meant to replace all instances
 * of {{ DATE }} in the Google doc. See src/routes/+page.svelte for an
 * example of how to do this.
 */

export function DATE() {
  return new Date().toLocaleDateString('de-DE');
}
