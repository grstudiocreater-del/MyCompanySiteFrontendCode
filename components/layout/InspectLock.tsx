"use client";

import { useEffect } from "react";

/**
 * Client-Side Protection & Anti-Inspect Security Layer:
 * 1. Blocks Right-Click Context Menu.
 * 2. Blocks F12 and DevTools shortcuts (Ctrl+Shift+I/C/J/K, Ctrl+U, Ctrl+S).
 * 3. Blocks text selection and copying outside form inputs.
 * 4. Blocks image dragging.
 * 5. Continuous Debugger Trap: When DevTools is opened, Chrome repeatedly
 *    halts and freezes on `debugger;`, preventing element inspection.
 */
export function InspectLock() {
  useEffect(() => {
    // 1. Disable Right-Click Context Menu
    const handleContextMenu = (e: MouseEvent) => {
      e.preventDefault();
      e.stopPropagation();
      return false;
    };

    // 2. Disable DevTools & Source Inspection Keyboard Shortcuts
    const handleKeyDown = (e: KeyboardEvent) => {
      const isMac = typeof navigator !== "undefined" && /Mac|iPod|iPhone|iPad/.test(navigator.platform);
      const cmdOrCtrl = isMac ? e.metaKey : e.ctrlKey;

      // F12 key
      if (e.key === "F12" || e.keyCode === 123) {
        e.preventDefault();
        e.stopPropagation();
        return false;
      }

      // Ctrl+Shift+I or Cmd+Option+I (Inspect Developer Tools)
      // Ctrl+Shift+J or Cmd+Option+J (Developer Console)
      // Ctrl+Shift+C or Cmd+Option+C (Inspect Element Picker)
      // Ctrl+Shift+K (Firefox Developer Console)
      if (
        (cmdOrCtrl && e.shiftKey && (e.key === "I" || e.key === "i" || e.key === "J" || e.key === "j" || e.key === "C" || e.key === "c" || e.key === "K" || e.key === "k")) ||
        (isMac && e.altKey && cmdOrCtrl && (e.key === "I" || e.key === "i" || e.key === "J" || e.key === "j" || e.key === "C" || e.key === "c"))
      ) {
        e.preventDefault();
        e.stopPropagation();
        return false;
      }

      // Ctrl+U or Cmd+Option+U (View Page Source)
      if ((cmdOrCtrl && (e.key === "U" || e.key === "u")) || (isMac && e.altKey && cmdOrCtrl && (e.key === "U" || e.key === "u"))) {
        e.preventDefault();
        e.stopPropagation();
        return false;
      }

      // Ctrl+S or Cmd+S (Save webpage to disk)
      if (cmdOrCtrl && (e.key === "S" || e.key === "s")) {
        e.preventDefault();
        e.stopPropagation();
        return false;
      }
    };

    // 3. Disable text selection outside input & textarea fields
    const handleSelectStart = (e: Event) => {
      const target = e.target as HTMLElement | null;
      if (target && (target.tagName === "INPUT" || target.tagName === "TEXTAREA" || target.isContentEditable)) {
        return true;
      }
      e.preventDefault();
      return false;
    };

    // 4. Disable copying outside input & textarea fields
    const handleCopy = (e: ClipboardEvent) => {
      const target = e.target as HTMLElement | null;
      if (target && (target.tagName === "INPUT" || target.tagName === "TEXTAREA" || target.isContentEditable)) {
        return true;
      }
      e.preventDefault();
      return false;
    };

    // 5. Disable image dragging
    const handleDragStart = (e: DragEvent) => {
      if (e.target instanceof HTMLImageElement) {
        e.preventDefault();
      }
    };

    // 6. Active Debugger Freeze Trap
    // When DevTools is open, browsers automatically pause execution on `debugger;`.
    // Running this on an interval forces Chrome to stay frozen in "Paused in debugger",
    // preventing users from hovering or inspecting DOM elements.
    const debuggerInterval = setInterval(() => {
      // Ignored when DevTools is closed; freezes Chrome when DevTools is open
      debugger;
    }, 100);

    document.addEventListener("contextmenu", handleContextMenu, { capture: true });
    window.addEventListener("keydown", handleKeyDown, { capture: true });
    document.addEventListener("selectstart", handleSelectStart);
    document.addEventListener("copy", handleCopy);
    document.addEventListener("dragstart", handleDragStart);

    return () => {
      clearInterval(debuggerInterval);
      document.removeEventListener("contextmenu", handleContextMenu, { capture: true });
      window.removeEventListener("keydown", handleKeyDown, { capture: true });
      document.removeEventListener("selectstart", handleSelectStart);
      document.removeEventListener("copy", handleCopy);
      document.removeEventListener("dragstart", handleDragStart);
    };
  }, []);

  return null;
}
