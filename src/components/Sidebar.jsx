'use client';

import { useState } from 'react';
import styles from './Sidebar.module.scss';

const SearchIcon = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 16 16"
    fill="none"
    aria-hidden="true"
  >
    <circle cx="7" cy="7" r="4.5" stroke="currentColor" strokeWidth="1.5" />
    <path
      d="m10.5 10.5 3 3"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
);

const RfLogo = () => (
  // eslint-disable-next-line @next/next/no-img-element
  <img src="/assets/nav-logo.png" alt="RainFocus" className={styles.railImg} />
);

const RfMark = () => (
  // eslint-disable-next-line @next/next/no-img-element
  <img
    src="/assets/nav-org.png"
    alt="RainFocus Summit"
    className={styles.railImg}
  />
);

const navItems = [
  { id: 'guide', label: 'Guide' },
  {
    id: 'attendees',
    label: 'Attendees',
    active: true,
    children: [
      { id: 'attendees-list', label: 'Attendees', active: true },
      { id: 'attendee-types', label: 'Attendee types' },
      { id: 'packages', label: 'Packages' },
      { id: 'reg-codes', label: 'Reg codes' },
      { id: 'discounts', label: 'Discounts' },
    ],
  },
  { id: 'content', label: 'Content' },
  { id: 'exhibitors', label: 'Exhibitors' },
];

export default function Sidebar() {
  const [activeSubItem, setActiveSubItem] = useState('attendees-list');
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        className={styles.mobileToggle}
        aria-label={mobileOpen ? 'Close navigation' : 'Open navigation'}
        aria-expanded={mobileOpen}
        onClick={() => setMobileOpen((v) => !v)}
      >
        <span />
        <span />
        <span />
      </button>

      <aside
        className={`${styles.sidebar} ${mobileOpen ? styles.sidebarOpen : ''}`}
        aria-label="Primary"
      >
        <div className={styles.rail}>
          <div className={styles.railTop}>
            <div className={styles.railSlot}>
              <RfLogo />
            </div>
            <div className={styles.railSlot}>
              <RfMark />
            </div>
          </div>
          <div className={styles.railBottom}>
            <div className={styles.avatar} aria-label="Signed in as FL">
              FL
            </div>
          </div>
        </div>

        <div className={styles.pane}>
          <div className={styles.eventBlock}>
            <h2 className={styles.eventName}>RainFocus Summit</h2>
            <p className={styles.eventMeta}>
              <span>Lehi, UT</span>
              <span className={styles.dot}>•</span>
              <span>December 15th</span>
            </p>
          </div>

          <label className={styles.search}>
            <span className={styles.searchIcon}>
              <SearchIcon />
            </span>
            <input
              type="search"
              placeholder="Search"
              className={styles.searchInput}
              aria-label="Search"
            />
          </label>

          <nav aria-label="Event sections">
            <ul className={styles.navList}>
              {navItems.map((item) => {
                const itemActive = item.active;
                return (
                  <li key={item.id}>
                    <button
                      type="button"
                      className={`${styles.navItem} ${itemActive ? styles.navItemActive : ''}`}
                      aria-current={itemActive ? 'page' : undefined}
                    >
                      {itemActive ? (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img
                          src="/assets/person-portal.svg"
                          alt=""
                          aria-hidden="true"
                          className={styles.navIconImg}
                        />
                      ) : (
                        <span className={styles.navIcon} aria-hidden="true" />
                      )}
                      <span className={styles.navLabel}>{item.label}</span>
                    </button>

                    {itemActive && item.children && (
                      <ul className={styles.subNav}>
                        {item.children.map((child) => (
                          <li key={child.id}>
                            <button
                              type="button"
                              className={`${styles.subItem} ${activeSubItem === child.id ? styles.subItemActive : ''}`}
                              onClick={() => setActiveSubItem(child.id)}
                            >
                              {child.label}
                            </button>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
      </aside>

      {mobileOpen && (
        <button
          type="button"
          className={styles.scrim}
          aria-label="Close navigation"
          onClick={() => setMobileOpen(false)}
        />
      )}
    </>
  );
}
