import { Threat } from '../types';

export const THREATS_DATA: Threat[] = [
  {
    id: 'phishing',
    title: 'Phishing Attacks',
    category: 'phishing',
    shortDesc: 'Deceptive messages and clone portals designed to steal credentials and financial info.',
    plainEnglishExplanation:
      'Phishing is when an attacker pretends to be a trusted entity—like your university registrar, IT helpdesk, bank, or favorite streaming service—to trick you into revealing passwords, credit card numbers, or clicking malicious links.',
    howItWorks: [
      'The attacker crafts an urgent or enticing email/SMS posing as campus administration, IT services, or a delivery company.',
      'The message directs you to a fake login portal that looks almost identical to your real student portal or email service.',
      'When you enter your username and password, the attacker intercepts them immediately.',
      'Some attacks also ask for your two-factor code or prompt you to download an attachment infected with spyware.'
    ],
    realWorldScenario:
      'Subject: "URGENT: Your Student Portal Access Will Be Terminated in 24 Hours". The email contains a link to "portal-university-verify.info" instead of the legitimate ".edu" address. Panicked students enter their campus credentials to save their grades, unwittingly handing their accounts over to scammers.',
    preventionTips: [
      'Always inspect the sender address—verify the exact domain after the @ sign (e.g., mail@bank.com vs mail@bank-update12.com).',
      'Never click links in urgent warning emails; navigate to your university or service portal independently via bookmarks.',
      'Enable Multi-Factor Authentication (MFA) on all university and personal email accounts.',
      'Look for generic greetings like "Dear Student" or "Dear Customer" instead of your actual name.',
      'Use a password manager; modern password managers refuse to auto-fill credentials on fake lookalike domains.'
    ],
    commonRedFlags: [
      'Artificial urgency ("Account suspended in 2 hours!")',
      'Mismatched sender address and display name',
      'Spelling and grammatical irregularities',
      'Unsolicited attachments with extensions like .zip, .html, or .exe',
      'Requests for passwords or sensitive personal data via email'
    ],
    severity: 'Critical'
  },
  {
    id: 'malware',
    title: 'Malware & Spyware',
    category: 'malware',
    shortDesc: 'Malicious software disguised as legitimate files, pirate media, or helpful apps.',
    plainEnglishExplanation:
      'Malware is shorthand for "malicious software." It includes viruses, Trojans, keyloggers, and spyware programmed to infiltrate your laptop or smartphone without your consent to spy on your activities, steal files, or hijack computing resources.',
    howItWorks: [
      'You download a "free" PDF textbook from an unverified torrent site, cracked editing software, or a sketchy browser extension.',
      'The installer silently drops background payloads that install keyloggers or backdoors.',
      'Keyloggers record every keystroke you type, including passwords, credit card numbers, and chat messages.',
      'Your machine may become part of a "botnet" used to execute distributed denial of service (DDoS) attacks.'
    ],
    realWorldScenario:
      'A college freshman searches for a free download of an expensive engineering software program. They download an executable installer from a discussion forum. While the software appears to run, a silent background Trojan logs all browser keystrokes and empties their bank account within 48 hours.',
    preventionTips: [
      'Download software only from official app stores, official vendor websites, or university-licensed repositories.',
      'Keep your Operating System (Windows/macOS/Linux) and antivirus software updated with real-time scanning active.',
      'Beware of "free" downloads of paid textbooks, cheat engines, cracked games, and unauthorized browser add-ons.',
      'Scan downloaded files with online tools like VirusTotal before opening them if unsure.',
      'Never plug in random USB flash drives found on campus tables or library computers.'
    ],
    commonRedFlags: [
      'Sudden system slowdown, high CPU usage when idle, or loud fan activity',
      'Unfamiliar toolbars, pop-up windows, or modified default search engines',
      'Files that have double extensions like "syllabus_fall.pdf.exe"',
      'Antivirus warnings or disabled security settings',
      'Frequent browser redirects to unknown advertising portals'
    ],
    severity: 'High'
  },
  {
    id: 'ransomware',
    title: 'Ransomware',
    category: 'ransomware',
    shortDesc: 'Extortion malware that encrypts personal files, thesis projects, and schoolwork.',
    plainEnglishExplanation:
      'Ransomware is a severe form of malware that locks your device or encrypts all your personal files (photos, documents, research papers, study notes) with an unbreakable digital lock, demanding a ransom payment (usually in cryptocurrency) to unlock them.',
    howItWorks: [
      'Infection occurs via a malicious email attachment, unpatched software vulnerability, or cracked software download.',
      'Once triggered, the ransomware scans all local hard drives, USB sticks, and mapped cloud drives.',
      'It encrypts every document, image, and database using military-grade encryption keys.',
      'A ransom note replaces your desktop wallpaper demanding hundreds or thousands of dollars with a ticking countdown clock.'
    ],
    realWorldScenario:
      'Two weeks before submitting a graduation capstone thesis, a student clicks a receipt attachment for a fake online delivery. Within minutes, all local documents, project repositories, and synced cloud folders are encrypted with the ".locked" extension. Paying the ransom is never guaranteed to return the files.',
    preventionTips: [
      'Implement the 3-2-1 Backup Strategy: 3 copies of your data, across 2 different storage media, with 1 copy offline/air-gapped.',
      'Keep automated version history enabled on your university cloud storage (Google Drive, OneDrive, Dropbox).',
      'Never enable "Macros" in suspicious Microsoft Office documents that arrive unexpectedly.',
      'Regularly patch software vulnerabilities by installing OS and browser updates promptly.',
      'If infected, disconnect your computer from Wi-Fi immediately to prevent the infection from spreading across campus networks.'
    ],
    commonRedFlags: [
      'Sudden change of file extensions on your desktop and folders',
      'Inability to open normal documents with error messages about corrupted formats',
      'Text file instructions or pop-up windows demanding Bitcoin or Monero',
      'High disk write activity and rapid battery depletion without reason',
      'Desktop background replaced with an extortion notice'
    ],
    severity: 'Critical'
  },
  {
    id: 'scams',
    title: 'Online Scams & Fraud',
    category: 'scams',
    shortDesc: 'Targeted schemes including fake remote jobs, rental scams, and scholarship frauds.',
    plainEnglishExplanation:
      'Online scams use digital trickery and false promises to steal money directly from you. Scammers intentionally target college students because they often need flexible income, cheaper housing, or scholarship assistance.',
    howItWorks: [
      'Job Scams: Scammers post fake remote student jobs ("$30/hr Virtual Assistant"). They send a counterfeit check to "buy home office equipment" and instruct you to wire money back to their preferred vendor before the bank discovers the check is fraudulent.',
      'Rental Scams: Scammers advertise an affordable apartment near campus using stolen photos. They demand an immediate deposit via Zelle or gift cards before allowing an in-person viewing.',
      'Scholarship Scams: Websites charge an upfront "application processing fee" for scholarships that do not exist.'
    ],
    realWorldScenario:
      'A student receives an email offer to be a paid "Research Assistant" for a visiting faculty member. The scammer sends a digital check for $2,500 and asks the student to deposit it and immediately transfer $1,800 to an art supply company. Three days later, the check bounces, leaving the student on the hook with the bank for the full amount.',
    preventionTips: [
      'Never deposit a check from someone you haven’t met in person and never wire money back from a check deposit.',
      'Legitimate employers and universities never conduct complete hiring interviews solely over Telegram, WhatsApp, or text messages.',
      'Always visit an off-campus apartment in person and verify landlord identity before sending deposit funds.',
      'No legitimate scholarship or grant requires you to pay an application fee to receive funds.',
      'Be skeptical of payment requests via irreversible methods (Zelle, Wire, Cryptocurrency, Apple Gift Cards).'
    ],
    commonRedFlags: [
      'Offers that sound too good to be true (effortless high pay for minimal hours)',
      'Pressure to act immediately before an opportunity "expires"',
      'Interviews conducted exclusively through anonymous messaging platforms',
      'Request to receive, transfer, or forward funds through your personal bank account',
      'Refusal to meet in person or conduct a live video verification call'
    ],
    severity: 'High'
  },
  {
    id: 'social_engineering',
    title: 'Social Engineering',
    category: 'social_engineering',
    shortDesc: 'Psychological manipulation to trick individuals into breaking standard security procedures.',
    plainEnglishExplanation:
      'Social engineering attacks exploit human psychology rather than technical flaws. Attackers rely on trust, helpfulness, curiosity, or fear to persuade you into handing over private codes, access keys, or sensitive student records.',
    howItWorks: [
      'Pretexting: An attacker calls claiming to be from the university IT helpdesk, saying there is a security glitch and they need the 6-digit MFA code just sent to your phone.',
      'Baiting: Leaving infected USB flash drives labeled "Exam Answers 2026" or "Confidential Payroll" in public library lounges.',
      'MFA Fatigue (Push Bombing): Sending dozens of 2FA login approval requests late at night until the exhausted user mistakenly taps "Approve" to silence their phone.',
      'Impersonation: Contacting roommates or classmates on social media pretending to be locked out of their accounts.'
    ],
    realWorldScenario:
      'At 11:30 PM, your phone starts buzzing with continuous "Duo Security / Microsoft Authenticator" login approval notifications. Shortly after, you get a call: "Hello, this is Campus Security. Someone is trying to hack your account! Please press Approve on your phone to cancel the attack." In confusion, you approve it, granting the attacker access.',
    preventionTips: [
      'Never share Two-Factor Authentication (MFA) SMS codes, push approvals, or backup codes with anyone—not even someone claiming to be IT.',
      'If you receive unexpected MFA approval prompts, tap "Deny" immediately and change your account password.',
      'Never plug found USB drives into your machine; hand them directly to campus lost-and-found.',
      'Independently verify unusual requests from friends or professors via a separate known communication channel.',
      'Remember that legitimate organizations will never ask for your password or security credentials over the phone.'
    ],
    commonRedFlags: [
      'High emotional pressure (urgency, panic, intimidating authority figures)',
      'Unexpected requests for verification codes or passwords',
      'Requests to keep transactions or conversations secret from others',
      'Free gifts or unexpected rewards that require immediate personal data entry',
      'Unsolicited technical support calls regarding problems you never reported'
    ],
    severity: 'Critical'
  }
];
