import { PasswordAnalysis } from '../types';

const COMMON_PASSWORDS = new Set([
  'password', '123456', '12345678', '123456789', '12345', 'qwerty',
  'admin', 'welcome', 'login', 'student', 'college', 'campus', 'iloveyou',
  'secret', 'testing', 'letmein', 'pass123', 'monkey', 'dragon', 'football',
  'master', 'sunshine', 'princess', 'solo', 'starwars', 'superman', 'qwertyuiop'
]);

const PASSPHRASE_WORDS = [
  'falcon', 'glacier', 'matrix', 'cipher', 'quantum', 'harbor', 'nebula',
  'timber', 'aurora', 'beacon', 'canvas', 'horizon', 'delta', 'copper',
  'summit', 'vector', 'shield', 'cobalt', 'fossil', 'granite', 'orbit',
  'pinnacle', 'zenith', 'cascade', 'canyon', 'phoenix', 'solstice', 'vortex',
  'radiant', 'prism', 'breeze', 'ember', 'forest', 'meadow', 'shadow',
  'stellar', 'thunder', 'whisper', 'crystal', 'anchor', 'voyage', 'mirage'
];

export function analyzePassword(password: string): PasswordAnalysis {
  if (!password) {
    return {
      score: 0,
      level: 'Very Weak',
      crackTimeEstimate: 'None (enter a password)',
      feedback: ['Enter a password to evaluate its strength locally in your browser.'],
      checks: {
        length: false,
        uppercase: false,
        lowercase: false,
        numbers: false,
        symbols: false,
        noCommonWords: true
      }
    };
  }

  const length = password.length;
  const hasUpper = /[A-Z]/.test(password);
  const hasLower = /[a-z]/.test(password);
  const hasNumber = /[0-9]/.test(password);
  const hasSymbol = /[^A-Za-z0-9]/.test(password);

  const lowerPwd = password.toLowerCase();
  let hasCommonWord = false;
  for (const common of COMMON_PASSWORDS) {
    if (lowerPwd.includes(common)) {
      hasCommonWord = true;
      break;
    }
  }

  // Sequential or repetitive check
  const hasRepetition = /(.)\1{2,}/.test(password);
  const hasSequential = /012|123|234|345|456|567|678|789|abc|bcd|cde|def|qwe|asd/.test(lowerPwd);

  // Calculate character pool size
  let poolSize = 0;
  if (hasLower) poolSize += 26;
  if (hasUpper) poolSize += 26;
  if (hasNumber) poolSize += 10;
  if (hasSymbol) poolSize += 33;
  if (poolSize === 0) poolSize = 1;

  // Approximate entropy in bits
  const entropy = length * Math.log2(poolSize);

  // Score determination: 0 to 4
  let score = 0;
  const feedback: string[] = [];

  if (length >= 8) score += 1;
  if (length >= 12) score += 1;
  if (length >= 16) score += 1;

  const varietyCount = [hasUpper, hasLower, hasNumber, hasSymbol].filter(Boolean).length;
  if (varietyCount >= 3) score += 1;
  if (varietyCount === 4 && length >= 12) score += 1;

  if (hasCommonWord) {
    score = Math.max(0, score - 2);
    feedback.push('Contains common predictable words or sequences (e.g. "password", "123").');
  }
  if (hasRepetition) {
    score = Math.max(0, score - 1);
    feedback.push('Contains repeated identical characters in a row.');
  }
  if (hasSequential) {
    score = Math.max(0, score - 1);
    feedback.push('Contains predictable keyboard sequences like "123" or "abc".');
  }

  // Normalize score between 0 and 4
  score = Math.min(4, Math.max(0, score));

  // Determine label and crack time estimate based on entropy & length
  let level: 'Very Weak' | 'Weak' | 'Fair' | 'Strong' | 'Fortified' = 'Very Weak';
  let crackTimeEstimate = 'Instantly (0.001 seconds)';

  if (length < 8 || hasCommonWord) {
    level = 'Very Weak';
    crackTimeEstimate = 'Instantly (< 1 second)';
  } else if (entropy < 38 || score === 1) {
    level = 'Weak';
    crackTimeEstimate = 'A few seconds to several minutes';
  } else if (entropy < 55 || score === 2) {
    level = 'Fair';
    crackTimeEstimate = 'Several days to a few months';
  } else if (entropy < 75 || score === 3) {
    level = 'Strong';
    crackTimeEstimate = 'Decades to centuries';
  } else {
    level = 'Fortified';
    crackTimeEstimate = 'Millions to trillions of years';
  }

  // Constructive suggestions
  if (length < 12) {
    feedback.push('Increase length to 12 or more characters. Length provides the greatest mathematical resistance to brute-force attacks.');
  }
  if (!hasUpper) {
    feedback.push('Add uppercase characters (A–Z) to broaden the search keyspace.');
  }
  if (!hasLower) {
    feedback.push('Include lowercase characters (a–z).');
  }
  if (!hasNumber) {
    feedback.push('Add numeric digits (0–9).');
  }
  if (!hasSymbol) {
    feedback.push('Include special punctuation symbols (!, @, #, $, %, etc.).');
  }

  if (feedback.length === 0) {
    feedback.push('Excellent! This password has high entropy, sufficient length, and resistance against automated dictionary cracking.');
  }

  return {
    score,
    level,
    crackTimeEstimate,
    feedback,
    checks: {
      length: length >= 12,
      uppercase: hasUpper,
      lowercase: hasLower,
      numbers: hasNumber,
      symbols: hasSymbol,
      noCommonWords: !hasCommonWord && !hasSequential && !hasRepetition
    }
  };
}

export function generateSecurePassphrase(wordCount = 4, separator = '-'): string {
  const words: string[] = [];
  const array = new Uint32Array(wordCount);
  crypto.getRandomValues(array);

  for (let i = 0; i < wordCount; i++) {
    const randomIndex = array[i] % PASSPHRASE_WORDS.length;
    const word = PASSPHRASE_WORDS[randomIndex];
    // Capitalize first letter so passphrase fulfills uppercase complexity check
    words.push(word.charAt(0).toUpperCase() + word.slice(1));
  }

  // Add a random 2-digit number at the end for extra security
  const numBuffer = new Uint32Array(1);
  crypto.getRandomValues(numBuffer);
  const extraNum = (numBuffer[0] % 90) + 10;

  return words.join(separator) + separator + extraNum;
}
