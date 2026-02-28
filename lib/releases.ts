export const CURRENT_VERSION = "1.1.0";
export const RELEASE_DATE = "February 2026";

export type Platform = "mac-arm" | "mac-intel" | "windows" | "linux";

export interface Release {
  platform: Platform;
  label: string;
  sublabel: string;
  ext: string;
  /** Replace with real URL once binaries are hosted */
  url: string;
  size: string;
}

export const releases: Release[] = [
  {
    platform: "mac-arm",
    label: "macOS",
    sublabel: "Apple Silicon (M1 – M4)",
    ext: ".dmg",
    url: "https://drive.google.com/file/d/1zSXOOPMhLNJLWa8Eo74WVAQX1lZ7DQ25/view?usp=sharing",
    size: "~400 MB",
  },
  {
    platform: "mac-intel",
    label: "macOS",
    sublabel: "Intel (x64)",
    ext: ".dmg",
    url: "https://drive.google.com/file/d/18DIiTtMlnMPmDMqXOXIWFguY2JCBFllx/view?usp=sharing",
    size: "~400 MB",
  },
  {
    platform: "windows",
    label: "Windows",
    sublabel: "Windows 10 / 11 (x64)",
    ext: ".exe",
    url: "https://drive.google.com/file/d/1ZjlthG-6lNzgmumkH1y6xpuJLPKHVwAr/view?usp=sharing",
    size: "~250 MB",
  },
  {
    platform: "linux",
    label: "Linux",
    sublabel: "AppImage (x64)",
    ext: ".AppImage",
    url: "https://drive.google.com/file/d/1YgC-GIc79iBzvxPCsLpo8VZkwYQFVAhn/view?usp=sharing",
    size: "~400 MB",
  },
];

/** Map a navigator.userAgent string to a platform key */
export function detectPlatform(ua: string): Platform {
  if (/Mac/i.test(ua)) {
    // Heuristic: Apple Silicon Macs report "Mac" without "Intel"
    // (actual ARM detection isn't possible from UA alone, so default to arm)
    return "mac-arm";
  }
  if (/Win/i.test(ua)) return "windows";
  if (/Linux/i.test(ua)) return "linux";
  return "mac-arm";
}
