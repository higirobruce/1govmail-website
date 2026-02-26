export const CURRENT_VERSION = "1.0.0";
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
    url: "https://drive.google.com/file/d/1EXk9alHRleV8bRDsGa3CrWwmdGgN5YlE/view?usp=sharing",
    size: "~400 MB",
  },
  {
    platform: "mac-intel",
    label: "macOS",
    sublabel: "Intel (x64)",
    ext: ".dmg",
    url: "https://drive.google.com/file/d/1qzIzmo6qVLt4eTxNQ-0qLDT3WguBGzLb/view?usp=sharing",
    size: "~400 MB",
  },
  {
    platform: "windows",
    label: "Windows",
    sublabel: "Windows 10 / 11 (x64)",
    ext: ".exe",
    url: "https://drive.google.com/file/d/1ZjWHV2oDCVQ-44CD-Gc5TycVo59qYu1G/view?usp=drive_link",
    size: "~250 MB",
  },
  {
    platform: "linux",
    label: "Linux",
    sublabel: "AppImage (x64)",
    ext: ".AppImage",
    url: "https://drive.google.com/file/d/1hn2LR6zNjSD-wkOMiH-XHKi1sqI-L5kk/view?usp=sharing",
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
