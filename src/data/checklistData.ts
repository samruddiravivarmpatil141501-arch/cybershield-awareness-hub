import { ChecklistItem } from '../types';

export const CHECKLIST_ITEMS: ChecklistItem[] = [
  {
    id: 'chk_2fa_email',
    title: 'Enable Two-Factor Authentication (2FA) on Email & Student Portal',
    category: 'account',
    importance: 'Essential',
    description: 'Protect your primary email account and campus portal with an authenticator app (e.g. Google Authenticator, Microsoft Authenticator, Duo) rather than relying on basic SMS.',
    actionSteps: [
      'Navigate to your Google/Microsoft or university account security settings.',
      'Select Two-Step Verification and set up an Authenticator App.',
      'Save your one-time backup codes in a secure, offline location.'
    ]
  },
  {
    id: 'chk_password_manager',
    title: 'Use a Dedicated Password Manager',
    category: 'account',
    importance: 'Essential',
    description: 'Stop reusing passwords or keeping them in unencrypted Notes apps. A password manager generates and stores 20+ character random passwords automatically.',
    actionSteps: [
      'Choose a reputable password manager (e.g., Bitwarden, 1Password, or built-in Apple/Google Keychain).',
      'Set one memorable high-entropy master passphrase.',
      'Replace all duplicated passwords with unique, randomly generated credentials.'
    ]
  },
  {
    id: 'chk_wifi_vpn',
    title: 'Protect Yourself on Campus & Public Wi-Fi',
    category: 'network',
    importance: 'Essential',
    description: 'Public unencrypted networks at cafes, airports, and dorm common rooms can expose your unencrypted network metadata to nearby eavesdroppers.',
    actionSteps: [
      'Turn off automatic Wi-Fi connection to unknown open networks on your phone and laptop.',
      'Use a trusted VPN or your university VPN when doing sensitive research or banking on public Wi-Fi.',
      'Always verify that websites show "https://" and valid SSL certificates before entering data.'
    ]
  },
  {
    id: 'chk_os_updates',
    title: 'Keep Operating System & Applications Auto-Updated',
    category: 'device',
    importance: 'Essential',
    description: 'Over 85% of automated cyber attacks exploit vulnerabilities where software patches have already been publicly available for weeks.',
    actionSteps: [
      'Enable automatic OS updates in Windows Update or macOS System Settings.',
      'Keep your web browser (Chrome, Firefox, Edge, Safari) auto-updating.',
      'Uninstall unused third-party programs and sketchy browser extensions.'
    ]
  },
  {
    id: 'chk_device_lock',
    title: 'Configure Auto-Lock & Biometrics on Laptops and Phones',
    category: 'device',
    importance: 'Essential',
    description: 'Leaving an unlocked laptop unattended in the library for even 90 seconds gives opportunistic thieves or pranksters total access to your active sessions.',
    actionSteps: [
      'Set screen lock timeout to 2–3 minutes of inactivity.',
      'Enable Windows Hello, Touch ID, or Face ID with a strong fallback PIN.',
      'Enable "Find My Device" tracking and remote wipe capabilities.'
    ]
  },
  {
    id: 'chk_backup_321',
    title: 'Maintain 3-2-1 Backups of Important Academic Work',
    category: 'habits',
    importance: 'Recommended',
    description: 'Safeguard your thesis, course projects, assignments, and personal photos from sudden ransomware attacks or hardware water damage.',
    actionSteps: [
      'Keep your original files on your computer.',
      'Sync automatically to university cloud storage (Google Drive or OneDrive).',
      'Periodically back up to an external disconnected USB drive stored in your desk.'
    ]
  },
  {
    id: 'chk_social_privacy',
    title: 'Audit Social Media Privacy & Avoid Oversharing',
    category: 'habits',
    importance: 'Recommended',
    description: 'Oversharing your birth date, student ID number, dorm building, or daily schedule makes you an easy target for identity theft and spear-phishing.',
    actionSteps: [
      'Set personal Instagram, TikTok, and Facebook profiles to private.',
      'Never post photos displaying your student ID badge, driver’s license, or boarding passes.',
      'Review connected third-party social apps and revoke permissions you no longer use.'
    ]
  },
  {
    id: 'chk_phishing_report',
    title: 'Know How to Spot & Report Phishing to Campus IT',
    category: 'habits',
    importance: 'Recommended',
    description: 'When you report a suspicious email to your campus helpdesk, it helps security teams blacklist the malicious domain for all other students.',
    actionSteps: [
      'Check the actual email address, not just the sender display name.',
      'Never approve unexpected MFA push notifications on your phone.',
      'Forward suspicious emails to your university IT abuse mailbox (e.g. abuse@university.edu).'
    ]
  },
  {
    id: 'chk_usb_safety',
    title: 'Practice USB Flash Drive & Peripheral Hygiene',
    category: 'device',
    importance: 'Recommended',
    description: 'Flash drives dropped in parking lots or dorm corridors are frequently seeded with malware or hardware-frying capacitors.',
    actionSteps: [
      'Never plug an unknown flash drive into your computer.',
      'Turn off "AutoPlay" / auto-run features in your operating system.',
      'Use secure cloud transfer tools (AirDrop, Google Drive) instead of sharing physical flash drives with strangers.'
    ]
  },
  {
    id: 'chk_app_permissions',
    title: 'Review Smartphone App Permissions',
    category: 'network',
    importance: 'Advanced',
    description: 'Many casual mobile games and study utilities request access to your contacts, precise location, microphone, and photo library.',
    actionSteps: [
      'Open smartphone settings and review permissions granted per application.',
      'Set location access to "While Using App" or "Never" for apps that don’t require navigation.',
      'Revoke microphone and background camera permissions from unneeded apps.'
    ]
  }
];
