import { QuizQuestion } from '../types';

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 1,
    question: 'You receive an email claiming to be from your university IT department stating: "Your student portal will be deactivated in 3 hours unless you confirm your password here." What should you do?',
    scenario: 'Email received at 8:00 AM with a link to "portal-campus-verify.net".',
    options: [
      'Click the link immediately and submit your password to prevent account deactivation.',
      'Forward your password directly to the sender as a text reply.',
      'Do not click the link; inspect the sender domain and log into the portal directly via your regular official bookmark.',
      'Reply with a dummy password to test whether the system is legitimate.'
    ],
    correctAnswer: 2,
    explanation:
      'Legitimate IT departments will never create artificial panic deadlines or ask for your password via an email link. Always access portals directly through your official university bookmarks, and report the phishing attempt to campus IT.',
    category: 'Phishing'
  },
  {
    id: 2,
    question: 'Which of the following is considered the strongest and most resilient password practice according to modern cybersecurity standards?',
    scenario: 'Creating a master password for a password manager or your main email account.',
    options: [
      'A short 8-character word with substituted symbols like "P@ssw0rd".',
      'A memorable 4-to-5 word passphrase like "sunset-velvet-falcon-bicycle" spanning 25+ characters.',
      'Your birthday combined with your high school mascot.',
      'Reusing a single complex 14-character password across all your social and university accounts.'
    ],
    correctAnswer: 1,
    explanation:
      'Length and high entropy beat character substitution. A 4-word random passphrase is easy for humans to remember but astronomically difficult for computer brute-force programs to crack (taking millions of years).',
    category: 'Password Safety'
  },
  {
    id: 3,
    question: 'You are studying at a local coffee shop or airport with free public Wi-Fi named "Coffee_Guest_Free". What precaution should you take?',
    scenario: 'Connecting your laptop to public open network with no password.',
    options: [
      'Disable your device firewall so web pages load faster.',
      'Avoid entering sensitive personal credentials or banking details, and connect through a trusted Virtual Private Network (VPN).',
      'Public Wi-Fi is automatically encrypted by the cafe router, so no special steps are needed.',
      'Turn on public file sharing so classmates nearby can collaborate with you.'
    ],
    correctAnswer: 1,
    explanation:
      'Unencrypted or open public Wi-Fi networks allow malicious actors on the same local network to conduct "Man-In-The-Middle" (MITM) attacks and monitor unencrypted network packets. A reputable VPN encrypts your traffic end-to-end.',
    category: 'Network Security'
  },
  {
    id: 4,
    question: 'You are walking through the university library and find an unmarked 64GB USB flash drive sitting on a study table. What is the safest action?',
    scenario: 'You are curious to see whose files are on the flash drive so you can return it.',
    options: [
      'Plug it into your personal laptop immediately to open the documents and look for the owner\'s name.',
      'Plug it into a university computer lab terminal instead of your personal laptop.',
      'Format the drive on your computer before reading any files.',
      'Never plug an unknown USB drive into any device; hand it over to campus lost-and-found or IT security.'
    ],
    correctAnswer: 3,
    explanation:
      'This is a classic "Baiting" social engineering attack. Attackers intentionally drop malicious USB drives loaded with auto-executing malware or hardware electrical killers (USB Killers). Plugging it into any computer can immediately compromise the system.',
    category: 'Social Engineering'
  },
  {
    id: 5,
    question: 'At midnight, you suddenly receive five consecutive 2FA / MFA notification prompts on your phone asking you to "Approve Sign-in". You are not trying to log in. What is happening and what should you do?',
    scenario: 'Repeated two-factor prompts appearing on your mobile device.',
    options: [
      'Tap "Approve" so your phone stops buzzing and you can go to sleep.',
      'This is an "MFA Fatigue / Push Bombing" attack. Tap "Deny", and immediately change your account password.',
      'Uninstall your 2FA app permanently because it has a bug.',
      'Reply to the notification with your cell phone carrier PIN.'
    ],
    correctAnswer: 1,
    explanation:
      'The attacker already obtained your username and password, and is repeatedly spamming your 2FA app hoping you will approve by mistake. Deny all requests and change your primary password immediately to lock them out.',
    category: 'Social Engineering'
  },
  {
    id: 6,
    question: 'You find a website offering a free download of a $200 required textbook in a file named "Biology_10th_Edition.pdf.exe". What should you conclude?',
    scenario: 'A downloaded file has a double file extension.',
    options: [
      'The ".exe" stands for "Expert Edition" and is completely safe to run.',
      'This is an executable malware program disguised as a PDF document. Do not open or run it.',
      'You should right-click and run it as Administrator so the pages render clearly.',
      'It is a special PDF reader bundled with the textbook.'
    ],
    correctAnswer: 1,
    explanation:
      'Files ending with ".exe" are executable software programs, not document files. Attackers use deceptive double extensions to trick users on systems where known file extensions might be hidden.',
    category: 'Malware'
  },
  {
    id: 7,
    question: 'What is the "3-2-1 Backup Rule" recommended by cybersecurity experts to protect important research, assignments, and capstone projects from ransomware?',
    scenario: 'Safeguarding schoolwork against hardware failure or file encryption.',
    options: [
      'Back up your files every 3 days, using 2 different folders, on 1 computer.',
      'Maintain 3 total copies of your data, across 2 different storage media types, with at least 1 copy kept off-site or offline.',
      'Save files 3 times before closing, in 2 different formats (.docx and .pdf), on 1 flash drive.',
      'Store 3 passwords for 2 accounts on 1 sticky note.'
    ],
    correctAnswer: 1,
    explanation:
      'The 3-2-1 rule is the industry gold standard: 3 copies of vital data, 2 distinct media (e.g. laptop SSD + external hard drive), and 1 copy stored offsite/cloud/disconnected so ransomware cannot destroy everything simultaneously.',
    category: 'Ransomware'
  },
  {
    id: 8,
    question: 'You apply for a flexible campus remote job on social media. The interviewer immediately sends you an online check for $2,000, asking you to deposit it and transfer $1,500 to a "vendor" for your laptop. What kind of scheme is this?',
    scenario: 'Remote job requiring money transfer through personal checking account.',
    options: [
      'A normal corporate relocation stipend.',
      'A standard student signing bonus.',
      'A counterfeit check / advance-fee employment scam. The check will bounce, and you will lose the transferred money.',
      'An IRS tax compliance test.'
    ],
    correctAnswer: 2,
    explanation:
      'Banks make funds from deposited checks available before the check officially clears through the clearinghouse. When the forged check inevitably bounces days later, the bank will deduct the full $2,000 from your account, and the $1,500 you sent is lost forever.',
    category: 'Online Scams'
  },
  {
    id: 9,
    question: 'Why should you avoid using the same password across multiple online accounts (e.g., student email, Spotify, social media, online banking)?',
    scenario: 'Credential recycling across multiple services.',
    options: [
      'Web browsers cannot store more than one identical password.',
      'If a minor service suffers a data breach, hackers will use "Credential Stuffing" bots to test that stolen password on all your other accounts.',
      'Identical passwords degrade your computer\'s processor speed over time.',
      'Passwords expire automatically if used on more than three services.'
    ],
    correctAnswer: 1,
    explanation:
      'Credential stuffing is one of the most common automated attacks. When a low-security website leaks its user database, hackers automatically script attempts with those same emails and passwords on major banks, Google, Apple, and university portals.',
    category: 'Password Safety'
  },
  {
    id: 10,
    question: 'Your operating system or browser prompts you with a notification: "A critical security update is ready to install." What is the best course of action?',
    scenario: 'Software update notification during a busy semester.',
    options: [
      'Postpone the update for weeks or click "Never remind me again" to save space.',
      'Install the update promptly, as it frequently patches known security vulnerabilities that hackers actively exploit.',
      'Ignore it; security updates are only needed if your computer is already infected.',
      'Download a third-party registry cleaner tool instead of updating.'
    ],
    correctAnswer: 1,
    explanation:
      'Security patches close known software vulnerabilities (Zero-Days and Common Vulnerabilities and Exposures). When a patch is released publicly, attackers reverse-engineer it to exploit unpatched systems. Delaying updates leaves your device exposed.',
    category: 'Device Security'
  },
  {
    id: 11,
    question: 'You are sharing photos of your first week on campus on social media. Which detail should you be careful NOT to include in photos or captions?',
    scenario: 'Sharing campus life on Instagram, TikTok, or BeReal.',
    options: [
      'The name of the campus campus dining hall.',
      'Your student ID card showing your full student barcode/ID number, your dorm room number, or your full birthdate.',
      'A picture of your favorite campus library building from the outside.',
      'A photo of a textbook cover for your class.'
    ],
    correctAnswer: 1,
    explanation:
      'Oversharing personal identifiers (student IDs, dorm room locations, birthdays, schedule times) gives social engineers and identity thieves the exact puzzle pieces needed to reset your accounts or impersonate you.',
    category: 'Social Engineering'
  },
  {
    id: 12,
    question: 'What is the primary function of Two-Factor Authentication (2FA/MFA)?',
    scenario: 'Logging into sensitive accounts.',
    options: [
      'It eliminates the need to remember any password at all.',
      'It requires a second independent verification factor (like a mobile push or hardware token), preventing unauthorized login even if your password is leaked.',
      'It encrypts your internet router connection automatically.',
      'It speeds up your website load times by caching credentials.'
    ],
    correctAnswer: 1,
    explanation:
      '2FA enforces "something you know" (password) combined with "something you have" (authenticator app / hardware security key). Even if an attacker steals your password via phishing, they cannot breach your account without your physical second factor.',
    category: 'Account Defense'
  }
];
