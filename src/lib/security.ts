/**
 * Security utilities for input validation and sanitization
 */

// Input validation patterns
export const VALIDATION_PATTERNS = {
  name: /^[a-zA-Zа-яёА-ЯЁ\s-']{1,50}$/,
  phone: /^\+?[1-9]\d{1,14}$/,
  phoneKZ: /^\+?7\s?\(?\d{3}\)?\s?\d{3}[-\s]?\d{2}[-\s]?\d{2}$/
};

// Input length limits
export const INPUT_LIMITS = {
  name: 50,
  phone: 20
};

/**
 * Sanitizes string input by removing potentially dangerous characters
 */
export function sanitizeInput(input: string): string {
  return input
    .trim()
    .replace(/[<>\"'&]/g, '') // Remove basic XSS characters
    .substring(0, 200); // Limit length
}

/**
 * Validates name input
 */
export function validateName(name: string): { isValid: boolean; error?: string } {
  const sanitized = sanitizeInput(name);
  
  if (!sanitized) {
    return { isValid: false, error: 'Имя обязательно для заполнения' };
  }
  
  if (sanitized.length > INPUT_LIMITS.name) {
    return { isValid: false, error: `Имя не должно превышать ${INPUT_LIMITS.name} символов` };
  }
  
  if (!VALIDATION_PATTERNS.name.test(sanitized)) {
    return { isValid: false, error: 'Имя содержит недопустимые символы' };
  }
  
  return { isValid: true };
}

/**
 * Validates phone input
 */
export function validatePhone(phone: string): { isValid: boolean; error?: string } {
  const sanitized = phone.replace(/\s/g, ''); // Remove spaces for validation
  
  if (!sanitized) {
    return { isValid: false, error: 'Номер телефона обязателен для заполнения' };
  }
  
  if (sanitized.length > INPUT_LIMITS.phone) {
    return { isValid: false, error: 'Номер телефона слишком длинный' };
  }
  
  if (!VALIDATION_PATTERNS.phoneKZ.test(phone) && !VALIDATION_PATTERNS.phone.test(sanitized)) {
    return { isValid: false, error: 'Неверный формат номера телефона' };
  }
  
  return { isValid: true };
}

/**
 * Rate limiting simulation for form submissions
 */
export class RateLimiter {
  private static submissions: number[] = [];
  private static readonly WINDOW_MS = 60000; // 1 minute
  private static readonly MAX_ATTEMPTS = 3;
  
  static canSubmit(): boolean {
    const now = Date.now();
    
    // Remove old submissions outside the window
    this.submissions = this.submissions.filter(time => now - time < this.WINDOW_MS);
    
    // Check if under rate limit
    if (this.submissions.length >= this.MAX_ATTEMPTS) {
      return false;
    }
    
    // Record this submission
    this.submissions.push(now);
    return true;
  }
  
  static getRemainingTime(): number {
    if (this.submissions.length === 0) return 0;
    
    const oldestSubmission = Math.min(...this.submissions);
    const timeElapsed = Date.now() - oldestSubmission;
    return Math.max(0, this.WINDOW_MS - timeElapsed);
  }
}

/**
 * Simple rate limiting function for different actions
 */
export function checkRateLimit(action: string, maxRequests: number = 3, windowMs: number = 60000): boolean {
  const key = `rateLimit_${action}`;
  const now = Date.now();
  
  // Get stored timestamps for this action
  const stored = localStorage.getItem(key);
  let timestamps: number[] = stored ? JSON.parse(stored) : [];
  
  // Remove old timestamps outside the window
  timestamps = timestamps.filter(timestamp => now - timestamp < windowMs);
  
  // Check if rate limit is exceeded
  if (timestamps.length >= maxRequests) {
    return false;
  }
  
  // Add current timestamp and store
  timestamps.push(now);
  localStorage.setItem(key, JSON.stringify(timestamps));
  
  return true;
}