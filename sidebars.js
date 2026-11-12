// @ts-check

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const PAPER = '/paper/zombie';

/**
 * Manually built so the left rail doubles as the paper's own table of
 * contents (a "default template" left sidebar), instead of a doc-nav
 * sidebar on the left plus a separate on-page TOC on the right.
 *
 * Each link's #anchor must match the {#anchor} at the end of a heading
 * in Zombie.md. If you rename a heading's anchor, change it here too.
 *
 * @type {import('@docusaurus/plugin-content-docs').SidebarsConfig}
 */
const sidebars = {
  tutorialSidebar: [
    {
      type: 'doc',
      id: 'zombie',
      label: 'Defending our Home',
      className: 'sidebar-paper-title',
    },
    {
      type: 'html',
      value: '<div class="sidebar-contents-label">Contents</div>',
      defaultStyle: true,
    },
    {type: 'link', label: '1. Executive Summary', href: `${PAPER}#executive`},
    {
      type: 'link',
      label: '2. Two Quotes',
      href: `${PAPER}#twoquotes`,
    },
    {type: 'link', label: '3. A Four-Step Plan', href: `${PAPER}#foursteps`},
    {type: 'link', label: '4. Cost Analysis', href: `${PAPER}#costs`},
    {type: 'link', label: '5. Survey', href: `${PAPER}#survey`},
    {type: 'link', label: '6. Call to Action', href: `${PAPER}#calltoaction`},
    {
      type: 'link',
      label: 'Appendix A',
      href: `${PAPER}#appendix-a`,
      className: 'sidebar-contents-minor',
    },
    {
      type: 'link',
      label: 'References',
      href: `${PAPER}#references`,
      className: 'sidebar-contents-minor',
    },
  ],
};

export default sidebars;
