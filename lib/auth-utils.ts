// lib/auth-utils.ts
// Client-side utility functions for authentication

/**
 * Get redirect path based on user role
 * Can be used on client-side without async
 */
export function getRedirectPathByRole(role: string): string {
  switch (role) {
    case "SUPER_ADMIN":
    case "ADMIN":
    case "MANAGER":
      return "/admin/dashboard";
    case "FIELD_OFFICER":
      return "/officer/dashboard";
    case "LANDLORD":
      return "/landlord/dashboard";
    case "TENANT":
    default:
      return "/dashboard";
  }
}

/**
 * Check if user has admin role
 */
export function isAdminRole(role: string): boolean {
  return ["SUPER_ADMIN", "ADMIN", "MANAGER"].includes(role);
}

/**
 * Check if user has specific role
 */
export function hasRole(userRole: string, ...allowedRoles: string[]): boolean {
  return allowedRoles.includes(userRole);
}

/**
 * Get role display name
 */
export function getRoleDisplayName(role: string): string {
  const roleNames: Record<string, string> = {
    SUPER_ADMIN: "Super Admin",
    ADMIN: "Administrator",
    MANAGER: "Manager",
    FIELD_OFFICER: "Field Officer",
    LANDLORD: "Landlord",
    TENANT: "Tenant",
  };
  return roleNames[role] || role;
}

/**
 * Get status display info
 */
export function getStatusInfo(status: string): {
  label: string;
  color: string;
  bgColor: string;
} {
  const statusInfo: Record<string, { label: string; color: string; bgColor: string }> = {
    ACTIVE: {
      label: "Active",
      color: "text-emerald-700 dark:text-emerald-400",
      bgColor: "bg-emerald-100 dark:bg-emerald-900/30",
    },
    PENDING: {
      label: "Pending",
      color: "text-yellow-700 dark:text-yellow-400",
      bgColor: "bg-yellow-100 dark:bg-yellow-900/30",
    },
    INACTIVE: {
      label: "Inactive",
      color: "text-slate-700 dark:text-slate-400",
      bgColor: "bg-slate-100 dark:bg-slate-800",
    },
    SUSPENDED: {
      label: "Suspended",
      color: "text-orange-700 dark:text-orange-400",
      bgColor: "bg-orange-100 dark:bg-orange-900/30",
    },
    DEACTIVATED: {
      label: "Deactivated",
      color: "text-red-700 dark:text-red-400",
      bgColor: "bg-red-100 dark:bg-red-900/30",
    },
    BANNED: {
      label: "Banned",
      color: "text-red-700 dark:text-red-400",
      bgColor: "bg-red-100 dark:bg-red-900/30",
    },
  };
  return (
    statusInfo[status] || {
      label: status,
      color: "text-slate-700 dark:text-slate-400",
      bgColor: "bg-slate-100 dark:bg-slate-800",
    }
  );
}

/**
 * Validate Ugandan phone number
 */
export function isValidUgandanPhone(phone: string): boolean {
  const cleaned = phone.replace(/\s+/g, "");
  return /^(\+256|0)?[37][0-9]{8}$/.test(cleaned);
}

/**
 * Format phone number for display
 */
export function formatPhoneNumber(phone: string): string {
  if (!phone) return "";
  const cleaned = phone.replace(/\s+/g, "");

  // If starts with +256
  if (cleaned.startsWith("+256")) {
    const number = cleaned.slice(4);
    return `+256 ${number.slice(0, 3)} ${number.slice(3, 6)} ${number.slice(6)}`;
  }

  // If starts with 0
  if (cleaned.startsWith("0")) {
    return `${cleaned.slice(0, 4)} ${cleaned.slice(4, 7)} ${cleaned.slice(7)}`;
  }

  return phone;
}

/**
 * Get initials from name
 */
export function getInitials(
  name?: string,
  firstName?: string,
  lastName?: string
): string {
  if (firstName && lastName) {
    return `${firstName[0]}${lastName[0]}`.toUpperCase();
  }
  if (name) {
    const parts = name.split(" ");
    if (parts.length >= 2) {
      return `${parts[0][0]}${parts[1][0]}`.toUpperCase();
    }
    return name.slice(0, 2).toUpperCase();
  }
  return "??";
}

/**
 * Check password strength
 */
export function getPasswordStrength(password: string): {
  score: number;
  label: string;
  color: string;
} {
  let score = 0;
  if (password.length >= 8) score++;
  if (/[A-Z]/.test(password)) score++;
  if (/[a-z]/.test(password)) score++;
  if (/[0-9]/.test(password)) score++;
  if (/[^A-Za-z0-9]/.test(password)) score++;

  const labels = ["Very Weak", "Weak", "Fair", "Strong", "Very Strong"];
  const colors = [
    "bg-red-500",
    "bg-orange-500",
    "bg-yellow-500",
    "bg-emerald-500",
    "bg-green-500",
  ];

  return {
    score,
    label: labels[score - 1] || "Very Weak",
    color: colors[score - 1] || "bg-red-500",
  };
}

/**
 * Validate email format
 */
export function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

/**
 * Mask email for display (e.g., jo***n@example.com)
 */
export function maskEmail(email: string): string {
  if (!email) return "";
  const [username, domain] = email.split("@");
  if (!username || !domain) return email;
  const masked =
    username.length > 3
      ? `${username.slice(0, 2)}${"*".repeat(username.length - 3)}${username.slice(-1)}`
      : username;
  return `${masked}@${domain}`;
}

/**
 * Format date for display
 */
export function formatDate(date: string | Date, options?: Intl.DateTimeFormatOptions): string {
  if (!date) return "";
  const defaultOptions: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "short",
    day: "numeric",
    ...options,
  };
  return new Date(date).toLocaleDateString("en-US", defaultOptions);
}

/**
 * Format date with time
 */
export function formatDateTime(date: string | Date): string {
  if (!date) return "";
  return new Date(date).toLocaleString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
}

/**
 * Get relative time (e.g., "2 hours ago")
 */
export function getRelativeTime(date: string | Date): string {
  if (!date) return "";
  const now = new Date();
  const then = new Date(date);
  const seconds = Math.floor((now.getTime() - then.getTime()) / 1000);

  const intervals: { label: string; seconds: number }[] = [
    { label: "year", seconds: 31536000 },
    { label: "month", seconds: 2592000 },
    { label: "week", seconds: 604800 },
    { label: "day", seconds: 86400 },
    { label: "hour", seconds: 3600 },
    { label: "minute", seconds: 60 },
  ];

  for (const interval of intervals) {
    const count = Math.floor(seconds / interval.seconds);
    if (count >= 1) {
      return `${count} ${interval.label}${count > 1 ? "s" : ""} ago`;
    }
  }

  return "Just now";
}